import { readFile, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { capitalize, groupBy, pick, uniq } from 'lodash';
import mkdirp from 'mkdirp';
import PQueue from 'p-queue';
import type { DocMDData, IContext } from './type';

const writeMD = async (
  { name, locale, content, demoStore, isPackage, category, destFilename }: DocMDData,
  { buildRoot, formatCode, pageRoot }: IContext,
) => {
  await mkdirp(path.dirname(destFilename));

  const tasks = [writeFile(destFilename, content)];
  const demoTpl = await readFile(path.join(__dirname, 'mobile-demo.tpl'), 'utf-8');

  if (demoStore && isPackage) {
    const demos = [...demoStore.values()];

    const mobileDemoContent = await formatCode(
      [
        ...demos.map(
          item =>
            `import ${item.componentName} from "./${item.componentName}.${locale}.tsx";`,
        ),
        ...demos.map(
          item =>
            `${item.title ? `## ${item.title}\n` : ''} <Block><${item.componentName} /></Block>`,
        ),
      ].join('\n\n'),
      {
        parser: 'markdown',
      },
    );

    const virtualDemoPagePath = path.join(
      pageRoot,
      '_virtual',
      locale,
      'mobile-demo',
      `${name}.tsx`,
    );

    const demoFilename = path.join(
      buildRoot,
      category,
      name,
      `mobile-demo.${locale}.mdx`,
    );

    await Promise.all([
      mkdirp(path.dirname(virtualDemoPagePath)),
      mkdirp(path.dirname(demoFilename)),
    ]);

    tasks.push(
      ...demos.map(async (demo) => {
        const outFilename = path.join(
          buildRoot,
          category,
          name,
          `${demo.componentName}.${locale}.tsx`,
        );

        await writeFile(outFilename, demo.code);
      }),
      writeFile(virtualDemoPagePath, demoTpl.replace('##entry##', demoFilename)),
      writeFile(demoFilename, mobileDemoContent),
    );
  }

  await Promise.all(tasks);
};

const writeHolderPage = async (pageFilenames: string[]) => {
  const dirs = uniq(pageFilenames.map(item => path.dirname(item)));

  await Promise.all(dirs.map(dir => mkdirp(dir)));

  await Promise.all(
    pageFilenames.map(name => writeFile(name, `export default () => null;`)),
  );
};

export const dump = async (docData: DocMDData[], ctx: IContext) => {
  const queue = new PQueue({ concurrency: os.cpus().length });

  docData.forEach((item) => {
    queue.add(async () => {
      await writeMD(item, ctx);
    });
  });

  const { pageRoot } = ctx;
  const navContent = await readFile(path.join(__dirname, 'mobile-nav.tpl'));
  const navFilename = path.join(pageRoot, 'mobile-demo/index.tsx');
  await mkdirp(path.dirname(navFilename));
  await writeFile(navFilename, navContent);

  queue.add(() =>
    writeHolderPage(
      docData
        .filter(item => !item.isPackage)
        .map((item) => {
          return path.join(pageRoot, `${item.route}.tsx`);
        })
        .concat(
          uniq(
            docData
              .filter(item => item.isPackage)
              .map(item => path.join(pageRoot, item.category, `[name].tsx`)),
          ),
        ),
    ),
  );

  await queue.onIdle();
};

export const dumpNavigationData = async (docData: DocMDData[], ctx: IContext) => {
  const navigationData = docData.map(item => ({
    ...pick(item, [
      'category',
      'group',
      'title',
      'subTitle',
      'locale',
      'theme',
      'style',
      'demoRoute',
    ]),
    demo: !!item.demoStore,
    route: item.route === '/index' ? '/' : item.route,
  }));

  const { orders, translations } = ctx.config;
  const result = Object.entries(groupBy(navigationData, 'locale')).map(
    ([locale, data]) => {
      const menus = Object.entries(groupBy(data, item => item.category)).map(
        ([category, menus]) => {
          const groupOrders = orders?.group;

          const list = Object.entries(groupBy(menus, 'group')).map(
            ([group, subMenus]) => {
              subMenus.sort((a, b) => a.route.localeCompare(b.route));

              return {
                group,
                title: translations?.[locale]?.groups?.[group] || capitalize(group),
                subMenus,
              };
            },
          );

          if (groupOrders) {
            list.sort((a, b) => groupOrders[a.group] - groupOrders[b.group]);
          }

          return {
            category,
            title: translations?.[locale]?.menus?.[category] || capitalize(category),
            menus: list,
          };
        },
      );

      const menuOrders = orders?.menus;

      menus.sort((a, b) => {
        if (!menuOrders) {
          return b.category.localeCompare(a.category);
        }

        return menuOrders[a.category] - menuOrders[b.category];
      });

      return [locale, menus];
    },
  );

  await writeFile(
    path.join(path.dirname(ctx.pageRoot), 'navigation.json'),
    JSON.stringify(Object.fromEntries(result), null, 2),
  );
};

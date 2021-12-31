import PQueue from 'p-queue';
import glob from 'fast-glob';
import { cpus } from 'os';
import mkdirp from 'mkdirp';
import yml from 'js-yaml';
import * as fs from 'fs';
import * as path from 'path';
import { readConfig, parseMarkdown } from './docs';
import type { DocMDData } from './docs';
import { pick } from 'lodash';
import { rm } from './utils';

async function doc() {
  const queue = new PQueue({ concurrency: cpus().length * 4 });
  const root = process.cwd();
  const demoRoot = path.join(root, 'docs', 'src/pages', 'demo');
  const docsRoot = path.join(root, 'docs', '.site');
  const locales = ['zh-CN'];
  const defaultLocale = 'zh-CN';
  const config = readConfig(root);

  const matches = glob.sync(
    [
      path.join(root, 'packages/**/*/src/grid/*.md'),
      path.join(root, 'packages/**/*/src/image/*.md'),
      path.join(root, 'docs/docs/**/*.md'),
    ],
    {
      ignore: ['**/node_modules/**/*.md', '**/README.md'],
    },
  );

  const data = (
    await Promise.all(
      matches.map((match) =>
        queue.add(() => parseMarkdown(path.resolve(match), config)),
      ),
    )
  ).filter(Boolean) as DocMDData[];

  await Promise.all([rm(`${docsRoot}/**/*`), rm(`${demoRoot}/**/*`)]);
  await mkdirp(demoRoot);

  const map = new Map<string, DocMDData[]>();

  data.forEach((item) => {
    if (!map.has(item.path)) {
      map.set(item.path, []);
    }

    map.get(item.path)!.push(item);
  });

  for (const list of map.values()) {
    const notFounded = locales.filter((item) =>
      list.find((v) => v.locale !== item),
    );
    const defaultItem =
      list.find((item) => item.locale === defaultLocale) || list[0];

    list.push(
      ...notFounded.map((locale) => ({
        ...defaultItem,
        locale,
      })),
    );
  }

  const allData = Array.from(map.values()).flat();

  await Promise.all(
    allData.map(async (item) => {
      return queue.add(async () => {
        const paths = [`${item.path}.md`];
        if (locales.length > 1) {
          paths.unshift(item.locale);
        }
        const name = path.join(docsRoot, ...paths);

        await mkdirp(path.dirname(name));

        const tasks = [
          fs.promises.writeFile(
            name,
            `---
${yml.dump(pick(item, ['title', 'locale', 'name', 'category', 'subTitle']))}---

${item.content}
        `,
          ),
        ];

        if (item.demoFilename) {
          tasks.push(
            fs.promises.writeFile(
              path.join(demoRoot, `${item.demo!}.tsx`),
              `import React from 'react';
// @ts-ignore
import Com from '${item.demoFilename}';

export default (props: any) => <Com {...props} />
              `,
            ),
          );
        }

        await Promise.all(tasks);
      });
    }),
  );
}

doc();

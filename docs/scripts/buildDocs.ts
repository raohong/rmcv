import pLimit from 'p-limit';
import glob from 'fast-glob';
import { cpus } from 'os';
import mkdirp from 'mkdirp';
import yml from 'js-yaml';
import * as fs from 'fs';
import * as path from 'path';
import { omit, pick } from 'lodash';
import {
  readConfig,
  parseMarkdown,
  writeDemoContent,
  DocAppMeta,
} from './docs';
import type { DocMDData } from './docs';
import { rm } from './utils';

async function doc() {
  const limit = pLimit(cpus().length * 4);
  const input: Promise<void>[] = [];
  const dataInput: Promise<void>[] = [];
  const root = process.cwd();
  const docsRoot = path.join(root, 'docs');
  const demoRoot = path.join(docsRoot, 'src/pages', 'demo');
  const pageRoot = path.join(docsRoot, '.site');
  const config = readConfig(root);
  const pkg = JSON.parse(
    fs.readFileSync(path.join(root, 'package.json')).toString(),
  );
  const { locales, defaultLocale } = config;

  const matches = glob.sync(
    [
      path.join(root, 'packages/**/*/src/*/*.md'),
      path.join(root, 'packages/**/*/src/*/*.md'),
      path.join(root, 'docs/docs/**/content/*.md'),
    ],
    {
      ignore: ['**/node_modules/**/*.md', '**/README.md'],
    },
  );

  const data: DocMDData[] = [];
  matches.map((match) => {
    dataInput.push(
      limit(async () => {
        const result = await parseMarkdown(path.resolve(match), config);

        if (result) {
          data.push(result);
        }
      }),
    );
  });

  await Promise.all(dataInput);

  await Promise.all([rm(`${pageRoot}/**/*`), rm(`${demoRoot}/**/*`)]);
  await Promise.all([mkdirp(demoRoot)]);

  const map = new Map<string, DocMDData[]>();

  data.forEach((item) => {
    if (!map.has(item.path)) {
      map.set(item.path, []);
    }

    map.get(item.path)!.push(item);
  });

  for (const list of map.values()) {
    const notFounded = locales.filter((item) =>
      list.find((v) => v.locale !== item.value),
    );
    const defaultItem =
      list.find((item) => item.locale === defaultLocale) || list[0];

    list.push(
      ...notFounded.map((lang) => ({
        ...defaultItem,
        locale: lang.value,
      })),
    );
  }

  const allDocData = Array.from(map.values()).flat();
  const appMeta: DocAppMeta = {
    locales,
    defaultLocale,
    demos: {},
    repository: pkg.repository,
  };
  const orders = config.menuOrders;

  allDocData.forEach(async (item) => {
    input.push(
      limit(async () => {
        const name = path.join(pageRoot, `${item.path}.${item.locale}.md`);

        await mkdirp(path.dirname(name));

        const tasks = [
          fs.promises.writeFile(
            name,
            `---
${yml.dump(
  pick(
    {
      ...item,
      demoName: item.demoFilename && item.demo,
      demoPath: item.demoFilename && `/demo/${item.demo}`,
      menuOrder: item.type && orders && orders[item.locale]?.[item.type],
    },
    [
      'title',
      'locale',
      'name',
      'category',
      'subTitle',
      'type',
      'demoName',
      'demoPath',
    ],
  ),
)}---

${item.content}
        `,
          ),
        ];

        if (item.demoFilename) {
          appMeta.demos[item.name] = {
            name: item.name,
            demoPath: `/demo/${item.demo}`,
          };
          tasks.push(
            writeDemoContent(
              path.join(demoRoot, `${item.demo!}.tsx`),
              item.demoFilename,
            ),
          );
        }

        await Promise.all(tasks);
      }),
    );
  });

  input.push(
    limit(async () => {
      const content = `
import React from 'react';
import { DemoNav } from 'src/components';

export default DemoNav;

    `;
      await fs.promises.writeFile(path.join(demoRoot, 'index.tsx'), content);
    }),
  );

  await Promise.all(input);

  await fs.promises.writeFile(
    path.join(docsRoot, '.app-meta.json'),
    JSON.stringify(omit(appMeta, 'menuOrders'), null, 2),
  );
}

doc();

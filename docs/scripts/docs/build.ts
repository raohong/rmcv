import mkdirp from 'mkdirp';
import yml from 'js-yaml';
import ora from 'ora';
import * as glob from 'fast-glob';
import prettier from 'prettier';
import { watch } from 'chokidar';
import { writeFile, readFile } from 'fs/promises';
import * as path from 'path';
import { pick } from 'lodash';
import readConfig from './readConfig';
import writeDemoContent from './writeDemoContent';
import type { DocMDData, DocAppMeta, DocConfig } from './type';
import { rm } from '../utils';
import parseMarkdown from './parseMarkdown';

type IContext = {
  root: string;
  docsRoot: string;
  demoRoot: string;
  pageRoot: string;
  config: DocConfig;
  pkg: Record<string, any>;
};

type WatchEventType = 'create' | 'delete' | 'update';
type ITask = (cache?: Map<string, DocMDData>) => Promise<void>;

const getFileEntry = (root: string) => {
  return {
    entry: [
      path.join(root, 'packages/**/src/**/*.md'),
      path.join(root, 'docs/docs/**/content/*.md'),
    ],
    ignore: ['**/node_modules/**/*.md', '**/README.md'],
  };
};

const getBaseData = async (): Promise<IContext> => {
  const root = process.cwd();
  const docsRoot = path.join(root, 'docs');
  const demoRoot = path.join(docsRoot, 'src/pages', 'demo');
  const pageRoot = path.join(docsRoot, '.site');
  const config = readConfig(root);
  const content = (await readFile(path.join(root, 'package.json'))).toString();
  const pkg = JSON.parse(content);

  return {
    root,
    docsRoot,
    demoRoot,
    pageRoot,
    config,
    pkg,
  };
};

const dump = async (docData: DocMDData[], ctx: IContext) => {
  const input: (() => Promise<void>)[] = [];
  const {
    config: { menuOrders },
    pageRoot,
    demoRoot,
  } = ctx;

  const mdMetaKeys = [
    'title',
    'locale',
    'name',
    'category',
    'subTitle',
    'type',
    'demoName',
    'demoPath',
    'order',
    'menuOrder',
    'theme',
  ];
  const demoNavContent = `
import React from 'react';
import { DemoNav } from 'src/components';

export default DemoNav;
`;

  docData.forEach((item) => {
    input.push(async () => {
      const name = path.join(pageRoot, `${item.path}.${item.locale}.md`);
      const itemData = {
        ...item,
        menuOrder: menuOrders?.[item.locale]?.[item.type],
        demoName: item.demoFilename && item.demo,
        demoPath: item.demoFilename && `/demo/${item.demo}`,
      };

      const tasks = [
        writeFile(
          name,
          `---
${yml.dump(pick(itemData, mdMetaKeys))}
---

${item.content}
        `,
        ),
      ];

      if (item.demoFilename) {
        tasks.push(
          writeDemoContent(
            path.join(demoRoot, `${item.demo!}.tsx`),
            item.demoFilename,
          ),
        );
      }

      await mkdirp(path.dirname(name));
      await Promise.all(tasks);
    });
  });

  input.push(() => writeFile(path.join(demoRoot, 'index.tsx'), demoNavContent));

  await Promise.all(input.map((item) => item()));
};

const formatMDData = (data: DocMDData[], ctx: IContext) => {
  const map = new Map<string, DocMDData[]>();
  const {
    config: { locales, defaultLocale },
  } = ctx;

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

  return Array.from(map.values()).flat();
};

async function build(watchMode: boolean) {
  const ctx = await getBaseData();
  const { config, pageRoot, demoRoot, root, pkg } = ctx;
  const { locales, defaultLocale } = config;
  const { entry, ignore } = getFileEntry(root);
  const prettierOptions = await prettier.resolveConfig(root);

  const tasks = new Map<string, ITask>();
  const dataCache = new Map<string, DocMDData>();
  const invalidatedIds = new Map<string, WatchEventType>();
  let rerun = false;
  let running = false;
  let buildTimeout: NodeJS.Timeout | null = null;
  let delay = 100;
  let appMetaWrited = false;

  const appMeta: DocAppMeta = {
    locales,
    defaultLocale,
    repository: pkg.repository,
  };

  const createTask = (id: string) => {
    const task = async (currentCache: Map<string, DocMDData> = dataCache) => {
      const result = await parseMarkdown(id, config, prettierOptions);

      if (result) {
        currentCache.set(id, result);
      }
    };

    return task;
  };

  async function write(changedIds: string[]) {
    const data = changedIds
      .map((id) => dataCache.get(id))
      .filter(Boolean) as DocMDData[];
    const allDocData = formatMDData(data, ctx);

    await dump(allDocData, ctx);

    if (!appMetaWrited) {
      await writeFile(
        path.join(ctx.docsRoot, '.app-meta.json'),
        JSON.stringify(appMeta, null, 2),
      );
      appMetaWrited = true;
    }
  }

  async function run() {
    running = true;

    const ids = Array.from(invalidatedIds.entries());
    const queue: ITask[] = [];
    const changedIds: string[] = [];
    const deletedDemos: string[] = [];
    invalidatedIds.clear();

    for (const [id, event] of ids) {
      if (event === 'create' && !tasks.get(id)) {
        if (tasks.get(id)) {
          queue.push(tasks.get(id)!);
        } else {
          const task = createTask(id);
          queue.push(task);
          tasks.set(id, task);
        }
        changedIds.push(id);
      } else if (event === 'delete') {
        tasks.delete(id);
        dataCache.delete(id);
      } else if (event === 'update') {
        queue.push(tasks.get(id)!);
        changedIds.push(id);
      }
    }

    const spinner1 = ora('collecting markdown data').start();
    const currentCache = new Map<string, DocMDData>();
    console.time('collecting markdown data');

    await Promise.all(queue.map((task) => task(currentCache)));

    for (const [id, itemData] of currentCache.entries()) {
      const previous = dataCache.get(id);
      if (previous && previous.demo !== itemData.demo && !itemData.demo) {
        deletedDemos.push(path.join(demoRoot, `${previous.demo!}.tsx`));
      }

      dataCache.set(id, itemData);
    }

    spinner1.succeed();
    console.timeEnd('collecting markdown data');

    const spinner2 = ora('write page').start();
    await Promise.all([
      write(changedIds),
      Promise.all(deletedDemos.map((demo) => rm(demo))),
    ]);
    spinner2.succeed();

    running = false;

    if (rerun && !watchMode) {
      rerun = false;
      invalidate();
    }
  }

  function invalidate(file?: { event: WatchEventType; id: string }) {
    if (file) {
      invalidatedIds.set(file.id, file.event);
    }

    if (running) {
      rerun = true;

      return;
    }

    if (buildTimeout) {
      clearTimeout(buildTimeout);
    }

    buildTimeout = setTimeout(() => {
      buildTimeout = null;

      run();
    }, delay);
  }

  const handleChange = (id: string, event: WatchEventType) => {
    invalidate({ event, id });
  };

  await Promise.all([rm(`${pageRoot}/**/*`), rm(`${demoRoot}/**/*`)]);
  await Promise.all([mkdirp(demoRoot)]);

  const list = glob.sync(entry, {
    ignore,
  });

  list.forEach((item) => {
    handleChange(item, 'create');
  });

  if (!watchMode) {
    return;
  }

  const watcher = watch(entry, {
    ignored: ignore,
    ignoreInitial: true,
  });

  watcher
    .on('add', (id) => handleChange(id, 'create'))
    .on('unlink', (id) => handleChange(id, 'delete'))
    .on('change', (id) => handleChange(id, 'update'));
}

export default build;

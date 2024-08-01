/* eslint-disable no-console */
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { watch } from 'chokidar';
import del from 'del';
import glob from 'fast-glob';
import { isEqual } from 'lodash';
import mkdirp from 'mkdirp';
import ora from 'ora';
import _prettier from 'prettier';
import { dump, dumpNavigationData } from './dump';
import parseMarkdown from './parseMarkdown';
import readConfig from './readConfig';
import type { DocMDData, IContext } from './type';

type WatchEventType = 'create' | 'delete' | 'update';
type ITask = (cache?: Map<string, DocMDData>) => Promise<void>;

const getFileEntry = (root: string) => {
  return {
    entry: [
      path.join(root, 'packages/components/src/**/*.md'),
      path.join(root, 'packages/icons/src/**/*.md'),
      path.join(root, 'docs/src/docs/**/*.mdx'),
    ],
    ignore: ['**/node_modules/**/*.md', '**/README.md'],
  };
};

const getContext = async (): Promise<IContext> => {
  const root = process.cwd();
  const nextRoot = path.join(root, 'docs');
  const docsRoot = path.join(nextRoot, 'src/docs');
  const buildRoot = path.join(nextRoot, 'src', '.data');
  const pageRoot = path.join(nextRoot, 'src/pages');
  const virtualRoot = path.join(pageRoot, '_virtual');
  const config = readConfig(nextRoot);
  const content = (await readFile(path.join(root, 'package.json'))).toString();
  const pkg = JSON.parse(content);
  const prettierOptions = (await _prettier.resolveConfig(root)) || {
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 65,
    proseWrap: 'never',
    endOfLine: 'lf',
  };

  await Promise.all([mkdirp(buildRoot)]);

  const formatCode = async (code: string, options?: _prettier.Options) =>
    await _prettier.format(code, {
      ...prettierOptions,
      printWidth: 65,
      parser: 'typescript',
      ...options,
    });

  return {
    root,
    docsRoot,
    buildRoot,
    pageRoot,
    config,
    pkg,
    nextRoot,
    iconPkgRoot: path.join(root, 'packages', 'icons'),
    componentPkgRoot: path.join(root, 'packages', 'components'),
    formatCode,
    virtualRoot,
  };
};

const formatMDData = (data: DocMDData[], ctx: IContext) => {
  const map = new Map<string, DocMDData[]>();
  const {
    config: { locales, defaultLocale },
  } = ctx;

  data.forEach((item) => {
    if (!map.has(item.filename)) {
      map.set(item.filename, []);
    }

    map.get(item.filename)!.push(item);
  });

  for (const list of map.values()) {
    const notFounded = locales.filter(item =>
      list.find(v => v.locale !== item.value),
    );
    const defaultItem = list.find(item => item.locale === defaultLocale) || list[0];

    list.push(
      ...notFounded.map(lang => ({
        ...defaultItem,
        locale: lang.value,
      })),
    );
  }

  return Array.from(map.values()).flat();
};

async function build(watchMode: boolean) {
  const ctx = await getContext();
  const { root, pageRoot, buildRoot, virtualRoot } = ctx;
  const { entry, ignore } = getFileEntry(root);

  const dataCache = new Map<string, DocMDData>();
  const invalidatedIds = new Map<string, WatchEventType>();
  const delay = 100;

  let rerun = false;
  let running = false;
  let buildTimeout: NodeJS.Timeout | null = null;

  await del([path.join(pageRoot, '/**/*.mdx'), buildRoot, virtualRoot], {
    ignore: [path.join(pageRoot, '_app.tsx')],
  });

  const createTask = (id: string) => {
    const task = async (currentCache: Map<string, DocMDData> = dataCache) => {
      const result = await parseMarkdown(ctx, id);

      if (result) {
        currentCache.set(id, result);
      }
    };

    return task;
  };

  async function write(changedIds: string[]) {
    const data = changedIds
      .map(id => dataCache.get(id))
      .filter(Boolean) as DocMDData[];
    const allDocData = formatMDData(data, ctx);

    await dump(allDocData, ctx);
    await dumpNavigationData(formatMDData(Array.from(dataCache.values()), ctx), ctx);
  }

  async function run() {
    running = true;

    const ids = Array.from(invalidatedIds.entries());
    const queue: ITask[] = [];
    const changedIds: string[] = [];
    const deletedDemos: string[] = [];
    invalidatedIds.clear();

    for (const [id, event] of ids) {
      if (event === 'create') {
        const task = createTask(id);
        queue.push(task);
        changedIds.push(id);
      }
      else if (event === 'delete') {
        dataCache.delete(id);
      }
      else if (event === 'update') {
        queue.push(createTask(id));
        changedIds.push(id);
      }
    }

    const spinner1 = ora('collecting markdown data').start();
    const currentCache = new Map<string, DocMDData>();
    console.time('collecting markdown data');

    await Promise.all(queue.map(task => task(currentCache)));

    for (const [id, itemData] of currentCache.entries()) {
      const previous = dataCache.get(id);
      if (previous && isEqual(previous.demoStore, itemData)) {
        //    deletedDemos.push(path.join(demoRoot, `${previous.demo!}.tsx`));
      }

      dataCache.set(id, itemData);
    }

    spinner1.succeed();
    console.timeEnd('collecting markdown data');

    const spinner2 = ora('write page').start();
    await Promise.all([
      write(changedIds),
      Promise.all(deletedDemos.map(demo => del(demo))),
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
    .on('add', id => handleChange(id, 'create'))
    .on('unlink', id => handleChange(id, 'delete'))
    .on('change', id => handleChange(id, 'update'));
}

export default build;

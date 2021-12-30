import yml from 'js-yaml';
import * as path from 'path';
import { readFile, readdir } from 'fs/promises';
import { isBoolean, isString, omit, pick } from 'lodash';
import { FileCache } from '../utils';
import paraseCSSVar from './parseCSSVar';
import type { DocConfig, DocCSSVarData, DocMDData, DocMDMeta } from './type';
import parseAPI from './parseAPI';
import getLocale from './getLocale';
import renderMdTable from './renderMdTable';

const metaPattern = /---(?:\r?\n|\r)([\s\S]*?)(?:\r?\n|\r)---/;

const getCSSVarFile = (dir: string, cssVar: boolean | string) => {
  return isBoolean(cssVar)
    ? path.join(dir, 'style/css-declare.less')
    : path.join(dir, cssVar);
};

const getMDName = (filename: string) => {
  let name = path.basename(filename, path.extname(filename));
  if (filename.match(/index\.\w+$/)) {
    name = path.basename(path.dirname(filename));
  }

  return name;
};

const getAPIComponentFile = (dir: string, api: boolean | string) => {
  if (isString(api)) {
    return path.join(dir, api.includes('.') ? api : `${api}.tsx`);
  }

  return path.join(dir, `index.tsx`);
};

const getMDLocale = (filename: string, defaultLocale: string) => {
  const name = path.basename(filename, path.extname(filename));
  const locale = name.split('.').pop();

  return locale ? getLocale(locale, defaultLocale) : defaultLocale;
};

const generateCssVarMdTable = async (position: string, filename: string) => {
  const data = await paraseCSSVar(filename, 'rmcv');

  return {
    data,
    position,
  };
};

const getMDPath = async (
  filename: string,
  parentDirs: string[] = [],
): Promise<string> => {
  const currentDir = path.dirname(filename);
  const dirs = await readdir(currentDir);

  if (!(dirs.includes('package.json') || dirs.includes('src'))) {
    const name = path.basename(filename, path.extname(filename));

    if (name !== 'index') {
      parentDirs.unshift(name);
    }

    await getMDPath(currentDir, parentDirs);
  }

  return `/${parentDirs.join('/')}`;
};

const parseMeta = async (
  filename: string,
  config: string,
): Promise<{
  meta: DocMDMeta;
  demoFilename?: string;
  name: string;
}> => {
  const dir = path.dirname(filename);
  const meta = yml.load(config) as DocMDMeta;
  const name = getMDName(filename);

  return {
    meta,
    demoFilename: meta.demo ? path.join(dir, 'demos') : undefined,
    name,
  };
};

const fileCache = new FileCache();
const parseMarkdown = async (
  filename: string,
  config: DocConfig,
): Promise<null | DocMDData> => {
  const existed = fileCache.get(filename);

  if (existed) {
    return existed;
  }

  const { defaultLocale } = config;
  const content = await (await readFile(filename)).toString();
  const dir = path.dirname(filename);
  const metaMatched = content.match(metaPattern);

  if (!metaMatched) {
    return null;
  }

  const { meta, demoFilename, name } = await parseMeta(
    filename,
    metaMatched[1],
  );

  const mdPath = await getMDPath(filename);
  const locale = getMDLocale(filename, defaultLocale);

  const result: DocMDData = {
    ...pick(meta, ['title', 'category', 'subTitle']),
    demoFilename,
    locale,
    name,
    path: mdPath,
    content: '',
    demo: name,
  };

  if (demoFilename) {
    result.demo = name;
  }

  const cassVarsTasks: (() => Promise<{
    position: string;
    data: DocCSSVarData[] | null;
  }>)[] = [];
  let cssVarIndex = 0;

  let mdContent = content.replace(
    /\{({[^}]+\})\}/g,
    (match, content: string) => {
      try {
        const jsonContent = content.replace(/,\s*$/, '');
        const jsonData = JSON.parse(jsonContent);

        if (
          match.includes('api') &&
          (jsonData.api === true || isString(jsonData.api))
        ) {
          const apiFilename = getAPIComponentFile(dir, jsonData.api);
          const apiResult = parseAPI(apiFilename, defaultLocale);

          if (apiResult) {
            return renderMdTable(
              apiResult,
              ['name', 'description', 'type', 'defaultValue'],
              locale,
              config.translations.api,
            );
          }
        } else if (
          (match.includes('cssVar') && jsonData.cssVar === true) ||
          !jsonData.cssVar
        ) {
          const position = `XXXX${cssVarIndex++}`;

          cassVarsTasks.push(() =>
            generateCssVarMdTable(
              position,
              getCSSVarFile(dir, jsonData.cssVar),
            ),
          );

          return position;
        }
      } catch {}

      return match;
    },
  );

  const cssVarData = await Promise.all(cassVarsTasks.map((item) => item()));

  mdContent = mdContent.replace(metaPattern, '');
  cssVarData.forEach(({ position, data }) => {
    if (!data) {
      return;
    }

    mdContent = mdContent.replace(
      position,
      renderMdTable(
        data,
        ['name', 'defaultValue', 'description'],
        locale,
        config.translations.cssVar,
      ),
    );
  });

  if (meta.renderTitle !== false && !/^#\s[^\s#]{2,}/m.test(mdContent)) {
    mdContent = `# ${result.title} \n${mdContent}`;
  }

  fileCache.set(filename, result);

  return {
    ...result,
    content: mdContent,
  };
};

export default parseMarkdown;

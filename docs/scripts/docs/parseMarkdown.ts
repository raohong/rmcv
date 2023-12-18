import { readFile, readdir } from 'fs/promises';
import yml from 'js-yaml';
import { isBoolean, isString, pick } from 'lodash';
import * as path from 'path';
import prettier from 'prettier';
import { FileCache } from '../utils';
import getLocale from './getLocale';
import parseAPI from './parseAPI';
import parseCSSVar from './parseCSSVar';
import renderMdTable from './renderMdTable';
import type {
  DocApiData,
  DocCSSVarData,
  DocConfig,
  DocMDData,
  DocMDMeta,
} from './type';

const metaPattern = /---(?:\r?\n|\r)([\s\S]*?)(?:\r?\n|\r)---/;

const getCSSVarFile = (dir: string, cssVar: boolean | string) => {
  return isBoolean(cssVar)
    ? path.join(dir, 'style/css-declare.less')
    : path.join(dir, cssVar);
};

const safetyGetJSON = (str: string) => {
  try {
    return JSON.parse(str);
  } catch (err) {
    return null;
  }
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
  const data = await parseCSSVar(filename, 'rmcv');

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
  prettierOptions: prettier.Options | null,
): Promise<null | DocMDData> => {
  const { defaultLocale } = config;
  const content = await (await readFile(filename)).toString();
  const dir = path.dirname(filename);
  const metaMatched = content.match(metaPattern);

  if (!metaMatched) {
    return null;
  }

  const { meta, demoFilename, name } = await parseMeta(filename, metaMatched[1]);

  const mdPath = await getMDPath(filename);
  const locale = getMDLocale(filename, defaultLocale);

  const result: DocMDData = {
    ...pick(meta, ['title', 'category', 'subTitle', 'type', 'theme']),
    demoFilename,
    locale,
    name,
    path: mdPath,
    content: '',
    demo: meta.demo ? (isString(meta.demo) ? meta.demo : name) : undefined,
  };

  const cssVarsTasks: (() => Promise<{
    position: string;
    data: DocCSSVarData[] | null;
  }>)[] = [];
  let cssVarIndex = 0;

  let mdContent = content.replace(/\{(\{[^}]+\})\}/g, (match, content: string) => {
    const jsonContent = content.replace(/,\s*$/, '');
    const jsonData = safetyGetJSON(jsonContent);

    if (!jsonData) {
      return match;
    }

    if (match.includes('api') && (jsonData.api === true || isString(jsonData.api))) {
      const apiFilename = getAPIComponentFile(dir, jsonData.api);
      const apiResult: DocApiData[] | null =
        fileCache.get(apiFilename) || parseAPI(apiFilename, defaultLocale);

      if (apiResult) {
        fileCache.set(apiFilename, apiResult);

        return renderMdTable(
          apiResult,
          ['name', 'description', 'type', 'defaultValue'],
          locale,
          config.translations.api,
          (key, val) => {
            if (key === 'type') {
              return `***${val}***`;
            }

            if (key === 'defaultValue') {
              return `\`${val}\``;
            }
            return val;
          },
        );
      }
    } else if (
      (match.includes('cssVar') && jsonData.cssVar === true) ||
      !jsonData.cssVar
    ) {
      const position = `XXXX${cssVarIndex++}`;

      cssVarsTasks.push(async () => {
        const varFilename = getCSSVarFile(dir, jsonData.cssVar);
        const varData = fileCache.get(varFilename);

        if (!varData) {
          const data = generateCssVarMdTable(position, varFilename);
          fileCache.set(varFilename, data);

          return data;
        }

        return varData;
      });

      return position;
    }

    return match;
  });

  const cssVarData = await Promise.all(cssVarsTasks.map((item) => item()));

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
        (key, val) => {
          if (key === 'defaultValue') {
            return `***${val}***`;
          }
          return val;
        },
      ),
    );
  });

  if (meta.renderTitle !== false && !/^#\s[^\s#]{2,}/m.test(mdContent)) {
    mdContent = `# ${result.title} \n${mdContent}`;
  }

  if (prettierOptions) {
    mdContent = prettier.format(mdContent, {
      ...prettierOptions,
      parser: 'markdown',
      printWidth: 85,
    });
    const tab = prettierOptions.tabWidth || 2;
    const whitespace = new RegExp(`^\\s{${tab}}`);

    mdContent = mdContent.replace(
      /```tsx[\r\n]<>([\s\S]+?)<\/>[\r\n]```/g,
      (_match, code: string) => {
        const codeResult = code
          .split(/[\r\n]/)
          .filter((item) => !item || !/^[\n\r]+$/.test(item))
          .map((item) => item.replace(whitespace, ''))
          .join('\n');

        return `\`\`\`tsx${codeResult}\`\`\``;
      },
    );
  }

  return {
    ...result,
    content: mdContent,
  };
};

export default parseMarkdown;

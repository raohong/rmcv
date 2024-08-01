import { readFile } from 'node:fs/promises';
import * as path from 'node:path';
import yml from 'js-yaml';
import { pick } from 'lodash';
import getLocale from './getLocale';
import parseDemos from './parseDemos';
import type { DocMDData, DocMDMeta, IContext } from './type';

const metaPattern = /---(?:\r?\n|\r)([\s\S]*?)(?:\r?\n|\r)---/;

const getMDName = (filename: string, isPackage: boolean) => {
  let name = path.basename(filename, path.extname(filename));

  if (isPackage && filename.match(/index\.\w+$/)) {
    name = path.basename(path.dirname(filename));
  }

  return name;
};

const getMDLocale = (filename: string, defaultLocale: string) => {
  const name = path.basename(filename, path.extname(filename));
  const locale = name.split('.').pop();

  return locale ? getLocale(locale, defaultLocale) : defaultLocale;
};

const parseMeta = async (
  filename: string,
  config: string,
  isPackage: boolean,
): Promise<{
  meta: DocMDMeta;
  name: string;
}> => {
  const meta = yml.load(config) as DocMDMeta;
  const name = getMDName(filename, isPackage);

  return {
    meta,
    name,
  };
};

const getMDRoute = (
  { docsRoot }: IContext,
  {
    category,
    isPackage,
    filename,
    name,
  }: Pick<DocMDData, 'category' | 'isPackage' | 'filename' | 'name'>,
) => {
  let route = '';

  if (isPackage) {
    route = `/${category}/${name}`;
  }
  else {
    const relative = path.relative(docsRoot, filename);
    route = `/${relative.replace(path.extname(relative), '')}`;
  }

  return route === '/home' ? '/index' : route;
};

const parseMarkdown = async (
  context: IContext,
  filename: string,
): Promise<null | DocMDData> => {
  const { config, virtualRoot } = context;
  const { defaultLocale } = config;
  const content = await readFile(filename, 'utf-8');
  const metaMatched = content.match(metaPattern);

  if (!metaMatched) {
    return null;
  }

  const isPackage = filename.includes(path.join(context.root, 'packages'));
  const { meta, name } = await parseMeta(filename, metaMatched[1], isPackage);

  if (meta.docs === false) {
    return null;
  }
  const locale = getMDLocale(filename, defaultLocale);

  const result: Omit<DocMDData, 'route' | 'content' | 'destFilename'> = {
    ...pick(meta, ['title', 'category', 'subTitle', 'theme']),
    locale,
    style: meta.style && meta.style.replace(/^['"]|['"]$/g, ''),
    name,
    filename,
    isPackage,
    group: meta.group || meta.category,
  };

  const route = getMDRoute(context, result);

  const destFilename = isPackage
    ? path.join(virtualRoot, locale, meta.category, `${name}.mdx`)
    : path.join(
      virtualRoot,
      locale,
      path.dirname(locale),
        `${path.basename(route)}.mdx`,
    );

  let mdContent = content.replace(metaPattern, '');
  try {
    const demoResult = await parseDemos(context, locale, filename, mdContent, meta.demo);

    mdContent = demoResult.content;

    if (result.renderTitle !== false && !/^#\s[^\s#]{2,}/m.test(mdContent)) {
      mdContent = `# ${result.title}\n${mdContent}`;
    }

    const route = getMDRoute(context, result);

    return {
      ...result,
      content: mdContent,
      demoStore: demoResult.store,
      route,
      demoRoute:
        isPackage && demoResult.store
          ? route.replace(/^\/\w+\//, '/mobile-demo/')
          : undefined,
      destFilename,
    };
  }
  catch (err) {
    console.error(err);
    return null;
  }
};

export default parseMarkdown;

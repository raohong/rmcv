import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { camelCase, capitalize, omit, upperFirst } from 'lodash';
import { getPreviewCode, parseSimpleCode } from './ast';
import type { IContext, IDemoData } from '.';

const parseImportCode = async (docsFilename: string, code: string) => {
  let filename = code.replace(/['";]/g, '');
  if (!path.isAbsolute(filename)) {
    filename = path.join(path.dirname(docsFilename), filename);
  }

  try {
    const content = await readFile(filename, 'utf-8');

    return content;
  }
  catch {
    return null;
  }
};

const parseCode = async (context: IContext, docsFilename: string, code: string) => {
  // 从一个源文件引入写好的 demo

  if (
    code.split('\n').length === 1
    && !code.startsWith('<')
    && /['"].+['"]/.test(code)
  ) {
    return await parseImportCode(docsFilename, code);
  }

  // 直接在文档里写demo 代码
  if (
    (code.includes('return') || code.includes('=>'))
    && code.includes('export default')
    && code.includes('import')
  ) {
    return code;
  }

  let internalCode = code;

  if (code.startsWith('<')) {
    internalCode = code.startsWith('<>') ? `return ${code}` : `return (${code.replace(/;$/, '')})`;
  }

  return await parseSimpleCode(context, internalCode);
};

export default async (
  context: IContext,
  locale: string,
  docsFilename: string,
  content: string,
  demoFilename?: string,
) => {
  const pattern
    // eslint-disable-next-line regexp/no-super-linear-backtracking
    = /demo\|([a-zA-Z_]\w*)(?:\r?\n|\r)+```tsx([\s\S]+?)(?:\r?\n|\r)+```/g;

  const result = Array.from(content.matchAll(pattern)).map((item) => {
    const currentContent = content.slice(0, item.index);
    const titleMatchedIndex = currentContent.lastIndexOf('###');

    let title = null;

    if (titleMatchedIndex > -1) {
      title
        = currentContent
          .slice(titleMatchedIndex + 3)
          .match(/[^\n]+/)?.[0]
          .trim() || null;
    }

    return {
      demoName: item[1],
      code: item[2].trim(),
      matched: item[0],
      title,
    };
  });

  if (demoFilename) {
    result.length = 0;
    result.push({
      demoName: 'all',
      code: `'${demoFilename}'`,
      title: null,
      matched: `'${demoFilename}'`,
    });
  }

  const inputs = await Promise.all(
    result.map(async ({ demoName, code, ...item }) => {
      const internalCode = await parseCode(context, docsFilename, code);

      if (!internalCode) {
        return null;
      }

      const filename = `${demoName}.tsx`;
      const previewCode = await getPreviewCode(context, internalCode);

      return {
        filename,
        code: internalCode,
        previewCode,
        componentName: upperFirst(camelCase(`demo-${demoName}`)),
        ...item,
      };
    }),
  );

  const store = new Map<string, IDemoData>();
  inputs.forEach((item) => {
    if (!item) {
      return;
    }

    const componentData = omit(item, ['matched']);
    const dataVariableName = capitalize(`${item.componentName}_component_data`);
    const itemData = {
      ...componentData,
      dataVariableName,
      locale,
    };

    content = content.replace(
      item.matched,
      `<Demo data={${JSON.stringify(itemData)}} />`,
    );

    store.set(dataVariableName, itemData);
  });

  return {
    store,
    content,
  };
};

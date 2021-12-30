import less from 'less';
import * as path from 'path';
import { readFile } from 'fs/promises';
import { promisify } from 'util';
import type { DocCSSVarData } from './type';

const parse = promisify(less.render) as (
  content: string,
  options: {
    filename: string;
    javascriptEnabled: boolean;
  },
) => Promise<Less.RenderOutput>;

const pattern = /:root\s+\{([\s\S]+)\}/;

const paraseCSSVar = async (
  filename: string,
  prefix: string,
): Promise<DocCSSVarData[] | null> => {
  const content = await (await readFile(filename)).toString();
  const lessResult = await parse(content, {
    filename: path.resolve(filename),
    javascriptEnabled: true,
  });
  const matched = lessResult.css.match(pattern);

  if (!matched) {
    return null;
  }

  const list = matched[1]
    .split(/[\r\n]/)
    .filter((item) => item && item.trim().startsWith(`--${prefix}-`))
    .map((item) => {
      const [key, ...rest] = item.trim().replace(/;$/, '').split(':');

      return [key.replace(`--${prefix}-`, ''), rest.join(':').trim()];
    });
  const data = list.map((item) => ({
    name: item[0],
    defaultValue: item[1],
    description: null,
  }));

  return data;
};

export default paraseCSSVar;

import { isObject, isString } from 'lodash';

const generateMakrdownTable = <
  T extends Record<string, string | boolean | null | undefined>,
>(
  data: T[],
  headers: string[],
  keys: (keyof T)[],
) => {
  return `
${[
  headers.map((item) => ` ${item} `).join('|'),
  headers.map(() => ` --- `).join('|'),
  data
    .map((record) =>
      keys
        .map((key) => {
          const item = record[key];

          if (!isString(item)) {
            return item;
          }

          return item.replace(/\|/g, '\\|');
        })
        .join(' | '),
    )
    .join('\n'),
].join('\n')}
  `;
};

const renderMdTable = <
  D extends keyof T,
  T extends {
    defaultValue?: string | null;
    name: string;
    description?: string | Record<string, string | null> | null;
  },
>(
  data: T[],
  keys: D[],
  locale: string,
  translations: Record<string, Record<string, string>>,
  itemRender?: (key: string, value: string) => string,
) => {
  return generateMakrdownTable(
    data.map((d) => {
      return Object.fromEntries(
        Object.entries(d).map(([key, value]) => {
          if (key === 'description' && isObject(value)) {
            return [key, value?.[locale]];
          }

          if (itemRender && isString(value) && value) {
            return [key, itemRender(key, value)];
          }

          return [key, value || '-'];
        }),
      );
    }),
    keys.map((key) => translations[locale]?.[key as string]),
    keys,
  );
};

export default renderMdTable;

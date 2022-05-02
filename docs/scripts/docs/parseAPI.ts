import * as docgen from 'react-docgen-typescript';
import { PropItem } from 'react-docgen-typescript';
import getLocale from './getLocale';
import { DocApiData } from './type';

const trim = (str: string) => str.replace(/^\s+|\s+$/g, '');

const parseDescription = (
  description: string,
  defaultLocale: string,
): Record<string, string> | null => {
  if (!description.includes('@')) {
    return { [defaultLocale]: trim(description) };
  }

  if (/^[^@]+/.test(description) && description.includes('@')) {
    return {
      [defaultLocale]: trim(description.slice(0, description.indexOf('@'))),
    };
  }

  const pattern = /^@description\s{0,2}(\.([a-z]{2}(?:\.[A-Z]{2})))?/;
  const matched = description.match(/@[a-zA-Z]+[^@]*/g);

  if (!matched) {
    return null;
  }

  const list = matched
    .map((item) => {
      const itemMatched = item.match(pattern);

      if (!itemMatched) {
        return null;
      }

      const locale = getLocale(itemMatched[1], defaultLocale);

      return [locale, trim(item).slice(itemMatched[0].length)];
    })
    .filter(Boolean) as [string, string][];

  return list.length ? Object.fromEntries(list) : null;
};

const propFilter = (prop: PropItem) => {
  if (prop.declarations && prop.declarations.length > 0) {
    const hasPropAdditionalDescription = prop.declarations.find((declaration) => {
      return !declaration.fileName.includes('node_modules');
    });

    return !!hasPropAdditionalDescription;
  }

  return true;
};

const shouldFormatTypes: Record<string, string> = {
  'keyof IntrinsicElements': 'keyof JSX.IntrinsicElements',
  'string | number | boolean | {} | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal':
    'ReactNode',
  'ReactElement<any, string | JSXElementConstructor<any>>': 'ReactElement',
};

const parseAPI = (filename: string, defaultLocale: string) => {
  const result = docgen
    .withCompilerOptions(
      {
        esModuleInterop: true,
        jsx: 1,
      },
      {
        shouldRemoveUndefinedFromOptional: true,
        savePropValueAsString: true,
        propFilter,
      },
    )
    .parse(filename);

  if (result.length > 0) {
    // 没明白多个是什么情况
    const { props } = result[0];

    return Object.entries(props).map(
      ([name, { defaultValue, description, required, type }]) => {
        const apiData = {
          name,
          defaultValue: '',
          required: required ?? false,
        } as DocApiData;

        const declarationType = type?.name || type?.raw;

        if (declarationType) {
          apiData.type = shouldFormatTypes[declarationType] || declarationType;
        }

        apiData.description = parseDescription(description, defaultLocale);

        return apiData;
      },
    );
  }

  return null;
};

export default parseAPI;

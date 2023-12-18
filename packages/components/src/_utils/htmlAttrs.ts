import { isNumber, isString } from '@rmc-vant/utils';

export const getDataOrAriaProps = (props: Record<string, any>) => {
  return Object.entries(props).reduce((result, [key, value]) => {
    if (
      key.startsWith('data-') ||
      key === 'role' ||
      key.startsWith('aria-') ||
      key === 'sx'
    ) {
      result[key] = value;
    }

    return result;
  }, {} as Record<string, any>);
};

type GetStringOrNumberKeys<P extends Record<string, any>> = {
  [K in keyof P]: P[K] extends string ? K : P[K] extends number ? K : never;
}[keyof P];

type FormatHTMLAttrsResult<P extends Record<string, any>> = {
  [K in keyof P as GetStringOrNumberKeys<P>]: string;
};

export const formatHTMLAttrs = <P extends Record<string, any>>(
  attrs: P,
): FormatHTMLAttrsResult<P> => {
  const result = {} as FormatHTMLAttrsResult<P>;

  Object.keys(attrs).forEach((key) => {
    if ((attrs[key] !== '' && isString(attrs[key])) || isNumber(key)) {
      result[key as GetStringOrNumberKeys<P>] = String(attrs[key]);
    }
  });

  return result;
};

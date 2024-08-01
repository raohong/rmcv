import { isNumber, isString } from '@rmc-vant/utils';

const maps: Record<string, boolean> = {
  role: true,
  sx: true,
  tabIndex: true,
};

export const getDataOrAriaProps = (props: Record<string, any>) => {
  return Object.entries(props).reduce(
    (result, [key, value]) => {
      if (key.startsWith('data-') || key.startsWith('aria-') || maps[key]) {
        result[key] = value;
      }

      return result;
    },
    {} as Record<string, any>,
  );
};

type FormatHTMLAttrsResult<P extends Record<string, any>> = {
  [K in keyof P as K extends string ? K : K extends number ? K : never]: string;
};

export const formatHTMLAttrs = <P extends Record<string, any>>(
  attrs: P,
): FormatHTMLAttrsResult<P> => {
  const result = {} as FormatHTMLAttrsResult<P>;

  Object.keys(attrs).forEach((key) => {
    if ((attrs[key] !== '' && isString(attrs[key])) || isNumber(key)) {
      result[key as keyof FormatHTMLAttrsResult<P>] = String(attrs[key]);
    }
  });

  return result;
};

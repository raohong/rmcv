import { kebabCase } from '@rmc-vant/utils';

const createCSSVars = (
  prefix: string,
  style: Record<string, string | undefined | null>,
) => {
  const result = Object.entries(style).reduce((map, [key, value]) => {
    if (!value) {
      return map;
    }
    // @ts-ignore

    map[`--${prefix}-${kebabCase(key)}`] = value;

    return map;
  }, {} as React.CSSProperties);

  return result;
};

export default createCSSVars;

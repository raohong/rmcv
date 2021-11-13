import kebabCase from 'lodash/kebabCase';

const createCSSVars = (
  prefix: string,
  style: Record<string, string | undefined | null>,
) => {
  const result = Object.entries(style).reduce((map, [key, value]) => {
    if (!value) {
      return map;
    }
    // @ts-ignore
    // eslint-disable-next-line no-param-reassign
    map[`--${prefix}-${kebabCase(key)}`] = value;

    return map;
  }, {} as React.CSSProperties);

  return result;
};

export default createCSSVars;

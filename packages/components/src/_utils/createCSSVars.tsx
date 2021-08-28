import React from 'react';

export const createCSSVars = (vars: Record<string, number | string>) =>
  Object.entries(vars).reduce((result, [name, value]) => {
    // @ts-ignore
    result[`--${name}`] = value;
    return result;
  }, {} as React.CSSProperties);

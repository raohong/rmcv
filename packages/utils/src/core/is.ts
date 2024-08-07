// eslint-disable-next-line ts/no-unsafe-function-type
export const isFunction = (target: any): target is Function =>
  typeof target === 'function';

export const isNumber = (target: any): target is number =>
  typeof target === 'number';

export const isString = (target: any): target is string =>
  typeof target === 'string';

export const isBoolean = (target: any): target is boolean =>
  typeof target === 'boolean';

export const isObject = (target: any): target is object =>
  typeof target === 'object';

export const isPlainObject = (target: any): target is object =>
  typeof target === 'object';

export const isArray = (target: any): target is Array<any> => Array.isArray(target);

export const isNil = (target: any): target is null | undefined =>
  target === null || target === undefined;

export const isNull = (target: any): target is null => target === null;

export const isUndefined = (target: any): target is undefined =>
  target === undefined;

export const isEmpty = (val: any): val is boolean =>
  val === null || val === undefined || val === false || val === '';

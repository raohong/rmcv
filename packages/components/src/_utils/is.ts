const toString = Object.prototype.toString;

export const isString = (val: unknown): val is string =>
  toString.call(val) === '[object String]';

export const isNumber = (val: unknown): val is number =>
  toString.call(val) === '[object Number]';

export const isNull = (val: unknown): val is null =>
  toString.call(val) === '[object Null]';

export const isUndefined = (val: unknown): val is undefined =>
  toString.call(val) === '[object Undefined]';

export const isBoolean = (val: unknown): val is boolean =>
  toString.call(val) === '[object Boolean]';

export const isFunction = (val: unknown): val is Function =>
  toString.call(val) === '[object Function]';

export const isObject = (val: unknown): val is Object =>
  toString.call(val) === '[object Object]';

export const isNil = (val: unknown): val is undefined | null =>
  isNull(val) || isUndefined(val);

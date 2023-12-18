import { isFunction } from './is';

export default function runIfFn<T extends any, R extends any>(
  fn: R | ((...args: T[]) => R),
  ...args: T[]
): R {
  return isFunction(fn) ? fn(...args) : fn;
}

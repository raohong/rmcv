import { isFunction } from './is';

export default function runIfFn<T, R>(
  fn: R | ((...args: T[]) => R),
  ...args: T[]
): R {
  return isFunction(fn) ? fn(...args) : fn;
}

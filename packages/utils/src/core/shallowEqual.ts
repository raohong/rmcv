import { isArray, isPlainObject } from './is';

export default function shallowEqual<A, B>(source: A, target: B): boolean {
  if (isPlainObject(source) && isPlainObject(target)) {
    if (source === null || target === null) {
      return Object.is(source, target);
    }

    const aKeys = Object.keys(source);
    const bKeys = Object.keys(target);

    if (aKeys.length !== bKeys.length) {
      return false;
    }

    return aKeys.every(key =>
      Object.is((source as any)[key] as any, (target as any)[key]),
    );
  }

  if (isArray(source) && isArray(target)) {
    if (source.length !== target.length) {
      return false;
    }

    return source.every((item, index) => Object.is(item, target[index]));
  }

  return Object.is(source, target);
}

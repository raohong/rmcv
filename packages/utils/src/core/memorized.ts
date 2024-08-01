import shallowEqual from './shallowEqual';

export default function memorized<T, R>(
  fn: (...args: T[]) => R,
  compare: (a: any, b: any) => boolean = shallowEqual,
) {
  let lastResult: undefined | R;
  let lastParams: undefined | T[];

  return (...args: T[]) => {
    if (!lastParams) {
      lastResult = fn(...args);
      lastParams = args;

      return lastResult;
    }

    if (lastParams.every((param, index) => compare(param, args[index]))) {
      return lastResult;
    }

    lastResult = fn(...args);
    lastParams = args;

    return lastResult;
  };
}

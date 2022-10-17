import { isFunction } from './is';

const composeProps = (
  props: Record<keyof any, any>,
  restProps: Record<keyof any, any>,
) => {
  const next = { ...props };

  Object.keys(restProps).forEach((key) => {
    if (isFunction(restProps[key]) && isFunction(next[key])) {
      const rest: ((...args: any) => any)[] = [restProps[key], next[key]];

      next[key] = (...args: any) => {
        rest.forEach((fn) => fn(...args));
      };
    } else {
      next[key] = restProps[key];
    }
  });

  return next;
};

export default composeProps;

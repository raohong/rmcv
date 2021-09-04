import { useRef } from 'react';

export const usePersistFn = <P extends any[], T>(
  fn: (...args: P) => T,
): ((...args: P) => T) => {
  const handler = useRef<(...args: P) => T>();
  const persisted = useRef<(...args: P) => T>(fn);

  persisted.current = fn;

  if (!handler.current) {
    handler.current = (...args: P) => {
      const callback = persisted.current;
      return callback?.(...args);
    };
  }

  return handler.current;
};

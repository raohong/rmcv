import { useCallback, useRef } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export const useEventCallback = <P extends any[], T>(
  fn: (...args: P) => T,
): ((...args: P) => T) => {
  const handler = useRef<(...args: P) => T>(() => {
    throw Error('Persist Function not invoked');
  });
  const persisted = useRef<(...args: P) => T>(fn);

  persisted.current = fn;

  useIsomorphicLayoutEffect(() => {
    handler.current = (...args: P) => {
      const callback = persisted.current;
      return callback?.(...args);
    };
  });

  return useCallback((...args: P) => {
    return handler.current(...args);
  }, []);
};

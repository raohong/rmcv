import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export const useUpdateIsomorphicLayoutEffect: typeof useIsomorphicLayoutEffect = (
  fn,
  deps,
) => {
  const mounted = useRef(false);

  useIsomorphicLayoutEffect(() => {
    if (mounted.current) {
      return fn();
    }

    mounted.current = true;

    return undefined;
  }, deps);
};

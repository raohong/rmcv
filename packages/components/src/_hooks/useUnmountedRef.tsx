import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export const useUnmountedRef = () => {
  const unmountedRef = useRef(false);

  useIsomorphicLayoutEffect(() => {
    return () => {
      unmountedRef.current = true;
    };
  }, []);

  return unmountedRef;
};

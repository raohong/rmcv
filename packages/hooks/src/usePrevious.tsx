import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export const usePrevious = <T = any>(value: T): T | undefined => {
  const previous = useRef<T>();

  useIsomorphicLayoutEffect(() => {
    previous.current = value;
  });

  return previous.current;
};

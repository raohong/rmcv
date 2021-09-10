import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export const usePrevious = <T extends any = any>(value: T): T | undefined => {
  /**
   * 初次渲染使用同一个值
   */
  const previous = useRef<T>();

  useIsomorphicLayoutEffect(() => {
    previous.current = value;
  }, [value]);

  return previous.current;
};

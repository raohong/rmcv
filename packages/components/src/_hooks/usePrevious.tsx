import { useRef } from 'react';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

const usePrevious = <T extends any = any>(value: T): T | undefined => {
  const previous = useRef<T>();

  useIsomorphicLayoutEffect(() => {
    previous.current = value;
  }, [value]);

  return previous.current;
};

export default usePrevious;

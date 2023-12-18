import { useRef } from 'react';

export const useConstant = <T extends unknown>(source: T) => {
  const ref = useRef<T>();

  if (!ref.current) {
    ref.current = source;
  }

  return ref.current;
};

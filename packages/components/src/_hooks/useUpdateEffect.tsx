import { useEffect, useRef } from 'react';

export const useUpdateEffect: typeof useEffect = (fn, deps) => {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) {
      return fn();
    }

    mounted.current = true;

    return undefined;
  }, deps);
};

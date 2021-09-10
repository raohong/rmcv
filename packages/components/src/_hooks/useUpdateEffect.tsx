import { useEffect, useRef } from 'react';

export const useUpdateEffect: typeof useEffect = (fn, deps) => {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) {
      return fn();
    } else {
      mounted.current = true;
    }
  }, deps);
};

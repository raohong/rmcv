import { useRef } from 'react';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

const useUnmountedRef = () => {
  const unmountedRef = useRef(false);

  useIsomorphicLayoutEffect(() => {
    return () => {
      unmountedRef.current = true;
    };
  }, []);

  return unmountedRef;
};

export default useUnmountedRef;

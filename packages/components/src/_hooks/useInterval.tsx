import { useCallback, useEffect, useRef } from 'react';
import usePersistFn from './usePersistFn';
import useUnmountedRef from './useUnmountedRef';

const useInterval = (
  callback: () => void,
  { interval = 1000, loop = false }: { interval?: number; loop?: boolean } = {
    interval: 200,
    loop: false,
  },
) => {
  const timer = useRef<NodeJS.Timeout | null>(null);
  const active = useRef(false);
  const unmountedRef = useUnmountedRef();

  const handler = usePersistFn(callback);

  const cancel = useCallback(() => {
    if (timer.current !== null) {
      clearTimeout(timer.current);
      timer.current = null;
      active.current = false;
    }
  }, []);

  const start = useCallback(() => {
    cancel();

    const setup = () => {
      active.current = true;
      timer.current = setTimeout(() => {
        if (active.current && !unmountedRef.current) {
          handler();

          if (loop) {
            setup();
          }
        }
      }, interval);
    };
    setup();
  }, [interval, cancel, handler, loop]);

  useEffect(() => {
    return cancel;
  }, [cancel]);

  return { start, cancel };
};

export default useInterval;

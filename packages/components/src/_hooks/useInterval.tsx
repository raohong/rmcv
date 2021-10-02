import { useCallback, useEffect, useRef } from 'react';
import usePersistFn from './usePersistFn';

const useInterval = (callback: () => void, interval: number) => {
  const timer = useRef<NodeJS.Timeout | null>(null);
  const active = useRef(false);

  const handler = usePersistFn(callback);

  const cancel = useCallback(() => {
    if (timer.current !== null) {
      clearInterval(timer.current);
      timer.current = null;
      active.current = false;
    }
  }, []);

  const start = useCallback(() => {
    cancel();

    active.current = true;
    timer.current = setInterval(() => {
      if (active.current) {
        handler();
      }
    }, interval);
  }, [interval, cancel, handler]);

  useEffect(() => {
    return cancel;
  }, [cancel]);

  return { start, cancel };
};

export default useInterval;

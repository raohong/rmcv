import { useCallback, useEffect, useRef } from 'react';
import usePersistFn from './usePersistFn';

const useInterval = (callback: () => void, interval: number) => {
  const timer = useRef<NodeJS.Timeout | null>(null);
  const active = useRef(false);

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
        if (active.current) {
          handler();
          setup();
        }
      }, interval);
    };
    setup();
  }, [interval, cancel, handler]);

  useEffect(() => {
    return cancel;
  }, [cancel]);

  return { start, cancel };
};

export default useInterval;

import { useEffect, useState } from 'react';
import { ResizeObserver } from '@juggle/resize-observer';
import type {
  ResizeObserverEntry,
  ResizeObserverSize,
} from '@juggle/resize-observer';
import useUpdateEffect from './useUpdateEffect';
import useValueRef from './useValueRef';

const useResizeObserver = (callback: (entries: ResizeObserverEntry[]) => void) => {
  const [ob, setOb] = useState(() => new ResizeObserver(callback));
  const obRef = useValueRef(ob);

  useUpdateEffect(() => {
    obRef.current.disconnect();

    setOb(new ResizeObserver(callback));
  }, [callback]);

  useEffect(() => {
    return () => {
      obRef.current.disconnect();
    };
  }, []);

  return [ob];
};

export default useResizeObserver;

export type { ResizeObserverEntry, ResizeObserverSize };

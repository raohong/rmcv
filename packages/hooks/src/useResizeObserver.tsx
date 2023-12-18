import { ResizeObserver } from '@juggle/resize-observer';
import type {
  ResizeObserverEntry,
  ResizeObserverSize,
} from '@juggle/resize-observer';
import { useEffect, useState } from 'react';
import { useUpdateEffect } from './useUpdateEffect';
import { useValueRef } from './useValueRef';

export const useResizeObserver = (
  callback: (entries: ResizeObserverEntry[]) => void,
) => {
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

export type { ResizeObserverEntry, ResizeObserverSize };

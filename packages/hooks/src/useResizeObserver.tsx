import type {
  ResizeObserverEntry,
  ResizeObserverSize,
} from '@juggle/resize-observer';
import { ResizeObserver } from '@juggle/resize-observer';
import { useState } from 'react';
import { useUpdateIsomorphicLayoutEffect } from './useUpdateIsomorphicLayoutEffect';

export const useResizeObserver = (
  callback: (entries: ResizeObserverEntry[]) => void,
) => {
  const [ob, setOb] = useState(() => new ResizeObserver(callback));

  useUpdateIsomorphicLayoutEffect(() => {
    const ob = new ResizeObserver(callback);

    setOb(ob);
    return () => ob.disconnect();
  }, [callback]);

  return [ob];
};

export type { ResizeObserverEntry, ResizeObserverSize };

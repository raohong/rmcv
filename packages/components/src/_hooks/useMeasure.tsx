import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ResizeObserver } from '@juggle/resize-observer';
import type { ResizeObserverEntry } from '@juggle/resize-observer';
import { isFunction } from '../_utils';
import usePersistFn from './usePersistFn';
import useUnmountedRef from './useUnmountedRef';

type MeasureRect = {
  left: number;
  top: number;
  width: number;
  height: number;
};

const getDefaultRect = (): MeasureRect => ({
  left: 0,
  top: 0,
  width: 0,
  height: 0,
});

type UseMeasureOptions<T, D = unknown> = {
  ref?: React.RefObject<T>;
  format?: (entry: ResizeObserverEntry | undefined, rect: MeasureRect) => D;
};

function useMeasure<T extends HTMLElement = HTMLElement>(): [
  React.RefCallback<T>,
  MeasureRect,
];
function useMeasure<
  T extends HTMLElement = HTMLElement,
  D = MeasureRect,
>(options: {
  ref?: React.RefObject<T>;
  format?: (entry: ResizeObserverEntry | undefined, rect: MeasureRect) => D;
}): [React.RefCallback<T>, D];
function useMeasure<T extends HTMLElement>(options?: UseMeasureOptions<T>) {
  const lastObserverTarget = useRef<T | null>(null);
  const observer = useRef<ResizeObserver | null>(null);
  const [data, setData] = useState<unknown>(() =>
    options?.format
      ? options.format(undefined, getDefaultRect())
      : getDefaultRect(),
  );
  const unmountedRef = useUnmountedRef();

  const ctrledRef = options?.ref;
  const format = options?.format;

  const update = usePersistFn(
    (entry: ResizeObserverEntry, rect: MeasureRect) => {
      if (!unmountedRef.current) {
        setData(isFunction(format) ? format(entry, rect) : rect);
      }
    },
  );

  const resizeCallback = useCallback(
    ([entry]: ResizeObserverEntry[]) => {
      const {
        contentRect: { left, top, width, height },
      } = entry;

      update(entry, {
        left,
        top,
        width,
        height,
      });
    },
    [update],
  );

  const setRef = useCallback(
    (node: T | null) => {
      const lastTarget = lastObserverTarget.current;

      if (node === null || node === lastTarget) {
        return undefined;
      }

      if (lastTarget !== node && observer.current && lastTarget) {
        observer.current.unobserve(lastTarget!);
      }

      if (!observer.current) {
        observer.current = new ResizeObserver(resizeCallback);
      }

      observer.current.observe(node);
      lastObserverTarget.current = node;

      return () => {
        if (observer.current) {
          if (lastObserverTarget.current) {
            observer.current.unobserve(lastObserverTarget.current);
          }

          lastObserverTarget.current = null;
          observer.current = null;
        }
      };
    },
    [resizeCallback],
  );

  useEffect(() => {
    if (ctrledRef) {
      setRef(ctrledRef.current);
    }
  }, [ctrledRef, setRef]);

  return [data, setRef];
}

export default useMeasure;

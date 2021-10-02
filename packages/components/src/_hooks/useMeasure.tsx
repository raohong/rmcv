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

const getRect = (target: Element | SVGElement) => {
  const rect = target.getBoundingClientRect();

  return {
    left: rect.left,
    top: rect.top,
    width: rect.width,
    height: rect.height,
  };
};

type UseMeasureOptions<T, D = unknown> = {
  ref?: React.RefObject<T>;
  format?: (target: T | undefined) => D;
};

type UseMeasureResult<T, D, M = (target: T) => void> = [T, D, M] & {
  setRef: React.RefCallback<T>;
  data: D;
  measure: M;
};

function useMeasure<
  T extends Element | SVGElement = Element,
>(): UseMeasureResult<T, MeasureRect>;
function useMeasure<
  T extends Element | SVGElement = Element,
  D = MeasureRect,
>(options: {
  ref?: React.RefObject<T>;
  format?: (target: T | undefined) => D;
}): UseMeasureResult<T, D>;
function useMeasure<T extends Element | SVGElement>(
  options?: UseMeasureOptions<T>,
) {
  const lastObserverTarget = useRef<T | null>(null);
  const observer = useRef<ResizeObserver | null>(null);
  const [data, setData] = useState<unknown>(() =>
    options?.format ? options.format(undefined) : getDefaultRect(),
  );
  const unmountedRef = useUnmountedRef();

  const ctrledRef = options?.ref;
  const format = options?.format;

  const measure = usePersistFn((target: T) => {
    if (!unmountedRef.current) {
      setData(isFunction(format) ? format(target) : getRect(target));
    }
  });

  const resizeCallback = useCallback(
    ([entry]: ResizeObserverEntry[]) => {
      measure(entry.target as T);
    },
    [measure],
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

  const result = [data, setRef, measure] as UseMeasureResult<T, unknown>;

  result.setRef = setRef;
  result.data = data;
  result.measure = measure;

  return result;
}

export default useMeasure;

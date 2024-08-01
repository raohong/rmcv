import type { ResizeObserverEntry } from '@juggle/resize-observer';
import { ResizeObserver } from '@juggle/resize-observer';
import { getBoundingClientRect, isFunction } from '@rmc-vant/utils';
import type React from 'react';
import { useCallback, useRef, useState } from 'react';
import { useEventCallback } from './useEventCallback';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';
import { useUnmountedRef } from './useUnmountedRef';

interface MeasureRect {
  left: number;
  top: number;
  width: number;
  height: number;
}

type MeasureTarget = Element | SVGElement;

const getDefaultRect = (): MeasureRect => ({
  left: 0,
  top: 0,
  width: 0,
  height: 0,
});

interface UseMeasureOptions<T, D = unknown> {
  ref?: React.RefObject<T>;
  format?: (target: T | undefined) => D;
}

type UseMeasureResult<T, D, M = (target: T) => void> = [T, D, M] & {
  setRef: React.RefCallback<T>;
  data: D;
  measure: M;
};

function _useMeasure<T extends MeasureTarget = Element>(): UseMeasureResult<
  T,
  MeasureRect
>;
function _useMeasure<T extends MeasureTarget = Element, D = MeasureRect>(options: {
  ref?: React.RefObject<T>;
  format?: (target: T | undefined) => D;
}): UseMeasureResult<T, D>;
function _useMeasure<T extends MeasureTarget>(options?: UseMeasureOptions<T>) {
  const lastObserverTarget = useRef<T | null>(null);
  const observer = useRef<ResizeObserver | null>(null);
  const [data, setData] = useState<unknown>(() =>
    options?.format ? options.format(undefined) : getDefaultRect(),
  );
  const unmountedRef = useUnmountedRef();

  const ctrledRef = options?.ref;
  const format = options?.format;

  const measure = useEventCallback((target: T) => {
    if (!unmountedRef.current) {
      setData(isFunction(format) ? format(target) : getBoundingClientRect(target));
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

      return () => {};
    },
    [resizeCallback],
  );

  useIsomorphicLayoutEffect(() => {
    return () => {
      if (observer.current) {
        if (lastObserverTarget.current) {
          observer.current.unobserve(lastObserverTarget.current);
        }

        lastObserverTarget.current = null;
        observer.current = null;
      }
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (ctrledRef) {
      setRef(ctrledRef.current);
    }
  }, [ctrledRef?.current, setRef]);

  const result = [data, setRef, measure] as UseMeasureResult<T, unknown>;

  result.setRef = setRef;
  result.data = data;
  result.measure = measure;

  return result;
}

export const useMeasure = _useMeasure;

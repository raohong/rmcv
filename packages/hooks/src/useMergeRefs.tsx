import { setRef } from '@rmc-vant/utils';
import { Ref, RefCallback, useRef } from 'react';

export const useMergeRefs = <T,>(
  ...refs: (Ref<T> | undefined | null)[]
): RefCallback<T> => {
  const internalRefs = useRef<(Ref<T> | undefined | null)[]>();
  const cache = useRef<(instance: T | null) => void>();

  internalRefs.current = refs;

  if (!cache.current) {
    cache.current = (instance: T | null) => {
      refs.filter(Boolean).forEach((item) => {
        setRef(item, instance);
      });
    };
  }

  return cache.current;
};

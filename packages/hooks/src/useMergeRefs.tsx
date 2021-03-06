import type { RefCallback, Ref } from 'react';
import { setRef } from '@rmc-vant/utils';
import usePersistFn from './usePersistFn';

export default function useMergeRefs<T>(
  ...refs: (Ref<T> | undefined | null)[]
): RefCallback<T> {
  const ref = usePersistFn((instance: T | null) => {
    refs.filter(Boolean).forEach((item) => {
      setRef(item, instance);
    });
  });

  return ref;
}

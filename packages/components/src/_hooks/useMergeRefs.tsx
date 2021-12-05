import type { RefCallback, Ref } from 'react';
import usePersistFn from './usePersistFn';
import { setRef } from '../_utils';

export default function useMergeRefs<T>(...refs: Ref<T>[]): RefCallback<T> {
  const ref = usePersistFn((instance: T | null) => {
    refs.filter(Boolean).forEach((item) => {
      setRef(item, instance);
    });
  });

  return ref;
}

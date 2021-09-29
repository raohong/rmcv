import type { RefCallback, MutableRefObject, Ref } from 'react';
import { isFunction } from '../_utils';
import usePersistFn from './usePersistFn';

export default function useMergeRefs<T>(...refs: Ref<T>[]): RefCallback<T> {
  const ref = usePersistFn((instance: T | null) => {
    refs.filter(Boolean).forEach((item) => {
      if (isFunction(item)) {
        item(instance);
      } else {
        // eslint-disable-next-line no-param-reassign
        (item as MutableRefObject<T | null>).current = instance;
      }
    });
  });

  return ref;
}

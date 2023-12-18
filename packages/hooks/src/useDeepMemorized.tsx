import { isEqual } from 'lodash';
import { useRef } from 'react';

export const useDeepMemorized = <T,>(value: T) => {
  const last = useRef<T>();

  if (!isEqual(last.current, value)) {
    last.current = value;
  }

  return last.current as T;
};

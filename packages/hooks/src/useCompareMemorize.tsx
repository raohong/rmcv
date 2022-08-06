import { isEqual } from 'lodash';
import { useRef } from 'react';

const useCompareMemorize = <T,>(value: T) => {
  const last = useRef<T>();

  if (!isEqual(last.current, value)) {
    last.current = value;
  }

  return last.current as T;
};

export default useCompareMemorize;

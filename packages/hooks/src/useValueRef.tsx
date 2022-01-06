import { useRef } from 'react';

const useValueRef = <T extends unknown>(value: T) => {
  const valueRef = useRef<T>(value);

  valueRef.current = value;

  return valueRef;
};

export default useValueRef;

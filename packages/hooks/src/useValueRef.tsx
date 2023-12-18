import { useRef } from 'react';

export const useValueRef = <T extends unknown>(value: T) => {
  const valueRef = useRef<T>(value);

  valueRef.current = value;

  return valueRef;
};

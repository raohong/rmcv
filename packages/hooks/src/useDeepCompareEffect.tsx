import { DependencyList, useEffect, useRef } from 'react';
import { isEqual } from 'lodash';

const useDeepCompareEffect: typeof useEffect = (fn, deps) => {
  const lastState = useRef<DependencyList>();
  const updateSign = useRef(0);

  if (!isEqual(lastState.current, deps)) {
    lastState.current = deps;
    updateSign.current++;
  }

  useEffect(fn, [updateSign.current]);
};

export default useDeepCompareEffect;

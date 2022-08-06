import { DependencyList, useMemo } from 'react';
import useCompareMemorize from './useCompareMemorize';

const useDeepMemo = <T,>(fn: () => T, deps?: DependencyList) => {
  return useMemo(fn, useCompareMemorize(deps));
};

export default useDeepMemo;

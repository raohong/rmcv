import { DependencyList, useMemo } from 'react';
import { useDeepMemorized } from './useDeepMemorized';

export const useDeepMemorizedMemo = <T,>(fn: () => T, deps?: DependencyList) => {
  return useMemo(fn, useDeepMemorized(deps));
};

import type { DependencyList } from 'react';
import { useMemo } from 'react';
import { useDeepMemorized } from './useDeepMemorized';

export const useDeepMemorizedMemo = <T,>(fn: () => T, deps: DependencyList = []) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(fn, useDeepMemorized(deps));
};

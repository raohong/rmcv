import { useEffect } from 'react';
import { useDeepMemorized } from './useDeepMemorized';

export const useDeepMemorizedEffect: typeof useEffect = (fn, deps) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fn, useDeepMemorized(deps));
};

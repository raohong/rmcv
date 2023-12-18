import { useEffect } from 'react';
import { useDeepMemorized } from './useDeepMemorized';

export const useDeepMemorizedEffect: typeof useEffect = (fn, deps) => {
  useEffect(fn, useDeepMemorized(deps));
};

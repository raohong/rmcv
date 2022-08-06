import { DependencyList, useEffect } from 'react';
import useCompareMemorize from './useCompareMemorize';

const useDeepEffect = <T extends (...args: any) => any>(
  fn: T,
  deps?: DependencyList,
) => {
  useEffect(fn, useCompareMemorize(deps));
};

export default useDeepEffect;

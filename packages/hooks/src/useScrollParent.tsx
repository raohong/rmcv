import { getScrollParent } from '@rmc-vant/utils';
import { useState } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export const useScrollParent = (elem: React.RefObject<Element>) => {
  const [scrollParent, set] = useState<null | Element | Window>(null);

  useIsomorphicLayoutEffect(() => {
    set(getScrollParent(elem.current));
  }, [elem]);

  return scrollParent;
};

export default useScrollParent;

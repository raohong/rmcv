import { useState } from 'react';
import { getScrollParent } from '@rmc-vant/utils/dom';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

const useScrollParent = (elem: React.RefObject<Element>) => {
  const [scrollParent, set] = useState<null | Element | Window>(null);

  useIsomorphicLayoutEffect(() => {
    set(getScrollParent(elem.current));
  }, [elem]);

  return scrollParent;
};

export default useScrollParent;

import { findScrollableContainer, isBrowser } from '../_utils';
import useForceUpdate from './useForceUpdate';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';

const useScrollParent = (elem: null | Element) => {
  const update = useForceUpdate();
  const scrollParent = isBrowser ? findScrollableContainer(elem) : null;

  useIsomorphicLayoutEffect(() => {
    update();
  }, [elem]);

  return scrollParent;
};

export default useScrollParent;

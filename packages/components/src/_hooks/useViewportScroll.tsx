import { AnimationResult, SpringValue, useSpring } from '@react-spring/web';
import { useCallback, useRef } from 'react';
import { isWindow, noop } from '../_utils';
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect';
import usePersistFn from './usePersistFn';
import useUnmountedRef from './useUnmountedRef';

const setupEventListener = (elem: Element | Window, handler: () => void) => {
  window.addEventListener('resize', handler);
  elem.addEventListener('scroll', handler);

  return () => {
    elem.removeEventListener('scroll', handler);
    window.removeEventListener('resize', handler);
  };
};

const getScrollOffset = (elem: Element | Window) => {
  if (isWindow(elem)) {
    return {
      scrollX: elem.pageXOffset,
      scrollY: elem.pageYOffset,
    };
  }

  return {
    scrollX: elem.scrollLeft,
    scrollY: elem.scrollTop,
  };
};

const useViewportScroll = (
  container?: Element | Window | null,
  onChange?: (
    result: AnimationResult<
      SpringValue<{
        scrollX: number;
        scrollY: number;
      }>
    >,
  ) => void,
) => {
  const persistedOnChange = usePersistFn(onChange ?? noop);

  const [{ scrollX, scrollY }, ctrl] = useSpring(
    {
      scrollY: 0,
      scrollX: 0,
      onChange: persistedOnChange,
    },
    [persistedOnChange],
  );

  const unmountedRef = useUnmountedRef();
  const lastTarget = useRef<Element | Window | null>(null);

  const handleScroll = useCallback(() => {
    const elem = lastTarget.current;

    if (elem !== null && !unmountedRef.current) {
      ctrl.set(getScrollOffset(elem));
    }
  }, []);

  useIsomorphicLayoutEffect(() => {
    const scrollContainer = container ?? window;

    if (lastTarget.current && scrollContainer === lastTarget.current) {
      return;
    }

    lastTarget.current = scrollContainer;

    const canceller = setupEventListener(scrollContainer, handleScroll);

    handleScroll();

    // eslint-disable-next-line consistent-return
    return () => {
      lastTarget.current = null;
      canceller();
    };
  }, [container]);

  return { scrollX, scrollY };
};

export default useViewportScroll;

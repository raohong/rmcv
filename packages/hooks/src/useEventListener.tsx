import { useEffect } from 'react';
import usePersistFn from './usePersistFn';
import useUnmountedRef from './useUnmountedRef';

const useEventListener = (
  type: string,
  handler: (evt: Event) => any,
  options?: {
    target: null | Element | Window;
    capture?: boolean;
    passive?: false;
  },
) => {
  const unmonutedRef = useUnmountedRef();

  const internalHandler = usePersistFn((evt: Event) => {
    if (!unmonutedRef.current) {
      handler(evt);
    }
  });
  const { target, capture, passive = true } = options ?? {};

  useEffect(() => {
    const targetWithFallback = target ?? window;

    targetWithFallback.addEventListener(type, internalHandler, {
      passive,
      capture,
    });

    return () => {
      targetWithFallback.removeEventListener(type, internalHandler);
    };
  }, [target, capture, type, passive, internalHandler]);
};

export default useEventListener;

import { isHTMLElement } from '@rmc-vant/utils';
import { useEffect } from 'react';
import { useEventCallback } from './useEventCallback';
import { useUnmountedRef } from './useUnmountedRef';

export const useEventListener = (
  type: string,
  handler: (evt: Event) => any,
  options?: {
    domRef: null | undefined | HTMLElement | React.RefObject<Element>;
    capture?: boolean;
    passive?: false;
  },
) => {
  const unmountedRef = useUnmountedRef();

  const internalHandler = useEventCallback((evt: Event) => {
    if (!unmountedRef.current) {
      handler(evt);
    }
  });
  const { domRef, capture, passive = true } = options ?? {};

  useEffect(() => {
    const targetWithFallback = isHTMLElement(domRef)
      ? domRef
      : domRef?.current || window;

    targetWithFallback.addEventListener(type, internalHandler, {
      passive,
      capture,
    });

    return () => {
      targetWithFallback.removeEventListener(type, internalHandler);
    };
  }, [domRef, capture, type, passive, internalHandler]);
};

import React, { useRef } from 'react';
import { createPopper, Instance } from '@popperjs/core';
import { useIsomorphicLayoutEffect } from '../_hooks';
import type { UsePopoverOptions } from './type';

const usePopover = <T extends HTMLElement = HTMLDivElement>({
  offset,
  placement,
  modifiers,
  visible,
  exited,
}: UsePopoverOptions): {
  popperRef: React.MutableRefObject<T | null>;
  referenceRef: React.MutableRefObject<T | null>;
  instance: React.MutableRefObject<Instance | null>;
} => {
  const instance = useRef<Instance | null>(null);
  const popperRef = useRef<T | null>(null);
  const referenceRef = useRef<T | null>(null);

  const dom = referenceRef.current;

  useIsomorphicLayoutEffect(() => {
    if (instance.current) {
      instance.current.forceUpdate();
    }
  });

  useIsomorphicLayoutEffect(() => {
    if (!dom || !popperRef.current || exited) {
      return undefined;
    }

    const popperOptions: Parameters<Instance['setOptions']>[0] = {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset,
          },
        },
        {
          name: 'computeStyles',
          options: {
            gpuAcceleration: false,
          },
        },
        {
          name: 'preventOverflow',
          options: {
            altBoundary: true,
          },
        },
        ...(modifiers || []),
      ],
      strategy: 'fixed',
      placement,
    };

    const popper = createPopper(dom, popperRef.current, popperOptions);
    instance.current = popper;

    return () => {
      popper.destroy();
      instance.current = null;
    };
  }, [visible, dom, popperRef.current, offset, modifiers, placement, exited]);

  return {
    popperRef,
    referenceRef,
    instance,
  };
};

export default usePopover;

import React, { useRef, useState } from 'react';
import { isFunction, setRef } from '@rmc-vant/utils';
import { createPortal } from 'react-dom';
import { useIsomorphicLayoutEffect, useMergeRefs } from '@rmc-vant/hooks';
import type { PortalProps, PortalContainer } from './interface';

const resolveConainer = (container: PortalContainer, child: Element | null) => {
  return isFunction(container) ? container(child) : container;
};

const Portal = React.forwardRef<unknown, PortalProps>(
  ({ children, disablePortal = false, container }, ref) => {
    const [mountNode, setMountNode] = useState<Element | null>(null);
    const childRef = useRef<Element>(null);
    const mergedRef = useMergeRefs(
      ref,
      childRef,
      // @ts-ignore
      React.isValidElement(children) ? children.ref : null,
    );

    useIsomorphicLayoutEffect(() => {
      if (!disablePortal) {
        setMountNode(resolveConainer(container, childRef.current) || document.body);
      }
    }, [disablePortal, container]);

    useIsomorphicLayoutEffect(() => {
      if (mountNode && !disablePortal) {
        setRef(ref, mountNode);

        return () => {
          setRef(ref, null);
        };
      }

      return undefined;
    }, [ref, disablePortal, mountNode]);

    if (disablePortal) {
      if (React.isValidElement(children)) {
        return React.cloneElement(children, {
          ref: mergedRef,
        });
      }

      return <>{children}</>;
    }

    return mountNode ? createPortal(children, mountNode) : null;
  },
);

export default Portal;

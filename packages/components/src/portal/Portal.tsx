import React, { useRef, useState } from 'react';
import {
  isFunction,
  isPlainObject,
  isString,
  setRef,
  isElement,
} from '@rmc-vant/utils';
import { createPortal } from 'react-dom';
import { useIsomorphicLayoutEffect, useMergeRefs } from '@rmc-vant/hooks';
import type { PortalProps, PortalContainer } from './interface';

const resolveConainer = (teleport: PortalContainer) => {
  if (!teleport) {
    return null;
  }

  if (isString(teleport)) {
    return document.querySelector(teleport);
  }

  if (isFunction(teleport)) {
    return teleport();
  }

  if (isElement(teleport)) {
    return teleport;
  }

  if (isPlainObject(teleport)) {
    return teleport.current;
  }

  return teleport;
};

const Portal = React.forwardRef<unknown, PortalProps>(
  ({ children, disablePortal = false, teleport }, ref) => {
    const [mountNode, setMountNode] = useState<Element | null>(null);
    const [childRef, setChildRef] = useState<Element | null>(null);
    const mergedRef = useMergeRefs(
      ref,
      setChildRef,
      // @ts-ignore
      React.isValidElement(children) ? children.ref : null,
    );

    useIsomorphicLayoutEffect(() => {
      if (!disablePortal) {
        setMountNode(resolveConainer(teleport) || document.body);
      }
    }, [disablePortal, teleport]);

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

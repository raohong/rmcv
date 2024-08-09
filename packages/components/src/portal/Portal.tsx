'use-client';

import { useIsomorphicLayoutEffect, useMergeRefs } from '@rmc-vant/hooks';
import {
  isElement,
  isFunction,
  isPlainObject,
  isString,
  setRef,
} from '@rmc-vant/utils';
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import type { PortalContainer, PortalProps } from './interface';

const resolveContainer = (teleport: PortalContainer) => {
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
    const mergedRef = useMergeRefs(
      ref,
      // @ts-ignore
      React.isValidElement(children) ? children.ref : null,
    );

    useIsomorphicLayoutEffect(() => {
      if (!disablePortal) {
        setMountNode(resolveContainer(teleport) || document.body);
      }
      else {
        setMountNode(null);
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

    if (disablePortal || !mountNode) {
      if (React.isValidElement(children)) {
        return React.cloneElement(children, {
          // @ts-ignore
          ref: mergedRef,
        });
      }

      return <>{children}</>;
    }

    return <>{mountNode && createPortal(children, mountNode)}</>;
  },
);

export default Portal;

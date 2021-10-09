import type React from 'react';
import { createPortal } from 'react-dom';
import isBrowser from './isBrowser';

const renderPortal = (
  children: React.ReactNode,
  container?: HTMLElement,
): React.ReactElement => {
  if (!isBrowser) {
    return <>{children}</>;
  }

  return createPortal(children, container ?? document.body);
};

export default renderPortal;

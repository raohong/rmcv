import type React from 'react';

export type PortalContainer =
  | (() => Element | null | undefined)
  | string
  | React.MutableRefObject<Element | null | undefined>
  | Element
  | null
  | undefined;

export type PortalProps = {
  children: React.ReactNode;
  disablePortal?: boolean;
  teleport?: PortalContainer;
};

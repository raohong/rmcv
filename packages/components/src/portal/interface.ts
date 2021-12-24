export type PortalContainer =
  | ((node?: Element | null) => Element | null | undefined)
  | Element
  | null
  | undefined;

export type PortalProps = {
  children: React.ReactNode;
  disablePortal?: boolean;
  container?: PortalContainer;
};

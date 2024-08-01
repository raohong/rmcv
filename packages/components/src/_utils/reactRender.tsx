import type React from 'react';
import { createRoot } from 'react-dom/client';

export const reactRender = (
  children: React.ReactNode,
  container: Element | DocumentFragment,
) => {
  const root = createRoot(container);

  root.render(children);

  return root.unmount;
};

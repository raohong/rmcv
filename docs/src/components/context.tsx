import { createContext, useContext } from 'react';
import type { PageContextConsumerProps } from '../type';

export const PageContext = createContext<PageContextConsumerProps>(
  {} as PageContextConsumerProps,
);

export const usePageContext = () => useContext(PageContext);

import { createContext, useContext } from 'react';

export const DemoComponentContext = createContext<{
  demoComponentName: undefined | string;
  demoRoute: undefined | string;
}>({
  demoComponentName: undefined,
  demoRoute: undefined,
});

export const useDemoComponentContext = () => useContext(DemoComponentContext);

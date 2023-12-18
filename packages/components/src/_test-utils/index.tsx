import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { RenderOptions, render } from '@testing-library/react';
import React, { ReactElement } from 'react';

export { default as sleep } from './sleep';

const emotionCache = createCache({ stylisPlugins: [], key: 'test' });
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <CacheProvider value={emotionCache}>{children}</CacheProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };

import { createContext, useContext } from 'react';
import { getPrefixCls } from '../_utils';

const defaultGetPrefixCls = getPrefixCls;

export type ConfigContextState = {
  getPrefixCls: typeof defaultGetPrefixCls;
  theme?: Record<string, string | undefined>;
  prefix: string;
};

export const defaultConfig = {
  getPrefixCls: defaultGetPrefixCls,
  theme: {},
  prefix: 'rmcv',
};

export const ConfigContext = createContext<ConfigContextState>({
  ...defaultConfig,
});

export const ConfigProvider = ConfigContext.Provider;

export const useConfigContext = () => useContext(ConfigContext);

export const setGlobalConfig = (config: Partial<ConfigContextState>) => {
  Object.assign(defaultConfig, {
    config,
  });
};

export const getGlobalConfig = () => ({
  ...defaultConfig,
});

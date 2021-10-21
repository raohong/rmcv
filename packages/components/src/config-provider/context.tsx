import { createContext, useContext } from 'react';
import { getPrefixCls } from '../_utils';

const defaultGetPrefixCls = getPrefixCls;

export type ConfigConsumerProps = {
  getPrefixCls: typeof defaultGetPrefixCls;
  theme?: Record<string, string>;
};

export const defaultConfig = {
  getPrefixCls: defaultGetPrefixCls,
  theme: {},
};

export const ConfigContext = createContext<ConfigConsumerProps>({
  ...defaultConfig,
});

export const ConfigProvider = ConfigContext.Provider;

export const useConfigContext = () => useContext(ConfigContext);

import { createContext, useContext } from 'react';

export type ConfigConsumerProps = {
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
};

const defaultGetPrefixCls = (suffixCls?: string, customizePrefixCls?: string) =>
  customizePrefixCls || `rmc-vant${suffixCls ? `-${suffixCls}` : ''}`;

export const ConfigContext = createContext<ConfigConsumerProps>({
  getPrefixCls: defaultGetPrefixCls,
});

export const ConfigProvider = ConfigContext.Provider;

export const useConfigContext = () => useContext(ConfigContext);

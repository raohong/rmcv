import { createContext, useContext } from 'react';
import { getPrefixCls } from '../_utils';

const defaultGetPrefixCls = getPrefixCls;

export type ConfigConsumerProps = {
  getPrefixCls: typeof defaultGetPrefixCls;
};

export const ConfigContext = createContext<ConfigConsumerProps>({
  getPrefixCls: defaultGetPrefixCls,
});

export const ConfigProvider = ConfigContext.Provider;

export const useConfigContext = () => useContext(ConfigContext);

import React, { useMemo } from 'react';
import type { ConfigConsumerProps } from './context';
import { ConfigContext } from './context';

export { useConfigContext, ConfigContext } from './context';
export type { ConfigConsumerProps };

const ConfigProvider: React.FC<ConfigConsumerProps> = ({ children, getPrefixCls }) => {
  const contextValue: ConfigConsumerProps = useMemo(() => ({ getPrefixCls }), [getPrefixCls]);

  return <ConfigContext.Provider value={contextValue}>{children}</ConfigContext.Provider>;
};

export default ConfigProvider;

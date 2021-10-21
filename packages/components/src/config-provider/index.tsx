import React, { useMemo } from 'react';
import type { ConfigConsumerProps } from './context';
import { ConfigContext, defaultConfig } from './context';

export { useConfigContext, ConfigContext } from './context';
export type { ConfigConsumerProps };

const ConfigProvider: React.FC<Partial<ConfigConsumerProps>> = ({
  children,
  getPrefixCls = defaultConfig.getPrefixCls,
  theme,
}) => {
  const contextValue: ConfigConsumerProps = useMemo(
    () => ({ ...defaultConfig, getPrefixCls, theme } as ConfigConsumerProps),
    [getPrefixCls, theme],
  );

  return (
    <ConfigContext.Provider value={contextValue}>
      {children}
    </ConfigContext.Provider>
  );
};

export default ConfigProvider;

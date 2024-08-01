import type { Theme } from '@rmc-vant/system';
import { ThemeProvider } from '@rmc-vant/system';
import React, { memo, useContext, useMemo } from 'react';
import type {
  ConfigContextState,
} from './context';
import {
  ConfigContext,
  defaultConfig,
  mergeThemeConfigs,
} from './context';

type ConfigProviderProps = Partial<ConfigContextState> & {
  children?: React.ReactNode;
  theme?: Theme;
};

const ConfigProvider: React.FC<ConfigProviderProps> = ({
  children,
  getPrefixCls = defaultConfig.getPrefixCls,
  prefix = 'rmcv',
  theme,
  components,
}) => {
  const outerContextState = useContext(ConfigContext);
  const contextValue: ConfigContextState = useMemo(
    () =>
      mergeThemeConfigs(
        {
          ...defaultConfig,
          getPrefixCls,
          ...theme,
          prefix,
          components,
        },
        outerContextState,
      ),
    [getPrefixCls, outerContextState, theme, prefix, components],
  );

  return (
    <ConfigContext.Provider value={contextValue}>
      <ThemeProvider theme={contextValue}>{children}</ThemeProvider>
    </ConfigContext.Provider>
  );
};

export default memo(ConfigProvider);

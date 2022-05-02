import React, { useContext, useMemo } from 'react';
import { omit } from '@rmc-vant/utils';
import type { IntrinsicElementsKeys, JSXIntrinsicElementProps } from '../types';
import { createCSSVars, createOverridableComponent } from '../_utils';
import type { ConfigContextState } from './context';
import { ConfigContext, defaultConfig } from './context';

type ConfigProviderProps = JSXIntrinsicElementProps<
  Partial<ConfigContextState> & {
    component?: IntrinsicElementsKeys;
  }
>;

const ConfigProvider = React.forwardRef<HTMLElement, ConfigProviderProps>(
  (
    {
      children,
      getPrefixCls = defaultConfig.getPrefixCls,
      component = 'div',
      prefix = 'rmcv',
      theme,
      ...rest
    },
    ref,
  ) => {
    const parentState = useContext(ConfigContext);
    const contextValue: ConfigContextState = useMemo(
      () =>
        ({ ...parentState, ...defaultConfig, getPrefixCls } as ConfigContextState),
      [getPrefixCls, parentState],
    );

    const cssVars = useMemo(
      () => prefix && theme && createCSSVars(prefix, theme),
      [theme, prefix],
    );

    return React.createElement(component, {
      ref,
      ...omit(rest, ['theme']),
      style: {
        ...rest.style,
        ...cssVars,
      },
      children: (
        <ConfigContext.Provider value={contextValue}>
          {children}
        </ConfigContext.Provider>
      ),
    });
  },
);

export default createOverridableComponent(ConfigProvider);

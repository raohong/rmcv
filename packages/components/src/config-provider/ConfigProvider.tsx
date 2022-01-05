import React, { useMemo } from 'react';
import { omit } from 'lodash';
import type { IntrinsicElementsKeys, JSXIntrinsicElementProps } from '../types';
import { createCSSVars, createOverridableComponent } from '../_utils';
import type { ConfigConsumerProps } from './context';
import { ConfigContext, defaultConfig } from './context';

type ConfigProviderProps = JSXIntrinsicElementProps<
  Partial<ConfigConsumerProps> & {
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
    const contextValue: ConfigConsumerProps = useMemo(
      () => ({ ...defaultConfig, getPrefixCls } as ConfigConsumerProps),
      [getPrefixCls],
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

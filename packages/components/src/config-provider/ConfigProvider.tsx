import React, { useMemo } from 'react';
import omit from 'lodash/omit';
import type { IntrinsicElementsKeys } from '../types';
import { createCSSVars, createOverridableComponent } from '../_utils';
import type { ConfigConsumerProps } from './context';
import { ConfigContext, defaultConfig } from './context';

type ConfigProviderProps = Partial<ConfigConsumerProps> & {
  component?: IntrinsicElementsKeys;
} & JSX.IntrinsicElements['div'];

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

export default createOverridableComponent<'div', typeof ConfigProvider>(
  ConfigProvider,
);

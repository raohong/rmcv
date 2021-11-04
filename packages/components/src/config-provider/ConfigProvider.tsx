import React, { useMemo } from 'react';
import omit from 'lodash/omit';
import type {
  IntrinsicElementsKeys,
  IWithAutocompleteForReactComponent,
} from '../types';
import { createCSSVars } from '../_utils';
import type { ConfigConsumerProps } from './context';
import { ConfigContext, defaultConfig } from './context';

type ConfigProviderProps = Partial<ConfigConsumerProps> & {
  tag?: IntrinsicElementsKeys;
} & React.HTMLAttributes<Element>;

const ConfigProvider = React.forwardRef<HTMLElement, ConfigProviderProps>(
  (
    {
      children,
      getPrefixCls = defaultConfig.getPrefixCls,
      tag = 'div',
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

    return React.createElement(tag, {
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
) as IWithAutocompleteForReactComponent<'div', ConfigProviderProps>;

export default ConfigProvider;

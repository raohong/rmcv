import { Theme, defaultTheme } from '@rmc-vant/system';
import { omit } from '@rmc-vant/utils';
import { createContext, useContext } from 'react';
import { getPrefixCls } from '../_utils';
import { ComponentsThemeConfig } from './interface';

const defaultGetPrefixCls = getPrefixCls;

export type ConfigContextState = {
  getPrefixCls: typeof defaultGetPrefixCls;
  prefix: string;
  components?: Partial<ComponentsThemeConfig>;
} & Theme;

export const defaultConfig = {
  getPrefixCls: defaultGetPrefixCls,
  ...defaultTheme,
  prefix: 'rmcv',
};

export const ConfigContext = createContext<ConfigContextState>({
  ...defaultConfig,
});

const shallowMerge = <T1 extends Record<string, any>>(
  source: T1 | undefined,
  target: T1 | undefined,
): T1 | undefined => {
  if (!source && !target) {
    return undefined;
  }

  return {
    ...source,
    ...target,
  } as T1;
};
export const mergeThemeConfigs = (
  configs: ConfigContextState,
  outerConfigs?: ConfigContextState,
) => {
  if (!outerConfigs) {
    return configs;
  }

  const nextConfigs = { ...configs };

  if (outerConfigs.components) {
    const currentComponentsConfig = nextConfigs.components;
    const nextComponentsConfig = { ...outerConfigs.components };

    if (currentComponentsConfig) {
      const keys = Object.keys(
        currentComponentsConfig,
      ) as unknown as (keyof ComponentsThemeConfig)[];

      keys.forEach((key) => {
        const defaultProps = shallowMerge(
          currentComponentsConfig[key]?.defaultProps,
          nextComponentsConfig[key]?.defaultProps,
        );

        const styleOverrides = shallowMerge(
          currentComponentsConfig[key]?.styleOverrides,
          nextComponentsConfig[key]?.styleOverrides,
        );

        if (defaultProps || styleOverrides) {
          nextComponentsConfig[key] = {};

          if (defaultProps) {
            nextComponentsConfig[key]!.defaultProps = defaultProps;
            nextComponentsConfig[key]!.styleOverrides = styleOverrides;
          }
        }
      });
    }

    nextConfigs.components = nextComponentsConfig;
  } else if (nextConfigs.components) {
    nextConfigs.components = {
      ...nextConfigs.components,
    };
  }

  return nextConfigs;
};

export const useThemeProps = <P extends object>(
  name: keyof ComponentsThemeConfig,
  outerProps: P,
  skips?: (keyof P)[],
) => {
  const ctx = useConfigContext();
  const themeComponentDefaultProps = ctx?.components?.[name]?.defaultProps;
  const skipKeys = ['children', 'ref', ...(skips ?? [])];

  return {
    ...(themeComponentDefaultProps && omit(themeComponentDefaultProps, skipKeys)),
    ...outerProps,
  };
};

export const ConfigProvider = ConfigContext.Provider;

export const useConfigContext = () => useContext(ConfigContext);

export const setGlobalConfig = (config: Partial<ConfigContextState>) => {
  Object.assign(defaultConfig, {
    config,
  });
};

export const getGlobalConfig = () => ({
  ...defaultConfig,
});

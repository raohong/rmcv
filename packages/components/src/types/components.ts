import type { SystemStyleInterpolation, SystemStyleObject } from '@rmc-vant/system';

export type WithComponentStateProps<State = object, Props = object> = Props & {
  componentState: State;
};

export type ComponentStyleOverrides<State, Slot extends string = 'root'> = Partial<
  Record<
    Slot,
    SystemStyleObject | SystemStyleInterpolation<{ componentState: State }>
  >
>;

export type ComponentThemeConfig<
  Name extends string,
  Props,
  StyleOverrides,
> = Record<
  Name,
  {
    defaultProps?: Omit<Props, 'ref' | 'children'>;
    styleOverrides?: StyleOverrides;
  }
>;

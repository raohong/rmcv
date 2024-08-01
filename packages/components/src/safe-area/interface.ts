import type { SystemStyledComponentProps } from '@rmc-vant/system';
import type {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  IntrinsicElementsKeys,
} from '../types';
import type { SafeAreaName } from './classNames';

export type SafeAreaProps = {
  /**
   * @description 是否设置顶部
   */
  top?: boolean;
  /**
   * @description 是否设置底部
   * @default true
   */
  bottom?: boolean;
  /**
   * @description 是否关闭
   */
  disabled?: boolean;

  className?: string;

  component?: IntrinsicElementsKeys | React.ComponentType<any>;

  children?: React.ReactNode;
} & SystemStyledComponentProps;

export type SafeAreaComponentState = {
  top: boolean;
  bottom: boolean;
  disabled: boolean;
};

export type SafeAreaComponentStyleOverrides =
  ComponentStyleOverrides<SafeAreaComponentState>;

export type SafeAreaThemeConfig = ComponentThemeConfig<
  typeof SafeAreaName,
  SafeAreaProps,
  SafeAreaComponentStyleOverrides
>;

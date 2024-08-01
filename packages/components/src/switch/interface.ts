import type { SystemStyledComponentProps } from '@rmc-vant/system';
import type React from 'react';
import type {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  JSXIntrinsicElementProps,
} from '../types';
import type { SwitchName } from './classNames';

type SwitchBaseProps = {
  /**
   * @description 是否为加载状态
   */
  loading?: boolean;
  /**
   * @description 是否为禁用状态
   */
  disabled?: boolean;
  /**
   * @description 开关尺寸
   * @default 30
   */
  size?: number | string;
  /**
   * @description 打开时的背景色
   * @default #1989fa
   */
  activeColor?: string;
  /**
   * @description 关闭时的背景色
   * @default white
   */
  inactiveColor?: string;
  /**
   * @description 当前是否选中
   */
  checked?: boolean;
  /**
   * @description 初始是否选中
   */
  defaultChecked?: boolean;
  /**
   * @description 点击时回调函数
   */
  onClick?: (checked: boolean, event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * @description 变化时回调函数
   */
  onChange?: (checked: boolean, event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * @description 自定义 node 内容
   */
  node?: (checked: boolean) => React.ReactNode;

  classNames?: Partial<Record<SwitchNSlot, string>>;
};

export type SwitchProps = JSXIntrinsicElementProps<
  SwitchBaseProps,
  'button',
  'defaultValue'
> &
SystemStyledComponentProps;

export type SwitchNSlot = 'root' | 'node' | 'loadingIcon';
export type SwitchSlot = SwitchNSlot | 'checked' | 'disabled';

export type SwitchComponentState = {
  checked: boolean;
  loading: boolean;
  disabled: boolean;
  size: string | number;
  activeColor: string;
  inactiveColor: string;
};

export type SwitchStyleOverrides = ComponentStyleOverrides<
  SwitchComponentState,
  SwitchSlot
>;

export type SwitchThemeConfig = ComponentThemeConfig<
  typeof SwitchName,
  SwitchProps,
  SwitchStyleOverrides
>;

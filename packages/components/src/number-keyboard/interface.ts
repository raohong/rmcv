import type { SystemStyledComponentProps } from '@rmc-vant/system';
import type React from 'react';
import type { PortalContainer } from '../portal';
import type { ComponentStyleOverrides, ComponentThemeConfig } from '../types';
import type { NumberKeyboardName } from './classNames';

export type NumberKeyboardTheme = 'default' | 'custom';

export type NumberKeyboardProps = {
  /**
   * @description 输入值
   */
  value?: string;
  /**
   * @description 默认输入值
   */
  defaultValue?: string;
  /**
   * @description 输入的值改变时触发
   */
  onChange?: (value: string) => void;
  /**
   * @description 点击按键时触发
   */
  onInput?: (key: string) => void;
  /**
   * @description 是否显示键盘
   */
  open?: boolean;
  /**
   * @description 默认是否显示键盘
   */
  defaultOpen?: boolean;
  /**
   * @description 点击关闭按钮时或者非键盘区域（开启 blurOnClose）触发
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * @description open 动画结束后触发
   */
  afterOpenChange?: (open: boolean) => void;
  /**
   * @description 键盘标题
   */
  title?: React.ReactNode;
  /**
   * @description 输入值最大长度
   * @default Infinity
   */
  maxLength?: number;
  /**
   * @description 是否开启过场动画
   * @default true
   */
  transition?: boolean;
  /**
   * @description 键盘 z-index 层级
   * @default 100
   */
  zIndex?: number;
  /**
   * @description 删除按钮文字，空则展示删除图标
   */
  closeButtonText?: string;
  /**
   * @description 删除按钮文字，空则展示删除图标
   */
  deleteButtonText?: string;
  /**
   * @description 是否将关闭按钮设置为加载中状态，仅在 theme="custom" 时有效
   */
  closeButtonLoading?: boolean;
  /**
   * @description 是否在点击关闭按钮时触发 blur 事件
   * @default true
   */
  blurOnClose?: boolean;
  /**
   * @description 是否在点击外部时收起键盘
   */
  hideOnClickOutside?: boolean;
  /**
   * @description 指定挂载的节点
   */
  teleport?: PortalContainer;
  /**
   * @description 是否开启底部安全区适配
   */
  safeAreaInsetBottom?: boolean;
  /**
   * @description 是否将通过随机顺序展示按键
   */
  randomKeyOrder?: boolean;
  /**
   * @description 点击删除键时触发
   */
  onDelete?: () => void;
  /**
   * @description 点击关闭按钮或非键盘区域时触发
   */
  onBlur?: () => void;
  /**
   * @description 自定义 className
   */
  className?: string;
  /**
   * @description 样式风格，可选值为 custom
   * @default default
   */
  theme?: NumberKeyboardTheme;
  /**
   * @description 底部额外按键的内容
   */
  extraKey?: [string, string] | string;
  /**
   * @description open 的触发器
   */
  children?:
    | React.ReactElement
    | ((value: string | undefined, open: boolean) => React.ReactElement);
  /**
   * @description 手动控制 open, 需要传入 trigger node ref
   */
  forwardedNodeRef?: React.MutableRefObject<HTMLElement | undefined | null>;

  classNames?: Partial<Record<NumberKeyboardNSlot, string>>;
} & SystemStyledComponentProps;

export type NumberKeyboardNSlot =
  | 'root'
  | 'header'
  | 'title'
  | 'key'
  | 'closeButton'
  | 'deleteButton'
  | 'confirmButton'
  | 'collapseButton'
  | 'loadingIcon'
  | 'collapseIcon'
  | 'deleteIcon'
  | 'sidebar';

export type NumberKeyboardSlot = NumberKeyboardNSlot | 'custom' | 'open';

export type NumberKeyboardComponentState = {
  theme: NumberKeyboardTheme;
  open: boolean;
  zIndex: number;
};

export type NumberKeyboardKeyComponentState = NumberKeyboardComponentState & {
  full?: boolean;
};

export type NumberKeyboardStyleOverrides = ComponentStyleOverrides<
  NumberKeyboardComponentState,
  NumberKeyboardSlot
>;

export type NumberKeyboardThemeConfig = ComponentThemeConfig<
  typeof NumberKeyboardName,
  NumberKeyboardProps,
  NumberKeyboardStyleOverrides
>;

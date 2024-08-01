import type React from 'react';
import type { PortalContainer } from '../portal';
import type { ComponentStyleOverrides, ComponentThemeConfig } from '../types';
import type { DialogName } from './classNames';

export type DialogAction = 'confirm' | 'cancel';

export type DialogType = 'alert' | 'confirm';

export type DialogOptions = {
  /**
   * @description 标题
   */
  title?: React.ReactNode;
  /**
   * @description 弹窗宽度
   * @default 320
   */
  width?: number | string;
  /**
   * @description 文本内容
   */
  message?: React.ReactNode;
  /**
   * @description 自定义底部区域
   */
  footer?: React.ReactNode;
  /**
   * @description 内容对齐方式，可选值为 left right
   * @default center
   */
  messageAlign?: 'left' | 'center' | 'right';
  /**
   * @description 样式风格，可选值为 round-button
   * @default default
   */
  theme?: 'default' | 'round-button';
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定义 style
   */
  style?: React.CSSProperties;
  /**
   * @description 是否展示确认按钮
   * @default true
   */
  showConfirmButton?: boolean;
  /**
   * @description 是否展示取消按钮
   * @default false
   */
  showCancelButton?: boolean;
  /**
   * @description 确认按钮文案
   */
  confirmButtonText?: React.ReactNode;
  /**
   * @description 确认按钮颜色
   */
  confirmButtonColor?: string;
  /**
   * @description 取消按钮文案
   */
  cancelButtonText?: React.ReactNode;
  /**
   * @description 取消按钮颜色
   */
  cancelButtonColor?: string;
  /**
   * @description 是否显示 overlay
   */
  overlay?: boolean;
  /**
   * @description 点击 overlay 是否关闭
   */
  overlayClosable?: boolean;
  /**
   * @description 自定义渲染位置
   */
  teleport?: PortalContainer;
  /**
   * @description 是否锁定背景滚动
   * @default true
   */
  lockScroll?: boolean;
  /**
   * @description 是否在页面回退时自动关闭
   * @default true
   */
  closeOnPopstate?: boolean;
  classNames?: Partial<Record<DialogNSlot, string>>;
  /**
   * @description 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise
   */
  beforeClose?: (action: DialogAction) => boolean | Promise<void | boolean>;
};

export type DialogNSlot =
  | 'root'
  | 'title'
  | 'message'
  | 'footer'
  | 'cancelButton'
  | 'confirmButton';
export type DialogSlot =
  | DialogNSlot
  | 'themeRoundButton'
  | 'footerBorder'
  | 'titleIsIsolated';

export type DialogComponentState = Pick<
  DialogProps,
  'cancelButtonColor' | 'confirmButtonColor' | 'theme' | 'messageAlign'
> & {
  footerBorder?: boolean;
  titleIsIsolated?: boolean;
  hasTitle?: boolean;
};

export type DialogStyleOverrides = ComponentStyleOverrides<
  DialogComponentState,
  DialogSlot
>;

export type DialogThemeConfig = ComponentThemeConfig<
  typeof DialogName,
  DialogProps,
  DialogStyleOverrides
>;

export type DialogProps = DialogOptions & {
  /**
   * @description 是否显示弹窗
   */
  open?: boolean;
  /**
   * @description 点击确认按钮时触发
   */
  onConfirm?: () => void;
  /**
   * @description 点击取消按钮时触发
   */
  onCancel?: () => void;
  /**
   * @description 关闭时触发的回调函数
   */
  onClose?: () => void;
  /**
   * @description 动画结束后触发的回调函数
   */
  afterClose?: () => void;
};

export type DialogApiRef = {
  close: (key?: string) => void;
  open: (
    options: DialogOptions,
    ctx: {
      resolve: () => void;
      reject?: () => void;
    },
  ) => string;
};

export type DialogWrapperStateData = DialogOptions & {
  key: string;
  resolve: () => void;
  reject?: () => void;
  open: boolean;
};

export type DialogWrapperInstance = {
  destroy: () => void;
  instance: React.RefObject<DialogApiRef>;
};

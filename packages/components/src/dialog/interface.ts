import React from 'react';
import { PortalContainer } from '../portal';

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
   * @description ovelay className
   */
  overlayClassName?: string;
  /**
   * @description overlay style
   */
  overlayStyle?: React.CSSProperties;
  /**
   * @description 点击 overlay 是否关闭
   */
  overlayClosable?: boolean;
  /**
   * @description 自定义渲染位置
   */
  teleport?: PortalContainer;
  /**
   * @description 自定义过度动画
   */
  motionName?: string;
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
  /**
   * @description 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise
   */
  beforeClose?: (action: DialogAction) => boolean | Promise<void | boolean>;
};

export type DialogProps = DialogOptions & {
  /**
   * @description 是否显示弹窗
   */
  visible?: boolean;
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

export interface DialogInterface {
  (options: DialogOptions): Promise<void>;
  alert: (options: DialogOptions) => Promise<void>;
  confirm: (options: DialogOptions) => Promise<void>;
  setDefaultOptions: (options: Partial<DialogOptions>) => void;
  resetDefaultOptions: () => void;
  close: () => void;
}

export type DialogWrapperRef = {
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
  visible: boolean;
};

export type DialogWrapperInstance = {
  destroy: () => void;
  instance: React.RefObject<DialogWrapperRef>;
};

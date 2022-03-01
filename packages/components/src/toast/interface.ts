import React from 'react';
import type { LoadingType } from '../loading';
import type { PortalContainer } from '../portal';

export type ToastType = 'loading' | 'success' | 'fail' | 'normal';

export type ToastPosition = 'top' | 'bottom' | 'center';

export type ToastOptions = {
  /**
   * @description 提示类型，可选值为 loading success fail
   * @default normal
   */
  type?: ToastType;
  /**
   * @description 位置，可选值为 top bottom
   * @default middle
   */
  position?: ToastPosition;
  /**
   * @description 消息内容
   */
  message?: React.ReactNode;
  /**
   * @description 自定义图标
   */
  icon?: React.ReactNode;
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
   * @description 点击 toast 是否关闭
   */
  closeOnClick?: boolean;
  /**
   * @description 显示时间, 值为 0 时，toast 不会消失
   * @default 2000
   */
  duration?: number;
  /**
   * @description 加载图标类型
   */
  loadingType?: LoadingType;
  /**
   * @description toast 自定义 class
   */
  className?: string;
  /**
   * @description toast style
   */
  style?: React.CSSProperties;
  /**
   * @description 关闭回调
   */
  onClose?: () => void;
  /**
   * @description 关闭动画结束后触发的回调函数
   */
  afterClose?: () => void;
  /**
   * @description 自定义渲染位置
   */
  teleport?: PortalContainer;
  /**
   * @description 自定义过度动画
   */
  motionName?: string;
};

export type ToastProps = ToastOptions & {
  /**
   * @description Toast 是否可见
   */
  visible?: boolean;
};

export type ToastData = ToastOptions & {
  visible: boolean;
  key: string;
};

export type ToastConfig = Omit<ToastOptions, 'type' | 'message' | 'onClose'>;

export type ToastConfigType = ToastType | 'common';

export type ToastWrapperRef = {
  update: (key: string, options: ToastOptions) => void;
  create: (isMultiple: boolean, options: ToastOptions) => string;
  close: (key?: string) => void;
};

export type ToastWrapperInstance = {
  instance: {
    current: ToastWrapperRef | null;
  };
  destory: () => void;
};

export type ToastInstance = {
  update: (options: ToastOptions) => void;
  close: () => void;
};

interface ToastWithInternalType {
  (message: string): ToastInstance;
  (options: Omit<ToastOptions, 'type'>): ToastInstance;
}

interface SetDefaultOptions {
  (type: ToastConfigType, options: ToastConfig): void;
  (options: ToastConfig & { type?: ToastConfigType }): void;
}

export type InternalAPIType = 'fail' | 'loading' | 'success';

export interface ToastInterface
  extends Record<InternalAPIType, ToastWithInternalType> {
  resetDefaultOptions: (type?: ToastConfigType) => void;
  allowMultiple: () => void;
  setDefaultOptions: SetDefaultOptions;
  (message: string): ToastInstance;
  (options: ToastOptions): ToastInstance;
  clear: (clearAll?: boolean) => void;
  __reset: () => void;
}

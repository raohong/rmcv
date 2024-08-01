import type React from 'react';
import type { LoadingType } from '../loading';
import type { PortalContainer } from '../portal';
import type { ComponentStyleOverrides, ComponentThemeConfig } from '../types';
import type { ToastName } from './classNames';

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

  zIndex?: number;

  key?: string;
};

export type ToastProps = ToastOptions & {
  /**
   * @description Toast 是否可见
   */
  open?: boolean;
};
export type ToastNSlot = 'root' | 'message' | 'icon' | 'loadingIcon';
export type ToastSlot =
  | ToastNSlot
  | 'positionTop'
  | 'positionBottom'
  | 'positionCenter'
  | ToastType;

export type ToastComponentState = {
  position: ToastPosition;
  type: ToastType;
};
export type ToastStyleOverrides = ComponentStyleOverrides<
  ToastComponentState,
  ToastSlot
>;
export type ToastThemeConfig = ComponentThemeConfig<
  typeof ToastName,
  ToastProps,
  ToastStyleOverrides
>;

export type ToastData = ToastOptions & {
  open: boolean;
  key: string;
};

export type ToastConfig = Omit<ToastOptions, 'type' | 'message'>;

export type ToastConfigType = ToastType | 'common';

export type ToastApiRef = {
  showToast: (message: string | ToastOptions) => void;
  showFailToast: (message: string | Omit<ToastOptions, 'type'>) => void;
  showSuccessToast: (message: string | Omit<ToastOptions, 'type'>) => void;
  showLoadingToast: (message: string | Omit<ToastOptions, 'type'>) => void;
  close: (key?: string) => void;
};

export type ToastWrapperRef = ToastApiRef & {
  setMultiple: (multiple: boolean) => void;
};

export type ToastWrapperInstance = {
  instance: {
    current: ToastWrapperRef | null;
  };
  destroy: () => void;
};

export type InternalAPIType = 'fail' | 'loading' | 'success';

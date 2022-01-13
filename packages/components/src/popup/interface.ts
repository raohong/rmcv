import type { SpringConfig } from '@react-spring/web';
import type { JSXIntrinsicElementProps } from '../types';
import type { OverlayProps } from '../overlay';
import type { PortalContainer } from '../portal';

export type PopupPositon = 'left' | 'right' | 'top' | 'bottom' | 'center' | 'none';
export type PopupCloseIconPosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

export type PopupTransitionConfig<T extends object = object> = {
  from: T;
  enter: T;
  leave: T;
  config?: SpringConfig;
};

type PopupBaseProps = {
  /**
   * @description popup visible
   */
  visible?: boolean;
  /**
   * @description 是否锁定背景滚动
   */
  lockScroll?: boolean;
  /**
   * @description 关闭回调
   */
  onClose?: () => void;
  /**
   * @description popup 位置
   * @default center
   */
  position?: PopupPositon;
  /**
   * @description 是否圆角
   */
  round?: boolean;
  /**
   * @description 是否懒渲染
   */
  lazyRender?: boolean;
  /**
   * @description 自定义 style
   */
  style?: React.CSSProperties;
  /**
   * @description 自定义 class
   */
  className?: string;
  /**
   * @description 是否可关闭
   */
  closeable?: boolean;
  /**
   * @description 关闭按钮
   */
  closeIcon?: React.ReactNode;
  /**
   * @description 关闭按钮位置
   * @default top-right
   */
  closeIconPosition?: PopupCloseIconPosition;
  /**
   * @description 关闭按钮 class
   */
  closeIconClassName?: string;
  /**
   * @description 是否显示 overlay
   */
  overlay?: boolean;
  /**
   * @description overlay 自定义 className
   */
  overlayClassName?: string;
  /**
   * @description overlay 自定义 style
   */
  overlayStyle?: React.CSSProperties;
  /**
   * @description overlay 点击是否关闭
   * @default true
   */
  overlayClosable?: boolean;
  /**
   * @description overlay 的 springConfig
   */
  overlaySpringConfig?: OverlayProps['springConfig'];
  /**
   * @description 自定义渲染位置
   */
  getContainer?: PortalContainer;
  /**
   * @description 是否启用 safe-area
   */
  safeArea?: boolean;
  /**
   * @description
   */
  transiton?: PopupTransitionConfig;
  /**
   * @description 动画结束后回调
   */
  afterVisibileChange?: (visible: boolean) => void;
  /**
   * @description overlay 点击
   */
  onOverlayClick?: () => void;
};

export type PopupProps = JSXIntrinsicElementProps<PopupBaseProps>;

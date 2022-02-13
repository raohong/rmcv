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
   * @description 是否显示弹出层
   */
  visible?: boolean;
  /**
   * @description 是否锁定背景滚动
   * @default true
   */
  lockScroll?: boolean;
  /**
   * @description 关闭弹出层时触发
   */
  onClose?: () => void;
  /**
   * @description popup 位置
   * @default center
   */
  position?: PopupPositon;
  /**
   * @description 是否显示圆角
   * @default true
   */
  round?: boolean;
  /**
   * @description 是否在显示弹层时才渲染节点
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
   * @description 自定义渲染位置
   */
  teleport?: PortalContainer;
  /**
   * @description 是否启用 safe-area
   * @default true
   */
  safeArea?: boolean;
  /**
   * @description 自定义过度动画
   */
  transiton?: string;
  /**
   * @description 是否在初始渲染时启用过渡动画
   * @default false
   */
  transitionAppear?: boolean;
  /**
   * @description 动画结束后出发
   */
  afterVisibileChange?: (visible: boolean) => void;
  /**
   * @description overlay 点击后出发
   */
  onOverlayClick?: () => void;
};

export type PopupProps = JSXIntrinsicElementProps<PopupBaseProps>;

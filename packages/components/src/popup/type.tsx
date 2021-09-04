import type { SpringConfig } from '@react-spring/web';

export type PopupPositon = 'left' | 'right' | 'top' | 'bottom' | 'center';
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

export type PopupProps = {
  /**
   * @description popup visible
   */
  visible?: boolean;
  /**
   * @description
   */
  onVisibleChange?: (visible: boolean) => void;
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
  closeIcon?: React.ReactElement;
  /**
   * @description 关闭按钮位置
   * @default top-right
   */
  closeIconPosition?: PopupCloseIconPosition;
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
   * @description
   */
  overlayClosable?: boolean;
  /**
   * @description 自定义渲染位置
   */
  getContainer?: () => HTMLElement;
  /**
   * @description 是否启用 safe-area
   */
  safeArea?: boolean;

  transiton?: PopupTransitionConfig;
};

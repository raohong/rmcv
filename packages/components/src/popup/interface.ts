import type {
  SystemStyledComponentProps,
  SystemSxInterpolation,
} from '@rmc-vant/system';
import type { AnimationConfig } from '../animation';
import type { PortalContainer } from '../portal';
import type {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  JSXIntrinsicElementProps,
} from '../types';
import type { PopupName } from './classNames';

export type PopupPosition = 'left' | 'right' | 'top' | 'bottom' | 'center' | 'none';
export type PopupCloseIconPosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right';

type PopupBaseProps = {
  /**
   * @description 是否显示弹出层
   */
  open?: boolean;
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
  position?: PopupPosition;
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

  closeIconSx?: SystemSxInterpolation;
  /**
   * @description 是否显示 overlay
   */
  overlay?: boolean;
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
   * @description 是否在初始渲染时启用过渡动画
   * @default false
   */
  transitionAppear?: boolean;
  /**
   * @description 动画时长，单位秒，设置为 0 可以禁用动画，仅当没有传入 motionName 时才生效
   */
  duration?: number;
  /**
   * @description 完全关闭后触发
   */
  afterClose?: () => void;
  /**
   * @description 动画结束后触发
   */
  afterOpenChange?: (visible: boolean) => void;
  /**
   * @description overlay 点击后出发
   */
  onOverlayClick?: () => void;
  /**
   * @description 是否在页面回退时自动关闭
   * @default true
   */
  closeOnPopstate?: boolean;

  zIndex?: number;

  animationConfig?: AnimationConfig;

  classNames?: Partial<Record<PopupSlot, string>>;
};

export type PopupNSlot = 'root' | 'overlay' | 'closeIcon';

export type PopupSlot =
  | PopupNSlot
  | 'round'
  | 'positionLeft'
  | 'positionTop'
  | 'positionRight'
  | 'positionBottom'
  | 'positionCenter'
  | 'closeIconTopLeft'
  | 'closeIconTopRight'
  | 'closeIconBottomLeft'
  | 'closeIconBottomRight';

export type PopupProps = JSXIntrinsicElementProps<PopupBaseProps> &
  SystemStyledComponentProps;

export type PopupComponentState = {
  open: boolean;
  round: boolean;
  position: PopupPosition;
  closeIconPosition: PopupCloseIconPosition;
  safeArea: boolean;
  zIndex?: number;
};

export type PopupStyleOverrides = ComponentStyleOverrides<
  PopupComponentState,
  PopupSlot
>;

export type PopupThemeConfig = ComponentThemeConfig<
  typeof PopupName,
  PopupProps,
  PopupStyleOverrides
>;

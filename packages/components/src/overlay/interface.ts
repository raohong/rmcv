import type { SystemStyledComponentProps } from '@rmc-vant/system';
import type { PortalContainer } from '../portal';
import type {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  JSXIntrinsicElementProps,
} from '../types';
import type { OverlayName } from './classNames';

type OverlayBaseProps = {
  /**
   * @description 是否展示遮罩层
   */
  open?: boolean;
  /**
   * @description 是否在显示时才渲染节点
   */
  lazyRender?: boolean;
  /**
   * @description 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动
   * @default true
   */
  lockScroll?: boolean;
  /**
   * @description z-index 层级
   */
  zIndex?: number;
  /**
   * @description 动画时长，单位秒，设置为 0 可以禁用动画
   * @default 0.3
   */
  duration?: number;
  /**
   * @description 自定义渲染位置
   */
  teleport?: PortalContainer;
  /**
   * @description 是否在初始渲染时启用过渡动画
   * @default false
   */
  transitionAppear?: boolean;
};

export type OverlayProps = JSXIntrinsicElementProps<OverlayBaseProps> &
  SystemStyledComponentProps;

export type OverlayComponentState = {
  open: boolean;
};

type OverlayStyleOverrides = ComponentStyleOverrides<OverlayComponentState>;

export type OverlayThemeConfig = ComponentThemeConfig<
  typeof OverlayName,
  OverlayProps,
  OverlayStyleOverrides
>;

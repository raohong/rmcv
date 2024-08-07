import type { SystemStyledComponentProps } from '@rmc-vant/system';
import type {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  IntrinsicElementsKeys,
  JSXIntrinsicElementProps,
} from '../types';
import type { StickyName } from './classNames';

type StickyBaseProps = {
  /**
   * @description 吸附位置，可选值为 bottom
   * @default top
   */
  position?: StickyPosition;
  /**
   * @description 吸顶时与顶部的距离
   * @default 0
   */
  offsetTop?: number;
  /**
   * @description 吸底时与底部的距离 传入 offsetBottom
   */
  offsetBottom?: number;
  /**
   * @description 容器对应的 HTML 节点
   */
  target?: string | ((node: HTMLElement | null) => Element | undefined | null);
  /**
   * @description 是否启用滚动监听，禁用后可以自定义
   */
  disabled?: boolean;
  /**
   * @description 吸顶时的 z-index
   */
  zIndex?: number;
  /**
   * @description 当吸顶状态改变时触发
   */
  onChange?: (isFixed: boolean) => void;

  contentComponent?: IntrinsicElementsKeys;

  classNames?: Partial<Record<StickyNSlot, string>>;
};

export type StickyProps = JSXIntrinsicElementProps<StickyBaseProps> &
  SystemStyledComponentProps;

export type StickyPosition = 'top' | 'bottom';

export type StickyNSlot = 'root' | 'content';
export type StickySlot = StickyNSlot | 'affixed';

export type StickyStyleOverrides = ComponentStyleOverrides<
  StickyComponentState,
  StickySlot
>;

export type StickyComponentState = {
  affixed: boolean;
};

export type StickyThemeConfig = ComponentThemeConfig<
  typeof StickyName,
  StickyProps,
  StickyStyleOverrides
>;

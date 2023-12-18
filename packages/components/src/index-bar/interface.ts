import { SystemStyledComponentProps } from '@rmc-vant/system';
import type {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  JSXIntrinsicElementProps,
} from '../types';
import { IndexBarName } from './classNames';

export type IndexType = string | number;

type IndexBarBaseProps = {
  /**
   * @description 索引字符列表
   * @default A-Z
   */
  indexList?: IndexType[];
  /**
   * @description z-index 层级
   * @default 1
   */
  zIndex?: number;
  /**
   * @description 是否开启锚点自动吸顶
   * @default true
   */
  sticky?: boolean;
  /**
   * @description 锚点自动吸顶时与顶部的距离
   */
  stickyOffsetTop?: number;
  /**
   * @description 索引字符高亮颜色
   * @default #ee0a24
   */
  highlightColor?: string;
  /**
   * @description 当前高亮的索引字符变化时触发
   */
  onChange?: (index: IndexType) => void;

  onSelect?: (index: IndexType) => void;
  /**
   * @description 当前高亮索引字符 默认为第一个
   */
  currentIndex?: IndexType;

  classNames?: Partial<Record<IndexBarNSlot, string>>;
};

type IndexAnchorBaseProps = {
  /**
   * @description 索引字符
   */
  index: IndexType;
};

export type IndexBarContextState = {
  sticky: boolean;
  stickyOffsetTop?: number;
  registerAnchor: (index: IndexType, elem: HTMLDivElement) => void;
  unregisterAnchor: (index: IndexType) => void;
  anchorClassName?: string;
  componentState: IndexBarComponentState;
};

export type IndexBarProps = JSXIntrinsicElementProps<IndexBarBaseProps> &
  SystemStyledComponentProps;

export type IndexAnchorProps = JSXIntrinsicElementProps<IndexAnchorBaseProps>;

export type IndexBarNSlot = 'root' | 'anchor' | 'sidebar' | 'index';
export type IndexBarSlot = IndexBarNSlot;

export type IndexBarComponentState = {
  sticky: boolean;
  zIndex: number;
  highlightColor: string;
};

export type IndexBarIndexComponentState = IndexBarComponentState & {
  active: boolean;
};

export type IndexBarAnchorComponentState = IndexBarComponentState & {
  fixed: boolean;
};

export type IndexBarStyleOverrides = ComponentStyleOverrides<
  IndexBarComponentState,
  Exclude<IndexBarSlot, 'index' | 'anchor'>
> &
  ComponentStyleOverrides<IndexBarIndexComponentState, 'index'> &
  ComponentStyleOverrides<IndexBarAnchorComponentState, 'anchor'>;

export type IndexBarThemeConfig = ComponentThemeConfig<
  typeof IndexBarName,
  IndexBarProps,
  IndexBarStyleOverrides
>;

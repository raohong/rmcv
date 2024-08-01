import type { SystemStyledComponentProps } from '@rmc-vant/system';
import type React from 'react';
import type {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  JSXIntrinsicElementProps,
} from '../types';
import type { TabsName } from './classNames';

export type TabsType = 'card' | 'line';

type TabsBaseProps = {
  /**
   * @description 当前激活 tab 面板的 key
   */
  activeKey?: string;
  /**
   * @description 默认当前激活 tab 面板的 key
   */
  defaultActiveKey?: string;
  /**
   * @description  当前激活的标签改变时触发
   */
  onChange?: (key: string) => void;
  /**
   * @description 样式风格类型，可选值为 card
   * @default line
   */
  type?: TabsType;
  /**
   * @description 标签主题色
   */
  color?: string;
  /**
   * @description 标签栏背景色
   */
  backgroundColor?: string;
  /**
   * @description 底部条宽度
   */
  lineWidth?: number;
  /**
   * @description 底部条高度
   */
  lineHeight?: number;
  /**
   * @description 是否开启切换标签内容时的转场动画，只在非滚动导航模式下有效
   */
  animated?: boolean;
  /**
   * @description 是否显示标签栏外边框，仅在 type="line" 时有效
   */
  border?: boolean;
  /**
   * @description 是否省略过长的标题文字
   * @default true
   */
  ellipsis?: boolean;
  /**
   * @description 是否使用粘性布局
   */
  sticky?: boolean;
  /**
   * @description 吸顶时与顶部的距离
   */
  offsetTop?: number;
  /**
   * @description 是否开启左侧收缩布局
   */
  shrink?: boolean;
  /**
   * @description 是否开启手势左右滑动切换 开启后始终开启切换标签内容时的转场动画
   */
  swipeable?: boolean;
  /**
   * @description 滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动
   * @default 5
   */
  swipeThreshold?: number;
  /**
   * @description 是否开启延迟渲染（首次切换到标签时才触发内容渲染）, 只在非滚动导航模式下有效
   */
  lazyRender?: boolean;
  /**
   * @description 是否开启滚动导航
   */
  scrollspy?: boolean;
  /**
   * @description 标题选中态颜色
   */
  titleActiveColor?: string;
  /**
   * @description 标题默认态颜色
   */
  titleInactiveColor?: string;
  /**
   * @description 动画时间，单位秒，设置为 0 可以禁用动画
   * @default 0.3
   */
  duration?: number;
  classNames?: Partial<Record<TabsNSlot, string>>;
  items?: TabPaneProps[];
};

export type TabPaneProps = JSXIntrinsicElementProps<{
  /**
   * @description 选项卡头显示文字
   */
  tab?: React.ReactNode;
  /**
   * @description 是否禁用标签
   */
  disabled?: boolean;
}> & {
  /**
   * @description 对应 activeKey
   */
  key?: string;
};

type TabPaneData = TabPaneProps & {
  active?: boolean;
  tabId?: string;
  tabPanelId?: string;
};

export type TabPaneListProps = Pick<
  TabsBaseProps,
  'lazyRender' | 'animated' | 'activeKey'
> & {
  items: TabPaneData[];
  tabsId: string;
  onChange?: (key: string) => void;
  componentState: TabsComponentState;
  slotClassNames: Record<TabsNSlot, string>;
};

export type TabBarProps = {
  items: TabPaneData[];
  swipeThreshold: number;
  tabsId: string;
  onClickTab: (key: string) => void;
  duration: number;
  componentState: TabsComponentState;
  classNames?: Record<TabsNSlot, string>;
};

export type TabsProps = JSXIntrinsicElementProps<TabsBaseProps> &
  SystemStyledComponentProps;

export type TabsNSlot =
  | 'root'
  | 'nav'
  | 'navList'
  | 'tab'
  | 'tabContent'
  | 'indicator'
  | 'panels'
  | 'panel';

export type TabsSlot =
  | TabsNSlot
  | 'card'
  | 'line'
  | 'navScrollable'
  | 'navShrink'
  | 'tabDisabled'
  | 'tabEllipsis'
  | 'tabShrink'
  | 'tabExpandable'
  | 'tabActive'
  | 'tabContentEllipsis';

export type TabsComponentState = Pick<
  TabsBaseProps,
  | 'shrink'
  | 'ellipsis'
  | 'lineHeight'
  | 'lineWidth'
  | 'type'
  | 'color'
  | 'backgroundColor'
  | 'titleActiveColor'
  | 'titleInactiveColor'
  | 'duration'
> & {
  tab?: {
    active?: boolean;
    disabled?: boolean;
    ellipsis?: boolean;
    expandable?: boolean;
    shrink?: boolean;
  };

  tabContentEllipsis?: boolean;
  navScrollable?: boolean;
};

export type TabsStyleOverrides = ComponentStyleOverrides<
  TabsComponentState,
  TabsSlot
>;

export type TabsThemeConfig = ComponentThemeConfig<
  typeof TabsName,
  TabsProps,
  TabsStyleOverrides
>;

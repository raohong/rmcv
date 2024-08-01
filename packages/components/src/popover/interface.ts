import type { Placement } from '@floating-ui/react-dom';
import type { SystemStyledComponentProps } from '@rmc-vant/system';
import type { ComponentStyleOverrides, ComponentThemeConfig } from '../types';
import type { PopoverName } from './classNames';

export type PopoverTheme = 'dark' | 'light';

export type PopoverAction = {
  /**
   * @description 文字
   */
  text: React.ReactNode;
  /**
   * @description 图标
   */
  icon?: React.ReactNode;
  /**
   * @description 选项文字颜色
   */
  color?: string;
  /**
   * @description 是否为禁用状态
   */
  disabled?: boolean;
  /**
   * @description 自定义 class
   */
  className?: string;
};

export type PopoverPlacement = Placement;

export type PopoverProps = {
  /**
   * @description 是否展示气泡弹出层
   */
  open?: boolean;
  /**
   * @description open 变化时回调
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * @description 动画结束后回调
   */
  afterOpenChange?: (open: boolean) => void;
  /**
   * @description 选项列表
   */
  actions?: PopoverAction[];
  /**
   * @description 弹出位置
   */
  placement?: PopoverPlacement;
  /**
   * @description 主题风格，可选值为 dark light
   * @default light
   */
  theme?: PopoverTheme;
  /**
   * @description 弹出层位置的偏移量
   */
  offset?: (placement: Placement) => Partial<{
    mainAxis: number;
    crossAxis: number;
  }>;
  /**
   * @description 是否展示小箭头
   * @default true
   */
  showArrow?: boolean;
  /**
   * @description 是否显示遮罩层
   */
  overlay?: boolean;
  /**
   * @description 是否在点击选项后关闭
   */
  closeOnClickAction?: boolean;
  /**
   * @description 是否在点击遮罩层后关闭菜单
   * @default true
   */
  closeOnClickOutside?: boolean;
  /**
   * @description 是否在点击遮罩层后关闭菜单
   * @default true
   */
  closeOnClickOverlay?: boolean;
  /**
   * @description 点击选项时回调
   */
  onSelect?: (action: PopoverAction, index: number) => void;
  /**
   * @description 点击 overlay
   */
  onOverlayClick?: () => void;
  /**
   * @description
   */
  getContainer?: () => HTMLElement;
  /**
   * @description 自定义渲染内容
   */
  renderContent?: () => React.ReactNode;

  lazyRender?: boolean;

  /**
   * @description 动画持续时间
   * @default 0.25
   */
  duration?: number;
  /**
   * @description children
   */
  children?: React.ReactNode;
  /**
   * @description 箭头大小
   * @default 6
   */
  arrowSize?: number;

  classNames?: Partial<Record<PopoverNSlot, string>>;
} & SystemStyledComponentProps;

export type PopoverRef = {
  update: () => void;
};

export type PopoverNSlot =
  | 'root'
  | 'menus'
  | 'menu'
  | 'menuIcon'
  | 'menuText'
  | 'arrow';

export type PopoverSlot =
  | PopoverNSlot
  | 'themeLight'
  | 'themeDark'
  | 'themeDarkMenus'
  | 'themeDarkMenu'
  | 'themeDarkMenuIcon'
  | 'themeDarkMenuText'
  | 'themeDarkMenuArrow';

export type PopoverComponentState = {
  theme: PopoverTheme;
  placement: Placement;
  arrowSize: number;
};

export type PopoverStyleOverrides = ComponentStyleOverrides<
  PopoverComponentState,
  Exclude<PopoverSlot, 'menu' | 'themeDarkMenu'>
> & {
  menu?: PopoverComponentState & { disabled: boolean };
  themeDarkMenu?: PopoverComponentState & { disabled: boolean };
};

export type PopoverThemeConfig = ComponentThemeConfig<
  typeof PopoverName,
  PopoverProps,
  PopoverStyleOverrides
>;

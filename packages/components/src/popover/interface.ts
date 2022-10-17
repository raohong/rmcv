import type { Placement } from '@floating-ui/react-dom';

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
  visible?: boolean;
  /**
   * @description visible 变化时回调
   */
  onVisibleChange?: (visible: boolean) => void;
  /**
   * @description 动画结束后回调
   */
  afterVisibleChange?: (visible: boolean) => void;
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
   * @description 自定义遮罩层类名
   */
  overlayClassName?: string;
  /**
   * @description 自定义遮罩层类名
   */
  overlayStyle?: React.CSSProperties;
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
  /**
   * @description 是否在显示弹层时才渲染节点
   */
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
};

export type PopoverRef = {
  update: () => void;
};

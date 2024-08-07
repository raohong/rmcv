import type { SystemStyledComponentProps } from '@rmc-vant/system';
import type React from 'react';
import type { ComponentStyleOverrides, ComponentThemeConfig } from '../types';
import type { ActionSheetName } from './classNames';

export type ActionSheetAction = {
  /**
   * @description 标题
   */
  name: React.ReactNode;
  /**
   * @description 二级标题
   */
  subname?: React.ReactNode;
  /**
   * @description 文字颜色
   */
  color?: string;
  /**
   * @description 选项自定义 class
   */
  className?: string;
  /**
   * @description 是否为加载状态
   */
  loading?: boolean;
  /**
   * @description 是否为禁用状态
   */
  disabled?: boolean;
  /**
   * @description 点击时触发的回调函数
   */
  callback?: (action: ActionSheetAction) => void;
  /**
   * @description 是否在页面回退时自动关闭
   * @default true
   */
  closeOnPopstate?: boolean;

  key?: React.ReactNode;
};

export type ActionSheetProps = {
  /**
   * @description 是否显示动作面板
   */
  open?: boolean;
  defaultOpen?: boolean;
  /**
   * @description 面板选项列表
   */
  actions?: ActionSheetAction[];
  /**
   * @description 动作面板标题
   */
  title?: React.ReactNode;
  /**
   * @description 动作面板描述
   */
  description?: React.ReactNode;
  /**
   * @description 关闭按钮文字
   */
  cancelText?: React.ReactNode;
  /**
   * @description 是否可关闭的
   * @default true
   */
  closable?: boolean;
  /**
   * @description 关闭图标
   */
  closeIcon?: React.ReactNode;
  /**
   * @description 是否显示圆角
   * @default true
   */
  round?: boolean;
  /**
   * @description 自定义 class
   */
  className?: string;
  /**
   * @description 是否显示 overlay
   * @default true
   */
  overlay?: boolean;
  /**
   * @description overlay 点击是否关闭
   * @default true
   */
  overlayClosable?: boolean;
  /**
   * @description 是否在显示弹层时才渲染节点
   * @default true
   */
  lazyRender?: boolean;
  /**
   * @description
   * @default true
   */
  lockScroll?: boolean;
  /**
   * @description 是否在页面回退时自动关闭
   */
  closeOnPopState?: boolean;
  /**
   * @description 是否开启底部安全区适配
   */
  safeArea?: boolean;
  /**
   * @description 点击选项后是否关闭
   */
  closeOnClickAction?: boolean;
  /**
   * @description 点击选项时触发，禁用或加载状态下不会触发
   */
  onSelect?: (action: ActionSheetAction, index: number) => void;
  /**
   * @description 关闭回调
   */
  onClose?: () => void;
  /**
   *
   */
  content?: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  /**
   * @description 点击取消按钮，此时还要触发 onClose
   */
  onCancel?: () => void;
  /**
   * @description 点击 overlay 回调
   */
  onOverlayClick?: () => void;
  /**
   * @description 关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise
   */
  onBeforeClose?: (action: ActionSheetAction) => void | boolean | Promise<boolean>;
  /**
   * @description 关闭动画结束后触发的回调函数
   */
  afterClose?: () => void;
  /**
   * @description 自定义内容
   */
  children?: React.ReactNode;

  classNames?: Partial<Record<ActionSheetNSlot, string>>;
} & SystemStyledComponentProps;

export type ActionSheetNSlot =
  | 'root'
  | 'title'
  | 'description'
  | 'content'
  | 'cancelButton'
  | 'item'
  | 'itemSubname'
  | 'loadingIcon'
  | 'closeIcon';

export type ActionSheetSlot = ActionSheetNSlot | 'itemLoading' | 'itemDisabled';

export type ActionSheetComponentState = object;
export type ActionSheetItemComponentState = {
  color?: string;
  loading: boolean;
  disabled: boolean;
};

export type ActionSheetStyleOverrides = ComponentStyleOverrides<
  ActionSheetComponentState,
  Exclude<ActionSheetSlot, 'item' | 'itemSubname' | 'itemLoading' | 'itemDisabled'>
> &
ComponentStyleOverrides<ActionSheetItemComponentState, 'item' | 'itemSubname'>;

export type ActionSheetThemeConfig = ComponentThemeConfig<
  typeof ActionSheetName,
  ActionSheetProps,
  ActionSheetStyleOverrides
>;

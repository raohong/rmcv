import type { SystemStyledComponentProps } from '@rmc-vant/system';
import type React from 'react';
import type {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  LiteralUnion,
} from '../types';
import type { ShareSheetName } from './classNames';

export type ShareSheetIconName =
  | 'wechat'
  | 'weibo'
  | 'qq'
  | 'link'
  | 'qrcode'
  | 'poster'
  | 'weapp-qrcode'
  | 'wechat-moments';

export type ShareSheetOption = {
  /**
   * @description 分享渠道名称
   */
  name: string;
  /**
   * @description 图标，可选值为 wechat weibo qq link qrcode poster weapp-qrcode wechat-moments，支持传入图片 URL
   */
  icon: LiteralUnion<ShareSheetIconName, React.ReactNode>;
  /**
   * @description 自定义分享名称
   */
  className?: string;
  /**
   * @description 分享选项描述
   */
  description?: string;
};

export type ShareSheetOptions = ShareSheetOption[] | ShareSheetOption[][];

export type ShareSheetProps = {
  /**
   * @description 是否显示分享面板
   */
  open?: boolean;
  /**
   * @description 面板选项列表
   */
  options?: ShareSheetOptions;
  /**
   * @description 分享面板标题
   */
  title?: React.ReactNode;
  /**
   * @description 分享面板描述
   */
  description?: React.ReactNode;
  /**
   * @description 关闭按钮文字
   */
  cancelText?: React.ReactNode;
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
   * @description 是否开启底部安全区适配
   */
  safeArea?: boolean;
  /**
   * @description 点击选项时触发，禁用或加载状态下不会触发
   */
  onSelect?: (option: ShareSheetOption, index: number) => void;
  /**
   * @description 关闭回调
   */
  onClose?: () => void;
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
  onBeforeClose?: (option: ShareSheetOption) => void | boolean | Promise<boolean>;
  /**
   * @description 关闭动画结束后触发的回调函数
   */
  afterClose?: () => void;
  /**
   * @description 是否在页面回退时自动关闭
   * @default true
   */
  closeOnPopstate?: boolean;
  classNames?: Partial<Record<ShareSheetNSlot, string>>;
} & SystemStyledComponentProps;

export type ShareSheetNSlot =
  | 'root'
  | 'header'
  | 'title'
  | 'description'
  | 'options'
  | 'option'
  | 'optionName'
  | 'optionIcon'
  | 'optionDescription'
  | 'cancelButton';

export type ShareSheetSlot = ShareSheetNSlot;

export type ShareSheetComponentState = object;

export type ShareSheetStyleOverrides = ComponentStyleOverrides<
  ShareSheetComponentState,
  ShareSheetSlot
>;

export type ShareSheetThemeConfig = ComponentThemeConfig<
  typeof ShareSheetName,
  ShareSheetProps,
  ShareSheetStyleOverrides
>;

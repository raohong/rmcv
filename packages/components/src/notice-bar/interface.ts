import type { SystemStyledComponentProps } from '@rmc-vant/system';
import type {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  JSXIntrinsicElementProps,
} from '../types';
import type { NoticeBarName } from './classNames';

type NoticeBarBaseProps = {
  /**
   * @description 通知栏模式，link 右侧有箭头；closeable 表示可关闭，右侧有关闭图标
   */
  mode?: 'link' | 'closeable';
  /**
   * @description 通知栏内容
   */
  text?: React.ReactNode;
  /**
   * @description 字体颜色
   */
  color?: string;
  /**
   * @description 图标颜色
   */
  iconColor?: string;
  /**
   * @description 背景色
   */
  background?: string;
  /**
   * @description 左侧图标
   */
  leftIcon?: React.ReactNode;
  /**
   * @description 滚动速度
   * @default 60px/s
   */
  speed?: number;
  /**
   * @description 是否开启滚动
   */
  scrollable?: boolean;
  /**
   * @description 非滚动模式下，是否换行
   */
  wrappable?: boolean;
  /**
   * @description 触发关闭时
   */
  onClose?: () => void;
  /**
   * @description 每当滚动栏重新开始滚动时触发
   */
  onRepeat?: () => void;

  classNames?: Partial<Record<NoticeBarNSlot, string>>;
};

export type NoticeBarProps = JSXIntrinsicElementProps<NoticeBarBaseProps> &
  SystemStyledComponentProps;

export type NoticeBarNSlot =
  | 'root'
  | 'leftIcon'
  | 'rightIcon'
  | 'content'
  | 'closeIcon';

export type NoticeBarSlot = NoticeBarNSlot;

export type NoticeBarComponentState = Pick<
  NoticeBarBaseProps,
  'color' | 'iconColor' | 'background' | 'mode'
> & {
  scrollable: boolean;
  wrappable: boolean;
};

export type NoticeBarStyleOverrides = ComponentStyleOverrides<NoticeBarSlot>;

export type NoticeBarThemeConfig = ComponentThemeConfig<
  typeof NoticeBarName,
  NoticeBarProps,
  NoticeBarStyleOverrides
>;

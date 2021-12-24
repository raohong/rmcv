import { JSXIntrinsicElementProps } from '../types';

export type TagType = 'success' | 'primary' | 'danger' | 'warning';
export type TagSize = 'small' | 'large';

type TagBaseProps = {
  /**
   * @description 类型
   */
  type?: TagType;
  /**
   * @description size
   */
  size?: TagSize;
  /**
   * @description 是否为空心样式
   */
  plain?: boolean;
  /**
   * 是否为圆角样式
   */
  round?: boolean;
  /**
   * @description 是否为标记样式
   */
  mark?: boolean;
  /**
   * @description 背景色， plain 时 border-color 会设置为 color
   */
  color?: string;
  /**
   * @description 字体颜色, plain 时 border-color 颜色优先于 color
   */
  textColor?: string;
  /**
   * @description 是否可关闭
   */
  closeable?: boolean;
  /**
   * @description 自定义 class
   */
  className?: string;
  /**
   * @description 自定义 style
   */
  style?: React.CSSProperties;
  /**
   * @description 关闭回调
   */
  onClose?: () => void;
  /**
   * @description 点击事件
   */
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
  /**
   * @description 内容
   */
  children?: React.ReactNode;
};

export type TagProps = JSXIntrinsicElementProps<TagBaseProps, 'span'>;

import type { JSXIntrinsicElementProps } from '../types';

export type LoadingType = 'spinner' | 'circular';

type LoadingBaseProps = {
  /**
   * @description Loading 类型
   * @default circular
   */
  type?: LoadingType;
  /**
   * description 自定义 className
   */
  className?: string;
  /**
   * @description 尺寸
   */
  size?: number;
  /**
   * @description 图标颜色
   */
  color?: string;
  /**
   * @description text 大小
   */
  textSize?: string | number;
  /**
   * @description text 颜色
   */
  textColor?: string;
  /**
   * @description 图标和文字的布局是否是垂直布局
   */
  vertical?: boolean;

  /**
   * @description loading 图标 children
   */
  children?: React.ReactNode;
};

export type LoadingProps = JSXIntrinsicElementProps<LoadingBaseProps, 'span'>;

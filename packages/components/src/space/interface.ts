import { JSXIntrinsicElementProps } from '../types';

export type SpaceSize = number | 'small' | 'middle' | 'large';

type SpaceBaseProps = {
  /**
   * @description 间距大小
   * @default small
   */
  size?: SpaceSize;
  /**
   * @description 对齐方式
   */
  align?: 'start' | 'end' | 'center' | 'baseline';
  /**
   * @description 间距方向
   * @default horizontal
   */
  direction?: 'vertical' | 'horizontal';
  /**
   * @description 拆分
   */
  split?: React.ReactNode;
  /**
   * @description 是否换行，仅在 horizontal 时有效
   * @default true
   */
  wrap?: boolean;
  /**
   * @description 是否是快级
   */
  block?: boolean;
  /**
   * @description Space Item 自定义 className
   */
  itemClassName?: string;
};

export type SpaceProps = JSXIntrinsicElementProps<SpaceBaseProps>;

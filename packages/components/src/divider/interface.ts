import { JSXIntrinsicElementProps } from '../types';

type DividerBaseProps = {
  /**
   * @description 文本内容
   */
  contentPosition?: 'left' | 'right' | 'center';
  /**
   * @description border 样式是否是 dashed
   */
  dashed?: boolean;

  /**
   * @description 是否是 0.5px
   */
  hairline?: boolean;
  /**
   * @description Divider 内容
   */
  children?: React.ReactNode;

  /**
   * @description 自定义 class
   */
  className?: string;
  /**
   * @description content 自定义 class
   */
  contentClassName?: string;
};

export type DividerProps = JSXIntrinsicElementProps<DividerBaseProps>;

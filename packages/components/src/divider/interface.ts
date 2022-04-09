import { JSXIntrinsicElementProps } from '../types';

export type DividerContentPosition = 'left' | 'right' | 'center';

type DividerBaseProps = {
  /**
   * @description 文本内容
   */
  contentPosition?: DividerContentPosition;
  /**
   * @description border 样式是否是 dashed
   */
  dashed?: boolean;
  /**
   * @description 是否是 0.5px
   */
  hairline?: boolean;
  /**
   * @description 自定义 class
   */
  className?: string;
};

export type DividerProps = JSXIntrinsicElementProps<DividerBaseProps>;

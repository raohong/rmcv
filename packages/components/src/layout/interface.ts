import type { IntrinsicElementsKeys, JSXIntrinsicElementProps } from '../types';

type RowBaseProps = {
  /**
   * @description 列元素之间的间距
   */
  gutter?: number | string;
  /**
   * @description 自定义元素标签
   */
  component?: IntrinsicElementsKeys;
  /**
   * @description Row 垂直对齐方式
   */
  align?: 'top' | 'middle' | 'bottom';
  /**
   * @description Row 水平对齐方式
   */
  justify?: 'center' | 'end' | 'space-around' | 'space-between';
  /**
   * @description 是否自动换行
   * @default true
   */
  wrap?: boolean;
};

export type RowProps = JSXIntrinsicElementProps<RowBaseProps>;

type ColBaseProps = {
  /**
   * @description 列元素宽度
   */
  span?: number;
  /**
   * @description 列元素偏移距离
   */
  offset?: number;
  /**
   * @description 自定义元素标签
   */
  component?: IntrinsicElementsKeys;
};

export type ColProps = JSXIntrinsicElementProps<ColBaseProps>;

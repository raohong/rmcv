import type { IntrinsicElementsKeys, JSXIntrinsicElementProps } from '../types';

type RowBaseProps = {
  /**
   * @description className
   */
  className?: string;
  /**
   * @description
   */
  gutter?: number;
  /**
   * @description Col component
   */
  component?: IntrinsicElementsKeys;
  /**
   * @description Row 垂直对齐方式
   */
  align?: 'top' | 'middle' | 'bottom';
  /**
   * @description Row 水平对齐方式
   */
  justify?: 'center' | 'end' | 'around' | 'between';
  /**
   * @description Row children 只支持 Col
   */
  children?: React.ReactNode;
};

export type RowProps = JSXIntrinsicElementProps<RowBaseProps>;

type ColBaseProps = {
  /**
   * @description className
   */
  className?: string;
  /**
   * @description
   */
  span?: number;
  /**
   * @description Col component
   */
  component?: IntrinsicElementsKeys;
  /**
   * @description Col children
   */
  children?: React.ReactNode;
};

export type ColProps = JSXIntrinsicElementProps<ColBaseProps>;

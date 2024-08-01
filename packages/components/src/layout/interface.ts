import type { SystemStyledComponentProps } from '@rmc-vant/system';
import type {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  IntrinsicElementsKeys,
  JSXIntrinsicElementProps,
} from '../types';
import type { ColName, RowName } from './classNames';

type RowGutter = number | string | [number | string, string | number];
type RowBaseProps = {
  /**
   * @description 列元素之间的间距
   */
  gutter?: RowGutter;
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
  justify?: 'center' | 'end' | 'space-around' | 'space-between' | 'start';
  /**
   * @description 是否自动换行
   * @default true
   */
  wrap?: boolean;
};

export type RowProps = JSXIntrinsicElementProps<RowBaseProps> &
  SystemStyledComponentProps;

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

export type ColProps = JSXIntrinsicElementProps<ColBaseProps> &
  SystemStyledComponentProps;

export type RowComponentState = {
  align: RowBaseProps['align'];
  justify: RowBaseProps['justify'];
  wrap: boolean;
  gutter?: string | number;
};

export type RowStyleOverrides = ComponentStyleOverrides<RowComponentState>;

export type RowThemeConfig = ComponentThemeConfig<
  typeof RowName,
  RowProps,
  RowStyleOverrides
>;

export type ColComponentState = {
  span?: number;
  offset?: number;
};

export type ColStyleOverrides = ComponentStyleOverrides<RowComponentState>;

export type ColThemeConfig = ComponentThemeConfig<
  typeof ColName,
  ColProps,
  ColStyleOverrides
>;

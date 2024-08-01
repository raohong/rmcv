import type { SystemStyledComponentProps } from '@rmc-vant/system';
import type React from 'react';
import type {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  JSXIntrinsicElementProps,
} from '../types';
import type { RateName } from './classNames';

type RateBaseProps = {
  /**
   * @description 当前分值
   */
  value?: number;
  /**
   * @description 默认分值
   */
  defaultValue?: number;
  /**
   * @description 分值变化时触发
   */
  onChange?: (current: number) => void;
  /**
   * @description 图标总数
   * @default 5
   */
  count?: number;
  /**
   * @description 图标大小
   * @default 20
   */
  size?: string | number;
  /**
   * @description 图标间距
   * @default 4
   */
  gutter?: string | number;
  /**
   * @description 选中时的颜色
   * @default #ee0a24
   */
  color?: string;
  /**
   * @description 未选中时的颜色
   * @default #c8c9cc
   */
  voidColor?: string;
  /**
   * @description 禁用时的颜色
   * @default #c8c9cc
   */
  disabledColor?: string;
  /**
   * @description 选中时的图标
   */
  icon?: React.ReactNode;
  /**
   * @description 未选中时的图标
   */
  voidIcon?: React.ReactNode;
  /**
   * @description 是否允许半选
   */
  allowHalf?: boolean;
  /**
   * @description 是否为只读状态，只读状态下无法修改评分
   */
  readonly?: boolean;
  /**
   * @description 是否禁用评分
   */
  disabled?: boolean;
  /**
   * @description 是否可以通过滑动手势选择评分
   * @default true
   */
  touchable?: boolean;
};

export type RateItemProps = {
  icon: React.ReactElement<{ className: string; style?: React.CSSProperties }>;
  voidIcon: React.ReactElement<{ className: string; style?: React.CSSProperties }>;
  value: number;
  index: number;
  onClickChange: (index: number) => void;
  allowHalf?: boolean;
  color?: string;
  clickable?: boolean;
};

export type RateNSlot = 'root' | 'item' | 'icon' | 'fullIcon' | 'mask';
export type RateSlot = RateNSlot | 'readonly' | 'disabled';

export type RateProps = JSXIntrinsicElementProps<RateBaseProps> &
  SystemStyledComponentProps;

export type RateComponentState = Pick<
  RateProps,
  'size' | 'color' | 'disabledColor' | 'voidColor' | 'gutter'
> & {
  disabled: boolean;
  readonly: boolean;
};

export type RateStyleOverrides = ComponentStyleOverrides<
  RateComponentState,
  RateSlot
>;

export type RateThemeConfig = ComponentThemeConfig<
  typeof RateName,
  RateProps,
  RateStyleOverrides
>;

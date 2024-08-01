import type { SystemStyledComponentProps } from '@rmc-vant/system';
import type {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  JSXIntrinsicElementProps,
} from '../types';
import type { BadgeName } from './classNames';

export type BadgePosition =
  | 'top-left'
  | 'bottom-left'
  | 'top-right'
  | 'bottom-right';

export type BadgeOffsetValue = string | number;

type BadgeBaseProps = {
  /**
   * @description 徽标内容
   */
  content?: React.ReactNode;
  /**
   * @description 徽标 children
   */
  children?: React.ReactNode;
  /**
   * @description 是否是园点
   */
  dot?: boolean;
  /**
   * @description 徽标 className
   */
  className?: string;
  /**
   * @description 徽标 style
   */
  style?: React.CSSProperties;
  /**
   * @description 徽标内容为数字时，最大值
   * @default 99
   */
  max?: number;
  /**
   * @description 当 content 是 0 时，是否显示
   * @default true
   */
  showZero?: boolean;
  /**
   * @description 徽标位置，可选值为 top-left bottom-left bottom-right
   * @default top-right
   */
  position?: BadgePosition;
  /**
   * @description 设置徽标的偏移量，数组的两项分别对应水平和垂直方向的偏移量
   */
  offset?: [BadgeOffsetValue, BadgeOffsetValue] | BadgeOffsetValue;

  classNames?: Partial<Record<BadgeNSlot, string>>;
};

export type BadgeProps = JSXIntrinsicElementProps<BadgeBaseProps> &
  SystemStyledComponentProps;

export type BadgeComponentState = {
  dot: boolean;
  position: BadgePosition;
  fixed: boolean;
  color?: string;
};

export type BadgeNSlot = 'root' | 'wrapper' | 'number' | 'numberWrapper';

export type BadgeSlot =
  | BadgeNSlot
  | 'dot'
  | 'positionTopLeft'
  | 'positionTopRight'
  | 'positionBottomLeft'
  | 'positionBottomRight';

export type BadgeStyleOverrides = ComponentStyleOverrides<BadgeSlot>;

export type BadgeThemeConfig = ComponentThemeConfig<
  typeof BadgeName,
  BadgeProps,
  BadgeStyleOverrides
>;

export type NumberSign = 0 | 1 | -1;
export type NumberDir = 1 | -1;

export type NumberScrollerProps = {
  value: number;
  sign: NumberSign;
  dir: NumberDir;
};

export type NumberScrollerState = {
  diff: number[];
  shouldAnimate: boolean;
  value: number | null;
};

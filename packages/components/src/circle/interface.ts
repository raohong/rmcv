import type { SystemStyledComponentProps } from '@rmc-vant/system';
import {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  JSXIntrinsicElementProps,
} from '../types';
import { CircleName } from './classNames';

export type CircleStartPosition = 'left' | 'right' | 'top' | 'bottom';

type CircleBaseProps = {
  /**
   * @description 当前进度
   */
  progress?: number;
  /**
   * @description 圆环直径
   * @default 100
   */
  size?: number | string;
  /**
   * @description 进度条颜色
   * @default #1989fa
   */
  color?: string;
  /**
   * @description 进度条渐变颜色 优先级大于 color
   */
  gradientColor?: Record<string, string>;
  /**
   * @description 轨道颜色
   * @default #fff
   */
  layerColor?: string;
  /**
   * @description 文字，优先级大于 children
   */
  text?: string;
  /**
   * @description 填充颜色
   */
  fill?: string;
  /**
   * @description 进度条宽度
   */
  strokeWidth?: number;
  /**
   * @description 进度条端点形状
   */
  strokeLinecap?: 'round' | 'butt' | 'square';
  /**
   * @description 进度条方向是否是顺时针
   */
  clockwise?: boolean;
  /**
   * @description 进度起始位置，可选值为 left、right、bottom
   * @default top
   */
  startPosition?: CircleStartPosition;

  classNames?: Partial<Record<CircleNSlot, string>>;
};

export type CircleComponentState = {
  size: string | number;
  startPosition: CircleStartPosition;
} & Pick<CircleBaseProps, 'fill' | 'strokeWidth' | 'strokeLinecap'>;

export type CircleNSlot = 'root' | 'text';

export type CircleSlot =
  | CircleNSlot
  | 'startPositionLeft'
  | 'startPositionTop'
  | 'startPositionBottom'
  | 'startPositionRight';

export type CircleStyleOverrides = ComponentStyleOverrides<CircleComponentState>;

export type CircleThemeConfig = ComponentThemeConfig<
  typeof CircleName,
  CircleProps,
  CircleStyleOverrides
>;

export type CircleProps = JSXIntrinsicElementProps<CircleBaseProps> &
  SystemStyledComponentProps;

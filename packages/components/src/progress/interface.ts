import { SystemStyleInterpolation } from '@rmc-vant/system';
import {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  JSXIntrinsicElementProps,
} from '../types';
import { ProgressName } from './classNames';

type ProgressBaseProps = {
  /**
   * @description 进度条百分比
   */
  percentage?: number;
  /**
   * @description 进度条粗细
   */
  strokeWidth?: number;
  /**
   * @description 进度条颜色
   */
  color?: string;
  /**
   * @description 未完成进度条颜色
   */
  trailColor?: string;
  /**
   * @description 进度条文字
   */
  pivotText?: string;
  /**
   * @description 进度条背景颜色
   */
  pivotColor?: string;
  /**
   * @description 进度条文字颜色
   */
  pivotTextColor?: string;
  /**
   * @description 进度条置灰
   */
  inactive?: boolean;
  /**
   * @description 是否显示进度条文字
   */
  showPivot?: boolean;
  /**
   * @description 根据 percentage 格式化
   */
  format?: (percent: number) => string;

  classNames?: Partial<Record<ProgressNSlot, string>>;
};

export type ProgressProps = JSXIntrinsicElementProps<ProgressBaseProps> &
  SystemStyleInterpolation;

export type ProgressNSlot = 'root' | 'outer' | 'pivot';
export type ProgressSlot = ProgressNSlot | 'inacitve';

export type ProgressComponentState = {
  inactive: boolean;
  trailColor?: string;
  color?: string;
  pivotTextColor?: string;
  pivotColor?: string;
  strokeWidth: number | string;
  transitionAppear: boolean;
};

export type ProgressStyleOverrides = ComponentStyleOverrides<
  ProgressComponentState,
  ProgressSlot
>;

export type ProgressThemeConfig = ComponentThemeConfig<
  typeof ProgressName,
  ProgressProps,
  ProgressStyleOverrides
>;

import type { SystemStyledComponentProps } from '@rmc-vant/system';
import type React from 'react';
import type {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  JSXIntrinsicElementProps,
} from '../types';
import type { CountDownName } from './classNames';

export type CountDownTimeData = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
  totalTime: number;
};

type CountDownBaseProps = {
  /**
   * @description 倒计结束完成回调
   */
  onFinish?: () => void;
  /**
   * @description 每次计时
   */
  onChange?: (data: CountDownTimeData) => void;
  /**
   * @description 用于自定义内容
   */
  children?: (data: CountDownTimeData) => React.ReactNode;
  /**
   * @description 倒计时时间 以秒为单位
   */
  time?: number;
  /**
   * @description 时间格式 DD 天数,HH 小时, mm 分钟, ss 秒数, S 毫秒（1 位）,SS 毫秒（2 位）, SSS 毫秒（3 位）
   */
  format?: string;
  /**
   * @description 自动开始倒计时
   */
  autoStart?: boolean;
  /**
   * @description 是否开启毫秒级别计时
   */
  millisecond?: boolean;
};

export type CountDownProps = JSXIntrinsicElementProps<CountDownBaseProps> &
  SystemStyledComponentProps;

export type CountDownStyleOverrides = ComponentStyleOverrides<object>;

export type CountDownThemeConfig = ComponentThemeConfig<
  typeof CountDownName,
  CountDownProps,
  CountDownStyleOverrides
>;

export type CountDownRef = {
  pause: () => void;
  start: () => void;
  reset: () => void;
};

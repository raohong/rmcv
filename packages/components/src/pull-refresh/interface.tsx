import type { Interpolation, SpringValue } from '@react-spring/web';
import type { SystemStyledComponentProps } from '@rmc-vant/system';
import type React from 'react';
import type {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  JSXIntrinsicElementProps,
} from '../types';
import type { PullRefreshName } from './classNames';

export type PullRefreshRenderParams = {
  pullDistance: number;
  headerHeight: number;
  progress: Interpolation<number, number>;
  value: SpringValue<number>;
};

type PullRefreshBaseProps = {
  /**
   * @description 顶部内容高度
   * @default 50
   */
  headerHeight?: string | number;
  /**
   * @description 刷新距离
   * @default 与顶部内容一样
   */
  pullDistance?: string | number;
  /**
   * @description 下拉时内容
   */
  pullingText?: React.ReactNode;
  /**
   * @description 刷新时内容
   */
  loadingText?: React.ReactNode;
  /**
   * @description 释放到刷新之间内容
   */
  loosingText?: React.ReactNode;
  /**
   * @description 刷新后内容
   */
  successText?: React.ReactNode;
  /**
   * @description 下拉成功内容
   */
  successDuration?: number;
  /**
   * @description 渲染非下拉状态时顶部内容
   */
  renderNormal?: () => React.ReactNode;
  /**
   * @description 渲染下拉过程中顶部内容
   */
  renderPulling?: (params: PullRefreshRenderParams) => React.ReactNode;
  /**
   * @description 渲染释放过程中顶部内容
   */
  renderLoosing?: (params: PullRefreshRenderParams) => React.ReactNode;
  /**
   * @description 渲染加载过程中顶部内容
   */
  renderLoading?: (params: PullRefreshRenderParams) => React.ReactNode;
  /**
   * @description 渲染刷新成功提示内容
   */
  renderSuccess?: () => React.ReactNode;
  /**
   * @description 是否禁止
   */
  disabled?: boolean;
  /**
   * @description 触发刷新回调
   */
  onRefresh?: () => Promise<any>;
  /**
   * @description 内容 class
   */
  contentClassName?: string;
  classNames?: Partial<Record<PullRefreshSlot, string>>;
};

export type PullRefreshProps = JSXIntrinsicElementProps<PullRefreshBaseProps> &
  SystemStyledComponentProps;

export type PullRefreshRef = {
  startRefresh: () => void;
  stopRefresh: () => void;
};

export type PullRefreshComponentState = {
  disabled: boolean;
  refreshState: PullRefreshState;
};

export type PullRefreshNSlot =
  | 'root'
  | 'content'
  | 'header'
  | 'headerText'
  | 'headerLoading';

export type PullRefreshSlot = PullRefreshNSlot;

export type PullRefreshStyleOverrides = ComponentStyleOverrides<PullRefreshSlot>;

export type PullRefreshThemeConfig = ComponentThemeConfig<
  typeof PullRefreshName,
  PullRefreshRef,
  PullRefreshStyleOverrides
>;

export enum PullRefreshState {
  NORMAL = 'normal',
  PULLING = 'pulling',
  LOOSING = 'loosing',
  LOADING = 'loading',
  SUCCESS = 'success',
}

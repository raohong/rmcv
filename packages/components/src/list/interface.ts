import type { SystemStyledComponentProps } from '@rmc-vant/system';
import type React from 'react';
import type {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  JSXIntrinsicElementProps,
} from '../types';
import type { ListName } from './classNames';

export enum ListLoadingStatus {
  NONE = 'none',
  LOADING = 'loading',
  ERROR = 'error',
  FINISHED = 'finished',
}

type ListBaseProps = {
  /**
   * @description 加载状态改变时的回调
   */
  onLoadingStatusChange?: (status: ListLoadingStatus) => void;
  /**
   * @description 加载状态
   * @default none
   */
  loadingStatus?: ListLoadingStatus;
  /**
   * @description 滚动条与底部或者顶部距离小于 offset 时触发 load 事
   */
  offset?: number;
  /**
   * @description 加载时为文字
   */
  loadingText?: string;
  /**
   * @description 加载完成后的状态
   */
  finishedText?: string;
  /**
   * @description 加载失败时的文字
   */
  errorText?: string;
  /**
   * @description 是否在初始化时立即执行滚动位置检查
   */
  immediateCheck?: boolean;
  /**
   * @description 加载回调
   */
  onLoad?: () => void | Promise<boolean | void>;
  /**
   * @description 自定义渲染 error
   */
  renderError?: () => React.ReactNode;
  /**
   * @description 自定义渲染 loading
   */
  renderLoading?: () => React.ReactNode;
  /**
   * @description 自定义渲染 finished
   */
  renderFinished?: () => React.ReactNode;
  /**
   * @description 加载完成后是否还能再加载
   * @default true
   */
  disableOnFinished?: boolean;
  /**
   * @description 是否自动设置状态根据 onLoad 触发状态
   */
  autoSetStatusOnLoad?: boolean;

  classNames?: Partial<Record<'root' | 'text' | 'loadingIcon', string>>;
};

export type ListSlot =
  | 'root'
  | 'text'
  | 'loadingIcon'
  | 'textStatusLoading'
  | 'textStatusError'
  | 'textStatusFinished';

export type ListComponentState = {
  status: ListLoadingStatus;
};

export type ListRef = {
  sync: () => void;
};

export type ListProps = JSXIntrinsicElementProps<ListBaseProps> &
  SystemStyledComponentProps;

export type ListStyleOverrides = ComponentStyleOverrides<ListSlot>;

export type ListThemeConfig = ComponentThemeConfig<
  typeof ListName,
  ListProps,
  ListStyleOverrides
>;

import type React from 'react';
import type { PasswordInputProps } from '../password-input';
import type {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  JSXIntrinsicElementProps,
} from '../types';
import type { PaginationName } from './classNames';

export type PaginationMode = 'simple' | 'multi';

type PaginationBaseProps = {
  /**
   * @description 总记录数
   */
  total?: number;
  /**
   * @description 每页记录数
   * @default 10
   */
  pageSize?: number;
  /**
   * @description 当前页数
   */
  currentPage?: number;
  /**
   * @description 页数改变时回调
   */
  onChange?: (currentPage: number) => void;
  /**
   * @description 默认当前页数
   */
  defaultCurrentPage?: number;
  /**
   * @description 上一页按钮
   */
  previous?: React.ReactNode;
  /**
   * @description 下一页按钮
   */
  next?: React.ReactNode;
  /**
   * @description 开始结束页面两侧显示的页码数
   * @default 1
   */
  boundaryRange?: number;
  /**
   * @description 当前页码两侧显示的页码数
   * @default 1
   */
  siblingRange?: number;
  /**
   * @description 显示模式，可选值为 simple
   * @default multi
   */
  mode?: PaginationMode;
  /**
   * @description 是否显示省略号
   */
  forceEllipses?: boolean;
  /**
   * @description 自定义渲染
   */
  itemRender?: (
    type: 'next' | 'previous' | 'page',
    page: number,
    originalElement: React.ReactElement,
  ) => React.ReactElement;

  /**
   * @description 上一页、下一页是否是 flexible
   * @default true
   */
  previousNextFlexible?: boolean;

  classNames?: Partial<Record<PaginationNSlot, string>>;
};

export type PaginationProps = JSXIntrinsicElementProps<PaginationBaseProps, 'ul'>;

export type PaginationPage = 'prevJump' | number | 'nextJump';

export type PaginationNSlot = 'root' | 'page' | 'jump' | 'action' | 'description';

export type PaginationSlot = PaginationNSlot | PaginationMode;

export type PaginationComponentState = {
  mode: PaginationMode;
  pageActive?: boolean;
  buttonDisabled?: boolean;
};

export type PaginationStyleOverrides = ComponentStyleOverrides<
  PaginationComponentState,
  PaginationSlot
>;

export type PaginationThemeConfig = ComponentThemeConfig<
  typeof PaginationName,
  PasswordInputProps,
  PaginationStyleOverrides
>;

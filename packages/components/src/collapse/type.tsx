import type React from 'react';
import type { CellProps } from '../cell';

export type CollapseKey = string | string[];

export type CollapseItemProps = {
  /**
   * @description 对应的 activeKey
   */
  key?: string;
  itemKey?: string;
  toggle?: (itemKey: string | undefined) => void;
  /**
   * @description 是否折叠
   */
  collapsed?: boolean;
  /**
   * @description 内容
   */
  children?: React.ReactNode;
  /**
   * @description 禁用
   */
  disabled?: boolean;
} & Pick<
  CellProps,
  | 'icon'
  | 'size'
  | 'title'
  | 'value'
  | 'label'
  | 'border'
  | 'isLink'
  | 'titleClassName'
  | 'valueClassName'
  | 'labelClassName'
> &
  React.HTMLAttributes<HTMLDivElement>;

export type CollapseProps = {
  /**
   * @description 当前展开
   */
  activeKey?: CollapseKey;
  /**
   * @description 默认展开的 key
   */
  defaultActiveKey?: CollapseKey;
  /**
   * @description 切换面板时触发
   */
  onChange?: (current: string[]) => void;
  /**
   * @description 禁用
   */
  disabled?: boolean;
  /**
   * @description 折叠内容
   */
  children?: React.ReactNode;
  /**
   * @description 手风琴模式
   */
  accordion?: boolean;
  /**
   * @description 边框
   */
  border?: boolean;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>;

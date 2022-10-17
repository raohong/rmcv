import type React from 'react';
import type { CellProps } from '../cell';
import type { JSXIntrinsicElementProps } from '../types';

export type CollapseKey = string | string[];

type CollapseItemBaseProps = {
  /**
   * @description 对应的 activeKey
   */
  key?: string;
  itemKey?: string;
  /**
   * @description 当 Collpase Item 切换时回调
   */
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
>;

export type CollapseItemProps = JSXIntrinsicElementProps<CollapseItemBaseProps>;

type CollapseBaseProps = {
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
};

export type CollapseProps = JSXIntrinsicElementProps<CollapseBaseProps>;

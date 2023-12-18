import type { SystemStyledComponentProps } from '@rmc-vant/system';
import type React from 'react';
import type { CellProps, CellSize } from '../cell';
import type {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  JSXIntrinsicElementProps,
} from '../types';
import type { CollapseItemName, CollapseName } from './classNames';

type CollapseItemBaseProps = {
  /**
   * @description 对应的 activeKey
   */
  key?: string;
  showArrow?: boolean;
  lazyRender?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  collapseKey?: string;
} & Pick<CellProps, 'icon' | 'value' | 'label' | 'border' | 'title'>;

export type CollapseItemProps = JSXIntrinsicElementProps<CollapseItemBaseProps> &
  SystemStyledComponentProps;

export type CollapseItemComponentState = {
  expanded: boolean;
  size: CellSize;
  disabled: boolean;
  readonly: boolean;
};

export type CollapseItemSlot =
  | 'root'
  | 'expandIcon'
  | 'expanded'
  | 'content'
  | 'disabled'
  | 'readonly';

export type CollapseItemStyleOverrides =
  ComponentStyleOverrides<CollapseItemComponentState>;

export type CollapseItemThemeConfig = ComponentThemeConfig<
  typeof CollapseItemName,
  CollapseItemProps,
  CollapseItemStyleOverrides
>;

type CollapseBaseProps = {
  /**
   * @description 当前展开
   */
  activeKey?: string[] | string;
  /**
   * @description 默认展开的 key
   */
  defaultActiveKey?: string | string[];
  /**
   * @description 切换面板时触发
   */
  onChange?: (current: string[]) => void;

  /**
   * @description 手风琴模式
   */
  accordion?: boolean;
  expandIcon?: (state: { expanded: boolean }) => React.ReactNode;
  size?: CellSize;
};

export type CollapseProps = JSXIntrinsicElementProps<CollapseBaseProps> &
  SystemStyledComponentProps;

export type CollapseComponentState = {};

export type CollapseContextState = {
  getExpanded?: (key: string | null | undefined) => boolean;
  toggle?: (key: string | null | undefined) => void;
  size?: CellSize;
} & Pick<CollapseBaseProps, 'expandIcon'>;

export type CollapseStyleOverrides = ComponentStyleOverrides<CollapseComponentState>;

export type CollapseThemeConfig = ComponentThemeConfig<
  typeof CollapseName,
  CollapseProps,
  CollapseStyleOverrides
>;

import './style';

export type { CollapseItemProps, CollapseProps } from './interface';
import InternalCollapseItem from './CollapseItem';
import InternalCollapse from './Collapse';

export const Collapse = InternalCollapse;
export const CollapseItem = InternalCollapseItem;

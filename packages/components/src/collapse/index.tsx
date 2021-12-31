export type { CollapseItemProps, CollapseProps } from './interface';
import CollapseItem from './CollapseItem';
import InternalCollapse from './Collapse';

type InternalCollapseType = typeof InternalCollapse;

export interface CollapseType extends InternalCollapseType {
  Item: typeof CollapseItem;
}

const Collapse = InternalCollapse as CollapseType;
Collapse.Item = CollapseItem;

export default Collapse;

import InternalCollapse from './Collapse';
import InternalCollapseItem from './CollapseItem';

export type {
  CollapseItemProps,
  CollapseProps,
  CollapseItemThemeConfig,
  CollapseThemeConfig,
} from './interface';

export { collapseClassNames, collapseItemClassNames } from './classNames';

export const Collapse = InternalCollapse;
export const CollapseItem = InternalCollapseItem;

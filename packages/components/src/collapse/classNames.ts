import { generateComponentClassNameUtility } from '@rmc-vant/system';
import type { CollapseItemComponentState, CollapseItemSlot } from './interface';

export const CollapseName = 'Collapse';

export const CollapseItemName = 'CollapseItem';

export const {
  collapseItemClassNames,
  getCollapseItemSlotClassNames,
  composeCollapseItemSlotClassNames,
} = generateComponentClassNameUtility<
  typeof CollapseItemName,
  CollapseItemComponentState,
  CollapseItemSlot,
  'root' | 'expandIcon' | 'content'
>(
  CollapseItemName,
  {
    root: true,
    expandIcon: true,
    expanded: true,
    content: true,
    readonly: true,
    disabled: true,
  },
  ({ expanded, disabled, readonly }) => ({
    root: [
      'root',
      expanded && 'expanded',
      disabled && 'disabled',
      readonly && 'readonly',
    ],
    expandIcon: ['expandIcon'],
    content: ['content'],
  }),
);

export const {
  collapseClassNames,
  composeCollapseSlotClassNames,
  getCollapseSlotClassNames,
} = generateComponentClassNameUtility(CollapseName, {
  root: true,
});

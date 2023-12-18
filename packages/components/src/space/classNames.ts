import { generateComponentClassNameUtility } from '@rmc-vant/system';
import type { SpaceComponentState, SpaceNSlot, SpaceSlot } from './interface';

export const SpaceName = 'Space';

export const {
  getSpaceSlotClassNames,
  composeSpaceSlotClassNames,
  spaceClassNames,
} = generateComponentClassNameUtility<
  typeof SpaceName,
  SpaceComponentState,
  SpaceSlot,
  SpaceNSlot
>(
  SpaceName,
  {
    root: true,
    item: true,
    split: true,
  },
  ({ direction }) => ({
    root: ['root', direction],
    item: ['item'],
    split: ['split'],
  }),
);

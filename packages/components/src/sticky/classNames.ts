import { generateComponentClassNameUtility } from '@rmc-vant/system';
import { StickyComponentState, StickyNSlot, StickySlot } from './interface';

export const StickyName = 'Sticky';

export const {
  stickyClassNames,
  composeStickySlotClassNames,
  getStickySlotClassNames,
} = generateComponentClassNameUtility<
  typeof StickyName,
  StickyComponentState,
  StickySlot,
  StickyNSlot
>(
  StickyName,
  {
    root: true,
    content: true,
    affixed: true,
  },
  ({ affixed }) => ({
    root: ['root', affixed && 'affixed'],
    content: ['content'],
  }),
);

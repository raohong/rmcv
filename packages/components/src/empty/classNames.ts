import { generateComponentClassNameUtility } from '@rmc-vant/system';
import type { EmptyComponentState, EmptyNSlot, EmptySlot } from './interface';

export const EmptyName = 'Empty';

export const {
  emptyClassNames,
  getEmptySlotClassNames,
  composeEmptySlotClassNames,
} = generateComponentClassNameUtility<
  typeof EmptyName,
  EmptyComponentState,
  EmptySlot,
  EmptyNSlot
>(
  EmptyName,
  {
    root: true,
    description: true,
    image: true,
    icon: true,
    extra: true,
  },
  ({ hasExtra }) => ({
    root: ['root'],
    image: ['image'],
    description: ['description'],
    icon: ['icon'],
    extra: [hasExtra && 'extra'],
  }),
);

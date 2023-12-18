import { generateComponentClassNameUtility } from '@rmc-vant/system';
import type { SkeletonComponentState, SkeletonSlot } from './interface';

export const SkeletonName = 'Skeleton';

export const {
  skeletonClassNames,
  composeSkeletonSlotClassNames,
  getSkeletonSlotClassNames,
} = generateComponentClassNameUtility<
  typeof SkeletonName,
  SkeletonComponentState,
  SkeletonSlot
>(
  SkeletonName,
  {
    root: true,
    loading: true,
    title: true,
    paragraph: true,
    avatar: true,
    image: true,
  },
  ({ loading }) => ({
    root: ['root', loading && 'loading'],
  }),
);

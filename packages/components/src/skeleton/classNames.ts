import { generateComponentClassNameUtility } from '@rmc-vant/system';
import type {
  SkeletonComponentState,
  SkeletonNSlot,
  SkeletonSlot,
} from './interface';

export const SkeletonName = 'Skeleton';

export const {
  skeletonClassNames,
  composeSkeletonSlotClassNames,
  getSkeletonSlotClassNames,
} = generateComponentClassNameUtility<
  typeof SkeletonName,
  SkeletonComponentState,
  SkeletonSlot,
  SkeletonNSlot
>(
  SkeletonName,
  {
    root: true,
    loading: true,
    title: true,
    paragraph: true,
    avatar: true,
    image: true,
    round: true,
  },
  ({ loading, round }) => ({
    root: ['root', loading && 'loading', round && 'round'],
    loading: ['loading'],
    title: ['title'],
    paragraph: ['paragraph'],
    avatar: ['avatar'],
    image: ['image'],
    round: ['round'],
  }),
);

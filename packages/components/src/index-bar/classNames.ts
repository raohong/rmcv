import { generateComponentClassNameUtility } from '@rmc-vant/system';
import type {
  IndexBarComponentState,
  IndexBarNSlot,
  IndexBarSlot,
} from './interface';

export const IndexBarName = 'IndexBar';

export const {
  indexBarClassNames,
  composeIndexBarSlotClassNames,
  getIndexBarSlotClassNames,
} = generateComponentClassNameUtility<
  typeof IndexBarName,
  IndexBarComponentState,
  IndexBarSlot,
  IndexBarNSlot
>(
  IndexBarName,
  {
    root: true,
    index: true,
    anchor: true,
    sidebar: true,
  },
  () => ({
    root: ['root'],
    index: ['index'],
    anchor: ['anchor'],
    sidebar: ['sidebar'],
  }),
);

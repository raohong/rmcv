import { generateComponentClassNameUtility } from '@rmc-vant/system';
import type {
  ProgressComponentState,
  ProgressNSlot,
  ProgressSlot,
} from './interface';

export const ProgressName = 'Progress';

export const {
  progressClassNames,
  getProgressSlotClassNames,
  composeProgressSlotClassNames,
} = generateComponentClassNameUtility<
  typeof ProgressName,
  ProgressComponentState,
  ProgressSlot,
  ProgressNSlot
>(
  ProgressName,
  {
    root: true,
    outer: true,
    pivot: true,
    inacitve: true,
  },
  ({ inactive }: ProgressComponentState) => ({
    root: ['root', inactive && 'inacitve'],
    outer: ['outer'],
    pivot: ['pivot'],
  }),
);

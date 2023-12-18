import { generateComponentClassNameUtility } from '@rmc-vant/system';
import { LoadingComponentState, LoadingNSlot, LoadingSlot } from './interface';

export const LoadingName = 'Loading';

export const {
  loadingClassNames,
  getLoadingSlotClassNames,
  composeLoadingSlotClassNames,
} = generateComponentClassNameUtility<
  typeof LoadingName,
  LoadingComponentState,
  LoadingSlot,
  LoadingNSlot
>(
  LoadingName,
  {
    root: true,
    text: true,
    spinner: true,
    circular: true,
  },
  ({ type }) => ({
    root: ['root', type],
    text: ['text'],
  }),
);

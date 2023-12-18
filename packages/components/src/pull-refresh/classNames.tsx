import { generateComponentClassNameUtility } from '@rmc-vant/system';
import type {
  PullRefreshComponentState,
  PullRefreshNSlot,
  PullRefreshSlot,
} from './interface';

export const PullRefreshName = 'PullRefresh';

export const {
  pullRefreshClassNames,
  getPullRefreshSlotClassNames,
  composePullRefreshSlotClassNames,
} = generateComponentClassNameUtility<
  typeof PullRefreshName,
  PullRefreshComponentState,
  PullRefreshSlot,
  PullRefreshNSlot
>(
  PullRefreshName,
  {
    root: true,
    header: true,
    headerText: true,
    headerLoading: true,
    content: true,
  },
  () => ({
    root: ['root'],
    header: ['header'],
    headerText: ['headerText'],
    headerLoading: ['headerLoading'],
    content: ['content'],
  }),
);

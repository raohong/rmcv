import { generateComponentClassNameUtility } from '@rmc-vant/system';
import type {
  ScrollViewComponentState,
  ScrollViewNSlot,
  ScrollViewSlot,
} from './interface';

export const ScrollViewName = 'ScrollView';

export const {
  scrollViewClassNames,
  getScrollViewSlotClassNames,
  composeScrollViewSlotClassNames,
} = generateComponentClassNameUtility<
  typeof ScrollViewName,
  ScrollViewComponentState,
  ScrollViewSlot,
  ScrollViewNSlot
>(
  ScrollViewName,
  {
    root: true,
    content: true,
    inline: true,
  },
  ({ inline }) => ({
    root: ['root', inline && 'inline'],
    content: ['content'],
  }),
);

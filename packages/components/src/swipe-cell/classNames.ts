import { generateComponentClassNameUtility } from '@rmc-vant/system';
import type {
  SwipeCellComponentState,
  SwipeCellNSlot,
  SwipeCellSlot,
} from './interface';

export const SwipeCellName = 'SwipeCell';

export const {
  swipeCellClassNames,
  composeSwipeCellSlotClassNames,
  getSwipeCellSlotClassNames,
} = generateComponentClassNameUtility<
  typeof SwipeCellName,
  SwipeCellComponentState,
  SwipeCellSlot,
  SwipeCellNSlot
>(
  SwipeCellName,
  {
    root: true,
    leftAction: true,
    rightAction: true,
    content: true,
    disabled: true,
  },
  ({ disabled }) => ({
    root: ['root', disabled && 'disabled'],
    content: ['content'],
    leftAction: ['leftAction'],
    rightAction: ['rightAction'],
  }),
);

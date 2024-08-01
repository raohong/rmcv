import { generateComponentClassNameUtility } from '@rmc-vant/system';
import type { GridComponentState, GridNSlot, GridSlot } from './interface';

export const GridName = 'Grid';

export const { gridClassNames, composeGridSlotClassNames, getGridSlotClassNames }
  = generateComponentClassNameUtility<
    typeof GridName,
    GridComponentState,
    GridSlot,
    GridNSlot
  >(
    GridName,
    {
      root: true,
      item: true,
      horizontal: true,
      vertical: true,
      square: true,
      itemContent: true,
      itemIcon: true,
      itemLabel: true,
    },
    ({ square, direction }) => ({
      root: ['root', square && 'square', direction],
      item: ['item'],
      itemContent: ['itemContent'],
      itemLabel: ['itemLabel'],
      itemIcon: ['itemIcon'],
    }),
  );

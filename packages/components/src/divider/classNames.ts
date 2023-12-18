import { generateComponentClassNameUtility } from '@rmc-vant/system';
import { camelCase } from '@rmc-vant/utils';
import type { DividerComponentState, DividerNSlot, DividerSlot } from './interface';

export const DividerName = 'Divider';

export const {
  dividerClassNames,
  composeDividerSlotClassNames,
  getDividerSlotClassNames,
} = generateComponentClassNameUtility<
  typeof DividerName,
  DividerComponentState,
  DividerSlot,
  DividerNSlot
>(
  DividerName,
  {
    root: true,
    positionCenter: true,
    positionLeft: true,
    positionRight: true,
    dashed: true,
    text: true,
  },
  ({ dashed, contentPosition }: DividerComponentState) => ({
    root: ['root', camelCase(`position-${contentPosition}`), dashed && 'dashed'],
    text: ['text'],
  }),
);

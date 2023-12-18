import { generateComponentClassNameUtility } from '@rmc-vant/system';
import { camelCase } from '@rmc-vant/utils';
import type { CircleComponentState, CircleNSlot, CircleSlot } from './interface';

export const CircleName = 'Circle';

export const {
  circleClassNames,
  composeCircleSlotClassNames,
  getCircleSlotClassNames,
} = generateComponentClassNameUtility<
  typeof CircleName,
  CircleComponentState,
  CircleSlot,
  CircleNSlot
>(
  CircleName,
  {
    root: true,
    text: true,
    startPositionBottom: true,
    startPositionLeft: true,
    startPositionRight: true,
    startPositionTop: true,
  },
  ({ startPosition }: CircleComponentState) => ({
    root: ['root', camelCase(`start-position-${startPosition}`)],
    text: ['text'],
  }),
);

import { generateComponentClassNameUtility } from '@rmc-vant/system';
import { camelCase } from '@rmc-vant/utils';
import type { BadgeComponentState, BadgeNSlot, BadgeSlot } from './interface';

export const BadgeName = 'Badge';

export const {
  badgeClassNames,
  getBadgeSlotClassNames,
  composeBadgeSlotClassNames,
} = generateComponentClassNameUtility<
  typeof BadgeName,
  BadgeComponentState,
  BadgeSlot,
  BadgeNSlot
>(
  BadgeName,
  {
    root: true,
    number: true,
    numberWrapper: true,
    wrapper: true,
    dot: true,
    positionBottomLeft: true,
    positionBottomRight: true,
    positionTopLeft: true,
    positionTopRight: true,
  },
  ({ dot, position }) => ({
    root: ['root', camelCase(`position-${position}`)],
    wrapper: ['wrapper', dot && 'dot'],
    number: ['number'],
    numberWrapper: ['numberWrapper'],
  }),
);

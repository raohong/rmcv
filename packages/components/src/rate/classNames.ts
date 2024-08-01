import { generateComponentClassNameUtility } from '@rmc-vant/system';
import type { RateComponentState, RateNSlot, RateSlot } from './interface';

export const RateName = 'Rate';

export const { rateClassNames, getRateSlotClassNames, composeRateSlotClassNames }
  = generateComponentClassNameUtility<
    typeof RateName,
    RateComponentState,
    RateSlot,
    RateNSlot
  >(
    RateName,
    {
      root: true,
      icon: true,
      mask: true,
      fullIcon: true,
      item: true,
      disabled: true,
      readonly: true,
    },
    ({ disabled, readonly }) => ({
      root: ['root', disabled && 'disabled', readonly && 'readonly'],
      icon: ['icon'],
      mask: ['mask'],
      fullIcon: ['fullIcon'],
      item: ['item'],
    }),
  );

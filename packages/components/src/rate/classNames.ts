import { generateComponentClassNameUtility } from '@rmc-vant/system';
import type { RateComponentState } from './interface';

export const RateName = 'Rate';

export const { rateClassNames, getRateSlotClassNames, composeRateSlotClassNames } =
  generateComponentClassNameUtility<typeof RateName, RateComponentState>(RateName, {
    root: true,
  });

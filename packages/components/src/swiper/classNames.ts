import { generateComponentClassNameUtility } from '@rmc-vant/system';
import type { SwiperComponentState, SwiperNSlot, SwiperSlot } from './interface';

export const SwiperName = 'Swiper';

export const {
  swiperClassNames,
  getSwiperSlotClassNames,
  composeSwiperSlotClassNames,
} = generateComponentClassNameUtility<
  typeof SwiperName,
  SwiperComponentState,
  SwiperSlot,
  SwiperNSlot
>(
  SwiperName,
  {
    root: true,
    item: true,
    indicator: true,
    indicators: true,
  },
  ({ vertical }) => ({
    root: ['root', vertical && 'vertical'],
    item: ['item'],
    indicator: ['indicator'],
    indicators: ['indicators'],
  }),
);

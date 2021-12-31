export type { SwiperItemProps, SwiperRef, SwiperProps } from './interface';

import InternalSwiper from './Swiper';
import SwiperItem from './SwiperItem';

type InternalSwiperType = typeof InternalSwiper;

export interface SwiperType extends InternalSwiperType {
  Item: typeof SwiperItem;
}

const Swiper = InternalSwiper as SwiperType;

Swiper.Item = SwiperItem;

export default Swiper;

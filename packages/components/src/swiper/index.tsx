import './style';

export type { SwiperItemProps, SwiperRef, SwiperProps } from './interface';

import InternalSwiper from './Swiper';
import InternalSwiperItem from './SwiperItem';

export const Swiper = InternalSwiper;
export const SwiperItem = InternalSwiperItem;

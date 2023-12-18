import InternalSwiper from './Swiper';
import InternalSwiperItem from './SwiperItem';

export type {
  SwiperItemProps,
  SwiperRef,
  SwiperProps,
  SwiperThemeConfig,
} from './interface';

export { swiperClassNames } from './classNames';

type SwiperType = typeof InternalSwiper;

interface SwiperInterface extends SwiperType {
  Item: typeof InternalSwiperItem;
}

const Swiper = InternalSwiper as SwiperInterface;
Swiper.Item = InternalSwiperItem;

export default Swiper;

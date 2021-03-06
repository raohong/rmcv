import type { Interpolation } from '@react-spring/web';
import type { JSXIntrinsicElementProps } from '../types';

type SwiperBaseProps = {
  /**
   * @description 是否开启 autoplay
   */
  autoplay?: boolean;
  /**
   * @description autoplay 自动播放间隔时间
   * @default  3000
   */
  interval?: number;
  /**
   * @description 初始 swipe
   */
  defaultActiveIndex?: number;
  /**
   * @description activeIndex 改变
   */
  onChange?: (activeIndex: number) => void;
  /**
   * @description 滑块宽度, 可能会出现 90% 这种
   */
  width?: number | string;
  /**
   * @description 滑块高度
   */
  height?: number | string;
  /**
   * @description 是否是循环模式
   */
  loop?: boolean;
  /**
   * @description 是否是垂直布局
   */
  vertical?: boolean;
  /**
   * @description 是否显示 indicator
   */
  showIndicators?: boolean;
  /**
   * @description 指示器颜色
   */
  indicatorColor?: string;
  /**
   * @description 当前活动指示器颜色
   */
  activeIndicatorColor?: string;
  /**
   * @description 是否可以通过手势滑动
   */
  touchable?: boolean;
  /**
   * @description 自定义渲染 indicators
   */
  renderIndicators?: (
    progress: Interpolation<number>,
    activeIndex: number,
    length: number,
    itemSize: number,
  ) => React.ReactNode;
};

export type SwiperProps = JSXIntrinsicElementProps<SwiperBaseProps>;

export type SwiperItemProps = JSXIntrinsicElementProps<{}>;

export type SwiperRef = {
  prev: (animation?: boolean) => void;
  next: (animation?: boolean) => void;
  swipeTo: (activeIndex: number, animation?: boolean) => void;
};

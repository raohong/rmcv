import { SystemStyledComponentProps } from '@rmc-vant/system';
import {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  JSXIntrinsicElementProps,
} from '../types';
import { SliderName } from './classNames';

type SliderCommonProps<V extends number | [number, number] = number> = {
  /**
   * @description 最大值
   * @default 100
   */
  max?: number;
  /**
   * @description 最小值
   * @default 0
   */
  min?: number;
  /**
   * @description 步长
   * @default 1
   */
  step?: number;
  /**
   * @description 进度条高度
   * @default 2
   */
  barHeight?: number | string;
  /**
   * @description 滑块按钮大小
   * @default 24
   */
  buttonSize?: number | string;
  /**
   * @description 进度条激活态颜色
   * @default #1989fa
   */
  activeColor?: string;
  /**
   * @description 进度条非激活态颜色
   * @default #e5e5e5
   */
  inactiveColor?: string;
  /**
   * @description 是否将进度条反转
   */
  reverse?: boolean;
  /**
   * @description 是否禁用滑块
   */
  disabled?: boolean;
  /**
   * @description 是否为只读状态，只读状态下无法修改滑块的值
   */
  readonly?: boolean;
  /**
   * @description 是否垂直展示
   */
  vertical?: boolean;
  /**
   * @description 自定义滑块按钮
   */
  button?: (value: number) => React.ReactElement;
  /**
   * @description 自定义左侧滑块按钮（双滑块模式下）
   */
  leftButton?: (value: number) => React.ReactElement;
  /**
   * @description 自定义右侧滑块按钮（双滑块模式下
   */
  rightButton?: (value: number) => React.ReactElement;
  /**
   * @description 当前值
   */
  value?: V;
  onChange?: (value: V) => void;
  /**
   * @description 拖拽结束后回调函数
   */
  onAfterChange?: (value: V) => void;
  defaultValue?: V;

  classNames?: Partial<Record<SliderNSlot, string>>;
};

type SliderBaseProps = SliderCommonProps<number> & {
  range?: false;
};

type RangeSliderBaseProps = SliderCommonProps<[number, number]> & {
  range: true;
};

export type SliderProps = JSXIntrinsicElementProps<
  SliderBaseProps | RangeSliderBaseProps
> &
  SystemStyledComponentProps;

export type SliderNSlot = 'root' | 'thumb' | 'rail' | 'track' | 'button';

export type SliderSlot =
  | SliderNSlot
  | ('disabled' | 'vertical' | 'readonly' | 'reverse' | 'animating');

export type SliderComponentState = Required<
  Pick<
    SliderCommonProps<number>,
    | 'readonly'
    | 'reverse'
    | 'disabled'
    | 'vertical'
    | 'inactiveColor'
    | 'activeColor'
    | 'barHeight'
    | 'buttonSize'
  >
> & {
  animating: boolean;
  sizeProp: 'width' | 'height';
};

export type SliderStyleOverrides = ComponentStyleOverrides<SliderProps, SliderSlot>;

export type SliderThemeConfig = ComponentThemeConfig<
  typeof SliderName,
  SliderProps,
  SliderStyleOverrides
>;

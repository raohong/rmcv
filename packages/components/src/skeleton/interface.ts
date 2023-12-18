import { SystemStyledComponentProps } from '@rmc-vant/system';
import {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  JSXIntrinsicElementProps,
} from '../types';
import { SkeletonName } from './classNames';

export type SkeletonSize = string | number;

export type SkeletonShape = 'round' | 'square';

type SkeletonBaseProps = {
  /**
   * @description 段落占位图行数
   */
  row?: number;
  /**
   * @description 段落占位图宽度，可传数组来设置每一行的宽度
   */
  rowWidth?: SkeletonSize | SkeletonSize[];
  /**
   * @description 是否显示标题占位图
   * @default true
   */
  title?: boolean;
  /**
   * @description 是否显示头像占位图
   */
  avatar?: boolean;
  /**
   * @description 是否显示骨架屏，传 false 时会展示子组件内容
   */
  loading?: boolean;
  /**
   * @description 是否开启动画
   * @default true
   */
  animate?: boolean;
  /**
   * @description 是否将标题和段落显示为圆角风格
   */
  round?: boolean;
  /**
   * @description 标题占位图宽度
   * @default 40%
   */
  titleWidth?: SkeletonSize;
  /**
   * @description 头像占位图大小
   * @default 32
   */
  avatarSize?: SkeletonSize;
  /**
   * @description 头像占位图形状，可选值为 square
   * @default round
   */
  avatarShape?: SkeletonShape;

  template?: React.ReactNode;
};

export type SkeletonProps = JSXIntrinsicElementProps<SkeletonBaseProps> &
  SystemStyledComponentProps;

export type SkeletonComponentState = {
  round: boolean;
  animate: boolean;
  titleWidth: SkeletonSize;
  avatarSize: SkeletonSize;
  avatarShape: SkeletonShape;
  loading: boolean;
};

export type SkeletonRowComponentState = {
  round?: boolean;
  width?: SkeletonSize;
};

export type SkeletonTitleComponentState = {
  round?: boolean;
  width?: SkeletonSize;
};

export type SkeletonAvatarComponentState = {
  size: SkeletonSize;
  shape: SkeletonShape;
};

export type SkeletonImageComponentState = {
  size: [SkeletonSize, SkeletonSize];
  shape: SkeletonShape;
};

export type SkeletonSlot =
  | 'root'
  | 'loading'
  | 'title'
  | 'avatar'
  | 'image'
  | 'paragraph';

export type SkeletonStyleOverrides = ComponentStyleOverrides<SkeletonComponentState>;

export type SkeletonThemeConfig = ComponentThemeConfig<
  typeof SkeletonName,
  SkeletonProps,
  SkeletonStyleOverrides
>;

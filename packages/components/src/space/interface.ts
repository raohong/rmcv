import type { SystemStyledComponentProps } from '@rmc-vant/system';
import type {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  JSXIntrinsicElementProps,
  LiteralUnion,
} from '../types';
import type { SpaceName } from './classNames';

export type SpaceSize = LiteralUnion<'small' | 'middle' | 'large', string | number>;

type SpaceBaseProps = {
  /**
   * @description 间距大小
   * @default small
   */
  size?: SpaceSize;
  /**
   * @description 对齐方式
   */
  align?: 'start' | 'end' | 'center' | 'baseline';
  /**
   * @description 间距方向
   * @default horizontal
   */
  direction?: 'vertical' | 'horizontal';
  /**
   * @description 拆分
   */
  split?: React.ReactNode;
  /**
   * @description 是否换行，仅在 horizontal 时有效
   * @default true
   */
  wrap?: boolean;
  /**
   * @description 是否是快级
   */
  fill?: boolean;

  classNames?: Partial<Record<SpaceNSlot, string>>;
};

export type SpaceProps = JSXIntrinsicElementProps<SpaceBaseProps> &
  SystemStyledComponentProps;

export type SpaceNSlot = 'root' | 'item' | 'split';
export type SpaceSlot = SpaceNSlot;

export type SpaceComponentState = Required<
  Pick<SpaceBaseProps, 'size' | 'align' | 'direction' | 'wrap' | 'fill'>
>;

export type SpaceStyleOverrides = ComponentStyleOverrides<SpaceProps, SpaceSlot>;

export type SpaceThemeConfig = ComponentThemeConfig<
  typeof SpaceName,
  SpaceProps,
  SpaceStyleOverrides
>;

import { SystemStyledComponentProps } from '@rmc-vant/system';
import type {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  JSXIntrinsicElementProps,
} from '../types';
import type { TagName } from './classNames';

export type TagType = 'success' | 'primary' | 'danger' | 'warning' | 'default';
export type TagSize = 'medium' | 'large' | 'small';

export type TagVariant = 'outlined' | 'contained';

export type TagShape = 'round' | 'mark' | 'default';

type TagBaseProps = {
  /**
   * @description 类型
   */
  type?: TagType;
  shape?: TagShape;
  /**
   * @description size
   */
  size?: TagSize;
  variant?: TagVariant;
  /**
   * @description 背景色， plain 时 border-color 会设置为 color
   */
  color?: string;
  /**
   * @description 字体颜色, plain 时 border-color 颜色优先于 color
   */
  textColor?: string;
  /**
   * @description 是否可关闭
   */
  closeable?: boolean;
  /**
   * @description 关闭回调
   */
  onClose?: () => void;

  show?: boolean;

  classNames?: Partial<Record<TagNSlot, string>>;
};

export type TagComponentState = {
  color?: string;
  textColor?: string;
  size: TagSize;
  type: TagType;
  shape: TagShape;
  variant: TagVariant;
};

export type TagProps = JSXIntrinsicElementProps<TagBaseProps, 'span'> &
  SystemStyledComponentProps;

export type TagNSlot = 'root' | 'close';

export type TagSlot =
  | TagNSlot
  | 'outlined'
  | 'outlinedSizeSmall'
  | 'outlinedSizeLarge'
  | 'outlinedSizeMedium'
  | 'outlinedSuccess'
  | 'outlinedPrimary'
  | 'outlinedDanger'
  | 'outlinedWarning'
  | 'outlinedDefault'
  | 'outlinedShapeRound'
  | 'outlinedShapeMark'
  | 'contained'
  | 'containedSizeSmall'
  | 'containedSizeLarge'
  | 'containedSizeMedium'
  | 'containedSuccess'
  | 'containedPrimary'
  | 'containedDanger'
  | 'containedWarning'
  | 'containedDefault'
  | 'containedShapeRound'
  | 'containedShapeMark';

export type TagStyleOverrides = ComponentStyleOverrides<TagSlot>;

export type TagThemeConfig = ComponentThemeConfig<
  typeof TagName,
  TagProps,
  TagStyleOverrides
>;

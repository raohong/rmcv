import type { SystemStyledComponentProps } from '@rmc-vant/system';
import type React from 'react';
import type {
  ComponentStyleOverrides,
  ComponentThemeConfig,
  JSXIntrinsicElementProps,
} from '../types';
import type { SwipeCellName } from './classNames';

export type SwipeCellPosition = 'left' | 'right' | 'cell' | 'outside';

export type SwipeCellOpenPosition = 'left' | 'right';

type SwipeCellBaseProps = {
  left?: React.ReactNode;
  right?: React.ReactNode;
  disabled?: boolean;
  onOpen?: (position: SwipeCellOpenPosition) => void;
  onClose?: (pos: SwipeCellPosition) => void;
  /**
   * @default true
   * @description 点击时是否自动关闭
   */
  closeOnActionClick?: boolean;

  classNames?: Partial<Record<SwipeCellNSlot, string>>;
};

export type SwipeCellProps = JSXIntrinsicElementProps<SwipeCellBaseProps> &
  SystemStyledComponentProps;

export type SwipeCellRef = {
  open: (position: SwipeCellOpenPosition) => void;
  close: () => void;
  disableClickAwayManager: () => () => void;
};

export type SwipeCellNSlot = 'root' | 'leftAction' | 'rightAction' | 'content';

export type SwipeCellSlot = SwipeCellNSlot | 'disabled';

export type SwipeCellComponentState = {
  disabled: boolean;
};

export type SwipeCellStyleOverrides = ComponentStyleOverrides<
  SwipeCellComponentState,
  SwipeCellSlot
>;

export type SwipeCellThemeConfig = ComponentThemeConfig<
  typeof SwipeCellName,
  SwipeCellProps,
  SwipeCellStyleOverrides
>;

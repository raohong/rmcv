import React from 'react';
import { JSXIntrinsicElementProps } from '../types';

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
};

export type SwipeCellProps = JSXIntrinsicElementProps<SwipeCellBaseProps>;

export type SwipeCellRef = {
  open: (position: SwipeCellOpenPosition) => void;
  close: () => void;
  disableClickAwayManager: () => () => void;
};

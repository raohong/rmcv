import type { CSSMotionProps } from 'rc-motion';

export type CSSMotionEvents = Pick<
  CSSMotionProps,
  | 'onAppearPrepare'
  | 'onEnterPrepare'
  | 'onLeavePrepare'
  | 'onAppearStart'
  | 'onEnterStart'
  | 'onLeaveStart'
  | 'onAppearActive'
  | 'onEnterActive'
  | 'onLeaveActive'
  | 'onAppearEnd'
  | 'onEnterEnd'
  | 'onLeaveEnd'
>;

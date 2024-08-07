import type { SpringValue } from '@react-spring/web';
import type { SystemStyledComponentProps } from '@rmc-vant/system';
import type React from 'react';
import type { ComponentStyleOverrides, ComponentThemeConfig } from '../types';
import type { ScrollViewName } from './classNames';

export type ScrollViewProps = {
  scrollEnabled?: boolean;
  horizontal?: boolean;
  snapToInterval?: number;
  y?: SpringValue<number>;
  x?: SpringValue<number>;
  height?: string | number;
  width?: string | number;
  bounces?: boolean;
  power?: number;
  modifyTarget?: (distance: number, velocity: number) => number;
  decay?: boolean;
  timeConst?: number;
  className?: string;
  children?: React.ReactNode;
  domRef?: React.MutableRefObject<HTMLDivElement | null | undefined>;
  onScrollEndDrag?: (target: number) => void;
  style?: React.CSSProperties;
  classNames?: Partial<Record<ScrollViewSlot, string>>;
} & SystemStyledComponentProps;

export type ScrollViewRef = {
  refresh: () => void;
  scrollTo: (target: number) => void;
};

export type ScrollViewNSlot = 'root' | 'content';

export type ScrollViewSlot = ScrollViewNSlot | 'inline';

export type ScrollViewComponentState = {
  inline?: boolean;
};

export type ScrollViewStyleOverrides = ComponentStyleOverrides<
  ScrollViewComponentState,
  ScrollViewSlot
>;

export type ScrollViewThemeConfig = ComponentThemeConfig<
  typeof ScrollViewName,
  ScrollViewProps,
  ScrollViewStyleOverrides
>;

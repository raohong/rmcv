import type { SpringValue } from '@react-spring/web';
import type React from 'react';

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
};

export type ScrollViewRef = {
  refresh: () => void;
  scrollTo: (target: number) => void;
};

export type ScrollViewNSlot = 'root' | 'content';

export type ScrollViewSlot = ScrollViewNSlot;

export type ScrollViewComponentState = {};

import type React from 'react';
import type { SpringValue } from '@react-spring/web';

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
};

export type ScrollViewRef = {
  refresh: () => void;
  scrollTo: (target: number) => void;
};

import type React from 'react';

export interface IconProps extends Omit<JSX.IntrinsicElements['span'], 'ref'> {
  ref?: React.Ref<HTMLSpanElement>;
  color?: string;
  size?: string | number;
}

export interface IconComponentProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
}

export interface RootIconProps extends IconProps {
  component: React.ComponentType<IconComponentProps>;
}

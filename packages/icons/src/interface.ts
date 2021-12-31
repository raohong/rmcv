import type React from 'react';

export type IconProps = {
  style?: React.CSSProperties;
  className?: string;
} & Omit<JSX.IntrinsicElements['span'], 'children'>;

export type IconComponentProps = {
  style?: React.CSSProperties;
  className?: string;
  width?: number | string;
  height?: number | string;
  fill?: string;
};

export type RootIconProps = IconProps & {
  component: React.ComponentType<IconComponentProps>;
};

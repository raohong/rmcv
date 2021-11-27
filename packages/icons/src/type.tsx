import type React from 'react';

export type IconProps = {
  style?: React.CSSProperties;
  className?: string;
} & Omit<React.PropsWithoutRef<JSX.IntrinsicElements['span']>, 'key'>;

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

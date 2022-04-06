import type React from 'react';

export type IconProps = {
  style?: React.CSSProperties;
  className?: string;
  color?: string;
  size?: React.CSSProperties['fontSize'];
} & Omit<JSX.IntrinsicElements['span'], 'ref'> & {
    ref?: React.Ref<HTMLSpanElement>;
  };

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

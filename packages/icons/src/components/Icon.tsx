import { generateClassName, styled } from '@rmc-vant/system';
import React from 'react';
import type { RootIconProps } from '../interface';

const IconRoot = styled('span', {
  target: generateClassName('Icon', 'root'),
  shouldForwardProp: ['component'],
  cache: false,
})<Omit<RootIconProps, 'component'>>(
  {
    display: 'inline-block',
    color: 'inherit',
    fontStyle: 'normal',
    lineHeight: 0,
    boxSizing: 'border-box',
    textRendering: 'optimizeLegibility',
    '*': {
      lineHeight: 1,
    },
    '-webkit-font-smooth': 'antialiased',
  },
  ({ color, size }) => ({
    color,
    fontSize: size,
  }),
);

const EMPTY = {};

const Icon = (
  { component: Com, ...rest }: RootIconProps,
  ref: React.Ref<HTMLSpanElement>,
) => {
  return (
    <IconRoot componentState={EMPTY} role="img" ref={ref} {...rest}>
      <Com width="1em" height="1em" fill="currentColor" />
    </IconRoot>
  );
};

export default React.forwardRef(Icon);

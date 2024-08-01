import { styled } from '@rmc-vant/system';
import React from 'react';
import type { RootIconProps } from '../interface';
import { IconName, getIconSlotClassNames, iconClassNames } from './classNames';

const IconRoot = styled('span', {
  shouldForwardProp: ['component'],
  cache: false,
  name: IconName,
  overridesResolver: ({ componentState }) =>
    getIconSlotClassNames(componentState).root,
})<Omit<RootIconProps, 'component'>>(
  {
    'display': 'inline-block',
    'color': 'inherit',
    'fontStyle': 'normal',
    'lineHeight': 0,
    'boxSizing': 'border-box',
    'textRendering': 'optimizeLegibility',
    '*': {
      lineHeight: 1,
    },
    'WebkitFontSmooth': 'antialiased',
  },
  ({ color, size }) => ({
    color,
    fontSize: size,
  }),
);

const EMPTY = {};

const Icon = (
  { className, component: Com, ...rest }: RootIconProps,
  ref: React.Ref<HTMLSpanElement>,
) => {
  return (
    <IconRoot
      className={`${iconClassNames.root}${className ? ` ${className}` : ''}`}
      componentState={EMPTY}
      role='img'
      ref={ref}
      {...rest}
    >
      <Com width='1em' height='1em' fill='currentColor' />
    </IconRoot>
  );
};

export default React.forwardRef(Icon);

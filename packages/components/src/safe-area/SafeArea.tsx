import { styled } from '@rmc-vant/system';
import React, { useMemo } from 'react';
import { createOverridableComponent } from '../_utils';
import { useThemeProps } from '../config-provider';
import { SafeAreaName } from './classNames';
import {
  SafeAreaComponentState,
  SafeAreaComponentStyleOverrides,
  SafeAreaProps,
} from './interface';

const SafeAreaRoot = styled<
  'div',
  SafeAreaComponentState,
  SafeAreaComponentStyleOverrides
>('div', {
  slot: 'root',
  name: SafeAreaName,
  overridesResolver: () => ['root'],
})(({ componentState: { top, bottom, disabled } }) => ({
  margin: 0,
  boxSizing: 'border-box',
  ...(top &&
    !disabled && {
      paddingTop: 'env(safe-area-inset-top)',
    }),
  ...(bottom &&
    !disabled && {
      paddingBottom: 'env(safe-area-inset-bottom)',
    }),
}));

const SafeArea = React.forwardRef<HTMLDivElement, SafeAreaProps>((props, ref) => {
  const {
    children,
    top = false,
    disabled = false,
    component = 'div',
    bottom = true,
    ...rest
  } = useThemeProps(SafeAreaName, props);

  const componentState: SafeAreaComponentState = useMemo(
    () => ({
      top,
      bottom,
      disabled,
    }),
    [top, bottom, disabled],
  );

  return React.createElement(
    SafeAreaRoot,
    {
      as: component,
      ref,
      componentState,
      ...rest,
    },
    children,
  );
});

export default createOverridableComponent(SafeArea);

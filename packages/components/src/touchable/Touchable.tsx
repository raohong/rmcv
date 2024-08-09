'use-client';

import { useMergeRefs, useUnmountedRef } from '@rmc-vant/hooks';
import { styled } from '@rmc-vant/system';
import { isArray } from '@rmc-vant/utils';
import { useDrag } from '@use-gesture/react';
import clsx from 'clsx';
import React, { useMemo, useRef, useState } from 'react';
import { buttonStyleReset } from '../_styles';
import { createOverridableComponent } from '../_utils';
import { TouchableName, touchableClassNames } from './classNames';
import type { TouchableComponentState, TouchableProps } from './interface';

const TouchableRoot = styled<'button', TouchableComponentState>('button', {
  slot: 'root',
  name: TouchableName,
})(({ componentState: { disabled, touchAction }, theme }) => ({
  ...buttonStyleReset({ theme }),
  cursor: disabled ? 'not-allowed' : 'pointer',
  touchAction: touchAction || 'none',
}));

const Touchable = React.forwardRef<HTMLButtonElement, TouchableProps>(
  (
    {
      activeClassName,
      className,
      delay,
      disabled,
      component = 'button',
      sx,
      activeStyle,
      touchAction,
      ...props
    },
    ref,
  ) => {
    const nodeRef = useRef<Element | null>(null);
    const mergedRef = useMergeRefs(nodeRef, ref);
    const [active, setActive] = useState(false);
    const unmountedRef = useUnmountedRef();

    useDrag(
      ({ active: current }) => {
        if (!unmountedRef.current) {
          setActive(current);
        }
      },
      {
        pointer: { touch: true },
        target: nodeRef,
        delay,
        enabled: !disabled,
      },
    );

    const componentState: TouchableComponentState = useMemo(
      () => ({
        active,
        disabled: !!disabled,
        touchAction,
      }),
      [active, disabled, touchAction],
    );

    const enabledActiveStyle = active && activeStyle;

    return React.createElement(TouchableRoot, {
      role: 'button',
      type: 'button',
      as: component,
      sx: isArray(sx) ? [...sx, enabledActiveStyle] : [sx, enabledActiveStyle],
      ...props,
      ref: mergedRef,
      componentState,
      className: clsx(
        touchableClassNames.root,
        className,
        active && !disabled && activeClassName,
      ),
    });
  },
);

export default createOverridableComponent<typeof Touchable, 'button'>(Touchable);

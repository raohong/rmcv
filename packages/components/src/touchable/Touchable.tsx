import { useDrag } from '@use-gesture/react';
import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import { useConfigContext } from '../config-provider';
import { useMergeRefs, useUnmountedRef } from '../_hooks';
import { createOverridableComponent } from '../_utils';
import { TouchableProps } from './interface';

const Touchable = React.forwardRef<HTMLDivElement, TouchableProps>(
  (
    {
      component = 'div',
      activeClassName,
      style,
      className,
      delay,
      touchDisabled,
      ...props
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
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
        pointer: {
          touch: true,
        },
        target: nodeRef,
        delay,
        enabled: !touchDisabled,
      },
    );

    return React.createElement(component, {
      ...props,
      ref: mergedRef,
      style: {
        cursor: touchDisabled ? '' : 'cursor',
        ...style,
      },
      className: classNames(
        className,
        active && !touchDisabled && activeClassName,
        !touchDisabled && getPrefixCls('touchable'),
      ),
    });
  },
);

export default createOverridableComponent(Touchable);

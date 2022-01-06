import React from 'react';
import classNames from 'classnames';
import { animated, Transition, Spring } from '@react-spring/web';
import { useLockScroll, useMergeRefs } from '@rmc-vant/hooks';
import { useConfigContext } from '../config-provider';
import type { OverlayProps } from './interface';

const Overlay = React.forwardRef<HTMLDivElement, OverlayProps>(
  (
    {
      visible,

      className,
      style,
      onClick,
      children,
      lazyRender,
      springConfig,
      zIndex = 1,
      duration = 300,
      lockScroll = true,
      ...rest
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();

    const lockRef = useLockScroll(!!visible, !lockScroll);
    const domRef = useMergeRefs(ref, lockRef);

    const renderContent = (styles: object, key?: React.ReactText) => {
      return (
        <animated.div
          ref={domRef}
          key={key}
          style={{
            ...style,
            zIndex,
            ...styles,
          }}
          onClick={onClick}
          className={classNames(getPrefixCls('overlay'), className)}
          {...rest}
        >
          {children}
        </animated.div>
      );
    };

    const config = springConfig ?? {
      duration,
    };

    return lazyRender ? (
      <Transition
        items={visible ? [1] : []}
        from={{
          opacity: 0,
        }}
        enter={{
          opacity: 1,
        }}
        leave={{
          opacity: 0,
        }}
        config={config}
      >
        {(styles, _, { key }) => renderContent(styles, key)}
      </Transition>
    ) : (
      <Spring
        from={{ opacity: 0 }}
        to={{
          opacity: visible ? 1 : 0,
        }}
        config={config}
      >
        {({ opacity }) =>
          renderContent({
            opacity,
            display: opacity.to((val) => (val > 0 ? '' : 'none')),
          })
        }
      </Spring>
    );
  },
);

export default Overlay;

import React from 'react';
import classNames from 'classnames';
import RCMotion from 'rc-motion';
import { useLockScroll, useMergeRefs } from '@rmc-vant/hooks';
import { useConfigContext } from '../config-provider';
import type { OverlayProps } from './interface';
import Portal from '../portal';

const Overlay = React.forwardRef<HTMLDivElement, OverlayProps>(
  (
    {
      visible,
      className,
      style,
      onClick,
      children,
      lazyRender,
      teleport,
      transitionAppear = false,
      zIndex = 1,
      duration = 0.3,
      lockScroll = true,
      ...rest
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
    const lockRef = useLockScroll(!!visible, !lockScroll);
    const domRef = useMergeRefs(ref, lockRef);

    const enabled = duration === undefined || duration > 0;

    return (
      <Portal teleport={teleport} disablePortal={!teleport}>
        <RCMotion
          forceRender={!lazyRender}
          removeOnLeave={lazyRender}
          motionName={getPrefixCls('overlay')}
          visible={visible}
          motionAppear={enabled && transitionAppear}
          motionEnter={enabled}
          motionLeave={enabled}
        >
          {({ style: animationStyle, className: animationClassName }) => (
            <div
              ref={domRef}
              style={{
                ...style,
                zIndex,
                ...animationStyle,
                animationDuration: `${duration}s`,
              }}
              onClick={onClick}
              className={classNames(
                getPrefixCls('overlay'),
                className,
                animationClassName,
              )}
              aria-hidden={!visible}
              {...rest}
            >
              {children}
            </div>
          )}
        </RCMotion>
      </Portal>
    );
  },
);

export default Overlay;

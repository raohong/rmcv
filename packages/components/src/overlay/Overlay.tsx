import { easings } from '@react-spring/web';
import { useLockScroll, useMergeRefs } from '@rmc-vant/hooks';
import { styled } from '@rmc-vant/system';
import classNames from 'classnames';
import React from 'react';
import { baseStyleReset } from '../_styles';
import Animation from '../animation';
import { useThemeProps } from '../config-provider';
import Portal from '../portal';
import { OverlayName, overlayClassNames } from './classNames';
import type { OverlayProps } from './interface';

const OverlayRoot = styled(Animation, {
  name: OverlayName,
  slot: 'root',
  overridesResolver: () => ['root'],
})(baseStyleReset, ({ theme }) => ({
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  touchAction: 'none',
  zIndex: theme.zIndex.overlay,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
}));

const Overlay = React.forwardRef<HTMLDivElement, OverlayProps>((props, ref) => {
  const {
    open,
    className,
    style,
    onClick,
    children,
    lazyRender,
    teleport,
    zIndex,
    duration,
    lockScroll = true,
    ...rest
  } = useThemeProps(OverlayName, props);
  const lockRef = useLockScroll(!!open, !lockScroll);
  const domRef = useMergeRefs(ref, lockRef);

  const enabled = duration === undefined || duration > 0;

  return (
    <Portal teleport={teleport} disablePortal={!teleport}>
      <OverlayRoot
        componentState={{ open }}
        onClick={onClick}
        className={classNames(overlayClassNames.root, className)}
        aria-hidden={!open}
        immediate={!enabled}
        ref={domRef}
        config={
          duration
            ? {
                duration,
                easing: easings.easeInCubic,
              }
            : undefined
        }
        from={{
          opacity: 0,
        }}
        enter={{
          opacity: 1,
        }}
        leave={{
          opacity: 0,
        }}
        style={{ zIndex, ...style }}
        animate={open}
        forceRender={!lazyRender}
        {...rest}
      >
        {children}
      </OverlayRoot>
    </Portal>
  );
});

export default Overlay;

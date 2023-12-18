import { animated } from '@react-spring/web';
import {
  useEventCallback,
  useEventListener,
  useLockScroll,
  useMergeRefs,
} from '@rmc-vant/hooks';
import { Cross } from '@rmc-vant/icons';
import React, { useMemo } from 'react';
import { useThemeProps } from '../config-provider';
import Portal from '../portal';
import SafeArea from '../safe-area';
import { generatePopupAnimationConfigs } from './animations';
import { PopupName, composePopupSlotClassNames } from './classNames';
import type { PopupComponentState, PopupProps } from './interface';
import { CloseIconRoot, PopupOverlay, PopupRoot } from './styles';

const Popup = React.forwardRef<HTMLElement, PopupProps>((props, ref) => {
  const {
    closeIcon,
    teleport,
    closeable,
    children,
    onClose,
    onOverlayClick,
    lazyRender,
    afterClose,
    classNames,
    afterOpenChange,
    animationConfig,
    closeIconSx,
    duration = 300,
    open = false,
    closeOnPopstate = true,
    transitionAppear = false,
    round = true,
    safeArea = true,
    overlayClosable = true,
    position = 'center',
    closeIconPosition = 'top-right',
    overlay = true,
    lockScroll = true,
    ...rest
  } = useThemeProps(PopupName, props);

  const lockRef = useLockScroll(open, !lockScroll);
  const domRef = useMergeRefs(lockRef, ref);

  const handleAnimationCompleted = useEventCallback((currentState: boolean) => {
    if (!currentState) {
      afterClose?.();
    }

    afterOpenChange?.(currentState);
  });

  const handleClose = () => {
    onClose?.();
  };

  useEventListener('popstate', () => {
    if (closeOnPopstate) {
      handleClose();
    }
  });

  const transitionConfigs = useMemo(
    () => generatePopupAnimationConfigs(duration),
    [duration],
  );
  const transitions = animationConfig || transitionConfigs[position];

  const componentState: PopupComponentState = useMemo(
    () => ({
      safeArea,
      open,
      position,
      closeIconPosition,
      round,
    }),
    [safeArea, open, position, closeIconPosition, round],
  );

  const slotClassNames = composePopupSlotClassNames(componentState, classNames);

  const renderIcon = () => {
    const icon = React.isValidElement(closeIcon) ? closeIcon : <Cross />;

    return (
      <CloseIconRoot
        onClick={handleClose}
        className={slotClassNames?.closeIcon}
        componentState={componentState}
        activeStyle={({ theme }) => ({
          color: theme.palette.active,
        })}
        sx={closeIconSx}
      >
        {React.cloneElement(icon, {
          'aria-label': 'Close',
        })}
      </CloseIconRoot>
    );
  };

  return (
    <>
      {overlay && (
        <PopupOverlay
          onClick={() => {
            if (overlayClosable) {
              handleClose();
            }
            onOverlayClick?.();
          }}
          lazyRender={lazyRender}
          open={open}
          lockScroll={false}
          teleport={teleport}
          transitionAppear={transitionAppear}
          duration={duration}
          className={slotClassNames.overlay}
          componentState={componentState}
        />
      )}

      <Portal teleport={teleport}>
        <PopupRoot
          renderComponent={(_1, props) => {
            return (
              <SafeArea
                component={animated.div}
                disabled={!safeArea && (position === 'top' || position === 'bottom')}
                top={position === 'top'}
                bottom={position === 'bottom'}
                {...props}
              />
            );
          }}
          lazyRender={lazyRender}
          className={slotClassNames.root}
          componentState={componentState}
          aria-hidden={!open ? 'true' : 'false'}
          ref={domRef}
          animate={open}
          onAnimationCompleted={handleAnimationCompleted}
          {...transitions}
          {...rest}
        >
          {closeable && renderIcon()}
          {children}
        </PopupRoot>
      </Portal>
    </>
  );
});

export default Popup;

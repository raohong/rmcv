import React, { useState } from 'react';
import classNames from 'classnames';
import { animated, Transition, Spring, SpringConfig } from '@react-spring/web';
import omit from 'lodash/omit';
import isNil from 'lodash/isNil';
import { Cross } from '@rmc-vant/icons';
import { useConfigContext } from '../config-provider';
import Overlay from '../overlay';
import SafeArea from '../safe-area';
import { useLockScroll, useMergeRefs } from '../_hooks';
import { defaultPopupTransitions } from './transitions';
import type { PopupProps } from './interface';
import Touchable from '../touchable';
import Portal from '../portal';

let zIndexSeed = 1000;
const getZIndex = () => {
  zIndexSeed++;

  return zIndexSeed;
};

const Popup = React.forwardRef<HTMLElement, PopupProps>((props, ref) => {
  const {
    lazyRender,
    closeIcon,
    closeIconClassName,
    overlayClassName,
    overlayStyle,
    getContainer,
    closeable,
    style,
    className,
    transiton,
    children,
    onClose,
    onOverlayClick,
    overlaySpringConfig,
    round = true,
    safeArea = true,
    overlayClosable = true,
    position = 'center',
    closeIconPosition = 'top-right',
    overlay = true,
    visible = false,
    afterVisibileChange,
    lockScroll = true,
    ...rest
  } = props;

  const { getPrefixCls } = useConfigContext();
  const lockRef = useLockScroll(visible, !lockScroll);
  const domRef = useMergeRefs(lockRef, ref);

  const baseCls = getPrefixCls('popup');
  const [zIndex] = useState(getZIndex);

  const handleClose = () => {
    onClose?.();
  };

  const cls = classNames(
    baseCls,
    {
      [`${baseCls}-${position}`]: position,
      [`${baseCls}-round`]: round,
    },
    className,
  );

  const renderIcon = () => {
    const icon = React.isValidElement(closeIcon) ? closeIcon : <Cross />;

    return (
      <Touchable
        component="button"
        role="button"
        className={classNames(
          `${baseCls}-close-icon`,
          `${baseCls}-close-icon--${closeIconPosition}`,
          closeIconClassName,
        )}
        activeClassName={`${baseCls}-close-icon-active`}
        onClick={handleClose}
      >
        {React.cloneElement(icon, {
          'aria-label': 'Close',
        })}
      </Touchable>
    );
  };

  const renderContent = (styles?: object, key?: React.ReactText) => {
    return (
      <SafeArea
        disabled={!safeArea}
        top={position === 'top'}
        bottom={position === 'bottom'}
        component={animated.div}
        key={key}
        style={{
          ...styles,
          zIndex,
          ...style,
        }}
        className={cls}
        aria-hidden={!visible ? 'true' : 'false'}
        {...omit(rest, ['visible', 'onVisibleChange'])}
        ref={domRef}
      >
        {closeable && renderIcon()}
        {children}
      </SafeArea>
    );
  };

  const internalTransition = transiton ?? defaultPopupTransitions[position];

  const config: SpringConfig = {
    tension: 500,
    friction: 40,
    velocity: visible ? 0 : 0.02,
  };
  const elem = (
    <>
      {overlay && (
        <Overlay
          className={overlayClassName}
          onClick={() => {
            if (overlayClosable) {
              handleClose();
            }
            onOverlayClick?.();
          }}
          zIndex={zIndex - 1}
          lazyRender={lazyRender}
          style={overlayStyle}
          visible={visible}
          springConfig={overlaySpringConfig || config}
          lockScroll={false}
        />
      )}
      {lazyRender ? (
        <Transition
          items={visible ? [1] : []}
          config={config}
          {...internalTransition}
          onRest={(result) => {
            if (result.finished) {
              afterVisibileChange?.(visible);
            }
          }}
        >
          {(styles, _, { key }) => renderContent(styles, key)}
        </Transition>
      ) : (
        <Spring
          from={{
            ...internalTransition.from,
            visibility: 'hidden',
          }}
          to={
            visible
              ? { ...internalTransition.enter, visibility: 'visible' }
              : { ...internalTransition.leave, visibility: 'hidden' }
          }
          onRest={(result) => {
            if (result.finished) {
              afterVisibileChange?.(visible);
            }
          }}
          config={config}
        >
          {(styles) =>
            renderContent({
              ...styles,
            })
          }
        </Spring>
      )}
    </>
  );

  return (
    <Portal disablePortal={isNil(getContainer)} container={getContainer}>
      {elem}
    </Portal>
  );
});

export default Popup;

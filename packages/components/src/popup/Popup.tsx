import React, { useState } from 'react';
import classNames from 'classnames';
import RCMotion from 'rc-motion';
import { omit } from '@rmc-vant/utils';
import { Cross } from '@rmc-vant/icons';
import {
  useLockScroll,
  useMergeRefs,
  useIsomorphicLayoutEffect,
} from '@rmc-vant/hooks';
import { useConfigContext } from '../config-provider';
import Overlay from '../overlay';
import SafeArea from '../safe-area';
import Touchable from '../touchable';
import Portal from '../portal';
import type { PopupProps } from './interface';

let zIndexSeed = 1000;
const getZIndex = () => {
  zIndexSeed += 2;

  return zIndexSeed;
};

const Popup = React.forwardRef<HTMLElement, PopupProps>((props, ref) => {
  const {
    closeIcon,
    closeIconClassName,
    overlayClassName,
    overlayStyle,
    teleport,
    closeable,
    style,
    className,
    transiton,
    children,
    onClose,
    onOverlayClick,
    afterVisibileChange,
    lazyRender,
    duration = 0.3,
    transitionAppear = false,
    round = true,
    safeArea = true,
    overlayClosable = true,
    position = 'center',
    closeIconPosition = 'top-right',
    overlay = true,
    visible = false,
    lockScroll = true,
    ...rest
  } = props;

  const { getPrefixCls } = useConfigContext();
  const lockRef = useLockScroll(visible, !lockScroll);
  const domRef = useMergeRefs(lockRef, ref);
  const baseCls = getPrefixCls('popup');
  const [zIndex, setZIndex] = useState(0);

  useIsomorphicLayoutEffect(() => {
    setZIndex(getZIndex());
  }, []);

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

  const renderContent = (styles?: React.CSSProperties, className?: string) => {
    return (
      <SafeArea
        disabled={!safeArea}
        top={position === 'top'}
        bottom={position === 'bottom'}
        style={{
          ...styles,
          zIndex,
          ...style,
        }}
        className={classNames(cls, className)}
        aria-hidden={!visible ? 'true' : 'false'}
        {...omit(rest, ['visible', 'onVisibleChange'])}
        ref={domRef}
      >
        {closeable && renderIcon()}
        {children}
      </SafeArea>
    );
  };

  const enabled = duration > 0;

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
          lockScroll={false}
          teleport={teleport}
          transitionAppear={transitionAppear}
          duration={duration}
        />
      )}

      <Portal disablePortal={!teleport} teleport={teleport}>
        <RCMotion
          forceRender={!lazyRender}
          removeOnLeave={lazyRender}
          motionName={transiton || `${baseCls}-${position}`}
          visible={visible}
          onVisibleChanged={afterVisibileChange}
          motionAppear={enabled && transitionAppear}
          motionEnter={enabled}
          motionLeave={enabled}
        >
          {({ style, className }) => renderContent(style, className)}
        </RCMotion>
      </Portal>
    </>
  );

  return <>{elem}</>;
});

export default Popup;

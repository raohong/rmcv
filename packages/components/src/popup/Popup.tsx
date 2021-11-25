import React, { useState } from 'react';
import classNames from 'classnames';
import {
  animated,
  Transition,
  Spring,
  useSpring,
  SpringConfig,
} from '@react-spring/web';
import isNil from 'lodash/isNil';
import omit from 'lodash/omit';
import { Cross } from '@rmc-vant/icons';
import { useConfigContext } from '../config-provider';
import { isBrowser, renderPortal } from '../_utils';
import Overlay from '../overlay';
import SafeArea from '../safe-area';
import { useLockScroll } from '../_hooks';
import { defaultPopupTransitions } from './transitions';
import type { PopupProps } from './type';

let zIndexSeed = 1000;
const getZIndex = () => {
  zIndexSeed++;

  return zIndexSeed;
};

const Popup: React.FC<PopupProps> = (props) => {
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
  const [{ progress }, setProgress] = useSpring(() => ({
    progress: 0,
    default: {
      immediate: true,
    },
  }));

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

    return React.cloneElement(icon, {
      className: classNames(
        icon.props.className,
        `${baseCls}-close-icon`,
        `${baseCls}-close-icon--${closeIconPosition}`,
        closeIconClassName,
      ),
      onClick: (evt: React.MouseEvent) => {
        icon.props.onClick?.(evt);
        handleClose();
      },
      'aria-label': 'Close',
    });
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
        ref={lockRef}
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
  const overlaySpringConfig = config;
  const container = getContainer && isBrowser ? getContainer() : undefined;
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
          springConfig={overlaySpringConfig}
          lockScroll={lockScroll}
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
          from={internalTransition.from}
          to={visible ? internalTransition.enter : internalTransition.leave}
          //  config={transition.config}
          onStart={() => {
            setProgress.set({ progress: 1 });
          }}
          onRest={(result) => {
            if (result.finished) {
              if (!visible) {
                setProgress.set({ progress: 0 });
              }
              afterVisibileChange?.(visible);
            }
          }}
          config={config}
        >
          {(styles) =>
            renderContent({
              ...styles,
              display: progress.to((val) => (val === 0 ? 'none' : '')),
            })
          }
        </Spring>
      )}
    </>
  );

  return isNil(container) ? elem : renderPortal(elem, container);
};

export default Popup;

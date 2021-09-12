import React, { useState } from 'react';
import classNames from 'classnames';
import { animated, Transition, Spring, useSpring } from '@react-spring/web';
import { Cross } from '@rmc-vant/icons';
import { useConfigContext } from '../config-provider';
import { useControllableValue } from '../_hooks';
import { renderPortal, isNil, omit } from '../_utils';
import { defaultPopupTransitions } from './transitions';
import type { PopupProps } from './type';
import Overlay from '../overlay';

let zIndexSeed = 1000;
const getZIndex = () => {
  zIndexSeed++;

  return zIndexSeed;
};

const Popup: React.FC<PopupProps> = (props) => {
  const {
    round,
    lazyRender,
    closeIcon,
    overlayClassName,
    overlayStyle,
    getContainer,
    closeable,
    style,
    className,
    safeArea,
    transiton,
    children,
    overlayClosable = true,
    position = 'center',
    closeIconPosition = 'top-right',
    overlay = true,
    ...rest
  } = props;

  const { getPrefixCls } = useConfigContext();
  const [{ progress }, setProgress] = useSpring(() => ({
    progress: 0,
    default: {
      immediate: true,
    },
  }));
  const [visible, setVisible] = useControllableValue<boolean>(props, {
    valuePropName: 'visible',
    trigger: 'onVisibleChange',
  });

  const baseCls = getPrefixCls('popup');
  const [zIndex] = useState(getZIndex);

  const handleClose = () => {
    setVisible(false);
  };

  const cls = classNames(
    baseCls,
    {
      [`${baseCls}-${position}`]: position,
      [`${baseCls}-round`]: round,
      [`${baseCls}-safe-area-inset-bottom`]: position === 'bottom' && safeArea,
      [`${baseCls}-safe-area-inset-top`]: position === 'top' && safeArea,
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
      <animated.div
        key={key}
        style={{
          ...styles,
          zIndex,
          ...style,
        }}
        className={cls}
        aria-hidden={visible ? 'true' : 'false'}
        {...omit(rest, ['visible', 'onVisibleChange'])}
      >
        {closeable && renderIcon()}
        {children}
      </animated.div>
    );
  };

  const internalTransition = transiton ?? defaultPopupTransitions[position];
  const config = {
    tension: 500,
    friction: 40,
  };
  const container = getContainer ? getContainer() : undefined;
  const elem = (
    <>
      {overlay && (
        <Overlay
          className={overlayClassName}
          onClick={() => {
            if (overlayClosable) {
              handleClose();
            }
          }}
          zIndex={zIndex - 1}
          lazyRender={lazyRender}
          style={overlayStyle}
          visible={visible}
        />
      )}
      {lazyRender ? (
        <Transition
          items={visible ? [1] : []}
          config={config}
          {...internalTransition}
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
          onRest={() => {
            if (!visible) {
              setProgress.set({ progress: 0 });
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

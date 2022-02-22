import classNames from 'classnames';
import raf from 'raf';
import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import {
  useFloating,
  getScrollParents,
  flip as flipMiddleware,
  offset as offsetMiddleware,
} from '@floating-ui/react-dom';
import type { Placement, Rect } from '@floating-ui/core';
import { useClickAway, useControllableValue, useMergeRefs } from '@rmc-vant/hooks';
import { chain, isEmpty } from '@rmc-vant/utils';
import { useConfigContext } from '../config-provider';
import Popup from '../popup';
import Touchable from '../touchable';
import { getDataOrAriaProps } from '../_utils';
import type { PopoverAction, PopoverProps, PoppoverRef } from './interface';

const Popover = React.forwardRef<PoppoverRef, PopoverProps>((props, ref) => {
  const {
    offset,
    children,
    onOverlayClick,
    onSelect,
    overlayClassName,
    overlayStyle,
    afterVisibleChange,
    closeOnClickOverlay,
    actions,
    renderContent,
    lazyRender,
    arrowSize = 6,
    closeOnClickOutside = true,
    closeOnClickAction = true,
    showArrow = true,
    overlay = false,
    theme = 'light',
    placement = 'top',
    ...rest
  } = props;
  const { getPrefixCls } = useConfigContext();
  const [visible, setVisible] = useControllableValue<boolean>(props, {
    valuePropName: 'visible',
    trigger: 'onVisibleChange',
    defaultValue: false,
  });

  const referenceRef = useRef<HTMLDivElement | null>(null);
  const floatingRef = useRef<HTMLDivElement | null>(null);
  const canceller = useRef<(() => void) | null>(null);
  const getOffset = useCallback(
    ({
      placement: currentPlacement,
    }: {
      reference: Rect;
      floating: Rect;
      placement: Placement;
    }) => {
      const addTo = (val: number) => ({
        mainAxis:
          Math.ceil(val) +
          (val > 0 ? 2 : 0) +
          (offset?.(currentPlacement)?.mainAxis ?? 0),
        crossAxis: offset?.(currentPlacement)?.crossAxis ?? 0,
      });

      if (!showArrow) {
        return addTo(0);
      }

      return addTo(arrowSize ?? 0);
    },
    [showArrow, arrowSize],
  );

  const options = useMemo(
    () => ({
      placement,
      middleware: [offsetMiddleware(getOffset), flipMiddleware()],
      strategy: 'fixed' as 'fixed',
    }),
    [placement, getOffset, showArrow],
  );
  const {
    x,
    y,
    reference,
    floating,
    strategy,
    update,
    refs,
    placement: internalPlacement,
  } = useFloating(options);

  const child = React.Children.only(children);
  const target = React.isValidElement(child) ? child : <span>{child}</span>;
  const internalReferenceRef = useMergeRefs(
    reference,
    referenceRef,
    // @ts-ignore
    React.isValidElement(target) ? target.ref : null,
  );
  const internalFloatingRef = useMergeRefs(floatingRef, floating);

  useEffect(() => {
    raf(() => {
      if (!refs.reference.current || !refs.floating.current) {
        return;
      }

      const parents = [
        ...getScrollParents(refs.reference.current),
        ...getScrollParents(refs.floating.current),
      ];

      parents.forEach((parent) => {
        parent.addEventListener('scroll', update);
        parent.addEventListener('resize', update);
      });

      canceller.current = () => {
        parents.forEach((parent) => {
          parent.removeEventListener('scroll', update);
          parent.removeEventListener('resize', update);
        });
        parents.length = 0;
      };
    });

    return () => {
      if (canceller.current) {
        canceller.current();
        canceller.current = null;
      }
    };
  }, [refs.reference, refs.floating, update, visible]);

  useEffect(() => {
    if (visible) {
      update();
    }
  }, [update, visible]);

  useImperativeHandle(ref, () => ({
    update,
  }));

  useClickAway(() => {
    if (closeOnClickOutside) {
      setVisible(false);
    }
  }, [referenceRef, floatingRef]);

  const basCls = getPrefixCls('popover');
  const cls = classNames(basCls, {
    [`${basCls}-theme-${theme}`]: theme,
  });

  const handleClose = () => {
    setVisible(false);
  };
  const handleSeleect = (action: PopoverAction, index: number) => {
    onSelect?.(action, index);

    if (closeOnClickAction && !action.disabled) {
      handleClose();
    }
  };

  const renderIcon = (icon: React.ReactNode) => {
    const iconCls = classNames(`${basCls}-action-icon`);

    if (React.isValidElement(icon)) {
      return React.cloneElement(icon, {
        className: classNames(iconCls, icon.props.className),
      });
    }

    return <span className={iconCls}>{icon}</span>;
  };
  const renderMenus = () => {
    if (renderContent) {
      return <div className={`${basCls}-content`}>{renderContent()}</div>;
    }

    return (
      <div className={`${basCls}-content`} role="menu">
        {actions?.map((item, index) => (
          <Touchable
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            style={{ color: item.color }}
            className={classNames(
              `${basCls}-action`,
              {
                [`${basCls}-action-with-icon`]: !isEmpty(item.icon),
                [`${basCls}-action-disabled`]: item.disabled,
              },
              item.className,
            )}
            role="menuitem"
            activeClassName={`${basCls}-action-active`}
            onClick={() => handleSeleect(item, index)}
            {...(item.disabled && { 'aria-disabled': true })}
          >
            <div className={`${basCls}-action-inner`}>
              {!isEmpty(item.icon) && renderIcon(item.icon)}
              <span className={`${basCls}-action-text`}>{item.text}</span>
            </div>
          </Touchable>
        ))}
      </div>
    );
  };

  return (
    <>
      <Popup
        ref={internalFloatingRef}
        visible={visible}
        overlay={overlay}
        overlayClassName={overlayClassName}
        overlayStyle={overlayStyle}
        overlayClosable={closeOnClickOverlay}
        onOverlayClick={onOverlayClick}
        onClose={handleClose}
        position="none"
        afterVisibleChange={afterVisibleChange}
        className={cls}
        round={false}
        lazyRender={lazyRender}
        motionName={getPrefixCls('popover-transition')}
        style={{
          position: strategy,
          top: y ?? '',
          left: x ?? '',
        }}
        data-placement={internalPlacement}
        motionEvents={{
          onEnterPrepare() {
            if (!lazyRender) {
              update();
            }
          },
          onAppearPrepare() {
            if (!lazyRender) {
              update();
            }
          },
        }}
        {...getDataOrAriaProps(rest)}
      >
        {showArrow && <div className={`${basCls}-arrow`} />}
        {renderMenus()}
      </Popup>
      {React.cloneElement(target, {
        ref: internalReferenceRef,
        onClick: chain(() => {
          setVisible(!visible);
        }, target.props.onClick),
      })}
    </>
  );
});

export default Popover;

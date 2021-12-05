import classNames from 'classnames';
import React, {
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { SpringConfig } from '@react-spring/web';
import type { Rect } from '@popperjs/core';
import { useConfigContext } from '../config-provider';
import Popup from '../popup';
import Touchable from '../touchable';
import {
  useClickAway,
  useControllableValue,
  useIsomorphicLayoutEffect,
  useMeasure,
  useMergeRefs,
} from '../_hooks';
import { chain, getDataOrAriaProps, isEmpty } from '../_utils';
import type {
  PopoverAction,
  PopoverModifier,
  PopoverPlacement,
  PopoverProps,
  PoppoverRef,
} from './type';
import usePopover from './usePopover';

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
    closeOnClickOutside = true,
    closeOnClickAction = true,
    lazyRender = true,
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
  const [exited, setExited] = useState(true);
  const arrowRef = useRef<HTMLDivElement>(null);

  const { data: arrowRect, measure } = useMeasure({ ref: arrowRef });
  const getOffset = useCallback(
    ({
      placement: currentPlacement,
    }: {
      placement: PopoverPlacement;
      reference: Rect;
      popper: Rect;
    }) => {
      const skipped = ['auto', 'auto-start', 'auto-end'];
      const addTo = (val: number[]) =>
        val.map((item, index) => Math.ceil(item) + 2 + (offset?.[index] ?? 0));

      if (!showArrow || skipped.includes(currentPlacement)) {
        return addTo([0, 0]);
      }

      return addTo([
        0,
        currentPlacement.includes('top') || currentPlacement.includes('bottom')
          ? arrowRect.height
          : arrowRect.width,
      ]);
    },
    [offset, showArrow, arrowRect],
  );
  const modifiers: PopoverModifier[] = useMemo(() => {
    return showArrow && arrowRef.current
      ? [
          {
            name: 'arrow',
            options: {
              element: arrowRef.current,
              padding: () =>
                referenceRef.current
                  ? parseFloat(
                      getComputedStyle(referenceRef.current).borderRadius,
                    )
                  : 0,
            },
          },
        ]
      : [];
  }, [showArrow, arrowRef.current]);

  const { popperRef, referenceRef, instance } = usePopover({
    placement,
    offset: getOffset,
    modifiers,
    exited,
    visible,
  });

  const child = React.Children.only(children);
  const target = React.isValidElement(child) ? child : <span>{child}</span>;
  const contentRef = useMergeRefs(
    referenceRef,
    // @ts-ignore
    React.isValidElement(target) ? target.ref : null,
  );

  useImperativeHandle(ref, () => ({
    forceUpdate: () => instance.current?.forceUpdate(),
  }));

  useIsomorphicLayoutEffect(() => {
    if (visible) {
      setExited(false);
    }
  }, [visible]);

  useIsomorphicLayoutEffect(() => {
    if (showArrow && arrowRef.current) {
      measure(arrowRef.current);
    }
  }, [showArrow, measure, arrowRef.current]);

  useClickAway(() => {
    if (closeOnClickOutside) {
      setVisible(false);
    }
  }, [referenceRef, popperRef]);

  const basCls = getPrefixCls('popover');
  const cls = classNames(basCls, {
    [`${basCls}-theme-${theme}`]: theme,
  });

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
            {!isEmpty(item.icon) && renderIcon(item.icon)}
            <span className={`${basCls}-action-text`}>{item.text}</span>
          </Touchable>
        ))}
      </div>
    );
  };

  const handleClose = () => {
    setVisible(false);
  };

  const config: SpringConfig = {
    tension: 300,
    friction: 20,
    velocity: visible ? 0.01 : 0,
  };

  return (
    <>
      <Popup
        ref={popperRef}
        visible={visible}
        overlay={overlay}
        overlayClassName={overlayClassName}
        overlayStyle={overlayStyle}
        overlayClosable={closeOnClickOverlay}
        onOverlayClick={onOverlayClick}
        onClose={handleClose}
        position="none"
        afterVisibileChange={chain((current) => {
          if (!current) {
            setExited(true);
          }
        }, afterVisibleChange)}
        className={cls}
        overlaySpringConfig={config}
        round={false}
        transiton={{
          from: {
            scale: 0.7,
            opacity: 0,
          },
          enter: {
            scale: 1,
            opacity: 1,
          },
          leave: {
            scale: 0.7,
            opacity: 0,
          },
          config,
        }}
        lazyRender={lazyRender}
        {...getDataOrAriaProps(rest)}
      >
        {showArrow && <div className={`${basCls}-arrow`} ref={arrowRef} />}
        {renderMenus()}
      </Popup>
      {React.cloneElement(target, {
        ref: contentRef,
        onClick: chain(() => {
          setVisible(true);
        }, target.props.onClick),
      })}
    </>
  );
});

export default Popover;

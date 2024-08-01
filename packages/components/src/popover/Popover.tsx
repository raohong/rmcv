import {
  autoUpdate,
  flip as flipMiddleware,
  useFloating,
} from '@floating-ui/react-dom';
import { easings } from '@react-spring/web';
import { useClickAway, useControllableValue, useMergeRefs } from '@rmc-vant/hooks';
import { composeProps, isEmpty } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useImperativeHandle, useMemo, useRef } from 'react';
import { getDataOrAriaProps } from '../_utils';
import { useThemeProps } from '../config-provider';
import type { PopupProps } from '../popup';
import { PopoverName, composePopoverSlotClassNames } from './classNames';
import type {
  PopoverAction,
  PopoverComponentState,
  PopoverProps,
  PopoverRef,
} from './interface';
import {
  PopoverArrow,
  PopoverMenu,
  PopoverMenuIcon,
  PopoverMenuText,
  PopoverMenus,
  PopoverRoot,
} from './styles';

const getPopoverAnimations = (open: boolean): PopupProps['animationConfig'] => {
  const duration = 200;
  return {
    from: {
      opacity: 0,
      scale: 0.75,
    },
    enter: {
      opacity: 1,
      scale: 1,
    },
    leave: {
      opacity: 0,
      scale: 0.75,
    },
    config: (key: string) => {
      if (key === 'scale') {
        return {
          duration: duration * 0.67,
          easing: !open ? easings.easeInCubic : easings.easeOutCubic,
        };
      }

      return {
        duration,
        easing: !open ? easings.easeInCubic : easings.easeOutCubic,
      };
    },
    delay: key => (key === 'scale' ? duration * 0.33 : 0),
  };
};

const Popover = React.forwardRef<PopoverRef, PopoverProps>((props, ref) => {
  const {
    offset,
    children,
    onOverlayClick,
    onSelect,
    closeOnClickOverlay,
    actions,
    renderContent,
    classNames,
    lazyRender,
    arrowSize = 6,
    closeOnClickOutside = true,
    closeOnClickAction = true,
    showArrow = true,
    overlay = false,
    theme = 'light',
    placement = 'top',
    ...rest
  } = useThemeProps(PopoverName, props);
  const [open, setOpen] = useControllableValue(props, {
    valuePropName: 'open',
    trigger: 'onOpenChange',
    defaultValue: false,
  });

  const referenceRef = useRef<HTMLDivElement | null>(null);
  const floatingRef = useRef<HTMLDivElement | null>(null);

  const {
    x,
    y,
    refs,
    strategy,
    update,
    placement: internalPlacement,
  } = useFloating({
    placement,
    middleware: [flipMiddleware()],
    strategy: 'fixed',
    open,
    whileElementsMounted: autoUpdate,
  });

  const componentState: PopoverComponentState = useMemo(
    () => ({
      theme,
      arrowSize,
      placement: internalPlacement,
    }),
    [arrowSize, theme, internalPlacement],
  );
  const slotClassNames = composePopoverSlotClassNames(componentState, classNames);

  const animationConfig = useMemo(() => getPopoverAnimations(open), [open]);

  const target = React.isValidElement(children) ? children : <span>{children}</span>;
  const internalReferenceRef = useMergeRefs(
    refs.setReference,
    referenceRef,
    // @ts-ignore
    React.isValidElement(target) ? target.ref : null,
  );
  const internalFloatingRef = useMergeRefs(floatingRef, refs.setFloating);

  useImperativeHandle(ref, () => ({
    update,
  }));

  useClickAway(() => {
    if (closeOnClickOutside) {
      setOpen(false);
    }
  }, [referenceRef, floatingRef]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelect = (action: PopoverAction, index: number) => {
    onSelect?.(action, index);

    if (closeOnClickAction && !action.disabled) {
      handleClose();
    }
  };

  const renderMenus = () => {
    if (renderContent) {
      return (
        <PopoverMenus
          componentState={componentState}
          className={slotClassNames.menus}
        >
          {renderContent()}
        </PopoverMenus>
      );
    }

    return (
      <PopoverMenus
        componentState={componentState}
        className={slotClassNames.menus}
        role='menu'
      >
        {actions?.map((item, index) => (
          <PopoverMenu
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            componentState={{ ...componentState, disabled: !!item.disabled }}
            style={{ color: item.color }}
            className={clsx(slotClassNames.menu, item.className)}
            role='menuitem'
            activeStyle={({ theme: { palette } }) => ({
              background: theme === 'dark' ? 'rgba(0, 0, 0, 0.2)' : palette.active,
            })}
            disabled={item.disabled}
            onClick={() => handleSelect(item, index)}
            {...(item.disabled && { 'aria-disabled': true })}
            {...getDataOrAriaProps(item)}
          >
            {!isEmpty(item.icon) && (
              <PopoverMenuIcon
                componentState={componentState}
                className={slotClassNames.menuIcon}
              >
                {item.icon}
              </PopoverMenuIcon>
            )}
            <PopoverMenuText
              componentState={{
                ...componentState,
                align: isEmpty(item.icon) ? 'center' : 'start',
              }}
              className={slotClassNames.menuText}
            >
              {item.text}
            </PopoverMenuText>
          </PopoverMenu>
        ))}
      </PopoverMenus>
    );
  };

  return (
    <>
      <PopoverRoot
        ref={internalFloatingRef}
        open={open}
        componentState={componentState}
        overlay={overlay}
        overlayClosable={closeOnClickOverlay}
        onOverlayClick={onOverlayClick}
        onClose={handleClose}
        position='none'
        safeArea={false}
        className={slotClassNames.root}
        round={false}
        style={{
          position: strategy,
          top: y ?? '',
          left: x ?? '',
        }}
        data-placement={internalPlacement}
        animationConfig={animationConfig}
        lazyRender={lazyRender}
        {...getDataOrAriaProps(rest)}
      >
        {showArrow && (
          <PopoverArrow
            componentState={componentState}
            className={slotClassNames.arrow}
          />
        )}
        {renderMenus()}
      </PopoverRoot>
      {React.cloneElement(
        target,
        composeProps(
          {
            ref: internalReferenceRef,
          },
          {
            onClick() {
              setOpen(true);
            },
          },
        ),
      )}
    </>
  );
});

export default Popover;

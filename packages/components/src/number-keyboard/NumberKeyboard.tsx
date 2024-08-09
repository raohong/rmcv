'use-client';

import {
  useClickAway,
  useControllableValue,
  useMergeRefs,
  useUpdateEffect,
} from '@rmc-vant/hooks';
import { compose, isEmpty, isFunction, toArray } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useMemo, useRef, useState } from 'react';
import { getDataOrAriaProps } from '../_utils';
import { useThemeProps } from '../config-provider';
import {
  NumberKeyboardName,
  composeNumberKeyboardSlotClassNames,
} from './classNames';
import type { NumberKeyboardComponentState, NumberKeyboardProps } from './interface';
import {
  NumberKeyboardBody,
  NumberKeyboardCloseButton,
  NumberKeyboardCollapseIcon,
  NumberKeyboardConfirmButton,
  NumberKeyboardDeleteButton,
  NumberKeyboardDeleteIcon,
  NumberKeyboardHeader,
  NumberKeyboardKey,
  NumberKeyboardLoadingIcon,
  NumberKeyboardRoot,
  NumberKeyboardSidebar,
  NumberKeyboardTitle,
  NumberKeyboardWrapper,
  activeStyles,
} from './styles';

const random = (limit: number, max: number, min: number = 0): number => {
  const result = min + Math.floor(Math.random() * (max - min + 1));

  return result === limit ? random(limit, max, min) : result;
};

const shuffle = (list: string[]) => {
  let temp: string;

  for (let i = list.length - 1; i >= 1; i--) {
    const index = random(i, list.length - 1, 1);

    temp = list[i];
    list[i] = list[index];
    list[index] = temp;
  }
};

const getKeys = (random?: boolean) => {
  const list = Array.from({ length: 10 }, (_, i) => String(i));

  if (random) {
    shuffle(list);
  }

  return list;
};

enum KEYS {
  CLOSE = 'close',
  ZERO = '0',
}

const NumberKeyboard = React.forwardRef<HTMLDivElement, NumberKeyboardProps>(
  (_props, ref) => {
    const {
      className,
      onBlur,
      onDelete,
      onInput,
      closeButtonLoading,
      closeButtonText,
      deleteButtonText,
      extraKey,
      teleport,
      randomKeyOrder,
      title,
      afterOpenChange,
      children,
      forwardedNodeRef,
      classNames,
      zIndex = 100,
      theme = 'default',
      hideOnClickOutside = true,
      transition = true,
      safeAreaInsetBottom = true,
      blurOnClose = true,
      maxLength = Infinity,
      ...props
    } = useThemeProps(NumberKeyboardName, _props);
    const [value, setValue] = useControllableValue(props);
    const domRef = useRef<HTMLDivElement | null>(null);
    const mergedRef = useMergeRefs(domRef, ref);
    const [keys, setKeys] = useState(() => getKeys(randomKeyOrder));
    const childRef = useRef<HTMLElement | null>(null);

    const [open, setOpen] = useControllableValue(props, {
      valuePropName: 'open',
      trigger: 'onOpenChange',
      defaultValue: false,
      defaultValuePropName: 'defaultOpen',
    });
    const childContent = isFunction(children) ? children(value, open) : children;
    const childMergedRef = useMergeRefs(
      childRef,
      // @ts-ignore
      React.isValidElement(childContent) ? childContent.ref : null,
    );

    const componentState: NumberKeyboardComponentState = useMemo(
      () => ({
        zIndex,
        open,
        theme,
      }),
      [theme, open, zIndex],
    );
    const slotClassNames = composeNumberKeyboardSlotClassNames(
      componentState,
      classNames,
    );

    const handleDelete = () => {
      onDelete?.();
      setValue(value ? value.slice(0, -1) : '');
    };
    const handleClose = () => {
      if (blurOnClose) {
        onBlur?.();
      }

      setOpen(false);
    };

    const handleInput = (key: string) => {
      if (!value || value.length < maxLength) {
        onInput?.(key);
        setValue((value || '') + key);
      }
    };

    const handleShow = () => {
      setOpen(true);
    };

    useUpdateEffect(() => {
      if (open) {
        setKeys(getKeys(randomKeyOrder));
      }
    }, [randomKeyOrder, open]);

    useClickAway(
      () => {
        onBlur?.();

        if (hideOnClickOutside && open) {
          setOpen(false);
        }
      },
      [domRef, childRef, forwardedNodeRef],
      {
        touchEvent: 'onTouchStart',
        mouseEvent: 'onClick',
      },
    );

    const createInputHandler = (key: string) => () => {
      if (key === KEYS.CLOSE) {
        handleClose();
      }
      else {
        handleInput(String(key));
      }
    };

    const renderDeleteButton = () => {
      return (
        <NumberKeyboardDeleteButton
          onClick={handleDelete}
          componentState={componentState}
          className={slotClassNames.deleteButton}
          activeStyle={activeStyles.key}
        >
          {deleteButtonText || (
            <NumberKeyboardDeleteIcon
              componentState={componentState}
              className={slotClassNames.deleteButton}
            />
          )}
        </NumberKeyboardDeleteButton>
      );
    };

    const renderExtraKey = () => {
      const defaultCollapseElem = (
        <NumberKeyboardCollapseIcon
          componentState={componentState}
          className={slotClassNames.collapseIcon}
        />
      );
      const internalExtraKey = toArray(extraKey)
        .filter(item => !isEmpty(item))
        .map(String) as string[];

      if (theme === 'default') {
        return [
          <NumberKeyboardKey
            key='extra'
            componentState={componentState}
            activeStyle={activeStyles.key}
            onClick={createInputHandler(internalExtraKey?.[0] || KEYS.CLOSE)}
          >
            {internalExtraKey?.[0] || defaultCollapseElem}
          </NumberKeyboardKey>,
        ];
      }

      if (!internalExtraKey || internalExtraKey.length === 0) {
        return [
          <NumberKeyboardKey
            componentState={componentState}
            key='extra'
            onClick={createInputHandler(KEYS.CLOSE)}
            activeStyle={activeStyles.key}
          >
            {defaultCollapseElem}
          </NumberKeyboardKey>,
        ];
      }

      return internalExtraKey.map((key, index) => (
        <NumberKeyboardKey
          componentState={componentState}
          onClick={createInputHandler(key)}
          key={key}
          activeStyle={activeStyles.key}
        >
          {internalExtraKey[index]}
        </NumberKeyboardKey>
      ));
    };

    const createZeroKey = (full?: boolean) => (
      <NumberKeyboardKey
        componentState={{ ...componentState, full }}
        onClick={createInputHandler(KEYS.ZERO)}
        activeStyle={activeStyles.key}
      >
        {KEYS.ZERO}
      </NumberKeyboardKey>
    );

    const renderRest = () => {
      const extraContent = renderExtraKey();

      if (theme === 'default') {
        return (
          <>
            {extraContent[0]}
            {createZeroKey()}
            {renderDeleteButton()}
          </>
        );
      }

      if (extraContent.length === 1) {
        return (
          <>
            {createZeroKey(true)}
            {extraContent[0]}
          </>
        );
      }

      return (
        <>
          {extraContent[0]}
          {createZeroKey()}
          {extraContent[1]}
        </>
      );
    };

    const renderHeader = () => {
      let visible = !!title;
      if (theme === 'default') {
        visible ||= !!closeButtonText;
      }

      return (
        visible && (
          <NumberKeyboardHeader
            componentState={componentState}
            className={slotClassNames.header}
          >
            {title && (
              <NumberKeyboardTitle
                componentState={componentState}
                className={slotClassNames.title}
              >
                {title}
              </NumberKeyboardTitle>
            )}
            {closeButtonText && theme === 'default' && (
              <NumberKeyboardCloseButton
                componentState={componentState}
                className={slotClassNames.closeButton}
                onClick={handleClose}
                activeStyle={activeStyles.normal}
              >
                {closeButtonText}
              </NumberKeyboardCloseButton>
            )}
          </NumberKeyboardHeader>
        )
      );
    };

    return (
      <>
        {React.isValidElement(childContent)
          ? React.cloneElement(childContent, {
            // @ts-ignore
            onClick: compose(childContent.props.onClick, handleShow),
            ref: childMergedRef,
          })
          : childContent}
        <NumberKeyboardRoot
          className={clsx(slotClassNames.root, className)}
          componentState={componentState}
          position='bottom'
          overlay={false}
          open={open}
          round={false}
          teleport={teleport}
          ref={mergedRef}
          safeArea={safeAreaInsetBottom}
          afterOpenChange={afterOpenChange}
          duration={transition ? undefined : 0}
          lockScroll={false}
          {...getDataOrAriaProps(props)}
        >
          {renderHeader()}
          <NumberKeyboardWrapper>
            <NumberKeyboardBody componentState={componentState}>
              {keys.slice(1).map(item => (
                <NumberKeyboardKey
                  componentState={componentState}
                  className={slotClassNames.key}
                  onClick={createInputHandler(item)}
                  key={item}
                  activeStyle={activeStyles.key}
                >
                  {item}
                </NumberKeyboardKey>
              ))}
              {renderRest()}
            </NumberKeyboardBody>
            {theme === 'custom' && (
              <NumberKeyboardSidebar
                className={slotClassNames.sidebar}
                componentState={componentState}
              >
                {renderDeleteButton()}
                <NumberKeyboardConfirmButton
                  onClick={handleClose}
                  disabled={closeButtonLoading}
                  activeStyle={activeStyles.normal}
                  componentState={componentState}
                  className={slotClassNames.confirmButton}
                >
                  {closeButtonLoading
                    ? (
                        <NumberKeyboardLoadingIcon
                          componentState={componentState}
                          className={slotClassNames.loadingIcon}
                        />
                      )
                    : (
                        closeButtonText
                      )}
                </NumberKeyboardConfirmButton>
              </NumberKeyboardSidebar>
            )}
          </NumberKeyboardWrapper>
        </NumberKeyboardRoot>
      </>
    );
  },
);

export default NumberKeyboard;

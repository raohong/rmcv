import {
  useClickAway,
  useControllableValue,
  useMergeRefs,
  useUpdateEffect,
} from '@rmc-vant/hooks';
import Icon from '@rmc-vant/icons';
import { compose, isEmpty, isFunction, toArray } from '@rmc-vant/utils';
import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import { getDataOrAriaProps } from '../_utils';
import { useConfigContext } from '../config-provider';
import Loading from '../loading';
import Popup from '../popup';
import Touchable from '../touchable';
import KeyboardKey from './KeyboardKey';
import { CollapseIcon, DeleteIcon } from './icons';
import type { NumberKeyboardProps } from './interface';

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
  (
    {
      className,
      onBlur,
      onDelete,
      onInput,
      closeButtonLoading,
      closeButtonText,
      deleteButtonText,
      zIndex,
      extraKey,
      teleport,
      randomKeyOrder,
      title,
      afterVisibleChange,
      children,
      forwardedNodeRef,
      theme = 'default',
      hideOnClickOutside = true,
      transition = true,
      safeAreaInsetBottom = true,
      blurOnClose = true,
      maxLength = Infinity,
      ...props
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
    const [value, setValue] = useControllableValue(props);
    const domRef = useRef<HTMLDivElement>(null);
    const mergedRef = useMergeRefs(domRef, ref);
    const [keys, setKeys] = useState(() => getKeys(randomKeyOrder));
    const childRef = useRef<HTMLElement>(null);

    // @ts-ignore
    const [visible, setVisible] = useControllableValue<boolean>(props, {
      valuePropName: 'visible',
      trigger: 'onVisibleChange',
      defaultValue: false,
      defaultValuePropName: 'defaultVisible',
    });
    const childContent = isFunction(children) ? children(value, visible) : children;
    const childMergedRef = useMergeRefs(
      childRef,
      // @ts-ignore
      React.isValidElement(childContent) ? childContent.ref : null,
    );

    const cls = getPrefixCls('number-keyboard');

    const handleDelete = () => {
      onDelete?.();
      setValue(value ? value.slice(0, -1) : '');
    };
    const handleClose = () => {
      if (blurOnClose) {
        onBlur?.();
      }

      setVisible(false);
    };

    const handleInput = (key: string) => {
      if (!value || value.length < maxLength) {
        onInput?.(key);
        setValue((value || '') + key);
      }
    };

    const handleShow = () => {
      setVisible(true);
    };

    useUpdateEffect(() => {
      if (visible) {
        setKeys(getKeys(randomKeyOrder));
      }
    }, [randomKeyOrder, visible]);

    useClickAway(
      () => {
        onBlur?.();

        if (hideOnClickOutside && visible) {
          setVisible(false);
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
      } else {
        handleInput(String(key));
      }
    };

    const renderDeleteButton = () => {
      return (
        <KeyboardKey onClick={handleDelete} className={`${cls}-delete-button`}>
          {deleteButtonText || (
            <Icon className={`${cls}-delete-icon`} component={DeleteIcon} />
          )}
        </KeyboardKey>
      );
    };

    const renderExtraKey = () => {
      const defaultCollapseElem = (
        <Icon className={`${cls}-collapse-icon`} component={CollapseIcon} />
      );
      const internalExtraKey = toArray(extraKey)
        .filter((item) => item !== '' && !isEmpty(item))
        .map(String) as string[];

      if (theme === 'default') {
        return [
          <KeyboardKey
            key="extra"
            onClick={createInputHandler(internalExtraKey?.[0] || KEYS.CLOSE)}
          >
            {internalExtraKey?.[0] || defaultCollapseElem}
          </KeyboardKey>,
        ];
      }

      if (!internalExtraKey || internalExtraKey.length === 0) {
        return [
          <KeyboardKey key="extra" onClick={createInputHandler(KEYS.CLOSE)}>
            {defaultCollapseElem}
          </KeyboardKey>,
        ];
      }

      return internalExtraKey.map((key, index) => (
        <KeyboardKey onClick={createInputHandler(key)} key={key}>
          {internalExtraKey[index]}
        </KeyboardKey>
      ));
    };

    const createZeroKey = (wider?: boolean) => (
      <KeyboardKey wider={wider} onClick={createInputHandler(KEYS.ZERO)}>
        {KEYS.ZERO}
      </KeyboardKey>
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
          <div className={`${cls}-header`}>
            {title && <h3 className={`${cls}-title`}>{title}</h3>}
            {closeButtonText && theme === 'default' && (
              <Touchable
                component="button"
                tabIndex={0}
                activeClassName={`${cls}-haptic-active`}
                className={`${cls}-close-button`}
                onClick={handleClose}
              >
                {closeButtonText}
              </Touchable>
            )}
          </div>
        )
      );
    };

    const child =
      childContent && React.Children.only(childContent) ? childContent : null;

    return (
      <>
        {React.isValidElement(child)
          ? React.cloneElement(child, {
              onClick: compose(child.props.onClick, handleShow),
              ref: childMergedRef,
            })
          : child}
        <Popup
          className={classNames(
            cls,
            {
              [`${cls}-theme-${theme}`]: theme === 'custom',
            },
            className,
          )}
          style={{ zIndex }}
          position="bottom"
          overlay={false}
          visible={visible}
          round={false}
          teleport={teleport}
          ref={mergedRef}
          safeArea={safeAreaInsetBottom}
          afterVisibleChange={afterVisibleChange}
          duration={transition ? undefined : 0}
          lockScroll={false}
          {...getDataOrAriaProps(props)}
        >
          {renderHeader()}
          <div className={`${cls}-body`}>
            <div className={`${cls}-main`}>
              {keys.slice(1).map((item) => (
                <KeyboardKey onClick={createInputHandler(item)} key={item}>
                  {item}
                </KeyboardKey>
              ))}
              {renderRest()}
            </div>
            {theme === 'custom' && (
              <div className={`${cls}-sidebar`}>
                {renderDeleteButton()}
                <KeyboardKey
                  activeClassName={`${cls}-haptic-active`}
                  className={`${cls}-custom-close-button`}
                  onClick={handleClose}
                  disabled={closeButtonLoading}
                >
                  {closeButtonLoading ? (
                    <Loading className={`${cls}-loading-icon`} />
                  ) : (
                    closeButtonText
                  )}
                </KeyboardKey>
              </div>
            )}
          </div>
        </Popup>
      </>
    );
  },
);

export default NumberKeyboard;

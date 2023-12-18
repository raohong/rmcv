import { useIsomorphicLayoutEffect } from '@rmc-vant/hooks';
import { isEmpty, isNumber, omit } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useThemeProps } from '../config-provider';
import { PasswordInputName, composePasswordInputSlotClassNames } from './classNames';
import type { PasswordInputComponentState, PasswordInputProps } from './interface';
import {
  PasswordInputCursor,
  PasswordInputInfo,
  PasswordInputInner,
  PasswordInputItem,
  PasswordInputMask,
  PasswordInputPlaceholder,
  PasswordInputRoot,
} from './styles';

const getItemList = (length: number) => {
  return Array.from(
    { length: isNumber(length) ? Math.max(0, length) : 0 },
    (_, i) => i,
  );
};

const PasswordInput = React.forwardRef<HTMLLabelElement, PasswordInputProps>(
  (props, ref) => {
    const {
      onFocus,
      className,
      gutter,
      value,
      info,
      errorInfo,
      classNames,
      mask = true,
      length = 6,
      ...rest
    } = useThemeProps(PasswordInputName, props);
    const has = 'focused' in rest;
    const focusedFromProps = !!rest.focused;
    const innerDOMRef = useRef<HTMLDivElement>(null);

    const [focused, setFocused] = useState(has ? focusedFromProps : false);
    const [hasGutter, setHasGutter] = useState(() => {
      if (isEmpty(gutter)) {
        return true;
      }

      const target = parseFloat(String(gutter));

      return Number.isNaN(target) ? true : target > 0;
    });

    const internalFocused = has ? focusedFromProps : focused;
    const hasErrorInfo = !isEmpty(errorInfo);

    const componentState: PasswordInputComponentState = useMemo(
      () => ({
        mask,
        gutter,
        focused: internalFocused,
        inset: hasGutter,
        errorInfo: hasErrorInfo,
      }),
      [internalFocused, hasGutter, mask, gutter, hasErrorInfo],
    );
    const slotClassNames = composePasswordInputSlotClassNames(
      componentState,
      classNames,
    );

    const handleFocus = () => {
      onFocus?.();

      if (!has) {
        setFocused(true);
      }
    };

    const handleBlur = () => {
      if (!has) {
        setFocused(false);
      }
    };

    useEffect(() => {
      if (!has) {
        setFocused(focusedFromProps);
      }
    }, [has, focusedFromProps]);

    useIsomorphicLayoutEffect(() => {
      const el = innerDOMRef.current;
      if (!el) {
        return;
      }

      const gap = parseFloat(getComputedStyle(el).columnGap);

      setHasGutter(gap > 0);
    }, [gutter, innerDOMRef]);

    const itemList = useMemo(() => getItemList(length), [length]);
    const internalValue = isEmpty(value) ? '' : String(value).slice(0, length);
    const currentValueLength = internalValue.length;
    const valueList = internalValue.split('');

    return (
      <PasswordInputRoot
        className={clsx(className, slotClassNames.root)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        componentState={componentState}
        ref={ref}
        {...omit(rest, ['focused'])}
      >
        <PasswordInputInner componentState={componentState} ref={innerDOMRef}>
          {itemList.map((item, index) => {
            let content: React.ReactNode = valueList[item];

            if (index === currentValueLength && internalFocused) {
              content = (
                <PasswordInputCursor
                  className={slotClassNames.cursor}
                  componentState={componentState}
                />
              );
            } else if (mask && index < currentValueLength) {
              content = (
                <PasswordInputMask
                  componentState={componentState}
                  className={slotClassNames.mask}
                />
              );
            }

            return (
              <PasswordInputItem
                componentState={componentState}
                key={item}
                className={slotClassNames.item}
              >
                {content}
              </PasswordInputItem>
            );
          })}
          <PasswordInputPlaceholder
            value={internalValue}
            maxLength={length}
            type="password"
          />
        </PasswordInputInner>
        <PasswordInputInfo
          componentState={componentState}
          className={slotClassNames.info}
        >
          {hasErrorInfo ? errorInfo : info}
        </PasswordInputInfo>
      </PasswordInputRoot>
    );
  },
);

export default PasswordInput;

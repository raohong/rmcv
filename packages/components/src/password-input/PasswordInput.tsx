import { useIsomorphicLayoutEffect } from '@rmc-vant/hooks';
import { isEmpty, isNumber, omit } from '@rmc-vant/utils';
import classNames from 'classnames';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useConfigContext } from '../config-provider';
import type { PasswordInputProps } from './interface';

const getItemList = (length: number) => {
  return Array.from(
    { length: isNumber(length) ? Math.max(0, length) : 0 },
    (_, i) => i,
  );
};

const PasswordInput = React.forwardRef<HTMLLabelElement, PasswordInputProps>(
  (
    {
      onFocus,
      className,
      errorInfo,
      info,
      gutter,
      value,
      mask = true,
      length = 6,
      ...props
    },
    ref,
  ) => {
    const has = 'focused' in props;
    const focusedFromProps = !!props.focused;
    const innerDOMRef = useRef<HTMLDivElement>(null);

    const { getPrefixCls } = useConfigContext();
    const cls = getPrefixCls('password-input');
    const [focused, setFocused] = useState(has ? focusedFromProps : false);
    const [hasGutter, setHasGutter] = useState(() => {
      if (isEmpty(gutter)) {
        return true;
      }

      const target = parseFloat(String(gutter));

      return Number.isNaN(target) ? true : target > 0;
    });

    const internalFocused = has ? focusedFromProps : focused;

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
      <label
        className={classNames(
          cls,
          { [`${cls}-focused`]: internalFocused },
          className,
        )}
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={ref}
        {...omit(props, ['focused'])}
      >
        <div
          style={{
            columnGap: gutter,
          }}
          ref={innerDOMRef}
          className={classNames(`${cls}-inner`, !hasGutter && `${cls}-inner-inset`)}
        >
          {itemList.map((item, index) => {
            let content: React.ReactNode = valueList[item];

            if (index === currentValueLength && internalFocused) {
              content = <span className={`${cls}-cursor`} />;
            } else if (mask && index < currentValueLength) {
              content = <span className={`${cls}-mask-dot`} />;
            }

            return (
              <div key={item} className={`${cls}-item`}>
                {content}
              </div>
            );
          })}
          <input
            value={internalValue}
            maxLength={length}
            type="password"
            className={`${cls}-input`}
          />
        </div>
        <div
          className={classNames(
            `${cls}-info`,
            !isEmpty(errorInfo) && `${cls}-error-info`,
          )}
        >
          {isEmpty(errorInfo) ? info : errorInfo}
        </div>
      </label>
    );
  },
);

export default PasswordInput;

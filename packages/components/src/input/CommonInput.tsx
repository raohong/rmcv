import { useControllableValue } from '@rmc-vant/hooks';
import { ClearFilled } from '@rmc-vant/icons';
import { isEmpty, isNumber, omit } from '@rmc-vant/utils';
import classNames from 'classnames';
import React, { useState } from 'react';
import { useConfigContext } from '../config-provider';
import Touchable from '../touchable';
import type { CommonInputProps } from './interface';

const CommonInput = (
  {
    className,
    size,
    maxLength,
    placeholder,
    border,
    readonly,
    disabled,
    formatter,
    onBlur,
    onFocus,
    clearIcon,
    clearTrigger,
    clearable,
    suffix,
    addonAfter,
    addonBefore,
    prefix,
    onClear,
    showWorldLimit,
    onInput,
    inputAlign,
    wrapperProps,
    inputRef,
    component = 'input',
    formatTrigger = 'onChange',
    ...props
  }: CommonInputProps,
  ref: React.Ref<any>,
) => {
  const { getPrefixCls } = useConfigContext();
  const [value, setValue] = useControllableValue<string | undefined>(props);
  const [focused, setFocused] = useState(false);

  const internalMaxLength =
    isNumber(maxLength) && maxLength >= 0 ? maxLength : Infinity;

  const handleFocus = (
    evt: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    (onFocus as React.FormEventHandler<HTMLInputElement | HTMLTextAreaElement>)?.(
      evt,
    );
    setFocused(true);
  };

  const handleBlur = (
    evt: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLTextAreaElement>,
  ) => {
    (onBlur as React.FormEventHandler<HTMLInputElement | HTMLTextAreaElement>)?.(
      evt,
    );
    setFocused(false);

    if (formatTrigger === 'onBlur' && formatter && value) {
      setValue(formatter(value)?.slice(0, internalMaxLength));
    }
  };

  const handleChange = (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    let nextValue = evt.target.value;

    if (formatTrigger === 'onChange' && formatter) {
      nextValue = formatter(nextValue);
    }

    setValue(nextValue?.slice(0, internalMaxLength));
  };

  const handleClear = () => {
    setValue('');
    onClear?.();
  };

  const cls = getPrefixCls('input');

  const clearIconVisible =
    clearable && (clearTrigger === 'focus' ? focused : true) && !!value;
  const counterVisible = isNumber(maxLength) && maxLength >= 0 && showWorldLimit;
  const Com = component;

  return (
    <div
      ref={ref}
      {...wrapperProps}
      className={classNames(`${cls}-wrapper`, wrapperProps?.className)}
    >
      <div className={`${cls}-container`}>
        {!isEmpty(addonBefore) && (
          <span className={`${cls}-addon-before`}>{addonBefore}</span>
        )}
        {!isEmpty(prefix) && <span className={`${cls}-prefix`}>{prefix}</span>}
        <Com
          onBlur={handleBlur}
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder={placeholder}
          maxLength={internalMaxLength}
          value={value ?? ''}
          className={classNames(
            cls,
            {
              [`${cls}-disabled`]: disabled,
              [`${cls}-focused`]: focused,
              [`${cls}-readonly`]: readonly,
              [`${cls}-align-${inputAlign}`]: inputAlign && inputAlign !== 'left',
            },
            className,
          )}
          disabled={disabled}
          readOnly={readonly}
          ref={inputRef as unknown as React.Ref<any>}
          {...omit(props as any, ['children', 'onChange', 'defaultValue', 'value'])}
        />

        {clearIconVisible && (
          <Touchable onClick={handleClear} component="button">
            {isEmpty(clearIcon) ? (
              <ClearFilled className={`${cls}-clear-icon`} />
            ) : (
              clearIcon
            )}
          </Touchable>
        )}
        {!isEmpty(suffix) && <span className={`${cls}-suffix`}>{suffix}</span>}
        {counterVisible && component === 'input' && (
          <span className={classNames(`${cls}-counter`)}>
            {(value || '').length} / {maxLength}
          </span>
        )}
        {!isEmpty(addonAfter) && (
          <span className={`${cls}-addon-after`}>{addonAfter}</span>
        )}
      </div>
      {counterVisible && component === 'textarea' && (
        <span className={classNames(`${cls}-counter`, `${cls}-textarea-counter`)}>
          {(value || '').length} / {maxLength}
        </span>
      )}
    </div>
  );
};

export default React.forwardRef(CommonInput);

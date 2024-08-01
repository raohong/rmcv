import { useControllableValue } from '@rmc-vant/hooks';
import { isEmpty, isNumber, omit } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useMemo, useState } from 'react';
import { useThemeProps } from '../config-provider';
import { Touchable } from '../touchable';
import { InputName, composeInputSlotClassNames } from './classNames';
import type { CommonInputProps, InputComponentState } from './interface';

const CommonInput = (
  { inputType, ...props }: CommonInputProps,
  ref: React.Ref<any>,
) => {
  const {
    status,
    className,
    maxLength,
    placeholder,
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
    wrapperProps,
    inputRef,
    classNames,
    styledComponents,
    inputAlign = 'left',
    border = false,
    readonly = false,
    disabled = false,
    formatTrigger = 'onChange',
    ...rest
  } = useThemeProps(inputType, props);
  // @ts-ignore
  const [value, setValue] = useControllableValue(props as Pick<CommonInputProps, 'value' | 'onChange'>);
  const [focused, setFocused] = useState(false);

  const internalMaxLength
    = isNumber(maxLength) && maxLength >= 0 ? maxLength : Infinity;

  const componentState = useMemo<InputComponentState>(
    () => ({
      focused,
      readonly,
      border,
      disabled,
      inputAlign,
      inputType,
      status,
    }),
    [focused, readonly, border, disabled, inputAlign, inputType, status],
  );
  const slotClassNames = composeInputSlotClassNames(componentState, classNames);

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

  const clearIconVisible
    = clearable && (clearTrigger === 'focus' ? focused : true) && !!value;
  const counterVisible = isNumber(maxLength) && maxLength >= 0 && showWorldLimit;

  const {
    StyledAddonAfter,
    StyledAddonBefore,
    StyledClearIcon,
    StyledSuffix,
    StyledRoot,
    StyledCounter,
    StyledPrefix,
    StyledInput,
    StyledContainer,
  } = styledComponents;

  const content = (
    <>
      {!isEmpty(addonBefore) && (
        <StyledAddonBefore
          className={slotClassNames.addonBefore}
          componentState={componentState}
        >
          {addonBefore}
        </StyledAddonBefore>
      )}
      {!isEmpty(prefix) && (
        <StyledPrefix
          componentState={componentState}
          className={slotClassNames.prefix}
        >
          {prefix}
        </StyledPrefix>
      )}
      <StyledInput
        as={inputType === InputName ? 'input' : 'textarea'}
        onBlur={handleBlur}
        onChange={handleChange}
        onFocus={handleFocus}
        placeholder={placeholder}
        maxLength={internalMaxLength === Infinity ? undefined : internalMaxLength}
        value={value ?? ''}
        className={clsx(className, slotClassNames.input)}
        disabled={disabled}
        readOnly={readonly}
        ref={inputRef as unknown as React.Ref<any>}
        {...omit(rest as any, ['children', 'onChange', 'defaultValue', 'value'])}
        componentState={componentState}
      />
      {clearIconVisible && (
        <Touchable onClick={handleClear} component='button'>
          {isEmpty(clearIcon)
            ? (
                <StyledClearIcon
                  className={slotClassNames.clearIcon}
                  componentState={componentState}
                />
              )
            : (
                clearIcon
              )}
        </Touchable>
      )}
      {!isEmpty(suffix) && (
        <StyledSuffix
          componentState={componentState}
          className={slotClassNames.suffix}
        >
          {suffix}
        </StyledSuffix>
      )}
      {counterVisible && inputType === InputName && (
        <StyledCounter
          className={slotClassNames.counter}
          componentState={componentState}
        >
          {(value || '').length}
          {' '}
          /
          {maxLength}
        </StyledCounter>
      )}
      {!isEmpty(addonAfter) && (
        <StyledAddonAfter
          className={slotClassNames.addonAfter}
          componentState={componentState}
        >
          {addonAfter}
        </StyledAddonAfter>
      )}
    </>
  );

  return (
    <StyledRoot
      ref={ref}
      {...wrapperProps}
      className={clsx(wrapperProps?.className, slotClassNames.root)}
      componentState={componentState}
    >
      {inputType === InputName
        ? (
            content
          )
        : (
            <>
              <StyledContainer>{content}</StyledContainer>
              {counterVisible && (
                <StyledCounter
                  className={slotClassNames.counter}
                  componentState={componentState}
                >
                  {(value || '').length}
                  {' '}
                  /
                  {maxLength}
                </StyledCounter>
              )}
            </>
          )}
    </StyledRoot>
  );
};

export default React.forwardRef(CommonInput);

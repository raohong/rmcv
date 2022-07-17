import React, { useImperativeHandle, useRef } from 'react';
import CommonInput from './CommonInput';
import { InputProps, InputRef, InputType } from './interface';

const inputModeMap: Partial<Record<InputType, InputProps['inputMode']>> = {
  digit: 'decimal',
  number: 'numeric',
  email: 'email',
  tel: 'tel',
  text: 'text',
};

const getInputMode = (type?: InputType) => {
  if (!type) {
    return undefined;
  }

  return type in inputModeMap ? inputModeMap[type] : undefined;
};

const Input = React.forwardRef<InputRef, InputProps>(
  ({ type, className, style, wrapperProps, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus?.(),
      blur: () => inputRef.current?.blur?.(),
    }));

    return (
      <CommonInput
        inputRef={inputRef}
        {...props}
        inputMode={getInputMode(type)}
        wrapperProps={{
          className,
          style,
          ...wrapperProps,
        }}
        type={type}
      />
    );
  },
);

export default Input;

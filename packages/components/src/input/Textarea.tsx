import { useControllableValue, useIsomorphicLayoutEffect } from '@rmc-vant/hooks';
import { isNumber, isPlainObject, omit } from '@rmc-vant/utils';
import React, { useImperativeHandle, useMemo, useRef } from 'react';
import CommonInput from './CommonInput';
import { TextareaName } from './classNames';
import type { InputRef, TextareaAutoSize, TextareaProps } from './interface';
import { TextareaStyledComponents } from './styles';

const getRows = (autoSize?: TextareaAutoSize) => {
  if (!isPlainObject(autoSize)) {
    return {
      minRows: 1,
      maxRows: Infinity,
    };
  }

  return {
    minRows:
      autoSize.minRows && isNumber(autoSize.minRows)
        ? Math.max(1, autoSize.minRows)
        : 1,
    maxRows:
      autoSize.maxRows && isNumber(autoSize.maxRows)
        ? Math.max(1, autoSize.maxRows)
        : Infinity,
  };
};

const Textarea = React.forwardRef<InputRef, TextareaProps>(
  ({ autoSize, className, style, wrapperProps, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useControllableValue(props);

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus?.(),
      blur: () => inputRef.current?.blur?.(),
    }));

    const autoResizable = !!autoSize;
    const { minRows, maxRows } = useMemo(() => getRows(autoSize), [autoSize]);

    useIsomorphicLayoutEffect(() => {
      const dom = inputRef.current;

      if (!dom || !autoResizable) {
        return;
      }

      const styles = getComputedStyle(dom);
      const isBorderBox = styles.boxSizing === 'borderBox';
      const lineHeight = Number.parseFloat(styles.lineHeight);
      const padding
        = Number.parseFloat(styles.paddingTop)
        + Number.parseFloat(styles.paddingBlockStart)
        + Number.parseFloat(styles.borderTop)
        + Number.parseFloat(styles.borderBottom);
      const extraHeight = isBorderBox ? padding : 0;

      dom.style.overflow = 'auto';

      dom.style.minHeight = `${minRows * lineHeight + extraHeight}px`;
      if (maxRows !== Infinity) {
        dom.style.maxHeight = `${maxRows * lineHeight + extraHeight}px`;
      }

      return () => {
        dom.style.minHeight = '';
        dom.style.overflow = '';

        if (maxRows !== Infinity) {
          dom.style.maxHeight = '';
        }
      };
    }, [minRows, maxRows, autoResizable]);

    useIsomorphicLayoutEffect(() => {
      const dom = inputRef.current;

      if (!dom || !autoResizable) {
        return;
      }

      const height = dom.scrollHeight;

      dom.style.height = `${height}px`;

      return () => {
        dom.style.height = '';
      };
    }, [autoResizable, value]);

    return (
      <CommonInput
        inputType={TextareaName}
        inputRef={inputRef}
        value={value}
        onChange={setValue}
        wrapperProps={{
          className,
          style,
          ...wrapperProps,
        }}
        styledComponents={TextareaStyledComponents}
        {...omit(props, ['value', 'onChange', 'defaultValue'])}
      />
    );
  },
);

export default Textarea;

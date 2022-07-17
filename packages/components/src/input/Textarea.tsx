import classNames from 'classnames';
import { useControllableValue, useIsomorphicLayoutEffect } from '@rmc-vant/hooks';
import { omit, isPlainObject } from '@rmc-vant/utils';
import React, { useImperativeHandle, useMemo, useRef } from 'react';
import { useConfigContext } from '../config-provider';
import CommonInput from './CommonInput';
import type { InputRef, TextareaAutoSize, TextareaProps } from './interface';

const getRows = (autoSize?: TextareaAutoSize) => {
  if (!isPlainObject(autoSize)) {
    return {
      minRows: 1,
      maxRows: Infinity,
    };
  }

  return {
    minRows: autoSize.minRows ? Math.max(1, autoSize.minRows) : 1,
    maxRows: autoSize.maxRows ? Math.max(1, autoSize.maxRows) : Infinity,
  };
};

const Textarea = React.forwardRef<InputRef, TextareaProps>(
  ({ autoSize, className, style, wrapperProps, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useControllableValue<string | undefined>(props);
    const { getPrefixCls } = useConfigContext();

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
      const lineHeight = parseFloat(styles.lineHeight);
      const padding =
        parseFloat(styles.paddingTop) +
        parseFloat(styles.paddingBlockStart) +
        parseFloat(styles.borderTop) +
        parseFloat(styles.borderBottom);
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
        className={classNames(autoResizable && getPrefixCls('input-auto-resize'))}
        component="textarea"
        inputRef={inputRef}
        value={value}
        onChange={setValue}
        wrapperProps={{
          className,
          style,
          ...wrapperProps,
        }}
        {...omit(props, ['value', 'onChange', 'defaultValue'])}
      />
    );
  },
);

export default Textarea;

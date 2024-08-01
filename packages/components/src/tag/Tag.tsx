import { useControllableValue } from '@rmc-vant/hooks';
import { Cross } from '@rmc-vant/icons';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import { useThemeProps } from '../config-provider';
import { TagName, composeTagSlotClassNames } from './classNames';
import type { TagComponentState, TagProps } from './interface';
import { TagRoot } from './styles';

const Tag = React.forwardRef<HTMLSpanElement, TagProps>((props, ref) => {
  const {
    color,
    textColor,
    closeable,
    className,
    children,
    classNames,
    shape = 'default',
    variant = 'contained',
    size = 'small',
    type = 'primary',
    ...rest
  } = useThemeProps(TagName, props);

  const [visible, setVisible] = useControllableValue(props, {
    valuePropName: 'show',
    trigger: 'onClose',
    defaultValue: true,
  });

  const componentState: TagComponentState = useMemo(
    () => ({
      color,
      textColor,
      variant,
      type,
      size,
      shape,
    }),
    [variant, color, textColor, type, size, shape],
  );
  const slotClassNames = composeTagSlotClassNames(componentState, classNames);

  return (
    <>
      {visible && (
        <TagRoot
          ref={ref}
          className={clsx(slotClassNames.root, className)}
          {...rest}
          componentState={componentState}
        >
          {children}
          {closeable && (
            <Cross onClick={() => setVisible(false)} role-label='Close' />
          )}
        </TagRoot>
      )}
    </>
  );
});

export default Tag;

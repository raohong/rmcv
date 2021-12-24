import classNames from 'classnames';
import React, { useState } from 'react';
import { Cross } from '@rmc-vant/icons';
import { useConfigContext } from '../config-provider';
import type { TagProps } from './interface';

const getTagShape = ({
  plain,
  round,
  mark,
}: {
  plain?: boolean;
  round?: boolean;
  mark?: boolean;
}) => {
  if (plain) {
    return 'plain';
  }

  if (round) {
    return 'round';
  }

  if (mark) {
    return 'mark';
  }

  return null;
};

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  (
    {
      plain,
      round,
      color,
      mark,
      textColor,
      closeable,
      onClick,
      className,
      style,
      children,
      size,
      type = 'primary',
      ...rest
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
    const [visible, setVisible] = useState(true);

    const handleClick: React.MouseEventHandler<HTMLSpanElement> = (evt) => {
      if (closeable) {
        setVisible(false);
      }
      onClick?.(evt);
    };

    const baseCls = getPrefixCls('tag');
    const shape = getTagShape({
      plain,
      mark,
      round,
    });
    const cls = classNames(
      baseCls,
      {
        [`${baseCls}-${type}`]: type,
        [`${baseCls}-${shape}`]: shape,
        [`${baseCls}-${size}`]: size,
      },
      className,
    );

    const styles: React.CSSProperties = {
      color: textColor,
    };

    if (plain) {
      styles.borderColor = textColor ?? color;
    } else {
      styles.backgroundColor = color;
    }

    return (
      <>
        {visible && (
          <span
            ref={ref}
            className={cls}
            style={{
              ...styles,
              ...style,
            }}
            onClick={handleClick}
            {...rest}
          >
            {children}
            {closeable && (
              <Cross className={`${baseCls}-close-icon`} role-label="Close" />
            )}
          </span>
        )}
      </>
    );
  },
);

export default Tag;

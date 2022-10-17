import { useControllableValue } from '@rmc-vant/hooks';
import { Cross } from '@rmc-vant/icons';
import classNames from 'classnames';
import React from 'react';
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

const Tag = React.forwardRef<HTMLSpanElement, TagProps>((props, ref) => {
  const { getPrefixCls } = useConfigContext();
  const {
    plain,
    round,
    color,
    mark,
    textColor,
    closeable,
    className,
    style,
    children,
    size = 'small',
    type = 'primary',
    ...rest
  } = props;
  const [visible, setVisible] = useControllableValue(props, {
    valuePropName: 'visible',
    trigger: 'onClose',
    defaultValue: true,
  });

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
      [`${baseCls}-size-${size}`]: size !== 'small',
    },
    className,
  );

  const styles: React.CSSProperties = {
    color: plain ? textColor ?? color : textColor,
    backgroundColor: plain ? undefined : color,
  };

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
          {...rest}
        >
          {children}
          {closeable && (
            <Cross
              onClick={() => setVisible(false)}
              className={`${baseCls}-close-icon`}
              role-label="Close"
            />
          )}
        </span>
      )}
    </>
  );
});

export default Tag;

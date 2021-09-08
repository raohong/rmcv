import classNames from 'classnames';
import React, { useState } from 'react';
import { Cross } from '@rmc-vant/icons';
import { useConfigContext } from '../config-provider';

export type TagType = 'success' | 'primary' | 'danger' | 'warning';
export type TagSize = 'small' | 'large';

export type TagProps = {
  /**
   * @description 类型
   */
  type?: TagType;
  /**
   * @description size
   */
  size?: TagSize;
  /**
   * @description 是否为空心样式
   */
  plain?: boolean;
  /**
   * 是否为圆角样式
   */
  round?: boolean;
  /**
   * @description 是否为标记样式
   */
  mark?: boolean;
  /**
   * @description 背景色， plain 时 border-color 会设置为 color
   */
  color?: string;
  /**
   * @description 字体颜色, plain 时 border-color 颜色优先于 color
   */
  textColor?: string;
  /**
   * @description 是否可关闭
   */
  closeable?: boolean;
  /**
   * @description 自定义 class
   */
  className?: string;
  /**
   * @description 自定义 style
   */
  style?: React.CSSProperties;
  /**
   * @description 关闭回调
   */
  onClose?: () => void;
  /**
   * @description 点击事件
   */
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
  /**
   * @description 内容
   */
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLSpanElement>;

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

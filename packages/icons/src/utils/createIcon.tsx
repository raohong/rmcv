import React from 'react';
import classnames from 'classnames';
import kebabCase from './kebabCase';
import type { IconComponentProps, IconProps } from '../interface';

const createIcon = (
  SvgComponent: React.FC<IconComponentProps>,
  displayName: string,
) => {
  const InternalIcon = React.forwardRef(
    (
      { className, style, color, size, ...props }: IconProps,
      ref: React.Ref<HTMLSpanElement>,
    ) => {
      return (
        <span
          ref={ref}
          className={classnames('rmc-vant-icon', className)}
          role="img"
          aria-label={kebabCase(displayName)}
          style={{
            color,
            fontSize: size,
            ...style,
          }}
          {...props}
        >
          <SvgComponent width="1em" height="1em" fill="currentColor" />
        </span>
      );
    },
  );

  InternalIcon.displayName = `ForwardRefExotic${displayName}`;

  return InternalIcon;
};

export default createIcon;

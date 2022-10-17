import classnames from 'classnames';
import React from 'react';
import type { RootIconProps } from '../interface';

const Icon = (
  { component: Com, className, color, style, size, ...rest }: RootIconProps,
  ref: React.Ref<HTMLSpanElement>,
) => {
  return (
    <span
      className={classnames('rmc-vant-icon', className)}
      role="img"
      ref={ref}
      style={{
        color,
        fontSize: size,
        ...rest,
      }}
      {...rest}
    >
      <Com width="1em" height="1em" fill="currentColor" {...rest} />
    </span>
  );
};

export default React.forwardRef(Icon);

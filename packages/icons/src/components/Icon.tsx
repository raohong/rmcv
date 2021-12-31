import React from 'react';
import classnames from 'classnames';
import type { RootIconProps } from '../interface';

const Icon = (
  { component: Com, className, ...rest }: RootIconProps,
  ref: React.Ref<HTMLSpanElement>,
) => {
  return (
    <span
      className={classnames('rmc-vant-icon', className)}
      role="img"
      ref={ref}
      {...rest}
    >
      <Com width="1em" height="1em" fill="currentColor" {...rest} />
    </span>
  );
};

export default React.forwardRef(Icon);

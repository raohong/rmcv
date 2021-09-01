import React from 'react';
import classnames from 'classnames';
import kebabCase from './kebabCase';
import type { IconComponentProps, IconProps } from '../type';

const createIcon = (
  SvgComponent: React.FC<IconComponentProps>,
  displayName: string,
) => {
  const InternalIcon = React.forwardRef(
    ({ className, ...props }: IconProps, ref: React.Ref<HTMLSpanElement>) => {
      return (
        <span
          {...props}
          ref={ref}
          className={classnames('rmc-vant-icon', className)}
          role="img"
          aria-label={kebabCase(displayName)}
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

import React from 'react';
import Icon from '../components/Icon';
import type { IconComponentProps, IconProps } from '../interface';
import kebabCase from './kebabCase';

const createIcon = (
  SvgComponent: React.FC<IconComponentProps>,
  displayName: string,
) => {
  const InternalIcon = React.forwardRef<
    HTMLSpanElement,
    IconComponentProps & React.HTMLAttributes<HTMLSpanElement> & IconProps
  >((props, ref) => {
    return (
      <Icon
        component={SvgComponent}
        ref={ref}
        aria-label={kebabCase(displayName)}
        {...props}
      />
    );
  });

  InternalIcon.displayName = displayName;

  return InternalIcon;
};

export default createIcon;

import clsx from 'clsx';
import React, { useMemo } from 'react';
import { createOverridableComponent } from '../_utils';
import { useThemeProps } from '../config-provider';
import { ColName, colClassNames } from './classNames';
import type { ColComponentState, ColProps } from './interface';
import { ColRoot } from './styles';

const Col = React.forwardRef<HTMLDivElement, ColProps>((props, ref) => {
  const {
    span,
    offset,
    className,
    component = 'div',
    ...rest
  } = useThemeProps(ColName, props);

  const componentState: ColComponentState = useMemo(
    () => ({
      span,
      offset,
    }),
    [span, offset],
  );

  return (
    <ColRoot
      ref={ref}
      className={clsx(className, colClassNames.root)}
      componentState={componentState}
      as={component}
      {...rest}
    />
  );
});

export default createOverridableComponent(Col);

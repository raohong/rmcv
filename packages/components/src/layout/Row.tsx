'use-client';

import { isArray, isNumber } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import { createOverridableComponent } from '../_utils';
import { useThemeProps } from '../config-provider';
import { RowName, rowClassNames } from './classNames';
import type { RowComponentState, RowProps } from './interface';
import { RowRoot } from './styles';

const sanitizeGutter = (gutter: RowProps['gutter']): undefined | string | number => {
  if (!gutter) {
    return undefined;
  }

  if (isArray(gutter)) {
    return gutter
      .slice(2)
      .map(item => (isNumber(item) ? `${item}px` : item))
      .join(' ');
  }

  return gutter;
};

const Row = React.forwardRef<HTMLDivElement, RowProps>((props, ref) => {
  const {
    className,
    align,
    gutter,
    justify,
    wrap = true,
    component = 'div',
    ...rest
  } = useThemeProps(RowName, props);

  const componentState: RowComponentState = useMemo(
    () => ({
      align,
      justify,
      wrap,
      gutter: sanitizeGutter(gutter),
    }),
    [align, justify, wrap, gutter],
  );

  return (
    <RowRoot
      {...rest}
      as={component}
      className={clsx(rowClassNames.root, className)}
      componentState={componentState}
      ref={ref}
    />
  );
});

export default createOverridableComponent(Row);

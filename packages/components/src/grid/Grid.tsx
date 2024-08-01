import clsx from 'clsx';
import React, { useMemo } from 'react';
import { createOverridableComponent } from '../_utils';
import { useThemeProps } from '../config-provider';
import { GridName, composeGridSlotClassNames } from './classNames';
import GridItem from './GridItem';
import type { GridComponentState, GridProps } from './interface';
import { GridRoot } from './styles';

const Grid = React.forwardRef<HTMLDivElement, GridProps>((props, ref) => {
  const {
    children,
    className,
    items,
    classNames,
    iconSize = 28,
    clickable = true,
    square = false,
    gutter = 0,
    direction = 'vertical',
    border = true,
    center = true,
    column = 4,
    component = 'div',
    ...rest
  } = useThemeProps(GridName, props);
  const componentState: GridComponentState = useMemo(
    () => ({
      iconSize,
      square,
      gutter,
      direction,
      column,
      center,
      border,
      clickable,
    }),
    [iconSize, square, gutter, direction, column, center, border, clickable],
  );
  const slotClassNames = composeGridSlotClassNames(componentState, classNames);

  return (
    <GridRoot
      ref={ref}
      className={clsx(slotClassNames.root, className)}
      {...rest}
      as={component}
      componentState={componentState}
    >
      {items?.map(item => (
        <GridItem
          key={item.key}
          {...item}
          slotClassNames={slotClassNames}
          componentState={componentState}
        />
      ))}
    </GridRoot>
  );
});

export default createOverridableComponent(Grid);

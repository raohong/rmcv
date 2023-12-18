import clsx from 'clsx';
import React, { useMemo } from 'react';
import { createOverridableComponent } from '../_utils';
import GridItem from './GridItem';
import { composeGridSlotClassNames } from './classNames';
import type { GridComponentState, GridProps } from './interface';
import { GridRoot } from './styles';

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (
    {
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
    },
    ref,
  ) => {
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
        componentState={componentState}
        {...rest}
        as={component}
      >
        {items?.map((item) => (
          <GridItem
            key={item.key}
            {...item}
            slotClassNames={slotClassNames}
            componentState={componentState}
          />
        ))}
      </GridRoot>
    );
  },
);

export default createOverridableComponent(Grid);

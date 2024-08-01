import { isEmpty, isNil } from '@rmc-vant/utils';
import clsx from 'clsx';
import React from 'react';
import { Badge } from '../badge';
import type { GridItemProps } from './interface';
import { GridIcon, GridLabel, StyledGridItem, StyledGridItemContent } from './styles';

const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  (
    {
      label,
      icon,
      dot,
      max,
      showZero,
      className,
      badge,
      contentClassName,
      componentState,
      slotClassNames,
      component = 'div',
      children,
      ...rest
    },
    ref,
  ) => {
    const content = (
      <StyledGridItemContent
        componentState={componentState}
        className={clsx(slotClassNames.itemContent, contentClassName)}
        activeStyle={({ theme }) => ({
          '&[class]': {
            background: theme.palette.active,
          },
        })}
        // @ts-ignore
        component='div'
        disabled={!componentState.clickable}
        {...(componentState.clickable && { role: 'button', tabIndex: 0 })}
      >
        {isNil(children)
          ? (
              <>
                <Badge max={max} dot={dot} content={badge} showZero={showZero}>
                  <GridIcon
                    componentState={componentState}
                    className={slotClassNames.itemIcon}
                  >
                    {icon}
                  </GridIcon>
                </Badge>
                {!isEmpty(label) && (
                  <GridLabel
                    className={slotClassNames.itemLabel}
                    componentState={componentState}
                  >
                    {label}
                  </GridLabel>
                )}
              </>
            )
          : (
              children
            )}
      </StyledGridItemContent>
    );

    return (
      <StyledGridItem
        ref={ref}
        as={component}
        className={clsx(slotClassNames.item, className)}
        componentState={componentState}
        {...rest}
      >
        {content}
      </StyledGridItem>
    );
  },
);

export default GridItem;

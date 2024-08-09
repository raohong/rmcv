'use-client';

import { Arrow, ArrowDown, ArrowLeft, ArrowUp } from '@rmc-vant/icons';
import { isEmpty } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import { createOverridableComponent, formatHTMLAttrs } from '../_utils';
import { useThemeProps } from '../config-provider';
import { useCellContext } from './CellContext';
import { CellName, composeCellSlotClassNames } from './classNames';
import type { CellArrowDirection, CellComponentState, CellProps } from './interface';
import {
  CellIcon,
  CellLabel,
  CellRightIcon,
  CellRoot,
  CellTitle,
  CellValue,
} from './styles';

const ArrowIconMap: Record<CellArrowDirection, typeof ArrowLeft> = {
  left: ArrowLeft,
  right: Arrow,
  down: ArrowDown,
  up: ArrowUp,
};

const getArrowIcon = (dir: CellArrowDirection) => {
  return React.createElement(ArrowIconMap[dir] ?? Arrow);
};

const Cell = React.forwardRef<HTMLDivElement, CellProps>((props, ref) => {
  const {
    title,
    value,
    label,
    icon,
    clickable,
    isLink,
    className,
    rightIcon,
    children,
    classNames,
    size = 'normal',
    border = true,
    component = 'div',
    center = false,
    arrowDirection = 'right',
    ...rest
  } = useThemeProps(CellName, props);

  const ctx = useCellContext();

  const isClickable = !!(clickable ?? isLink);
  const internalRightIcon
    = isEmpty(rightIcon) && isLink ? getArrowIcon(arrowDirection) : rightIcon;
  const titleIsEmpty = [label, title].every(isEmpty);

  const internalBordered = ctx?.bordered ?? border;
  const internalSize = ctx?.size ?? size;
  const valueContent = value ?? children;
  const onlyValue = isEmpty(title);

  const componentState = useMemo(
    () =>
      ({
        size: internalSize,
        border: internalBordered,
        clickable: isClickable,
        center,
        arrowDirection,
        onlyValue,
      }) satisfies CellComponentState,
    [internalSize, internalBordered, isClickable, center, arrowDirection, onlyValue],
  );

  const slotClassNames = composeCellSlotClassNames(componentState, classNames);

  return (
    <CellRoot
      component={component}
      ref={ref}
      className={clsx(slotClassNames.root, className)}
      activeStyle={
        isClickable
          ? ({ theme }) => ({
              background: `${theme.palette.active} !important`,
            })
          : undefined
      }
      {...rest}
      componentState={componentState}
    >
      {!isEmpty(icon) && (
        <CellIcon className={slotClassNames.icon} componentState={componentState}>
          {icon}
        </CellIcon>
      )}
      {!titleIsEmpty && (
        <CellTitle
          {...formatHTMLAttrs({ title })}
          className={slotClassNames.title}
          componentState={componentState}
        >
          <span>{title}</span>
          {!isEmpty(label) && (
            <CellLabel
              className={slotClassNames.label}
              componentState={componentState}
            >
              {label}
            </CellLabel>
          )}
        </CellTitle>
      )}
      {!isEmpty(valueContent) && (
        <CellValue className={slotClassNames.value} componentState={componentState}>
          {valueContent}
        </CellValue>
      )}
      {!isEmpty(internalRightIcon) && (
        <CellRightIcon
          className={slotClassNames.rightIcon}
          componentState={componentState}
        >
          {internalRightIcon}
        </CellRightIcon>
      )}
    </CellRoot>
  );
});

export default createOverridableComponent(Cell);

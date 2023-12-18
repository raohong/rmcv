import { isNil } from '@rmc-vant/utils';
import React, { useMemo } from 'react';
import { useThemeProps } from '../config-provider';
import { CellContext } from './CellContext';
import { CellGroupName, composeCellGroupSlotClassNames } from './classNames';
import type {
  CellContextState,
  CellGroupComponentState,
  CellGroupProps,
} from './interface';
import { CellGroupContent, CellGroupRoot, CellGroupTitle } from './styles';

const CellGroup = React.forwardRef<HTMLDivElement, CellGroupProps>((props, ref) => {
  const {
    title,
    children,
    classNames,
    inset = false,
    border = true,
    size = 'normal',
    ...rest
  } = useThemeProps(CellGroupName, props);

  const ctxValue: CellContextState = useMemo(
    () => ({
      border,
      size,
    }),
    [border, size],
  );

  const componentState: CellGroupComponentState = {
    size,
    border,
    inset,
  };

  const slotClassNames = composeCellGroupSlotClassNames(componentState, classNames);

  return (
    <CellContext.Provider value={ctxValue}>
      <CellGroupRoot componentState={componentState} ref={ref} {...rest}>
        {!isNil(title) && (
          <CellGroupTitle
            className={slotClassNames?.title}
            componentState={componentState}
          >
            {title}
          </CellGroupTitle>
        )}
        <CellGroupContent
          className={slotClassNames?.content}
          componentState={componentState}
        >
          {children}
        </CellGroupContent>
      </CellGroupRoot>
    </CellContext.Provider>
  );
});

export default CellGroup;

import { isEmpty } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import { useThemeProps } from '../config-provider';
import { DividerName, composeDividerSlotClassNames } from './classNames';
import type { DividerComponentState, DividerProps } from './interface';
import { DividerRoot, DividerText } from './styles';

const Divider = React.forwardRef<HTMLDivElement, DividerProps>((props, ref) => {
  const {
    className,
    children,
    classNames,
    dashed = false,
    hairline = false,
    contentPosition = 'center',
    ...rest
  } = useThemeProps(DividerName, props);
  const componentState: DividerComponentState = useMemo(
    () => ({
      dashed,
      contentPosition,
      hairline,
    }),
    [dashed, contentPosition, hairline],
  );

  const slotClassNames = composeDividerSlotClassNames(componentState, classNames);

  return (
    <DividerRoot
      className={clsx(className, slotClassNames.root)}
      componentState={componentState}
      ref={ref}
      {...rest}
    >
      {!isEmpty(children) && (
        <DividerText className={slotClassNames.text} componentState={componentState}>
          {children}
        </DividerText>
      )}
    </DividerRoot>
  );
});

export default Divider;

import { isEmpty } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import { useThemeProps } from '../config-provider';
import { LoadingName, composeLoadingSlotClassNames } from './classNames';
import type { LoadingComponentState, LoadingProps } from './interface';
import {
  IOSSpinnerRoot,
  LoadingRoot,
  LoadingText,
  MaterialSpinnerRoot,
} from './styles';

const Loading = React.forwardRef<HTMLSpanElement, LoadingProps>((props, ref) => {
  const {
    className,
    classNames,
    children,
    vertical = false,
    size = 30,
    textSize = 14,
    color = '#c9c9c9',
    textColor = '#c9c9c9',
    type = 'circular',
    ...rest
  } = useThemeProps(LoadingName, props);

  const componentState: LoadingComponentState = useMemo(
    () => ({
      textColor,
      textSize,
      size,
      color,
      vertical,
      type,
    }),
    [textColor, textSize, size, color, vertical, type],
  );
  const slotClassNames = composeLoadingSlotClassNames(componentState, classNames);

  return (
    <LoadingRoot
      ref={ref}
      className={clsx(className, slotClassNames.root)}
      role='alert'
      aria-label='loading'
      {...rest}
      componentState={componentState}
    >
      {type === 'spinner' ? <IOSSpinnerRoot /> : <MaterialSpinnerRoot />}
      {!isEmpty(children) && (
        <LoadingText componentState={componentState} className={slotClassNames.text}>
          {children}
        </LoadingText>
      )}
    </LoadingRoot>
  );
});

export default Loading;

'use-client';

import { useDeepMemorizedMemo } from '@rmc-vant/hooks';
import { isArray, isEmpty, isString } from '@rmc-vant/utils';
import clsx from 'clsx';
import React from 'react';
import { useThemeProps } from '../config-provider';
import { EmptyName, composeEmptySlotClassNames } from './classNames';
import { EmptyError, EmptyNetwork, EmptySearch } from './images';
import type { EmptyComponentState, EmptyImageType, EmptyProps } from './interface';
import {
  EmptyDescription,
  EmptyExtra,
  EmptyIcon,
  EmptyImage,
  EmptyRoot,
} from './styles';

const EmptyBuiltinImages: Record<EmptyImageType, typeof EmptyIcon> = {
  default: EmptyIcon,
  error: EmptyIcon.withComponent(EmptyError),
  network: EmptyIcon.withComponent(EmptyNetwork),
  search: EmptyIcon.withComponent(EmptySearch),
};

const Empty = React.forwardRef<HTMLDivElement, EmptyProps>((props, ref) => {
  const {
    image = 'default',
    imageSize = 126,
    className,
    description,
    children,
    classNames,
    ...rest
  } = useThemeProps(EmptyName, props);
  const hasExtra = !isEmpty(children);
  const hasDescription = !isEmpty(description);

  const componentState: EmptyComponentState = useDeepMemorizedMemo(
    () => ({
      hasExtra,
      imageSize: (isArray(imageSize)
        ? imageSize.slice(0, 2)
        : [imageSize, imageSize]) as EmptyComponentState['imageSize'],
      hasDescription,
    }),
    [imageSize, hasExtra, hasDescription],
  );

  const slotClassNames = composeEmptySlotClassNames(componentState, classNames);

  const getImage = () => {
    if (isString(image)) {
      if (Object.keys(EmptyBuiltinImages).includes(image)) {
        return React.createElement(
          EmptyBuiltinImages[image as keyof typeof EmptyBuiltinImages],
          {
            componentState,
            className: slotClassNames.icon,
          },
        );
      }

      return <img src={image} alt={image} />;
    }

    return image;
  };

  return (
    <EmptyRoot
      className={clsx(className, slotClassNames.root)}
      ref={ref}
      {...rest}
      componentState={componentState}
    >
      <EmptyImage componentState={componentState} className={slotClassNames.image}>
        {getImage()}
      </EmptyImage>
      {hasDescription && (
        <EmptyDescription
          componentState={componentState}
          className={slotClassNames.description}
        >
          {description}
        </EmptyDescription>
      )}
      {hasExtra && (
        <EmptyExtra componentState={componentState} className={slotClassNames.extra}>
          {children}
        </EmptyExtra>
      )}
    </EmptyRoot>
  );
});

export default Empty;

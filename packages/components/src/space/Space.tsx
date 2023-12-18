import { isEmpty } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import { flatReactNode } from '../_utils';
import { useThemeProps } from '../config-provider';
import { SpaceName, composeSpaceSlotClassNames } from './classNames';
import type { SpaceComponentState, SpaceProps } from './interface';
import { SpaceItem, SpaceRoot, SpaceSplit } from './styles';

const Space = React.forwardRef<HTMLDivElement, SpaceProps>((props, ref) => {
  const {
    split,
    className,
    children,
    align = 'center',
    fill = false,
    wrap = true,
    direction = 'horizontal',
    size = 'small',
    classNames,
    ...rest
  } = useThemeProps(SpaceName, props);
  const childList = flatReactNode(children).filter((item) => !isEmpty(item));
  const componentState: SpaceComponentState = useMemo(
    () => ({
      fill,
      direction,
      align,
      size,
      wrap,
    }),
    [fill, direction, align, wrap, size],
  );
  const slotClassNames = composeSpaceSlotClassNames(componentState, classNames);

  const renderContent = () =>
    childList
      .map((item, index) => {
        const key = React.isValidElement(item) ? item.key ?? index : index;
        const splitKey = `${key}-split`;

        const itemContent = (
          <SpaceItem
            className={clsx(slotClassNames.item)}
            componentState={componentState}
            key={key}
          >
            {item}
          </SpaceItem>
        );

        if (!isEmpty(split) && index < childList.length - 1) {
          return [
            itemContent,
            <SpaceSplit
              key={splitKey}
              componentState={componentState}
              className={slotClassNames.split}
            >
              {split}
            </SpaceSplit>,
          ];
        }

        return itemContent;
      })
      .flat();

  return (
    <SpaceRoot
      componentState={componentState}
      className={clsx(slotClassNames.root, className)}
      ref={ref}
      {...rest}
    >
      {renderContent()}
    </SpaceRoot>
  );
});

export default Space;

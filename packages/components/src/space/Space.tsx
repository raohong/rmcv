import { isEmpty, isString } from '@rmc-vant/utils';
import classNames from 'classnames';
import React from 'react';
import { flatReactNode } from '../_utils';
import { useConfigContext } from '../config-provider';
import type { SpaceProps } from './interface';

const defaultSize = {
  small: 8,
  middle: 16,
  large: 24,
};

const Space = React.forwardRef<HTMLDivElement, SpaceProps>(
  (
    {
      split,
      itemClassName,
      align,
      className,
      style,
      children,
      wrap = true,
      direction = 'horizontal',
      size = 'small',
      block,
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
    const basCls = getPrefixCls('space');

    const childList = flatReactNode(children).filter((item) => !isEmpty(item));
    const defaultGap = defaultSize.small;
    const gap = isString(size) ? defaultSize[size] : size;

    const renderContent = () =>
      childList
        .map((item, index) => {
          const key = React.isValidElement(item) ? item.key ?? index : index;
          const splitKey = `${key}-split`;
          const itemContent = (
            <div
              className={classNames(getPrefixCls('space-item'), itemClassName)}
              key={key}
            >
              {item}
            </div>
          );

          if (!isEmpty(split) && index < childList.length - 1) {
            return [
              itemContent,
              <div key={splitKey} className={getPrefixCls('space-split')}>
                {split}
              </div>,
            ];
          }

          return itemContent;
        })
        .flat();

    return (
      <div
        style={{
          ...style,
          gap: gap ?? defaultGap,
        }}
        className={classNames(
          basCls,
          {
            [`${basCls}-${direction}`]: direction,
            [`${basCls}-wrap`]: direction === 'horizontal' && wrap,
            [`${basCls}-align-${align}`]: align,
            [`${basCls}-block`]: block,
          },
          className,
        )}
        ref={ref}
      >
        {renderContent()}
      </div>
    );
  },
);

export default Space;

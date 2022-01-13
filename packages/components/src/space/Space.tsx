import classNames from 'classnames';
import { isEmpty, isString } from '@rmc-vant/utils';
import React from 'react';
import { useConfigContext } from '../config-provider';
import type { SpaceProps } from './interface';
import { flatReactNode } from '../_utils';

const defaultSize = {
  small: 8,
  middle: 16,
  large: 24,
};

const Space = React.forwardRef<HTMLDivElement, SpaceProps>(
  ({
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
  }) => {
    const { getPrefixCls } = useConfigContext();
    const basCls = getPrefixCls('space');

    const childList = flatReactNode(children).filter((item) => !isEmpty(item));
    const defaultGap = defaultSize.small;
    const gap = isString(size) ? defaultSize[size] : size;

    const renderContent = () =>
      childList
        .map((item, index) => {
          const key = React.isValidElement(item) ? item.key : index;
          const splitKey = `${key}-split`;
          const itemContent = (
            <div
              className={classNames(getPrefixCls('space-item'), itemClassName)}
              key={key}
            >
              {item}
            </div>
          );

          if ((split || split === 0) && index < childList.length - 1) {
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
          gap: gap || defaultGap,
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
      >
        {renderContent()}
      </div>
    );
  },
);

export default Space;

import { isArray, isNil, isString } from '@rmc-vant/utils';
import classNames from 'classnames';
import React from 'react';
import { useConfigContext } from '../config-provider';
import { EmptyDefault, EmptyError, EmptyNetwork, EmptySearch } from './images';
import type { EmptyImageType, EmptyProps } from './interface';

const EmptyBuiltinImages: Record<EmptyImageType, React.FC> = {
  default: EmptyDefault,
  error: EmptyError,
  network: EmptyNetwork,
  search: EmptySearch,
};

const Empty = React.forwardRef<HTMLDivElement, EmptyProps>(
  (
    { image = 'default', imageSize, className, description, children, ...rest },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
    const baseCls = getPrefixCls('empty');

    const getImage = () => {
      if (isString(image)) {
        if (Object.keys(EmptyBuiltinImages).includes(image)) {
          return React.createElement(EmptyBuiltinImages[image as EmptyImageType]);
        }

        return <img src={image} className={`${baseCls}-image`} />;
      }

      return image;
    };

    const size = isArray(imageSize) ? imageSize : [imageSize, imageSize];

    return (
      <div className={classNames(baseCls, className)} ref={ref} {...rest}>
        <div
          style={{
            width: size[0],
            height: size[1],
          }}
          className={`${baseCls}-icon`}
        >
          {getImage()}
        </div>
        {!isNil(description) && (
          <div className={`${baseCls}-description`}>{description}</div>
        )}
        <div className={`${baseCls}-children`}>{children}</div>
      </div>
    );
  },
);

export default Empty;

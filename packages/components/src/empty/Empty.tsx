import classNames from 'classnames';
import isNil from 'lodash/isNil';
import React from 'react';
import { useConfigContext } from '../config-provider';
import { EmptyDefault, EmptyError, EmptyNetwork, EmptySearch } from './images';

export type EmptyImageType = 'default' | 'error' | 'network' | 'search';

const EmptyBuiltinImages: Record<EmptyImageType, React.FC> = {
  default: EmptyDefault,
  error: EmptyError,
  network: EmptyNetwork,
  search: EmptySearch,
};

export type EmptyProps = {
  type?: EmptyImageType;
  image?: React.ReactNode;
  imageStyle?: React.CSSProperties;
  description?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Empty = React.forwardRef<HTMLDivElement, EmptyProps>(
  (
    {
      image,
      type = 'default',
      className,
      description,
      children,
      imageStyle,
      ...rest
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
    const baseCls = getPrefixCls('empty');

    const getImage = () => {
      if (image) {
        return image;
      }

      const Com = type && EmptyBuiltinImages[type];

      return Com ? React.createElement(Com) : null;
    };

    return (
      <div className={classNames(baseCls, className)} ref={ref} {...rest}>
        <div style={imageStyle} className={`${baseCls}-image`}>
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

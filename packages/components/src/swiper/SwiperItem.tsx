import React from 'react';
import { animated } from '@react-spring/web';
import classNames from 'classnames';
import type { SwiperItemProps } from './interface';
import { useConfigContext } from '../config-provider';

export const SwiperItemSymbol = Symbol('swiper-item');

const SwiperItem: React.FC<SwiperItemProps> = ({
  children,
  className,
  ...rest
}) => {
  const { getPrefixCls } = useConfigContext();

  return (
    <animated.div
      className={classNames(getPrefixCls('swiper-item'), className)}
      {...rest}
    >
      {children}
    </animated.div>
  );
};

// @ts-ignore
SwiperItem[SwiperItemSymbol] = true;

export default SwiperItem;

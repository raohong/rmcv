import clsx from 'clsx';
import React, { useContext } from 'react';
import { SwiperContext } from './context';
import type { SwiperItemProps } from './interface';
import { StyledSwiperItem } from './styles';

export const SwiperItemSymbol = Symbol('swiper-item');

const SwiperItem: React.FC<SwiperItemProps> = ({ children, className, ...rest }) => {
  const { componentState, itemClassName } = useContext(SwiperContext);

  return (
    <StyledSwiperItem
      componentState={componentState}
      className={clsx(className, itemClassName)}
      {...rest}
    >
      {children}
    </StyledSwiperItem>
  );
};

// @ts-ignore
SwiperItem[SwiperItemSymbol] = true;

export default SwiperItem;

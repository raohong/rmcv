import { isArray } from '@rmc-vant/utils';
import clsx from 'clsx';
import React from 'react';
import type { JSXIntrinsicElementProps } from '../types';
import { skeletonClassNames } from './classNames';
import type {
  SkeletonAvatarComponentState,
  SkeletonImageComponentState,
  SkeletonRowComponentState,
  SkeletonSize,
} from './interface';
import {
  StyledSkeletonAvatar,
  StyledSkeletonImage,
  StyledSkeletonImageIcon,
  StyledSkeletonRow,
  StyledSkeletonTitle,
} from './styles';

export const SkeletonAvatar = React.forwardRef<
  HTMLDivElement,
  JSXIntrinsicElementProps<Partial<SkeletonAvatarComponentState>>
>(({ className, shape = 'square', size = 32, ...props }, ref) => {
  return (
    <StyledSkeletonAvatar
      className={clsx(skeletonClassNames.avatar, className)}
      componentState={{ shape, size }}
      ref={ref}
      {...props}
    />
  );
});

export const SkeletonTitle = React.forwardRef<
  HTMLDivElement,
  JSXIntrinsicElementProps<Partial<SkeletonRowComponentState>>
>(({ className, round, width = '40%', ...props }, ref) => {
  return (
    <StyledSkeletonTitle
      as='h3'
      className={clsx(skeletonClassNames.title, className)}
      componentState={{
        round,
        width,
      }}
      ref={ref}
      {...props}
    />
  );
});

export const SkeletonImage = React.forwardRef<
  HTMLDivElement,
  JSXIntrinsicElementProps<Partial<SkeletonImageComponentState>>
>(({ className, shape = 'square', size = 96, ...props }, ref) => {
  const internalSize = (isArray(size) ? size : [size, size]) as [
    SkeletonSize,
    SkeletonSize,
  ];

  return (
    <StyledSkeletonImage
      className={clsx(skeletonClassNames.image, className)}
      componentState={{
        shape,
        size: internalSize,
      }}
      ref={ref}
      {...props}
    >
      <StyledSkeletonImageIcon
        componentState={{
          shape,
          size: internalSize,
        }}
      />
    </StyledSkeletonImage>
  );
});

export const SkeletonParagraph = React.forwardRef<
  HTMLDivElement,
  JSXIntrinsicElementProps<Partial<SkeletonRowComponentState>>
>(({ width, round, className, ...props }, ref) => {
  return (
    <StyledSkeletonRow
      className={clsx(skeletonClassNames.paragraph, className)}
      componentState={{ round, width }}
      ref={ref}
      {...props}
    />
  );
});

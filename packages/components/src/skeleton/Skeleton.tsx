'use-client';

import { toArray } from '@rmc-vant/utils';
import clsx from 'clsx';
import React from 'react';
import { useThemeProps } from '../config-provider';
import { SkeletonName, composeSkeletonSlotClassNames } from './classNames';
import { SkeletonAvatar, SkeletonParagraph, SkeletonTitle } from './components';
import type {
  SkeletonComponentState,
  SkeletonProps,
  SkeletonSize,
} from './interface';
import { SkeletonRoot, StyledSkeletonContent } from './styles';

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>((props, ref) => {
  const {
    avatar,
    rowWidth,
    template,
    children,
    className,
    round = false,
    avatarSize = 32,
    loading = true,
    title = true,
    animate = true,
    row = 0,
    titleWidth = '40%',
    avatarShape = 'round',
    ...rest
  } = useThemeProps(SkeletonName, props);

  const componentState: SkeletonComponentState = {
    round,
    animate,
    avatarShape,
    avatarSize,
    loading,
    titleWidth,
  };
  const slotClassNames = composeSkeletonSlotClassNames(componentState);

  const renderRow = (width?: SkeletonSize, key?: React.Key, title?: boolean) => {
    if (title) {
      return <SkeletonTitle round={round} width={width} key={key} />;
    }

    return <SkeletonParagraph round={round} width={width} key={key} />;
  };

  const renderLoadingContent = () => {
    const sanitizedRow = Math.max(0, row);
    const sanitizedRowWidth = toArray(rowWidth);

    const detail = (
      <StyledSkeletonContent componentState={componentState}>
        {!!title && renderRow(titleWidth, 'title', true)}
        {Array.from({ length: sanitizedRow }, (_, i) => {
          if (i === sanitizedRow - 1) {
            return renderRow(sanitizedRowWidth[i] ?? '60%', i);
          }

          return renderRow(sanitizedRowWidth[i] ?? undefined, i);
        })}
      </StyledSkeletonContent>
    );

    return (
      <>
        {!!avatar && <SkeletonAvatar shape={avatarShape} size={avatarSize} />}
        {detail}
      </>
    );
  };

  return (
    <SkeletonRoot
      ref={ref}
      className={clsx(slotClassNames.root, className)}
      {...(loading
        ? {
            'role': 'status',
            'aria-live': 'assertive',
          }
        : null)}
      {...rest}
      componentState={componentState}
    >
      {loading ? (template ?? renderLoadingContent()) : children}
    </SkeletonRoot>
  );
});

export default Skeleton;

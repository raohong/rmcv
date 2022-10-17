import { toArray } from '@rmc-vant/utils';
import classNames from 'classnames';
import React from 'react';
import { useConfigContext } from '../config-provider';
import type { SkeletonProps, SkeletonSize } from './interface';

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      avatar,
      round,
      avatarSize,
      rowWidth,
      children,
      className,
      loading = true,
      title = true,
      animate = true,
      row = 0,
      titleWidth = '40%',
      avatarShape = 'round',
      ...rest
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
    const cls = getPrefixCls('skeleton');

    const renderRow = (
      width?: SkeletonSize,
      key?: React.Key,
      // eslint-disable-next-line no-shadow
      title?: boolean,
    ) => {
      return (
        <div
          key={key}
          style={{ width }}
          className={title ? `${cls}-title` : `${cls}-row`}
        />
      );
    };

    const renderAvatar = () => {
      return (
        <div
          key="avatar"
          className={classNames(`${cls}-avatar`, {
            [`${cls}-avatar-${avatarShape}`]: avatarShape,
          })}
          style={{
            width: avatarSize,
            height: avatarSize,
          }}
        />
      );
    };

    const renderLoadingContent = () => {
      const santizedRow = Math.max(0, row);
      const santizedRowWidth = toArray(rowWidth).filter(Boolean);
      const detail = (
        <div className={`${cls}-content`}>
          {!!title && renderRow(titleWidth, 'title', true)}
          {Array.from({ length: santizedRow }, (_, i) => {
            if (i === santizedRow - 1) {
              return renderRow(santizedRowWidth[i] ?? '60%', i);
            }

            return renderRow(santizedRowWidth[i] ?? undefined, i);
          })}
        </div>
      );

      return (
        <>
          {!!avatar && renderAvatar()}
          {detail}
        </>
      );
    };

    return (
      <div
        ref={ref}
        className={classNames(
          cls,
          {
            [`${cls}-round`]: round,
            [`${cls}-animate`]: animate && loading,
          },
          className,
        )}
        {...(loading
          ? {
              role: 'status',
              'aria-live': 'assertive',
            }
          : null)}
        {...rest}
      >
        {loading ? renderLoadingContent() : children}
      </div>
    );
  },
);

export default Skeleton;

import classNames from 'classnames';
import React from 'react';
import { toArray } from '../_utils';
import { useConfigContext } from '../config-provider';

type SkeletonSize = string | number;
export type SkeletonAvatarShape = 'round' | 'square';
export type SkeletonProps = {
  /**
   * @description 段落占位图行数
   */
  row?: number;
  /**
   * @description 段落占位图宽度，可传数组来设置每一行的宽度
   */
  rowWidth?: SkeletonSize | SkeletonSize[];
  /**
   * @description 是否显示标题占位图
   * @default true
   */
  title?: boolean;
  /**
   * @description 是否显示头像占位图
   */
  avatar?: boolean;
  /**
   * @description 是否显示骨架屏，传 false 时会展示子组件内容
   */
  loading?: boolean;
  /**
   * @description 是否开启动画
   * @default true
   */
  animate?: boolean;
  /**
   * @description 是否将标题和段落显示为圆角风格
   */
  round?: boolean;
  /**
   * @description 标题占位图宽度
   * @default 40%
   */
  titleWidth?: SkeletonSize;
  /**
   * @description 头像占位图大小
   */
  avatarSize?: SkeletonSize;
  /**
   * @description 头像占位图形状，可选值为 square
   * @default 'round
   */
  avatarShape?: SkeletonAvatarShape;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>;

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      avatar,
      round,
      avatarSize,
      rowWidth,
      loading = true,
      title = true,
      animate = true,
      row = 0,
      titleWidth = '40%',
      avatarShape = 'round',
      children,
      className,
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
              return renderRow('60%', i);
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
            [`${cls}-animate`]: animate,
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

import React, { useRef } from 'react';
import classNames from 'classnames';
import { animated, useSpring } from '@react-spring/web';
import { ArrowDown } from '@rmc-vant/icons';
import { Cell } from '../cell';
import { useConfigContext } from '../config-provider';
import type { CollapseItemProps } from './type';
import { useIsomorphicLayoutEffect } from '../_hooks';

export const COLLAPSEITEM_SYMBOL = Symbol('collapse-item');

const getHeight = (node: HTMLElement | null) => {
  if (!node) {
    return 0;
  }

  const raw = getComputedStyle(node).height;

  node.style.height = 'auto';

  const targetHeight = node.offsetHeight;

  node.style.height = raw;

  return targetHeight;
};

const CollapseItem = React.forwardRef<HTMLDivElement, CollapseItemProps>(
  (
    {
      icon,
      size,
      title,
      value,
      border,
      labelClassName,
      titleClassName,
      valueClassName,
      className,
      disabled,
      children,
      isLink = true,
      toggle,
      collapsed,
      itemKey,
      ...rest
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
    const nodeRef = useRef<HTMLDivElement | null>(null);
    const cancelRef = useRef<() => void>();

    const baseCls = getPrefixCls('collapse-item');
    const [{ progress, height }] = useSpring(
      {
        from: {
          height: 0,
          progress: 0,
        },
        to: async (next, cancel) => {
          cancelRef.current = cancel;

          await next({
            height: collapsed ? 0 : getHeight(nodeRef.current),
            progress: collapsed ? 0 : 1,
          });
        },
        config: {
          friction: 36,
          tension: 300,
          velocity: 0.01,
        },
      },
      [collapsed],
    );

    useIsomorphicLayoutEffect(() => {
      return () => {
        cancelRef.current?.();
      };
    }, []);

    const handleToggle: React.MouseEventHandler = () => {
      if (!disabled) {
        toggle?.(itemKey);
      }
    };

    return (
      <div
        ref={ref}
        className={classNames(
          baseCls,
          {
            [`${baseCls}-disabled`]: disabled,
            [`${baseCls}-border`]: border,
          },
          className,
        )}
        aria-expanded={!collapsed}
        {...rest}
      >
        <Cell
          icon={icon}
          size={size}
          title={title}
          value={value}
          className={`${baseCls}-header`}
          labelClassName={classNames(`${baseCls}-label`, labelClassName)}
          valueClassName={classNames(`${baseCls}-value`, valueClassName)}
          titleClassName={classNames(`${baseCls}-title`, titleClassName)}
          isLink={isLink}
          onClick={handleToggle}
          tabIndex={disabled ? -1 : 0}
          role="button"
          aria-disabled={disabled}
          rightIcon={
            <animated.div
              style={{
                rotate: progress.to([0, 1], [0, -180]),
                lineHeight: 0,
              }}
              className={`${baseCls}-right-icon`}
            >
              <ArrowDown />
            </animated.div>
          }
          border={border ? !collapsed : true}
        />
        <animated.div
          ref={nodeRef}
          className={`${baseCls}-wrapper`}
          style={{
            height,
          }}
        >
          <div className={`${baseCls}-content`}>{children}</div>
        </animated.div>
      </div>
    );
  },
);

// @ts-ignore
(CollapseItem as typeof CollapseItem & Record<symbol, any>)[
  COLLAPSEITEM_SYMBOL
] = true;

export default CollapseItem;

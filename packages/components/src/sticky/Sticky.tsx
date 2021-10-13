import classNames from 'classnames';
import { animated } from '@react-spring/web';
import React, { useMemo, useRef, useState } from 'react';
import { useConfigContext } from '../config-provider';
import {
  useIsomorphicLayoutEffect,
  useMeasure,
  useMergeRefs,
  useUnmountedRef,
} from '../_hooks';
import { findScrollableContainer, isNumber } from '../_utils';
import StickyObserver, {
  StickyObserverOptions,
  StickyState,
} from './StickyObserver';

export type StickyProps = {
  /**
   * @description 距离目标窗口顶部达到指定偏移量后触发
   */
  offsetTop?: number;
  /**
   * @description 距离目标窗口底部达到指定偏移量后触发
   */
  offsetBottom?: number;
  /**
   * @description 窗口
   */
  target?: (node: HTMLElement | null) => Element | undefined;
  /**
   * @description 是否启用滚动监听，禁用后可以自定义
   */
  disabled?: boolean;
  /**
   * @description 指定zIndex
   */
  zIndex?: number;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'disabled'>;

type StickyPosition = 'top' | 'bottom';

const Sticky = React.forwardRef<HTMLDivElement, StickyProps>(
  (
    { offsetBottom, target, children, offsetTop = 0, zIndex = 1000, ...rest },
    ref,
  ) => {
    const position: StickyPosition = isNumber(offsetBottom) ? 'bottom' : 'top';

    const { getPrefixCls } = useConfigContext();
    const unmountedRef = useUnmountedRef();
    const contentRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const placeholderRef = useRef<HTMLDivElement>(null);
    const internalTarget = target?.(wrapperRef.current);
    const setWrapperRef = useMergeRefs(wrapperRef, ref);

    const {
      data: { width, height, left },
    } = useMeasure({ ref: contentRef });

    const [data, setData] = useState<StickyState>();
    const [observer, setObserver] = useState<StickyObserver | null>(null);

    const options: StickyObserverOptions = useMemo(
      () => ({
        offsetTop,
        offsetBottom,
        getMeasureTarget: () => placeholderRef?.current ?? contentRef.current!,
        onChange(state) {
          if (!unmountedRef.current) {
            setData(state);
          }
        },
        container: internalTarget,
      }),
      [offsetBottom, offsetTop, internalTarget],
    );

    // eslint-disable-next-line consistent-return
    useIsomorphicLayoutEffect(() => {
      const scrollableParent = findScrollableContainer(contentRef.current);
      if (scrollableParent) {
        const ob = new StickyObserver(scrollableParent);

        setObserver(ob);

        return () => {
          ob.destory();
        };
      }
    }, [contentRef.current]);

    useIsomorphicLayoutEffect(() => {
      observer?.updateOptions(options);
    }, [options, observer]);

    useIsomorphicLayoutEffect(() => {
      if (width > 0 && height > 0) {
        observer?.update();
      }
    }, [left, width, height]);

    const newStyle: React.CSSProperties = {};
    if (data?.affixed) {
      Object.assign(newStyle, {
        width,
        height,
        left,
        zIndex,
      });

      if (position === 'bottom') {
        newStyle.bottom = data.offset;
      } else {
        newStyle.top = data.offset;
      }
    }

    return (
      <>
        {data?.affixed && (
          <animated.div
            ref={placeholderRef}
            aria-hidden
            style={{
              width,
              height,
            }}
          />
        )}
        <div
          className={classNames({
            [getPrefixCls('sticky')]: data?.affixed,
          })}
          style={newStyle}
          ref={setWrapperRef}
        >
          <div ref={contentRef} {...rest}>
            {children}
          </div>
        </div>
      </>
    );
  },
);

export default Sticky;

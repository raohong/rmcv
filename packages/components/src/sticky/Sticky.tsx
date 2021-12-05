import classNames from 'classnames';
import { animated } from '@react-spring/web';
import isNumber from 'lodash/isNumber';
import React, { useMemo, useRef, useState } from 'react';
import type { JSXIntrinsicElementProps } from '../types';
import { useConfigContext } from '../config-provider';
import {
  useIsomorphicLayoutEffect,
  useMeasure,
  useMergeRefs,
  useScrollParent,
  useUnmountedRef,
} from '../_hooks';
import { isBrowser } from '../_utils';
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
} & JSXIntrinsicElementProps<'div', 'disabled'>;

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
    const scrollParent = useScrollParent(contentRef);
    const setWrapperRef = useMergeRefs(wrapperRef, ref);
    const internalTarget = isBrowser ? target?.(wrapperRef.current) : undefined;

    const {
      data: { width, height, left },
    } = useMeasure({ ref: contentRef });

    const [data, setData] = useState<StickyState>();
    const [observer, setObserver] = useState<StickyObserver | null>(null);

    // console.log(internalTarget);

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
      [offsetBottom, offsetTop, internalTarget, scrollParent],
    );

    useIsomorphicLayoutEffect(() => {
      if (scrollParent) {
        const ob = new StickyObserver(scrollParent);

        setObserver(ob);

        return () => {
          ob.destory();
        };
      }

      return undefined;
    }, [scrollParent]);

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

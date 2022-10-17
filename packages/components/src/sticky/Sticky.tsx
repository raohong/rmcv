import { animated } from '@react-spring/web';
import {
  useIsomorphicLayoutEffect,
  useMeasure,
  useMergeRefs,
  usePersistFn,
  useUnmountedRef,
  useValueRef,
} from '@rmc-vant/hooks';
import { isString } from '@rmc-vant/utils';
import classNames from 'classnames';
import React, { useMemo, useRef, useState } from 'react';
import { useConfigContext } from '../config-provider';
import StickyObserver, {
  StickyObserverOptions,
  StickyState,
} from './StickyObserver';
import type { StickyProps } from './interface';

const Sticky = React.forwardRef<HTMLDivElement, StickyProps>(
  (
    {
      target,
      children,
      onChange,
      className,
      style,
      zIndex = 1000,
      offsetTop = 0,
      offsetBottom = 0,
      position = 'top',
      ...rest
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
    const unmountedRef = useUnmountedRef();
    const contentRef = useRef<HTMLDivElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const placeholderRef = useRef<HTMLDivElement>(null);
    const setWrapperRef = useMergeRefs(wrapperRef, ref);
    const [container, setContainer] = useState<Element | null>(null);
    const {
      data: { width, height, left },
      measure,
    } = useMeasure({ ref: contentRef });

    const containerRefValue = useValueRef(container);
    const [data, setData] = useState<StickyState>();
    const [observer, setObserver] = useState<StickyObserver | null>(null);

    const handleChange = usePersistFn(
      (state: StickyState, prev: StickyState | null) => {
        if (!unmountedRef.current) {
          setData(state);

          if (!prev || (prev.affixed !== state.affixed && state.affixed)) {
            if (contentRef.current) {
              measure(contentRef.current);
            }
          }
        }
        onChange?.(state.affixed);
      },
    );

    const options: StickyObserverOptions = useMemo(
      () => ({
        offsetTop,
        offsetBottom,
        getMeasureTarget: () => placeholderRef?.current ?? contentRef.current!,
        onChange: handleChange,
        container,
        position,
      }),
      [offsetBottom, handleChange, position, offsetTop, container],
    );

    useIsomorphicLayoutEffect(() => {
      let container: Element | null = null;

      if (isString(target)) {
        container = document.querySelector(target);
      } else {
        container = target?.(wrapperRef.current) || null;
      }

      if (container !== containerRefValue.current) {
        setContainer(container);
      }
    }, [target]);

    useIsomorphicLayoutEffect(() => {
      if (contentRef.current) {
        const ob = new StickyObserver(contentRef.current);

        setObserver(ob);

        return () => {
          ob.destory();
        };
      }

      return undefined;
    }, []);

    useIsomorphicLayoutEffect(() => {
      observer?.updateOptions(options);
    }, [options, observer, width, height]);

    const newStyle: React.CSSProperties = {
      ...style,
    };

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
            style={{
              width,
              height,
            }}
            aria-hidden
          />
        )}
        <div
          className={classNames(
            {
              [getPrefixCls('sticky')]: data?.affixed,
            },
            className,
          )}
          style={newStyle}
          ref={setWrapperRef}
          {...rest}
        >
          <div ref={contentRef}>{children}</div>
        </div>
      </>
    );
  },
);

export default Sticky;

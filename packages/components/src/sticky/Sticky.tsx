'use-client';

import {
  useEventCallback,
  useIsomorphicLayoutEffect,
  useMeasure,
  useMergeRefs,
  useUnmountedRef,
  useValueRef,
} from '@rmc-vant/hooks';
import { isString } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useMemo, useRef, useState } from 'react';
import { useThemeProps } from '../config-provider';
import type {
  StickyObserverOptions,
  StickyState,
} from './StickyObserver';
import StickyObserver from './StickyObserver';
import { StickyName, composeStickySlotClassNames } from './classNames';
import type { StickyComponentState, StickyProps } from './interface';
import { StickyContent, StickyRoot } from './styles';

const Sticky = React.forwardRef<HTMLDivElement, StickyProps>((props, ref) => {
  const {
    target,
    children,
    onChange,
    style,
    classNames,
    className,
    contentComponent = 'div',
    zIndex = 1000,
    offsetTop = 0,
    offsetBottom = 0,
    position = 'top',
    ...rest
  } = useThemeProps(StickyName, props);
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

  const handleChange = useEventCallback(
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
    }
    else {
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
        ob.destroy();
      };
    }

    return undefined;
  }, [contentComponent]);

  useIsomorphicLayoutEffect(() => {
    observer?.updateOptions(options);
  }, [options, observer, width, height]);

  const newStyle: React.CSSProperties = {
    ...style,
  };

  const componentState: StickyComponentState = useMemo(
    () => ({
      affixed: !!data?.affixed,
    }),
    [data?.affixed],
  );
  const slotClassNames = composeStickySlotClassNames(componentState, classNames);

  if (data?.affixed) {
    Object.assign(newStyle, {
      width,
      height,
      left,
      zIndex,
    });

    if (position === 'bottom') {
      newStyle.bottom = data.offset;
    }
    else {
      newStyle.top = data.offset;
    }
  }

  return (
    <>
      {data?.affixed && (
        <div
          ref={placeholderRef}
          style={{
            width,
            height,
          }}
          aria-hidden
        />
      )}
      <StickyRoot
        style={newStyle}
        ref={setWrapperRef}
        className={clsx(slotClassNames.root, className)}
        {...rest}
        componentState={componentState}
      >
        <StickyContent
          className={slotClassNames.content}
          componentState={componentState}
          ref={contentRef}
        >
          {children}
        </StickyContent>
      </StickyRoot>
    </>
  );
});

export default Sticky;

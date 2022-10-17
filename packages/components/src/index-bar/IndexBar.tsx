import {
  useControllableValue,
  useForceUpdate,
  useMergeRefs,
  useScrollParent,
  useValueRef,
} from '@rmc-vant/hooks';
import {
  getBoundingClientRect,
  getNodeScroll,
  getScrollParents,
  isEmpty,
  isHTMLElement,
  omit,
} from '@rmc-vant/utils';
import { useDrag } from '@use-gesture/react';
import classNames from 'classnames';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useConfigContext } from '../config-provider';
import { IndexBarContext } from './context';
import type { IndexBarProps, IndexType } from './interface';

type IndexOffsetItem = {
  index: IndexType;
  offset: number;
};

const DefaultIndexList = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i),
);

const IndexBar = React.forwardRef<HTMLDivElement, IndexBarProps>(
  (
    {
      className,
      stickyOffsetTop,
      onSelect,
      highlightColor,
      children,
      zIndex,
      sticky = true,
      indexList = DefaultIndexList,
      ...props
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
    const [currentIndex, setCurrentIndex] = useControllableValue<IndexType>(props, {
      valuePropName: 'currentIndex',
      defaultValue: indexList[0],
    });

    const sidebarRef = useRef<HTMLDivElement>(null);
    const [refs] = useState(() => new Map<IndexType, null | HTMLDivElement>());
    const forceUpdate = useForceUpdate();

    const containerRef = useRef<HTMLDivElement>(null);
    const mergedRef = useMergeRefs(containerRef, ref);
    const scrollableParent = useScrollParent(containerRef);
    const [anchors] = useState(() => new Map<IndexType, HTMLDivElement>());
    const updateSignal = useRef(true);
    const checkScrollSignal = useRef(true);
    const initial = useRef(false);
    const indexValueRef = useValueRef(currentIndex);

    const getOffsets = useCallback(() => {
      const container = sidebarRef.current;
      const baseTop = getBoundingClientRect(container).top;

      return (
        Array.from(refs.entries())
          .map(([index, elem]) => {
            if (!elem) {
              return null;
            }

            const { bottom } = getBoundingClientRect(elem);

            return {
              index,
              offset: bottom - baseTop,
            };
          })
          .filter(Boolean) as IndexOffsetItem[]
      ).sort((a, b) => a.offset - b.offset);
    }, []);

    const registerAnchor = useCallback(
      (index: IndexType, elem: HTMLDivElement) => {
        anchors.set(index, elem);
      },
      [anchors],
    );

    const unregisterAnchor = useCallback(
      (index: IndexType) => {
        anchors.delete(index);
      },
      [anchors],
    );

    useDrag(
      ({ memo, initial, xy, tap }) => {
        const container = sidebarRef.current;

        if (!container) {
          return memo;
        }

        const gestureState: {
          top: number;
          offsets: IndexOffsetItem[];
        } = memo ?? {
          offsets: getOffsets(),
          top: getBoundingClientRect(container).top,
        };
        const y = (tap ? initial[1] : xy[1]) - gestureState.top;
        const current = gestureState.offsets.find((item) => y < item.offset);

        if (current) {
          setCurrentIndex(current.index);
        }

        return gestureState;
      },
      {
        axis: 'y',
        pointer: {
          touch: true,
        },
        filterTaps: true,
        target: sidebarRef,
      },
    );

    useEffect(() => {
      if (!scrollableParent) {
        return;
      }

      const parents = getScrollParents(scrollableParent);

      const handler = (evt?: Event) => {
        if (!checkScrollSignal.current) {
          checkScrollSignal.current = true;
          return;
        }

        const parent = isHTMLElement(evt?.target) ? evt?.target : scrollableParent;
        const { top } = getBoundingClientRect(parent);
        const anchorOffsets = Array.from(anchors.entries())
          .map(([index, elem]) => {
            const { top } = getBoundingClientRect(elem);

            return {
              index,
              top,
            };
          })
          .sort((a, b) => a.top - b.top);

        const target = anchorOffsets.find((item, index) => {
          if (index === anchorOffsets.length - 1) {
            return top >= item.top;
          }
          return top >= item.top && top < anchorOffsets[index + 1].top;
        });

        if (target && target.index !== indexValueRef.current) {
          setCurrentIndex(target.index);
          updateSignal.current = false;
          forceUpdate();
        }
      };

      parents.forEach((item) => {
        item.addEventListener('scroll', handler);
      });

      handler();

      return () => {
        parents.forEach((item) => {
          item.removeEventListener('scroll', handler);
        });
      };
    }, [scrollableParent, indexValueRef, forceUpdate]);

    useEffect(() => {
      const keys = Array.from(refs.keys());
      const book = new Map(indexList.map((item) => [item, true]));

      keys.forEach((key) => {
        if (!book.has(key)) {
          refs.delete(key);
        }
      });
    }, [indexList, refs]);

    useEffect(() => {
      if (isEmpty(currentIndex) || !scrollableParent || !updateSignal.current) {
        return;
      }

      if (!initial.current) {
        initial.current = true;
        return;
      }

      const anchor = anchors.get(currentIndex);

      if (!anchor) {
        return;
      }

      const diffY =
        getBoundingClientRect(anchor).top -
        getBoundingClientRect(scrollableParent).top +
        1;

      checkScrollSignal.current = false;
      scrollableParent.scrollTo({
        top: getNodeScroll(scrollableParent).scrollTop + diffY,
      });
    }, [currentIndex, scrollableParent, anchors, stickyOffsetTop]);

    useEffect(() => {
      updateSignal.current = true;
    });

    const baseCls = getPrefixCls('index-bar');
    const ctxValue = useMemo(
      () => ({
        sticky,
        stickyOffsetTop,
        registerAnchor,
        unregisterAnchor,
      }),
      [sticky, stickyOffsetTop, registerAnchor, unregisterAnchor],
    );

    return (
      <div
        ref={mergedRef}
        className={classNames(baseCls, className)}
        {...omit(props, ['onChange', 'currentIndex'])}
      >
        <IndexBarContext.Provider value={ctxValue}>
          {children}
        </IndexBarContext.Provider>
        <div style={{ zIndex }} ref={sidebarRef} className={`${baseCls}-sidebar`}>
          {indexList.map((item) => (
            <div
              aria-label={String(item)}
              className={classNames(
                `${baseCls}-index`,
                item === currentIndex && `${baseCls}-index-active`,
              )}
              ref={(node) => {
                refs.set(item, node);
              }}
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  },
);

export default IndexBar;

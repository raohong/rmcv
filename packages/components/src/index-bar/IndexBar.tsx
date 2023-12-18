import {
  useControllableValue,
  useMergeRefs,
  useScrollParent,
  useValueRef,
} from '@rmc-vant/hooks';
import { useComponentTheme } from '@rmc-vant/system';
import {
  getBoundingClientRect,
  getNodeScroll,
  getScrollParents,
  isEmpty,
  isHTMLElement,
  omit,
} from '@rmc-vant/utils';
import { useDrag } from '@use-gesture/react';
import clsx from 'clsx';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { composeIndexBarSlotClassNames, indexBarClassNames } from './classNames';
import { IndexBarContext } from './context';
import type {
  IndexBarComponentState,
  IndexBarContextState,
  IndexBarProps,
  IndexType,
} from './interface';
import { IndexBarIndex, IndexBarRoot, IndexBarSidebar } from './styles';

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
      onChange,
      children,
      classNames,
      highlightColor,
      zIndex = 1,
      sticky = true,
      indexList = DefaultIndexList,
      ...props
    },
    ref,
  ) => {
    const [currentIndex, setCurrentIndex] = useControllableValue(props, {
      valuePropName: 'currentIndex',
      defaultValue: indexList[0],
    });

    const sidebarRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const mergedRef = useMergeRefs(containerRef, ref);
    const scrollableParent = useScrollParent(containerRef);
    const [anchors] = useState(() => new Map<IndexType, HTMLDivElement>());

    const updateSignal = useRef(true);
    const checkScrollSignal = useRef(true);
    const initial = useRef(false);
    const indexValueRef = useValueRef(currentIndex);

    const { palette } = useComponentTheme();

    const componentState: IndexBarComponentState = useMemo(
      () => ({
        sticky,
        zIndex,
        highlightColor: highlightColor || palette.primary,
      }),
      [sticky, zIndex, highlightColor],
    );
    const slotClassNames = composeIndexBarSlotClassNames(componentState, classNames);
    const anchorClassName = slotClassNames.anchor;

    const getIndexOffsets = useCallback(() => {
      const container = sidebarRef.current;
      const baseTop = getBoundingClientRect(container).top;

      return (
        Array.from(
          (container?.querySelectorAll(`.${indexBarClassNames.index}`) ??
            []) as HTMLDivElement[],
        )
          .map((elem) => {
            const { bottom } = getBoundingClientRect(elem);

            return {
              index: elem.dataset.index ? JSON.parse(elem.dataset.index) : null,
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
          offsets: getIndexOffsets(),
          top: getBoundingClientRect(container).top,
        };

        const y = (tap ? initial[1] : xy[1]) - gestureState.top;
        const current = gestureState.offsets.find((item) => y < item.offset);

        if (current && current.index !== indexValueRef.current) {
          setCurrentIndex(current.index);
          onChange?.(current.index);
          onSelect?.(current.index);
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
          onChange?.(target.index);
          updateSignal.current = false;
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
    }, [scrollableParent, indexValueRef]);

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

    const ctxValue: IndexBarContextState = useMemo(
      () => ({
        sticky,
        stickyOffsetTop,
        registerAnchor,
        unregisterAnchor,
        anchorClassName,
        componentState,
      }),
      [
        sticky,
        stickyOffsetTop,
        registerAnchor,
        unregisterAnchor,
        anchorClassName,
        componentState,
      ],
    );

    return (
      <IndexBarRoot
        ref={mergedRef}
        componentState={componentState}
        className={clsx(className, slotClassNames.root)}
        {...omit(props, ['onChange', 'currentIndex'])}
      >
        <IndexBarContext.Provider value={ctxValue}>
          {children}
        </IndexBarContext.Provider>
        <IndexBarSidebar
          componentState={componentState}
          ref={sidebarRef}
          className={slotClassNames.sidebar}
        >
          {indexList.map((item) => (
            <IndexBarIndex
              aria-label={String(item)}
              data-index={JSON.stringify(item)}
              componentState={{
                ...componentState,
                active: item === currentIndex,
              }}
              className={slotClassNames.index}
              key={item}
            >
              {item}
            </IndexBarIndex>
          ))}
        </IndexBarSidebar>
      </IndexBarRoot>
    );
  },
);

export default IndexBar;

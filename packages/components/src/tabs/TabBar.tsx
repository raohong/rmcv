import { useSpring } from '@react-spring/web';
import type { ResizeObserverEntry } from '@rmc-vant/hooks';
import {
  useMeasure,
  useMergeRefs,
  useResizeObserver,
  useUpdateIsomorphicLayoutEffect,
  useValueRef,
} from '@rmc-vant/hooks';
import { getBoundingClientRect } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { composeTabsSlotClassNames } from './classNames';
import type { TabBarProps, TabsComponentState } from './interface';
import {
  StyledIndicator,
  StyledTab,
  StyledTabContent,
  StyledTabsNav,
  StyledTabsNavList,
} from './styles';

const TabBar = React.forwardRef<HTMLDivElement, TabBarProps>(
  (
    { swipeThreshold, items, onClickTab, duration, componentState, classNames },
    ref,
  ) => {
    const length = items?.length ?? 0;

    const {
      data: { width: indicatorWidth },
      setRef: indicatorRef,
    } = useMeasure();

    const [indicatorTransition, setIndicatorTransition] = useState(false);
    const indicatorTransitionRef = useValueRef(indicatorTransition);
    const containerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const internalContainerRef = useMergeRefs(containerRef, ref);

    const [observeMap] = useState(() => new WeakMap<Element, boolean>());
    const [refs] = useState(() => new WeakMap<Element, number>());
    const [offsets, setOffsets] = useState<Record<number, number>>({});
    const [, ctrl] = useSpring(
      {
        scrollLeft: 0,
        onChange({ value }) {
          if (containerRef.current) {
            containerRef.current.scrollTo({ left: value.scrollLeft });
          }
        },
      },
      [],
    );

    const handleResize = useCallback(
      (entries: ResizeObserverEntry[]) => {
        const listElem = listRef.current;

        if (!listElem) {
          return;
        }

        const baseLeft = getBoundingClientRect(listElem).left;
        const records: Record<number, number> = {};

        entries.forEach(({ target }) => {
          const { left, width } = getBoundingClientRect(target);
          const index = refs.get(target);

          if (index !== undefined) {
            records[index] = Math.ceil(left - baseLeft + width / 2);
          }
        });

        setOffsets((prev) => {
          const next = { ...prev, ...records };
          const prevLength = Object.keys(next).length;

          if (prevLength > length) {
            for (let i = length; i < prevLength; i++) {
              delete next[i];
            }
          }

          if (JSON.stringify(next) !== JSON.stringify(prev)) {
            return next;
          }

          return prev;
        });
      },
      [length, refs],
    );
    const [ob] = useResizeObserver(handleResize);

    const activeIndex = items.findIndex(item => item.active);
    const scrollable = items.length > swipeThreshold;
    const position = offsets[activeIndex] ? offsets[activeIndex] : null;

    const indicatorX = position !== null ? position - indicatorWidth / 2 : null;

    useUpdateIsomorphicLayoutEffect(() => {
      const container = containerRef.current;
      if (scrollable && indicatorX !== null && container) {
        const target = Math.max(0, indicatorX - container.offsetWidth / 2);

        ctrl.start({
          scrollLeft: target,
        });
      }
    }, [activeIndex, scrollable, indicatorX]);

    useEffect(() => {
      if (!indicatorTransitionRef.current && indicatorWidth > 0) {
        setIndicatorTransition(true);
      }
    }, [indicatorWidth, indicatorTransitionRef]);

    const { type, shrink, ellipsis } = componentState;
    const rootClassNames = composeTabsSlotClassNames(componentState, classNames);

    return (
      <StyledTabsNav
        role='tablist'
        className={rootClassNames.nav}
        componentState={{
          ...componentState,
          navScrollable: scrollable,
        }}
        ref={internalContainerRef}
      >
        <StyledTabsNavList
          ref={listRef}
          componentState={componentState}
          className={rootClassNames.navList}
        >
          {items.map((item, index) => {
            const tabComponentState = {
              ...componentState,
              tab: {
                active: item.active,
                shrink,
                disabled: item.disabled,
                expandable: scrollable,
                ellipsis: !shrink && ellipsis,
              },
              tabContentEllipsis: !shrink && ellipsis,
              navScrollable: scrollable,
            } satisfies TabsComponentState;
            const tabsClassNames = composeTabsSlotClassNames(
              tabComponentState,
              classNames,
            );

            return (
              <StyledTab
                componentState={tabComponentState}
                ref={(node) => {
                  if (node) {
                    if (!observeMap.has(node)) {
                      observeMap.set(node, true);
                      ob.observe(node);
                    }

                    refs.set(node, index);
                  }
                }}
                className={clsx(item.className, tabsClassNames.tab)}
                onClick={() => !item.disabled && item.key && onClickTab(item.key)}
                key={item.key}
                tabIndex={item.active ? 0 : -1}
                aria-selected={item.active}
                id={item.tabId}
                role='tab'
                aria-controls={item.tabPanelId}
              >
                <StyledTabContent
                  componentState={tabComponentState}
                  className={tabsClassNames.tabContent}
                >
                  {item.tab}
                </StyledTabContent>
              </StyledTab>
            );
          })}
          {activeIndex > -1 && indicatorX !== null && type === 'line' && (
            <StyledIndicator
              componentState={{
                ...componentState,
                navScrollable: scrollable,
              }}
              className={rootClassNames.indicator}
              style={{
                transform: `translateX(${indicatorX}px)`,
                transitionDuration: !indicatorTransition ? '0s' : `${duration}s`,
              }}
              ref={indicatorRef}
            />
          )}
        </StyledTabsNavList>
      </StyledTabsNav>
    );
  },
);

export default TabBar;

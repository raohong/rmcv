import { useSpring } from '@react-spring/web';
import {
  useMeasure,
  useMergeRefs,
  useResizeObserver,
  useUpdateIsomorphicLayoutEffect,
  useValueRef,
} from '@rmc-vant/hooks';
import type { ResizeObserverEntry } from '@rmc-vant/hooks';
import { getBoundingClientRect } from '@rmc-vant/utils';
import classNames from 'classnames';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useConfigContext } from '../config-provider';
import type { TabBarProps } from './interface';

const TabBar = React.forwardRef<HTMLDivElement, TabBarProps>(
  (
    {
      backgroundColor,
      color,
      lineHeight,
      lineWidth,
      shrink,
      swipeThreshold,
      titleActiveColor,
      titleInactiveColor,
      tabPanList,
      ellipsis,
      onClickTab,
      duration,
      type,
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
    const cls = getPrefixCls('tabs-nav');
    const length = tabPanList.length;

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
      [length],
    );
    const [ob] = useResizeObserver(handleResize);

    const activeIndex = tabPanList.findIndex((item) => item.active);
    const scrollable = tabPanList.length > swipeThreshold;
    const position = offsets[activeIndex] ? offsets[activeIndex] : null;
    const indicatorX = position !== null ? position - indicatorWidth / 2 : null;
    const isCard = type === 'card';

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
    }, [indicatorWidth]);

    const getTabStyles = (active: boolean) => {
      const tabStyles: React.CSSProperties = {
        borderRightColor: isCard ? backgroundColor ?? color : undefined,
        backgroundColor: isCard && active ? backgroundColor ?? color : undefined,
      };
      if (active) {
        tabStyles.color = isCard ? undefined : titleActiveColor;
      } else {
        tabStyles.color = isCard ? color : titleInactiveColor;
      }

      return tabStyles;
    };

    return (
      <div
        role="tablist"
        className={classNames(cls, {
          [`${cls}-scrollable`]: scrollable,
          [`${cls}-shrink`]: shrink,
        })}
        ref={internalContainerRef}
        style={{
          backgroundColor,
        }}
      >
        <div
          style={{
            borderColor: isCard ? color : undefined,
          }}
          ref={listRef}
          className={`${cls}-list`}
        >
          {tabPanList.map((item, index) => (
            <button
              ref={(node) => {
                if (node) {
                  if (!observeMap.has(node)) {
                    observeMap.set(node, true);
                    ob.observe(node);
                  }

                  refs.set(node, index);
                }
              }}
              className={classNames(getPrefixCls('tabs-tab'), {
                [getPrefixCls('tabs-tab-active')]: item.active,
                [getPrefixCls('tabs-tab-shrink')]: shrink,
                [getPrefixCls('tabs-tab-disabled')]: item.disabled,
                [getPrefixCls('tabs-tab-expandable')]: scrollable,
                [getPrefixCls('tabs-tab-ellipsis')]: ellipsis && !shrink,
              })}
              style={getTabStyles(item.active)}
              onClick={() => !item.disabled && item.key && onClickTab(item.key)}
              key={item.key}
              tabIndex={item.active ? 0 : -1}
              aria-selected={item.active}
              id={item.tabId}
              role="tab"
              aria-controls={item.tabPanelId}
            >
              <div
                className={classNames(getPrefixCls('tabs-tab-content'), {
                  [getPrefixCls('tabs-tab-content-ellipsis')]: ellipsis && !shrink,
                })}
              >
                {item.tab}
              </div>
            </button>
          ))}
          {activeIndex > -1 && indicatorX !== null && type === 'line' && (
            <div
              className={getPrefixCls('tabs-indicator')}
              style={{
                backgroundColor: color,
                width: lineWidth,
                height: lineHeight,
                opacity: indicatorWidth === 0 ? 0 : '',
                transform: `translateX(${indicatorX}px)`,
                transitionDuration: !indicatorTransition ? '0s' : `${duration}s`,
              }}
              ref={indicatorRef}
            />
          )}
        </div>
      </div>
    );
  },
);

export default TabBar;

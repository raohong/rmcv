import { useDeepMemorizedEffect, useUpdateEffect } from '@rmc-vant/hooks';
import type { IBCR } from '@rmc-vant/utils';
import { getBoundingClientRect, getScrollParents } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import ScrollInToView from 'scroll-into-view';
import type { TabPaneListProps } from './interface';
import { StyledDefaultContent, StyledTabPanel } from './styles';

const ScrollspyTabPaneList: React.FC<
  TabPaneListProps & {
    tabBarRef: React.RefObject<HTMLDivElement>;
    stickyOffsetTop?: number;
  }
> = ({
  items,
  onChange,
  tabBarRef,
  activeKey,
  componentState,
  slotClassNames,
  stickyOffsetTop = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [refs] = useState<Record<string, HTMLElement>>({});

  const updateToken = useRef(true);
  const scrolling = useRef(false);

  const keys = items?.map(item => item.key).filter(Boolean) as string[];

  useDeepMemorizedEffect(() => {
    Object.keys(refs).forEach((key) => {
      if (!keys.includes(key)) {
        delete refs[key];
      }
    });
  }, [keys]);

  useDeepMemorizedEffect(() => {
    const tabBar = tabBarRef.current;
    const container = containerRef.current;
    if (!container || !tabBar) {
      return;
    }
    const scrollableParents = getScrollParents(container);

    const handleScroll = () => {
      if (scrolling.current) {
        return;
      }

      const { bottom } = getBoundingClientRect(tabBar);

      const list = keys
        .map((key) => {
          const node = refs[key];

          return node ? { rect: getBoundingClientRect(node), node, key } : null;
        })
        .filter(Boolean) as { rect: IBCR; node: HTMLElement; key: string }[];

      list.sort((a, b) => a?.rect.top - b?.rect.top);

      const target = list.find(({ rect }) => {
        return rect.top <= bottom && rect.bottom > bottom;
      });

      if (target && target.key !== activeKey) {
        onChange?.(target.key);

        updateToken.current = false;
      }
    };

    scrollableParents.forEach((elem) => {
      elem.addEventListener('scroll', handleScroll);
    });

    return () => {
      scrollableParents.forEach((elem) => {
        elem.removeEventListener('scroll', handleScroll);
      });
    };
  }, [onChange, tabBarRef, keys, activeKey]);

  useUpdateEffect(() => {
    if (activeKey && updateToken.current) {
      const node = refs[activeKey];

      if (!node) {
        return;
      }

      const tabBarHeight = tabBarRef.current?.offsetHeight ?? 0;
      scrolling.current = true;

      ScrollInToView(
        node,
        {
          align: {
            top: 0,
            topOffset: stickyOffsetTop + tabBarHeight,
          },
          time: 250,
          cancellable: true,
        },
        () => {
          scrolling.current = false;
        },
      );

      return () => {
        scrolling.current = false;
      };
    }
  }, [activeKey, stickyOffsetTop, tabBarRef]);

  useEffect(() => {
    updateToken.current = true;
  });

  return (
    <StyledDefaultContent
      ref={containerRef}
      componentState={componentState}
      className={slotClassNames.panels}
    >
      {items?.map(item => (
        <StyledTabPanel
          ref={(node) => {
            if (node && item.key) {
              refs[item.key] = node;
            }
          }}
          className={clsx(slotClassNames.panel, item.className)}
          key={item.key}
          role='tabpanel'
          id={item.tabPanelId}
          aria-labelledby={item.tabPanelId}
          componentState={componentState}
        >
          {item.children}
        </StyledTabPanel>
      ))}
    </StyledDefaultContent>
  );
};

export default ScrollspyTabPaneList;

import { useMeasure } from '@rmc-vant/hooks';
import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import type { ScrollViewRef } from '../scroll-view';
import type { TabPaneListProps } from './interface';
import { StyledSwipeableContent, StyledTabPanel } from './styles';

const SwipeableTabPaneList: React.FC<
  TabPaneListProps & {
    swipeable?: boolean;
  }
> = ({ items, lazyRender, onChange, swipeable, slotClassNames, componentState }) => {
  const ref = useRef<HTMLDivElement>(null);
  const scrollViewRef = useRef<ScrollViewRef>(null);
  const {
    data: { width },
  } = useMeasure({ ref });
  const activeIndex = items.findIndex(item => item.active);
  const VELOCITY_THRRSHOLD = 1;

  const modifyTarget = (d: number, velocity: number) => {
    if (width === 0 || activeIndex === -1) {
      return d;
    }

    let nextActiveIndex = activeIndex;

    if (Math.abs(velocity) >= VELOCITY_THRRSHOLD) {
      nextActiveIndex += Math.sign(velocity) * -1;
    }
    else {
      const next = Math.round(d / -width);
      const offset = next - activeIndex;

      nextActiveIndex += Math.min(1, Math.abs(offset)) * Math.sign(offset);
    }

    nextActiveIndex = Math.max(0, Math.min(items.length - 1, nextActiveIndex));

    return nextActiveIndex * -width;
  };

  const handleScrollEndDrag = (target: number) => {
    const nextActiveIndex = Math.round(target / -width);

    if (nextActiveIndex !== activeIndex) {
      const nextKey = items[nextActiveIndex].key;

      if (nextKey) {
        onChange?.(nextKey);
      }
    }
  };

  useEffect(() => {
    if (activeIndex > -1 && width > 0) {
      scrollViewRef.current?.scrollTo(activeIndex * -width);
    }
  }, [width, activeIndex]);

  return (
    <StyledSwipeableContent
      domRef={ref}
      className={slotClassNames.panels}
      componentState={componentState}
      modifyTarget={modifyTarget}
      ref={scrollViewRef}
      scrollEnabled={swipeable}
      onScrollEndDrag={handleScrollEndDrag}
      horizontal
    >
      {items.map(item => (
        <StyledTabPanel
          style={{
            width: width > 0 ? width : undefined,
          }}
          componentState={componentState}
          className={clsx(slotClassNames.panel, item.className)}
          key={item.key}
          role='tabpanel'
          id={item.tabPanelId}
          aria-labelledby={item.tabPanelId}
        >
          {!lazyRender || item.active ? item.children : null}
        </StyledTabPanel>
      ))}
    </StyledSwipeableContent>
  );
};

export default SwipeableTabPaneList;

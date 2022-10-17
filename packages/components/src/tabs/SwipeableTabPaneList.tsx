import { useMeasure } from '@rmc-vant/hooks';
import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import { useConfigContext } from '../config-provider';
import ScrollView from '../scroll-view';
import type { ScrollViewRef } from '../scroll-view';
import { TabPaneListProps } from './interface';

const SwipeableTabPaneList: React.FC<
  TabPaneListProps & {
    swipeable?: boolean;
  }
> = ({ tabPaneList, lazyRender, onChange, swipeable }) => {
  const { getPrefixCls } = useConfigContext();
  const ref = useRef<HTMLDivElement>(null);
  const scrollViewRef = useRef<ScrollViewRef>(null);
  const {
    data: { width },
  } = useMeasure({ ref });
  const activeIndex = tabPaneList.findIndex((item) => item.active);
  const VELOCITY_THRRSHOLD = 1;

  const modifyTarget = (d: number, velocity: number) => {
    if (width === 0 || activeIndex === -1) {
      return d;
    }

    let nextActiveIndex = activeIndex;

    if (Math.abs(velocity) >= VELOCITY_THRRSHOLD) {
      nextActiveIndex += Math.sign(velocity) * -1;
    } else {
      const next = Math.round(d / -width);
      const offset = next - activeIndex;

      nextActiveIndex += Math.min(1, Math.abs(offset)) * Math.sign(offset);
    }

    nextActiveIndex = Math.max(0, Math.min(tabPaneList.length - 1, nextActiveIndex));

    return nextActiveIndex * -width;
  };

  const handleScrollEndDrag = (target: number) => {
    const nextActiveIndex = Math.round(target / -width);

    if (nextActiveIndex !== activeIndex) {
      const nextKey = tabPaneList[nextActiveIndex].key;

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
    <ScrollView
      domRef={ref}
      className={getPrefixCls('tabs-content')}
      modifyTarget={modifyTarget}
      ref={scrollViewRef}
      scrollEnabled={swipeable}
      onScrollEndDrag={handleScrollEndDrag}
      horizontal
    >
      {tabPaneList.map((item) => (
        <div
          style={{
            width: width > 0 ? width : undefined,
          }}
          className={classNames(getPrefixCls('tabs-panel'), item.className)}
          key={item.key}
          role="tabpanel"
          id={item.tabPanelId}
          aria-labelledby={item.tabPanelId}
        >
          {!lazyRender || item.active ? item.children : null}
        </div>
      ))}
    </ScrollView>
  );
};

export default SwipeableTabPaneList;

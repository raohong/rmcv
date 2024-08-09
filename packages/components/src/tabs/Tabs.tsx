'use-client';

import { useControllableValue, useMergeRefs } from '@rmc-vant/hooks';
import { isNil, isNumber, isString, omit } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useMemo, useRef } from 'react';
import { useXId } from '../_utils';
import { useThemeProps } from '../config-provider';
import { Sticky } from '../sticky';
import ScrollspyTabPaneList from './ScrollspyTabPaneList';
import SwipeableTabPaneList from './SwipeableTabPaneList';
import TabBar from './TabBar';
import TabPaneList from './TabPaneList';
import { TabsName, composeTabsSlotClassNames } from './classNames';
import type { TabPaneListProps, TabsComponentState, TabsProps } from './interface';
import { TabsRoot } from './styles';

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const {
    children,
    color,
    backgroundColor,
    animated,
    sticky,
    offsetTop,
    shrink,
    swipeable,
    scrollspy,
    titleActiveColor,
    titleInactiveColor,
    className,
    lazyRender,
    items,
    classNames,
    lineHeight = 3,
    lineWidth = 40,
    duration = 0.3,
    swipeThreshold = 5,
    ellipsis = true,
    type = 'line',
    ...rest
  } = useThemeProps(TabsName, props);
  const id = useXId();
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabBarRef = useRef<HTMLDivElement>(null);

  const internalItems
    = items?.map((item, index) => {
      const key = !isNil(item.key)
        ? String(item.key)
        : isString(item.tab) || isNumber(item.tab)
          ? String(item.tab)
          : isString(item.children) || isNumber(item.children)
            ? String(item.children)
            : undefined;

      const tabId = `${id}-tab-${index}`;
      const tabPanelId = `${id}-tab-panel-${index}`;

      return {
        ...item,
        key,
        tabId,
        tabPanelId,
      };
    }) ?? [];

  const [activeKey, setActiveKey] = useControllableValue(props, {
    valuePropName: 'activeKey',
    defaultValuePropName: 'defaultActiveKey',
    defaultValue: internalItems[0]?.key,
  });
  const internalRef = useMergeRefs(tabsRef, ref);

  const internalAnimated = swipeable ? true : !!animated;
  const internalSticky = scrollspy || sticky;

  const handleChange = (key: string) => {
    if (key !== activeKey) {
      setActiveKey(key);
    }
  };

  const componentState = useMemo(
    () =>
      ({
        color,
        type,
        lineHeight,
        lineWidth,
        titleActiveColor,
        duration,
        backgroundColor,
        titleInactiveColor,
        shrink,
        ellipsis,
      }) satisfies TabsComponentState,
    [
      color,
      type,
      lineHeight,
      lineWidth,
      titleActiveColor,
      duration,
      backgroundColor,
      titleInactiveColor,
      shrink,
      ellipsis,
    ],
  );

  const slotClassNames = composeTabsSlotClassNames(componentState, classNames);

  const itemsData = internalItems.map(item => ({
    ...item,
    active: item.key === activeKey,
  }));
  const renderTabPanelList = () => {
    const panelListProps: TabPaneListProps = {
      lazyRender,
      items: itemsData,
      tabsId: id,
      onChange: handleChange,
      activeKey,
      componentState,
      slotClassNames,
    };

    if (scrollspy) {
      return (
        <ScrollspyTabPaneList
          stickyOffsetTop={offsetTop}
          tabBarRef={tabBarRef}
          {...panelListProps}
        />
      );
    }

    if (internalAnimated) {
      return <SwipeableTabPaneList swipeable={!!swipeable} {...panelListProps} />;
    }

    return <TabPaneList {...panelListProps} />;
  };

  const renderTabBar = () => {
    const defaultDom = (
      <TabBar
        items={itemsData}
        swipeThreshold={swipeThreshold}
        componentState={componentState}
        tabsId={id}
        onClickTab={handleChange}
        duration={duration}
        ref={tabBarRef}
      />
    );

    if (internalSticky) {
      return (
        <Sticky target={() => tabsRef.current} offsetTop={offsetTop}>
          {defaultDom}
        </Sticky>
      );
    }

    return defaultDom;
  };

  return (
    <TabsRoot
      componentState={componentState}
      className={clsx(slotClassNames.root, className)}
      ref={internalRef}
      {...omit(rest, ['activeKey', 'onChange', 'defaultActiveKey'])}
    >
      {renderTabBar()}
      {renderTabPanelList()}
    </TabsRoot>
  );
});

export default Tabs;

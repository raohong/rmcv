import React, { useCallback, useRef, useState } from 'react';
import classNames from 'classnames';
import {
  useControllableValue,
  useIsomorphicLayoutEffect,
  useMergeRefs,
} from '@rmc-vant/hooks';
import { omit } from '@rmc-vant/utils';
import type {
  TabPaneListData,
  TabPaneListProps,
  TabPaneProps,
  TabsProps,
} from './interface';
import { flatReactNode } from '../_utils';
import { useConfigContext } from '../config-provider';
import { TAB_PANE_SYMBOL } from './TabPane';
import TabPaneList from './TabPaneList';
import TabBar from './TabBar';
import SwipeableTabPaneList from './SwipeableTabPaneList';
import Sticky from '../sticky';
import ScrollspyTabPaneList from './ScrollspyTabPaneList';

let uuid = 0;

const getTabPaneContentList = (children: React.ReactNode) => {
  return flatReactNode(children)
    .map((item) => {
      if (
        React.isValidElement(item) &&
        item.type &&
        (item.type as unknown as any)[TAB_PANE_SYMBOL]
      ) {
        const target = item as React.ReactElement<
          React.PropsWithChildren<TabPaneProps>
        >;
        const key = item.key;

        return {
          key,
          tab: target.props.tab,
          children: target.props.children,
          disabled: target.props.disabled,
          active: false,
          className: target.props.className,
        };
      }

      return null;
    })
    .filter(Boolean) as Omit<TabPaneListData, 'tabId' | 'tabPaneId'>[];
};

const getTabPaneList = (
  list: Omit<TabPaneListData, 'tabId' | 'tabPaneId' | 'active'>[],
  activekey: string | undefined,
  prefix: string,
  id: number,
) => {
  let inited = false;

  return list.map((item, index) => {
    const key = item.key;
    const active = key === activekey && activekey !== undefined;

    if (active && !inited) {
      inited = true;
    }

    return {
      ...item,
      active: inited ? active : false,
      tabId: `${prefix}-${id}-tab-${index}`,
      tabPanelId: `${prefix}-${id}-tabpanel-${index}`,
    };
  });
};

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const {
    children,
    color,
    backgroundColor,
    lineHeight,
    lineWidth,
    animated,
    border,
    sticky,
    offsetTop,
    shrink,
    swipeable,
    scrollspy,
    titleActiveColor,
    titleInactiveColor,
    className,
    lazyRender,
    defaultActiveKey,
    duration = 0.3,
    swipeThreshold = 5,
    ellipsis = true,
    type = 'line',
    ...rest
  } = props;
  const [id, setId] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  const tabBarRef = useRef<HTMLDivElement>(null);
  const paneContentList = getTabPaneContentList(children);
  const [activeKey, setActiveKey] = useControllableValue<string | undefined>(props, {
    valuePropName: 'activeKey',
    defaultValuePropName: 'defaultActiveKey',
    defaultValue: paneContentList[0].key,
  });
  const internalRef = useMergeRefs(tabsRef, ref);

  const { getPrefixCls } = useConfigContext();
  const tabPaneList = getTabPaneList(
    paneContentList,
    activeKey,
    getPrefixCls('tabs'),
    id,
  );

  const internalAnimated = swipeable ? true : !!animated;
  const internalSticky = scrollspy || sticky;

  const handleChange = useCallback(
    (key: string) => {
      if (key !== activeKey) {
        setActiveKey(key);
      }
    },
    [activeKey],
  );

  const renderTabPanelList = () => {
    const panelListProps: TabPaneListProps = {
      lazyRender,
      tabPaneList,
      tabsId: id,
      onChange: handleChange,
      activeKey,
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
    const defaulDom = (
      <TabBar
        ellipsis={ellipsis}
        titleActiveColor={titleActiveColor}
        titleInactiveColor={titleInactiveColor}
        tabPanList={tabPaneList}
        swipeThreshold={swipeThreshold}
        color={color}
        backgroundColor={backgroundColor}
        lineHeight={lineHeight}
        lineWidth={lineWidth}
        type={type}
        shrink={shrink}
        tabsId={id}
        onClickTab={handleChange}
        duration={duration}
        ref={tabBarRef}
      />
    );

    if (internalSticky) {
      return (
        <Sticky target={() => tabsRef.current} offsetTop={offsetTop}>
          {defaulDom}
        </Sticky>
      );
    }

    return defaulDom;
  };

  useIsomorphicLayoutEffect(() => {
    setId(++uuid);
  }, []);

  return (
    <div
      className={classNames(
        getPrefixCls('tabs'),
        {
          [getPrefixCls(`tabs-${type}`)]: type,
        },
        className,
      )}
      ref={internalRef}
      {...omit(rest, ['activeKey', 'onChange'])}
    >
      {renderTabBar()}
      {renderTabPanelList()}
    </div>
  );
});

export default Tabs;

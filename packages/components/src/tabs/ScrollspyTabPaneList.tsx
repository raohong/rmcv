import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { useSpring } from '@react-spring/web';
import {
  getBoundingClientRect,
  getNodeScroll,
  getScrollParent,
} from '@rmc-vant/utils';
import type { IBCR } from '@rmc-vant/utils';
import { useDeepCompareEffect } from '@rmc-vant/hooks';
import { useConfigContext } from '../config-provider';
import { TabPaneListProps } from './interface';

const ScrollspyTabPaneList: React.FC<
  TabPaneListProps & {
    tabBarRef: React.RefObject<HTMLDivElement>;
    stickyOffsetTop?: number;
  }
> = ({ tabPaneList, onChange, tabBarRef, activeKey, stickyOffsetTop = 0 }) => {
  const { getPrefixCls } = useConfigContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const [refs] = useState<Record<string, HTMLElement>>({});
  const panelCls = getPrefixCls('tabs-panel');

  const updateToken = useRef(true);
  const scrolling = useRef(false);
  const initial = useRef(false);
  const [, ctrl] = useSpring(
    {
      scrollTop: 0,
    },
    [],
  );

  const keys = tabPaneList.map((item) => item.key).filter(Boolean) as string[];

  useDeepCompareEffect(() => {
    Object.keys(refs).forEach((key) => {
      if (!keys.includes(key)) {
        delete refs[key];
      }
    });
  }, [keys]);

  useDeepCompareEffect(() => {
    const tabBar = tabBarRef.current;
    const scrollableParent = getScrollParent(containerRef.current);

    if (!scrollableParent || !tabBar) {
      return;
    }

    const handleScroll = () => {
      if (!containerRef.current || scrolling.current) {
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

        if (initial.current) {
          updateToken.current = false;
        }
      }
    };

    scrollableParent.addEventListener('scroll', handleScroll);

    return () => {
      scrollableParent.removeEventListener('scroll', handleScroll);
    };
  }, [onChange, panelCls, tabBarRef, keys, activeKey]);

  useEffect(() => {
    const scrollableParent = getScrollParent(containerRef.current);

    if (activeKey && updateToken.current && scrollableParent && tabBarRef.current) {
      const node = refs[activeKey];

      if (node) {
        if (!initial.current) {
          initial.current = true;
          return;
        }

        const rect = getBoundingClientRect(node);
        const { height } = getBoundingClientRect(tabBarRef.current);
        const dest =
          getNodeScroll(scrollableParent).scrollTop +
          rect.top -
          (stickyOffsetTop + height);

        ctrl.start({
          scrollTop: dest,
          onStart() {
            scrolling.current = true;
          },
          onChange({ value }) {
            scrollableParent.scrollTo({ top: value.scrollTop });
          },
          onRest() {
            scrolling.current = false;
          },
        });
      }
    }
  }, [activeKey, stickyOffsetTop, tabBarRef]);

  useEffect(() => {
    updateToken.current = true;
  });

  return (
    <div
      ref={containerRef}
      className={classNames(
        getPrefixCls('tabs-content'),
        getPrefixCls('tabs-content-scrollspy'),
      )}
    >
      {tabPaneList.map((item) => (
        <div
          ref={(node) => {
            if (node && item.key) {
              refs[item.key] = node;
            }
          }}
          className={classNames(panelCls, item.className)}
          key={item.key}
          role="tabpanel"
          id={item.tabPanelId}
          aria-labelledby={item.tabPanelId}
        >
          {item.children}
        </div>
      ))}
    </div>
  );
};

export default ScrollspyTabPaneList;

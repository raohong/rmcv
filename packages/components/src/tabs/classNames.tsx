import { generateComponentClassNameUtility } from '@rmc-vant/system';
import type { TabsComponentState, TabsNSlot, TabsSlot } from './interface';

export const TabsName = 'Tabs';

export const { tabsClassNames, composeTabsSlotClassNames, getTabsSlotClassNames }
  = generateComponentClassNameUtility<
    typeof TabsName,
    TabsComponentState,
    TabsSlot,
    TabsNSlot
  >(
    TabsName,
    {
      root: true,
      card: true,
      line: true,
      nav: true,
      navScrollable: true,
      navShrink: true,
      tab: true,
      tabActive: true,
      tabContent: true,
      tabDisabled: true,
      tabEllipsis: true,
      tabExpandable: true,
      tabShrink: true,
      panels: true,
      panel: true,
      indicator: true,
      navList: true,
      tabContentEllipsis: true,
    },
    ({ shrink, type, tab, navScrollable, tabContentEllipsis }) => ({
      root: ['root', type],
      nav: ['nav', shrink && 'navShrink', navScrollable && 'navScrollable'],
      navList: ['navList'],
      tab: [
        'tab',
        tab?.active && 'tabActive',
        tab?.disabled && 'tabDisabled',
        tab?.ellipsis && 'tabEllipsis',
        tab?.expandable && 'tabExpandable',
        tab?.shrink && 'tabShrink',
      ],
      tabContent: ['tabContent', tabContentEllipsis && 'tabContentEllipsis'],
      panels: ['panels'],
      panel: ['panel'],
      indicator: ['indicator'],
    }),
  );

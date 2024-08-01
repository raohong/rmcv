import { styled } from '@rmc-vant/system';
import { baseStyleReset, textEllipsis } from '../_styles';
import { ScrollView } from '../scroll-view';
import { getTabsSlotClassNames } from './classNames';
import type { TabsComponentState } from './interface';

export const TabsRoot = styled<'div', TabsComponentState>('div', {
  name: 'root',
  overridesResolver: ({ componentState }) =>
    getTabsSlotClassNames(componentState).root,
})(baseStyleReset);

export const StyledTabsNav = styled<'div', TabsComponentState>('div', {
  name: 'nav',
  overridesResolver: ({ componentState }) =>
    getTabsSlotClassNames(componentState).nav,
})(({ componentState: { navScrollable, backgroundColor, type }, theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  userSelect: 'none',

  ...(navScrollable && {
    'overflowX': 'auto',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  }),

  ...(type === 'line' && {
    background: backgroundColor ?? theme.palette.white,
    height: 44,
  }),

  ...(type === 'card' && {
    margin: `0 ${theme.space.padding.md}px`,
    height: 30,
  }),
}));

export const StyledTabsNavList = styled<'div', TabsComponentState>('div', {
  name: 'navList',
  overridesResolver: ({ componentState }) =>
    getTabsSlotClassNames(componentState).navList,
})(
  ({
    componentState: { type, color, shrink, navScrollable, backgroundColor },
    theme,
  }) => ({
    position: 'relative',
    height: '100%',
    display: shrink ? 'inline-flex' : 'flex',
    ...(type === 'card' && {
      border: `${theme.borderBaseWidth}px solid ${backgroundColor ?? color ?? theme.palette.danger}`,
      borderRadius: theme.radii.sm,
    }),
    ...(type === 'line'
    && (shrink || navScrollable) && {
      paddingLeft: theme.space.padding.xs,
      paddingRight: theme.space.padding.xs,
    }),
  }),
);

export const StyledTab = styled<'button', TabsComponentState>('button', {
  name: 'tab',
  overridesResolver: ({ componentState }) =>
    getTabsSlotClassNames(componentState).tab,
})(({
  theme: { space, palette, borderBaseWidth, typography },
  componentState: {
    tab,
    color,
    backgroundColor,
    titleActiveColor,
    type,
    titleInactiveColor,
  },
}) => {
  const isCard = type === 'card';

  const internalColor = color ?? palette.danger;

  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: tab?.disabled ? 'auto' : 'pointer',
    flex: 1,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    fontSize: typography.fontSize.md,
    lineHeight: typography.lineHeights.md,

    ...(isCard && {
      'background': tab?.active ? (backgroundColor ?? internalColor) : undefined,
      'borderRightColor': backgroundColor ?? color,
      'color': tab?.active ? palette.white : internalColor,
      '&:not(:last-child)': {
        borderRight: `${borderBaseWidth}px solid ${backgroundColor ?? internalColor}`,
      },
    }),

    ...(!isCard
    && tab?.active && {
      color: titleActiveColor ?? palette.text.primary,
      fontWeight: typography.fontWeightBold,
    }),

    ...(!isCard
    && !tab?.active && {
      color: titleInactiveColor ?? palette.gray700,
    }),

    ...(tab?.ellipsis && {
      overflow: 'hidden',
    }),

    ...(tab?.disabled && {
      color: palette.text.third,
    }),

    ...(tab?.expandable && {
      flex: '1 0 auto',
      padding: `0 ${space.padding.sm}px`,
    }),

    ...(tab?.shrink && {
      flex: 0,
      padding: `0 ${space.padding.xs}px`,
    }),
  };
});

export const StyledTabContent = styled<'div', TabsComponentState>('div', {
  name: 'tabContent',
  overridesResolver: ({ componentState }) =>
    getTabsSlotClassNames(componentState).tabContent,
})(({ componentState: { tabContentEllipsis }, theme }) => ({
  ...(tabContentEllipsis && textEllipsis({ theme })),
}));

export const StyledIndicator = styled<'div', TabsComponentState>('div', {
  name: 'indicator',
  overridesResolver: ({ componentState }) =>
    getTabsSlotClassNames(componentState).indicator,
})(
  ({
    componentState: { color, lineHeight, lineWidth },
    theme: { palette, transition },
  }) => ({
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 1,
    willChange: 'transform',
    height: lineHeight,
    opacity: lineWidth === 0 ? 0 : undefined,
    width: lineWidth,
    borderRadius: lineHeight,
    transition: `transform ${transition.duration.base}`,
    background: color ?? palette.danger,
  }),
);

export const StyledDefaultContent = styled<'div', TabsComponentState>('div', {
  name: 'panels',
  overridesResolver: ({ componentState }) =>
    getTabsSlotClassNames(componentState).panels,
})();

export const StyledSwipeableContent = styled<typeof ScrollView, TabsComponentState>(
  ScrollView,
  {
    name: 'panels',
    overridesResolver: ({ componentState }) =>
      getTabsSlotClassNames(componentState).panels,
  },
)();

export const StyledTabPanel = styled<'div', TabsComponentState>('div', {
  name: 'panel',
  overridesResolver: ({ componentState }) =>
    getTabsSlotClassNames(componentState).panel,
})();

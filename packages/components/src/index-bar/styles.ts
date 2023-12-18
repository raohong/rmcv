import { styled } from '@rmc-vant/system';
import { baseStyleReset, hairline } from '../_styles';
import { IndexBarName, getIndexBarSlotClassNames } from './classNames';
import type {
  IndexBarAnchorComponentState,
  IndexBarComponentState,
  IndexBarIndexComponentState,
} from './interface';

export const IndexBarRoot = styled<'div', IndexBarComponentState>('div', {
  name: IndexBarName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getIndexBarSlotClassNames(componentState).root,
})(baseStyleReset);

export const IndexBarSidebar = styled<'div', IndexBarComponentState>('div', {
  name: IndexBarName,
  slot: 'sidebar',
  overridesResolver: ({ componentState }) =>
    getIndexBarSlotClassNames(componentState).sidebar,
})(({ theme, componentState: { zIndex } }) => ({
  position: 'fixed',
  boxSizing: 'border-box',
  top: '50%',
  right: 0,
  touchAction: 'none',
  userSelect: 'none',
  transform: 'translateY(-50%)',
  padding: `0 ${theme.space.padding.xs}px 0 ${theme.space.padding.md}px`,
  zIndex,
}));

export const IndexBarIndex = styled<'div', IndexBarIndexComponentState>('div', {
  name: IndexBarName,
  slot: 'index',
  overridesResolver: ({ componentState }) =>
    getIndexBarSlotClassNames(componentState).index,
})(({ theme, componentState: { active, highlightColor } }) => ({
  cursor: 'pointer',
  boxSizing: 'border-box',
  color: active ? highlightColor : theme.palette.text.primary,
  fontWeight: theme.typography.fontWeightBold,
  lineHeight: theme.typography.lineHeights.md,
  textAlign: 'center',
}));

export const IndexBarAnchor = styled<'div', IndexBarAnchorComponentState>('div', {
  name: IndexBarName,
  slot: 'anchor',
  overridesResolver: ({ componentState }) =>
    getIndexBarSlotClassNames(componentState).anchor,
})(({ theme, componentState: { fixed, highlightColor } }) => ({
  boxSizing: 'border-box',
  padding: `0 ${theme.space.padding.md}px`,
  color: theme.palette.text.primary,
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.fontSize.md,
  lineHeight: '32px',
  background: 'transparent',
  ...(fixed && {
    color: highlightColor,
    background: theme.palette.background.light,
    ...hairline('bottom')({ theme }),
  }),
}));

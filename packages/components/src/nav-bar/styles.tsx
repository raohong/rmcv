import { ArrowLeft } from '@rmc-vant/icons';
import { styled } from '@rmc-vant/system';
import { SafeArea } from '../safe-area';
import { Touchable } from '../touchable';
import { NavBarName, getNavBarSlotClassNames } from './classNames';
import type { NavBarComponentState } from './interface';

export const NavBarRoot = styled<typeof SafeArea, NavBarComponentState>(SafeArea, {
  name: NavBarName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getNavBarSlotClassNames(componentState).root,
})(({ theme, componentState: { zIndex, fixed } }) => ({
  height: 46,
  position: 'relative',
  background: theme.palette.background.light,
  boxSizing: 'content-box',
  textAlign: 'center',
  ...(fixed && {
    zIndex,
    position: 'fixed',
    left: 0,
    top: 0,
    right: 0,
  }),
}));

export const NavBarPlaceholder = styled(SafeArea)({
  height: 46,
  boxSizing: 'content-box',
});

export const NavBarTitle = styled<'div', NavBarComponentState>('div', {
  name: NavBarName,
  slot: 'title',
  overridesResolver: ({ componentState }) =>
    getNavBarSlotClassNames(componentState).title,
})(({ theme }) => ({
  boxSizing: 'border-box',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: theme.typography.fontSize.lg,
  color: theme.palette.text.primary,
  maxWidth: '60%',
  fontWeight: theme.typography.fontWeightBold,
  margin: '0 auto',
}));

const Action = styled(Touchable)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  height: 46,
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
  padding: `0 ${theme.space.padding.md}px`,
}));

export const NavBarLeft = styled<typeof Action, NavBarComponentState>(Action, {
  name: NavBarName,
  slot: 'left',
  overridesResolver: ({ componentState }) =>
    getNavBarSlotClassNames(componentState).left,
})({
  left: 0,
});

export const NavBarRight = styled<typeof Action, NavBarComponentState>(Action, {
  name: NavBarName,
  slot: 'right',
  overridesResolver: ({ componentState }) =>
    getNavBarSlotClassNames(componentState).right,
})({
  right: 0,
});

export const NavBarText = styled<'span', NavBarComponentState>('span', {
  name: NavBarName,
  slot: 'text',
  overridesResolver: ({ componentState }) =>
    getNavBarSlotClassNames(componentState).text,
})(({ theme }) => ({
  color: theme.palette.primary,
}));

export const NavBarArrowIcon = styled<typeof ArrowLeft, NavBarComponentState>(
  ArrowLeft,
  {
    name: NavBarName,
    slot: 'arrowIcon',
    overridesResolver: ({ componentState }) =>
      getNavBarSlotClassNames(componentState).arrowIcon,
  },
)(({ theme }) => ({
  marginRight: theme.space.padding.base,
  fontSize: 18,
  color: theme.palette.primary,
}));

import { SystemStyleInterpolation, styled } from '@rmc-vant/system';
import React from 'react';
import { OverridableComponent } from '../_utils';
import Loading from '../loading';
import Popup from '../popup';
import Touchable from '../touchable';
import { TouchablePropsFactory } from '../touchable/interface';
import { WithComponentStateProps } from '../types';
import { NumberKeyboardName, getNumberKeyboardSlotClassNames } from './classNames';
import { CollapseIcon, DeleteIcon } from './icons';
import { NumberKeyboardComponentState } from './interface';

const GAP = 6;

export const NumberKeyboardRoot = styled<typeof Popup, NumberKeyboardComponentState>(
  Popup,
  {
    name: NumberKeyboardName,
    slot: 'root',
    overridesResolver: ({ componentState }) =>
      getNumberKeyboardSlotClassNames(componentState).root,
  },
)(({ theme, componentState: { zIndex } }) => ({
  zIndex,
  backgroundColor: theme.palette.gray200,
  userSelect: 'none',
}));

export const NumberKeyboardHeader = styled<'div', NumberKeyboardComponentState>(
  'div',
  {
    name: NumberKeyboardName,
    slot: 'header',
    overridesResolver: ({ componentState }) =>
      getNumberKeyboardSlotClassNames(componentState).header,
  },
)(() => ({
  boxSizing: 'content-box',
  paddingTop: GAP,
  height: 34,
  position: 'relative',
}));

export const NumberKeyboardTitle = styled<'h3', NumberKeyboardComponentState>('h3', {
  name: NumberKeyboardName,
  slot: 'title',
  overridesResolver: ({ componentState }) =>
    getNumberKeyboardSlotClassNames(componentState).title,
})(({ theme }) => ({
  height: '100%',
  maxWidth: '60%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  color: theme.palette.gray700,
  fontWeight: 'normal',
  fontSize: theme.typography.fontSize.lg,
  boxSizing: 'border-box',
}));

export const NumberKeyboardCloseButton = styled<
  typeof Touchable,
  NumberKeyboardComponentState
>(Touchable, {
  name: NumberKeyboardName,
  slot: 'closeButton',
  overridesResolver: ({ componentState }) =>
    getNumberKeyboardSlotClassNames(componentState).closeButton,
})(({ theme }) => ({
  position: 'absolute',
  top: GAP,
  right: 0,
  bottom: 0,
  padding: `0 ${theme.space.padding.md}px`,
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.text.link,
  fontSize: theme.typography.fontSize.md,
  boxSizing: 'border-box',
}));

export const NumberKeyboardWrapper = styled('section')({
  display: 'flex',
  gap: GAP,
});

export const NumberKeyboardSidebar = styled<'nav', NumberKeyboardComponentState>(
  'nav',
  {
    name: NumberKeyboardName,
  },
)(() => ({
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  flex: 1,
  gap: GAP,
}));

export const NumberKeyboardBody = styled<'div', NumberKeyboardComponentState>(
  'div',
  {
    name: NumberKeyboardName,
  },
)(({ componentState: { theme } }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: GAP,
  padding: GAP,
  flex: theme === 'custom' ? 3 : 1,
  boxSizing: 'border-box',
}));

export const NumberKeyboardKey = styled<
  typeof Touchable,
  NumberKeyboardComponentState
>(Touchable, {
  name: NumberKeyboardName,
  slot: 'key',
  overridesResolver: ({ componentState }) =>
    getNumberKeyboardSlotClassNames(componentState).key,
})(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 48,
  fontSize: 28,
  flex: 1,
  background: theme.palette.white,
  lineHeight: theme.typography.lineHeights.base,
  borderRadius: theme.radii.lg,
  '&[data-full]': {
    gridColumn: 'span 2',
  },
})) as unknown as OverridableComponent<
  React.ForwardRefExoticComponent<TouchablePropsFactory>,
  'button',
  WithComponentStateProps<NumberKeyboardComponentState>
>;

export const NumberKeyboardConfirmButton = styled<
  typeof Touchable,
  NumberKeyboardComponentState
>(Touchable, {
  slot: 'confirmButton',
  name: NumberKeyboardName,
  overridesResolver: ({ componentState }) =>
    getNumberKeyboardSlotClassNames(componentState).confirmButton,
})(({ theme }) => ({
  color: theme.palette.white,
  background: theme.palette.primary,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: theme.typography.fontSize.lg,
  borderRadius: theme.radii.lg,
})) as unknown as OverridableComponent<
  React.ForwardRefExoticComponent<TouchablePropsFactory>,
  'button',
  WithComponentStateProps<NumberKeyboardComponentState>
>;

export const NumberKeyboardDeleteButton = styled<
  typeof NumberKeyboardKey,
  NumberKeyboardComponentState
>(NumberKeyboardKey, {
  slot: 'deleteButton',
  name: NumberKeyboardName,
  overridesResolver: ({ componentState }) =>
    getNumberKeyboardSlotClassNames(componentState).deleteButton,
})(({ theme }) => ({
  fontSize: theme.typography.fontSize.lg,
})) as unknown as OverridableComponent<
  React.ForwardRefExoticComponent<TouchablePropsFactory>,
  'button',
  WithComponentStateProps<NumberKeyboardComponentState>
>;

export const NumberKeyboardLoadingIcon = styled<
  typeof Loading,
  NumberKeyboardComponentState
>(Loading, {
  name: NumberKeyboardName,
  slot: 'loadingIcon',
  overridesResolver: ({ componentState }) =>
    getNumberKeyboardSlotClassNames(componentState).loadingIcon,
})({ color: 'inherit', fontSize: 24 });

export const NumberKeyboardDeleteIcon = styled<
  typeof DeleteIcon,
  NumberKeyboardComponentState
>(DeleteIcon, {
  name: NumberKeyboardName,
  slot: 'deleteIcon',
  overridesResolver: ({ componentState }) =>
    getNumberKeyboardSlotClassNames(componentState).deleteIcon,
})({ boxSizing: 'border-box', width: 32, height: 22 });

export const NumberKeyboardCollapseIcon = styled<
  typeof CollapseIcon,
  NumberKeyboardComponentState
>(CollapseIcon, {
  name: NumberKeyboardName,
  slot: 'collapseIcon',
  overridesResolver: ({ componentState }) =>
    getNumberKeyboardSlotClassNames(componentState).collapseIcon,
})({ boxSizing: 'border-box', width: 30, height: 24 });

export const activeStyles: Record<'normal' | 'key', SystemStyleInterpolation> = {
  normal: ({ theme }) => ({
    opacity: theme.activeOpacity,
  }),
  key: ({ theme }) => ({
    '&[class]': {
      background: theme.palette.gray300,
    },
  }),
};

import { animated } from '@react-spring/web';
import { styled } from '@rmc-vant/system';
import { baseStyleReset, hairline, textEllipsis } from '../_styles';
import { Loading } from '../loading';
import { Popup } from '../popup';
import { Touchable } from '../touchable';
import { PickerName, getPickerSlotClassNames } from './classNames';
import type { PickerComponentState, PickerOptionComponentState } from './interface';

export const PickerPopup = styled<typeof Popup, PickerComponentState>(Popup, {
  name: PickerName,
  slot: 'popup',
  overridesResolver: ({ componentState }) =>
    getPickerSlotClassNames(componentState).popup,
})({
  overflow: 'hidden',
});

export const PickerRoot = styled<'div', PickerComponentState>('div', {
  name: PickerName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getPickerSlotClassNames(componentState).root,
})(({ theme }) => ({
  ...baseStyleReset({ theme }),
  display: 'flex',
  flexDirection: 'column',
  background: theme.palette.background.light,
}));

export const PickerToolbar = styled<'div', PickerComponentState>('div', {
  name: PickerName,
  slot: 'toolbar',
  overridesResolver: ({ componentState }) =>
    getPickerSlotClassNames(componentState).toolbar,
})({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: 44,
  boxSizing: 'border-box',
});

export const PickerTitle = styled<'h3', PickerComponentState>('h3', {
  name: PickerName,
  slot: 'toolbar',
  overridesResolver: ({ componentState }) =>
    getPickerSlotClassNames(componentState).title,
})(({ theme }) => ({
  boxSizing: 'border-box',
  fontWeight: theme.typography.fontWeightBold,
  margin: 0,
  fontSize: theme.typography.fontSize.lg,
  lineHeight: theme.typography.lineHeights.md,
  maxWidth: '50%',
  textAlign: 'center',
  color: theme.palette.text.primary,
  ...textEllipsis({ theme }),
}));

export const PickerConfirmButton = styled<typeof Touchable, PickerComponentState>(
  Touchable,
  {
    name: PickerName,
    slot: 'confirmButton',
    overridesResolver: ({ componentState }) =>
      getPickerSlotClassNames(componentState).confirmButton,
  },
)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  padding: `0 ${theme.space.padding.md}px`,
  fontSize: theme.typography.fontSize.md,
  height: '100%',
  color: theme.palette.text.link,
}));

export const PickerCancelButton = styled<typeof Touchable, PickerComponentState>(
  Touchable,
  {
    name: PickerName,
    slot: 'cancelButton',
    overridesResolver: ({ componentState }) =>
      getPickerSlotClassNames(componentState).cancelButton,
  },
)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  padding: `0 ${theme.space.padding.md}px`,
  fontSize: theme.typography.fontSize.md,
  height: '100%',
  color: theme.palette.text.secondary,
}));

export const PickerMask = styled<'div', PickerComponentState>('div', {
  name: PickerName,
  slot: 'loadingMask',
  overridesResolver: ({ componentState }) =>
    getPickerSlotClassNames(componentState).mask,
})({
  position: 'absolute',
  boxSizing: 'border-box',
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  pointerEvents: 'none',
  backgroundImage:
    'linear-gradient(180deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4)),linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.4))',
  backgroundSize: '100% 110px',
  backgroundPosition: 'top, bottom',
  backgroundRepeat: 'no-repeat',
});

export const PickerIndicator = styled<'div', PickerComponentState>('div', {
  name: PickerName,
  slot: 'indicator',
  overridesResolver: ({ componentState }) =>
    getPickerSlotClassNames(componentState).indicator,
})(
  {
    position: 'absolute',
    boxSizing: 'border-box',
    left: 0,
    right: 0,
    pointerEvents: 'none',
    transform: 'translateY(-50%)',
    top: '50%',
  },
  hairline('topBottom'),
);

export const PickerLoadingRoot = styled('div')({
  boxSizing: 'border-box',
  position: 'absolute',
  background: 'rgba(255, 255, 255, 0.9)',
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const PickerLoading = styled<typeof Loading, PickerComponentState>(Loading, {
  name: PickerName,
  slot: 'loading',
  overridesResolver: ({ componentState }) =>
    getPickerSlotClassNames(componentState).loading,
})(({ theme }) => ({
  color: theme.palette.primary,
}));

export const PickerColumnList = styled('div')({
  display: 'flex',
  position: 'relative',
});

export const PickerColumnRoot = styled<'div', PickerComponentState>('div', {
  name: PickerName,
  slot: 'columnRoot',
  overridesResolver: ({ componentState }) =>
    getPickerSlotClassNames(componentState).columnRoot,
})(({ theme }) => ({
  flex: 1,
  boxSizing: 'border-box',
  overflow: 'hidden',
  position: 'relative',
  cursor: 'grab',
  height: '100%',
  background: theme.palette.background.light,
}));

export const PickerColumnWrapper = styled(animated.div)({
  position: 'absolute',
  margin: 0,
  left: 0,
  width: '100%',
  top: '50%',
  boxSizing: 'border-box',
});

export const PickerOption = styled<'div', PickerOptionComponentState>('div', {
  name: PickerName,
  slot: 'option',
  overridesResolver: ({ componentState }) =>
    getPickerSlotClassNames(componentState).option,
})(({ theme, componentState: { disabled } }) => ({
  userSelect: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: theme.typography.fontSize.lg,
  color: theme.palette.text.primary,
  padding: `0 ${theme.space.padding.base}px`,
  ...textEllipsis({ theme }),

  ...(disabled && {
    opacity: 0.3,
  }),
}));

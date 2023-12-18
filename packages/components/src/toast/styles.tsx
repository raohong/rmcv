import { styled } from '@rmc-vant/system';
import Loading from '../loading';
import Popup from '../popup';
import { ToastName, getToastSlotClassNames } from './classNames';
import type { ToastComponentState } from './interface';

export const ToastRoot = styled<typeof Popup, ToastComponentState>(Popup, {
  name: ToastName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getToastSlotClassNames(componentState).root,
})(({ theme, componentState: { position, type } }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  wordWrap: 'break-word',
  whiteSpace: 'pre-line',
  background: 'rgba(0, 0, 0, 0.7)',
  maxWidth: '70%',
  boxSizing: 'content-box',

  borderRadius: theme.radii.lg,
  ...(position === 'top' && {
    top: '20%',
  }),
  ...(position === 'bottom' && {
    bottom: '20%',
    top: 'unset',
  }),

  ...(type === 'normal' && {
    minWidth: 96,
    padding: `${theme.space.padding.xs}px ${theme.space.padding.sm}px`,
  }),

  ...(type !== 'normal' && {
    minWidth: 88,
    minHeight: 88,
    padding: theme.space.padding.md,
  }),
}));

export const ToastMessage = styled<'div', ToastComponentState>('div', {
  name: ToastName,
  slot: 'message',
  overridesResolver: ({ componentState }) =>
    getToastSlotClassNames(componentState).message,
})(({ theme, componentState: { type } }) => ({
  boxSizing: 'border-box',
  fontSize: theme.typography.fontSize.md,
  color: theme.palette.white,
  lineHeight: theme.typography.lineHeights.md,
  marginTop: type === 'normal' ? undefined : theme.space.padding.xs,
}));

export const ToastIcon = styled<'span', ToastComponentState>('span', {
  name: ToastName,
  slot: 'icon',
  overridesResolver: ({ componentState }) =>
    getToastSlotClassNames(componentState).icon,
})(({ theme }) => ({
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '1em',
  height: '1em',
  fontSize: 36,
  color: theme.palette.white,
}));

export const ToastLoadingIcon = styled<typeof Loading, ToastComponentState>(
  Loading,
  {
    name: ToastName,
    slot: 'loadingIcon',
    overridesResolver: ({ componentState }) =>
      getToastSlotClassNames(componentState).loadingIcon,
  },
)(({ theme }) => ({
  padding: theme.space.padding.md,
  fontSize: 24,
}));

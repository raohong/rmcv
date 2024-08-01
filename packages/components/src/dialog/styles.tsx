import { styled } from '@rmc-vant/system';
import { hairline } from '../_styles';
import { Button } from '../button';
import { loadingClassNames } from '../loading';
import { Popup } from '../popup';
import { DialogName, getDialogSlotClassNames } from './classNames';
import type { DialogComponentState } from './interface';

export const DialogRoot = styled<typeof Popup, DialogComponentState>(Popup, {
  name: DialogName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getDialogSlotClassNames(componentState).root,
})(({ theme }) => ({
  borderRadius: 16,
  textAlign: 'center',
  overflow: 'hidden',
  width: 'max(90%, 320px)',
  backgroundColor: theme.palette.background.light,
}));

export const DialogTitle = styled<'h2', DialogComponentState>('h2', {
  name: DialogName,
  slot: 'title',
  overridesResolver: ({ componentState }) =>
    getDialogSlotClassNames(componentState).title,
})(({ theme, componentState: { titleIsIsolated } }) => ({
  margin: 0,
  fontWeight: theme.typography.fontWeightBold,
  fontSize: 'inherit',
  padding: titleIsIsolated ? `${theme.space.padding.lg}px 0` : `26px 0 0`,
  lineHeight: '24px',
}));

export const DialogMessage = styled<'div', DialogComponentState>('div', {
  name: DialogName,
  slot: 'message',
  overridesResolver: ({ componentState }) =>
    getDialogSlotClassNames(componentState).message,
})(({ theme, componentState: { hasTitle, messageAlign } }) => ({
  WebkitOverflowScrolling: 'touch',
  overflow: 'auto',
  textAlign: messageAlign,
  fontSize: theme.typography.fontSize.md,
  lineHeight: theme.typography.lineHeights.md,
  maxHeight: '60vh',
  padding: `26px ${theme.space.padding.xl}px`,
  paddingTop: hasTitle ? theme.space.padding.xs : undefined,
  color: hasTitle ? theme.palette.gray700 : undefined,
  whiteSpace: 'normal',
  wordWrap: 'break-word',
}));

export const DialogCancelButton = styled<typeof Button, DialogComponentState>(
  Button,
  {
    name: DialogName,
    slot: 'cancelButton',
    overridesResolver: ({ componentState }) =>
      getDialogSlotClassNames(componentState).cancelButton,
  },
)(({ theme: { palette, radii }, componentState: { theme, cancelButtonColor } }) => ({
  fontSize: 'inherit',

  height: theme === 'round-button' ? 36 : 48,
  background: cancelButtonColor,

  ...(theme === 'round-button' && {
    'color': '#fff',
    'background': cancelButtonColor || palette.waning,

    '&:first-of-type': {
      borderTopLeftRadius: radii.max,
      borderBottomLeftRadius: radii.max,
    },
    '&:last-of-type': {
      borderTopRightRadius: radii.max,
      borderBottomRightRadius: radii.max,
    },
  }),
}));

export const DialogConfirmButton = styled<
  typeof DialogCancelButton,
  DialogComponentState
>(DialogCancelButton, {
  name: DialogName,
  slot: 'confirmButton',
  overridesResolver: ({ componentState }) =>
    getDialogSlotClassNames(componentState).confirmButton,
})(({ theme: { palette }, componentState: { theme, confirmButtonColor } }) => ({
  background: confirmButtonColor,
  color: palette.danger,
  [`& .${loadingClassNames.root}`]: {
    color: 'inherit',
  },
  [`& .${loadingClassNames.text}`]: {
    color: 'inherit',
  },
  ...(theme === 'round-button' && {
    color: palette.white,
    background: confirmButtonColor || palette.danger,
  }),
}));

export const DialogFooter = styled<'div', DialogComponentState>('div', {
  name: DialogName,
  slot: 'footer',
  overridesResolver: ({ componentState }) =>
    getDialogSlotClassNames(componentState).footer,
})(({ theme, componentState: { footerBorder, theme: xtheme } }) => ({
  position: 'relative',
  display: 'flex',
  padding:
    xtheme === 'round-button'
      ? `${theme.space.padding.xs}px ${theme.space.padding.lg}px ${theme.space.padding.md}px`
      : undefined,

  ...(footerBorder && {
    ...hairline('top')({ theme }),
    [`${DialogCancelButton} + ${DialogConfirmButton}`]: {
      ...hairline('left')({ theme }),
    },
  }),
}));

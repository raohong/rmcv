import { styled } from '@rmc-vant/system';
import { hairline } from '../_styles';
import { Popup } from '../popup';
import { Touchable } from '../touchable';
import { ShareSheetName, getShareSheetSlotClassNames } from './classNames';
import type { ShareSheetComponentState } from './interface';

export const ShareSheetRoot = styled<typeof Popup, ShareSheetComponentState>(Popup, {
  name: ShareSheetName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getShareSheetSlotClassNames(componentState).root,
})();

export const ShareSheetHeader = styled<'div', ShareSheetComponentState>('div', {
  name: ShareSheetName,
  slot: 'header',
  overridesResolver: ({ componentState }) =>
    getShareSheetSlotClassNames(componentState).header,
})(({ theme: { space } }) => ({
  boxSizing: 'border-box',
  padding: `${space.padding.sm}px ${space.padding.md}px ${space.padding.base}px`,
  textAlign: 'center',
}));

export const ShareSheetTitle = styled<'h3', ShareSheetComponentState>('h3', {
  name: ShareSheetName,
  slot: 'title',
  overridesResolver: ({ componentState }) =>
    getShareSheetSlotClassNames(componentState).title,
})(({ theme: { palette, typography } }) => ({
  color: palette.text.primary,
  lineHeight: typography.lineHeights.md,
  fontSize: typography.fontSize.md,
  boxSizing: 'border-box',
  fontWeight: 'normal',
  margin: 0,
}));

export const ShareSheetDescription = styled<'div', ShareSheetComponentState>('div', {
  name: ShareSheetName,
  slot: 'description',
  overridesResolver: ({ componentState }) =>
    getShareSheetSlotClassNames(componentState).description,
})(({ theme: { palette, typography, space } }) => ({
  color: palette.text.secondary,
  lineHeight: '16px',
  fontSize: typography.fontSize.sm,
  boxSizing: 'border-box',
  marginTop: space.padding.xs,
}));

export const ShareSheetCancelButton = styled<
  typeof Touchable,
  ShareSheetComponentState
>(Touchable, {
  name: ShareSheetName,
  slot: 'cancelButton',
  overridesResolver: ({ componentState }) =>
    getShareSheetSlotClassNames(componentState).cancelButton,
})(({ theme: { palette, typography, space } }) => ({
  'fontSize': typography.fontSize.lg,
  'height': 48,
  'display': 'flex',
  'alignItems': 'center',
  'background': palette.background.light,
  'justifyContent': 'center',
  'marginTop': space.padding.xs,
  'width': '100%',

  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    width: '100%',
    bottom: '100%',
    backgroundColor: palette.background.default,
    height: space.padding.xs,
  },
}));

export const ShareSheetOptions = styled('div', {
  name: ShareSheetName,
  slot: 'options',
  overridesResolver: ({ componentState }) =>
    getShareSheetSlotClassNames(componentState).options,
})(({ theme }) => ({
  'boxSizing': 'border-box',
  'display': 'flex',
  'padding': `${theme.space.padding.md}px 0 ${theme.space.padding.md}px ${theme.space.padding.xs}px`,
  'overflow': 'auto',

  '& + &': {
    ...hairline('top')({ theme }),
  },
}));

export const StyledShareSheetOption = styled(Touchable, {
  name: ShareSheetName,
  slot: 'option',
  overridesResolver: ({ componentState }) =>
    getShareSheetSlotClassNames(componentState).option,
})(() => ({
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  flexDirection: 'column',
  flexShrink: 0,
}));

export const ShareSheetOptionName = styled('div', {
  name: ShareSheetName,
  slot: 'optionName',
  overridesResolver: ({ componentState }) =>
    getShareSheetSlotClassNames(componentState).optionName,
})(({ theme }) => ({
  boxSizing: 'border-box',
  color: theme.palette.gray700,
  fontSize: theme.space.padding.sm,
  marginTop: theme.space.padding.xs,
  padding: `0 ${theme.space.padding.base}px`,
}));

export const ShareSheetOptionDescription = styled('div', {
  name: ShareSheetName,
  slot: 'optionName',
  overridesResolver: ({ componentState }) =>
    getShareSheetSlotClassNames(componentState).optionName,
})(({ theme }) => ({
  boxSizing: 'border-box',
  color: theme.palette.text.third,
  fontSize: theme.space.padding.sm,
}));

export const ShareSheetOptionIcon = styled('div', {
  name: ShareSheetName,
  slot: 'optionName',
  overridesResolver: ({ componentState }) =>
    getShareSheetSlotClassNames(componentState).optionName,
})(({ theme }) => ({
  'boxSizing': 'border-box',
  'width': 48,
  'height': 48,
  'userSelect': 'none',
  'display': 'flex',
  'alignItems': 'center',
  'justifyContent': 'center',
  'margin': `0 ${theme.space.padding.md}px`,
  'background': theme.palette.gray200,
  'borderRadius': '50%',

  '& > img': {
    width: '100%',
    height: '100%',
  },
}));

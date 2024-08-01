import type { SystemSxInterpolation } from '@rmc-vant/system';
import { styled } from '@rmc-vant/system';
import { toPX } from '@rmc-vant/utils';
import { hairline } from '../_styles';
import { Loading } from '../loading';
import { Popup } from '../popup';
import { Touchable } from '../touchable';
import { ActionSheetName, getActionSheetSlotClassNames } from './classNames';
import type {
  ActionSheetComponentState,
  ActionSheetItemComponentState,
} from './interface';

export const ActionSheetRoot = styled<typeof Popup, ActionSheetComponentState>(
  Popup,
  {
    name: ActionSheetName,
    slot: 'root',
  },
)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '80%',
  color: theme.palette.text.primary,
  overflow: 'hidden',
}));
export const ActionSheetTitle = styled<'h2', ActionSheetComponentState>('h2', {
  name: ActionSheetName,
  slot: 'title',
  overridesResolver: ({ componentState }) =>
    getActionSheetSlotClassNames(componentState).title,
})(({ theme: { typography } }) => ({
  boxSizing: 'border-box',
  fontWeight: typography.fontWeightBold,
  height: 48,
  margin: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  flexShrink: 0,
  fontSize: typography.fontSize.lg,
}));

export const ActionSheetDescription = styled<'div', ActionSheetComponentState>(
  'div',
  {
    name: ActionSheetName,
    slot: 'description',
    overridesResolver: ({ componentState }) =>
      getActionSheetSlotClassNames(componentState).description,
  },
)(({ theme: { typography, palette, space } }) => ({
  boxSizing: 'border-box',
  color: palette.text.secondary,
  fontSize: typography.fontSize.md,
  lineHeight: typography.lineHeights.md,
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  flexShrink: 0,
  padding: `20px ${space.padding.md}px`,
}));

export const ActionSheetContent = styled<'div', ActionSheetComponentState>('div', {
  name: ActionSheetName,
  slot: 'content',
  overridesResolver: ({ componentState }) =>
    getActionSheetSlotClassNames(componentState).content,
})({ boxSizing: 'border-box', flex: 1, overflow: 'auto' });

export const ActionSheetCancelButton = styled(Touchable, {
  name: ActionSheetName,
  slot: 'cancelButton',
  overridesResolver: ({ componentState }) =>
    getActionSheetSlotClassNames(componentState).cancelButton,
})(({ theme: { palette, typography, space } }) => ({
  'lineHeight': typography.lineHeights.lg,
  'fontSize': typography.fontSize.lg,
  'color': palette.gray700,
  'padding': `14px ${space.padding.md}px`,
  'position': 'relative',
  'textAlign': 'center',
  'display': 'flex',
  'justifyContent': 'center',
  'background': palette.background.light,

  'marginTop': space.padding.xs,

  '&::before': {
    position: 'absolute',
    content: '""',
    left: 0,
    right: 0,
    bottom: '100%',
    height: space.padding.xs,
    background: palette.background.default,
  },
}));

export const ActionSheetLoadingIcon = styled<
  typeof Loading,
  ActionSheetComponentState
>(Loading, {
  name: ActionSheetName,
  slot: 'loadingIcon',
  overridesResolver: ({ componentState }) =>
    getActionSheetSlotClassNames(componentState).loadingIcon,
})({ fontSize: 22 });

export const ActionSheetItem = styled<
  typeof Touchable,
  ActionSheetItemComponentState
>(Touchable, {
  name: ActionSheetName,
  slot: 'item',
  overridesResolver: ({ componentState }) =>
    getActionSheetSlotClassNames(componentState).item,
})(({ componentState: { disabled, loading, color }, theme }) => ({
  'padding': `14px ${theme.space.padding.md}px`,
  'position': 'relative',
  'textAlign': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'alignItems': 'center',
  'lineHeight': theme.typography.lineHeights.lg,
  'fontSize': theme.typography.fontSize.lg,
  'color': disabled ? theme.palette.text.third : (color ?? theme.palette.text.primary),
  'cursor': disabled ? 'not-allowed' : loading ? 'unset' : 'cursor',
  'width': '100%',
  '&:first-of-type': hairline('top')({ theme }),
  '&:first-of-type::after': {
    marginLeft: `calc(2 * ${toPX(theme.space.padding.md)})`,
    marginRight: `calc(2 * ${toPX(theme.space.padding.md)})`,
  },
}));

export const ActionSheetItemSubname = styled<'div', ActionSheetItemComponentState>(
  'div',
  {
    name: ActionSheetName,
    slot: 'itemSubname',
    overridesResolver: ({ componentState }) =>
      getActionSheetSlotClassNames(componentState).itemSubname,
  },
)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: theme.typography.fontSize.sm,
  lineHeight: theme.typography.lineHeights.sm,
  marginTop: theme.space.padding.xs,
  boxSizing: 'border-box',
}));

export const ActionSheetCloseIconSx: SystemSxInterpolation = ({ theme }) => ({
  top: 0,
  right: 0,
  color: theme.palette.gray500,
  fontSize: 22,
  padding: `0 ${theme.space.padding.md}px`,
  height: 48,
  display: 'flex',
  alignItems: 'center',
});

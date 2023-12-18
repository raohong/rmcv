import { styled } from '@rmc-vant/system';
import { toPX } from '@rmc-vant/utils';
import { baseStyleReset, hairline } from '../_styles';
import { OverridableComponent } from '../_utils';
import Touchable from '../touchable';
import { TouchablePropsFactory } from '../touchable/interface';
import { WithComponentStateProps } from '../types';
import {
  CellGroupName,
  CellName,
  getCellGroupSlotClassNames,
  getCellSlotClassNames,
} from './classNames';
import type { CellComponentState, CellGroupComponentState } from './interface';

export const CellRoot = styled<typeof Touchable, CellComponentState>(Touchable, {
  name: CellName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getCellSlotClassNames(componentState).root,
})(({ theme, componentState: { size, center, clickable, border } }) => ({
  lineHeight: '24px',
  padding: `${size === 'large' ? theme.space.padding.sm : 10}px ${
    theme.space.padding.md
  }px`,
  fontSize: theme.typography.fontSize.md,
  color: theme.palette.text.primary,
  background: theme.palette.background.light,
  borderColor: theme.palette.border,
  display: 'flex',
  alignItems: center ? 'center' : undefined,
  cursor: clickable ? 'pointer' : 'unset',
  '&:not(:last-child)': hairline('bottom')({ theme }),
  '&:not(:last-child)::after': {
    marginLeft: `calc(2 * ${toPX(theme.space.padding.md)})`,
    marginRight: `calc(2 * ${toPX(theme.space.padding.md)})`,
  },
})) as unknown as OverridableComponent<
  React.ForwardRefExoticComponent<TouchablePropsFactory<'div'>>,
  'div',
  WithComponentStateProps<CellComponentState>
>;

export const CellTitle = styled<'div', CellComponentState>('div', {
  name: CellName,
  slot: 'title',
  overridesResolver: ({ componentState }) =>
    getCellSlotClassNames(componentState).title,
})(({ componentState: { size }, theme }) => ({
  boxSizing: 'border-box',
  fontSize: size === 'large' ? theme.typography.fontSize.lg : 'inherit',
  flex: 1,
  flexShrink: 0,
}));

export const CellValue = styled<'div', CellComponentState>('div', {
  name: CellName,
  slot: 'value',
  overridesResolver: ({ componentState }) =>
    getCellSlotClassNames(componentState).value,
})(({ theme }) => ({
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'flex-end',
  textAlign: 'right',
  color: theme.palette.text.secondary,
  whiteSpace: 'normal',
  alignItems: 'center',
}));

export const CellLabel = styled<'div', CellComponentState>('div', {
  name: CellName,
  slot: 'label',
  overridesResolver: ({ componentState }) =>
    getCellSlotClassNames(componentState).label,
})(({ theme, componentState: { size } }) => ({
  boxSizing: 'border-box',
  color: theme.palette.text.secondary,
  fontSize:
    size === 'large' ? theme.typography.fontSize.md : theme.typography.fontSize.sm,
  lineHeight: theme.typography.lineHeights.sm,
  marginTop: theme.space.padding.base,
}));

export const CellIcon = styled<'span', CellComponentState>('span', {
  name: CellName,
  slot: 'icon',
  overridesResolver: ({ componentState }) =>
    getCellSlotClassNames(componentState).icon,
})(({ theme }) => ({
  fontSize: 16,
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: 'center',
  marginRight: theme.space.padding.base,
}));

export const CellRightIcon = styled<'span', CellComponentState>('span', {
  name: CellName,
  slot: 'rightIcon',
  overridesResolver: ({ componentState }) =>
    getCellSlotClassNames(componentState).rightIcon,
})(({ theme }) => ({
  fontSize: 16,
  color: theme.palette.gray600,
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: 'center',
  marginLeft: theme.space.padding.base,
}));

export const CellGroupRoot = styled<'div', CellGroupComponentState>('div', {
  name: CellGroupName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getCellGroupSlotClassNames(componentState).root,
})(baseStyleReset);

export const CellGroupContent = styled<'div', CellGroupComponentState>('div', {
  name: CellGroupName,
  slot: 'content',
  overridesResolver: ({ componentState }) =>
    getCellGroupSlotClassNames(componentState).content,
})(({ theme, componentState: { inset, border } }) => ({
  background: theme.palette.background.light,
  boxSizing: 'border-box',
  ...(inset && {
    margin: `0 ${theme.space.padding.md}px`,
    borderRadius: theme.radii.md,
    overflow: 'hidden',
  }),
  ...(border && hairline('bottom')({ theme })),
}));

export const CellGroupTitle = styled<'h2', CellGroupComponentState>('h2', {
  name: CellGroupName,
  slot: 'title',
  overridesResolver: ({ componentState }) =>
    getCellGroupSlotClassNames(componentState).title,
})(({ theme, componentState: { inset } }) => ({
  ...baseStyleReset({ theme }),
  fontWeight: 'normal',
  color: theme.palette.text.secondary,
  fontSize: theme.typography.fontSize.md,
  boxSizing: 'border-box',
  lineHeight: '16px',
  padding: `${theme.space.padding.md}px ${theme.space.padding.md}px ${theme.space.padding.xs}px`,

  ...(inset && {
    padding: `${theme.space.padding.md}px ${theme.space.padding.md}px ${theme.space.padding.xs}px ${theme.space.padding.xl}px`,
  }),
}));

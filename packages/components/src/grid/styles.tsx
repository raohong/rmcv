import { styled } from '@rmc-vant/system';
import { baseStyleReset, hairline } from '../_styles';
import { Touchable } from '../touchable';
import { GridName, getGridSlotClassNames } from './classNames';
import type { GridComponentState } from './interface';

export const GridRoot = styled<'div', GridComponentState>('div', {
  name: GridName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getGridSlotClassNames(componentState).root,
})(({ theme, componentState: { gutter, column, border } }) => ({
  ...baseStyleReset({ theme }),
  display: 'grid',
  gap: gutter,
  gridTemplateColumns: `repeat(${column}, minmax(0, 1fr))`,
  ...(border && hairline('around')({ theme })),
}));

export const StyledGridItem = styled<'div', GridComponentState>('div', {
  name: GridName,
  slot: 'item',
  overridesResolver: ({ componentState }) =>
    getGridSlotClassNames(componentState).item,
})(({ componentState: { square } }) => ({
  position: 'relative',
  boxSizing: 'border-box',
  maxWidth: '100%',
  ...(square && {
    paddingTop: '100%',
  }),
}));

export const StyledGridItemContent = styled<typeof Touchable, GridComponentState>(
  Touchable,
  {
    name: GridName,
    slot: 'itemContent',
    overridesResolver: ({ componentState }) =>
      getGridSlotClassNames(componentState).itemContent,
  },
)(({ componentState: { square, clickable, direction, center }, theme }) => ({
  position: 'relative',
  boxSizing: 'border-box',
  userSelect: 'none',
  display: 'flex',
  height: '100%',
  flexDirection: direction === 'horizontal' ? undefined : 'column',
  padding: `${theme.space.padding.sm}px ${theme.space.padding.md}px`,
  background: theme.palette.background.light,
  gap: theme.space.padding.xs,

  ...(center && {
    alignItems: 'center',
    justifyContent: 'center',
  }),

  ...(clickable && { cursor: 'pointer' }),

  ...(square && {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
  }),
}));

export const GridIcon = styled<'div', GridComponentState>('div', {
  name: GridName,
  slot: 'itemIcon',
  overridesResolver: ({ componentState }) =>
    getGridSlotClassNames(componentState).itemIcon,
})(({ componentState: { iconSize } }) => ({
  fontSize: iconSize,
  width: '1em',
  height: '1em',
  boxSizing: 'border-box',
}));

export const GridLabel = styled<'span', GridComponentState>('span', {
  name: GridName,
  slot: 'itemLabel',
  overridesResolver: ({ componentState }) =>
    getGridSlotClassNames(componentState).itemLabel,
})(({ theme }) => ({
  boxSizing: 'border-box',
  fontSize: theme.typography.fontSize.sm,
  color: theme.palette.text.primary,
}));

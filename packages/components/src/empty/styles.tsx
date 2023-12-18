import { styled } from '@rmc-vant/system';
import { baseStyleReset } from '../_styles';
import { EmptyName, getEmptySlotClassNames } from './classNames';
import { EmptyDefault } from './images';
import type { EmptyComponentState } from './interface';

export const EmptyRoot = styled<'div', EmptyComponentState>('div', {
  name: EmptyName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getEmptySlotClassNames(componentState).root,
})(({ theme }) => ({
  ...baseStyleReset({ theme }),
  padding: `${theme.space.padding.xl}px 0`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
}));

export const EmptyImage = styled<'div', EmptyComponentState>('div', {
  name: EmptyName,
  slot: 'image',
  overridesResolver: ({ componentState }) =>
    getEmptySlotClassNames(componentState).image,
})(({ componentState: { imageSize } }) => ({
  boxSizing: 'border-box',
  fontSize: imageSize[0],

  img: {
    display: 'block',
    width: imageSize[0],
    height: imageSize[1],
  },
}));

export const EmptyIcon = styled<typeof EmptyDefault, EmptyComponentState>(
  EmptyDefault,
  {
    name: EmptyName,
    slot: 'icon',
    overridesResolver: ({ componentState }) =>
      getEmptySlotClassNames(componentState).icon,
  },
)({
  fontSize: 'inherit',
  width: '1em',
  height: '1em',
});

export const EmptyDescription = styled<'div', EmptyComponentState>('div', {
  name: EmptyName,
  slot: 'description',
  overridesResolver: ({ componentState }) =>
    getEmptySlotClassNames(componentState).description,
})(({ theme }) => ({
  marginTop: theme.space.padding.md,
  padding: '0 60px',
  color: theme.palette.text.secondary,
  fontSize: theme.typography.fontSize.md,
  lineHeight: theme.typography.lineHeights.md,
}));

export const EmptyExtra = styled<'div', EmptyComponentState>('div', {
  name: EmptyName,
  slot: 'extra',
  overridesResolver: ({ componentState }) =>
    getEmptySlotClassNames(componentState).extra,
})({
  boxSizing: 'border-box',
  marginTop: 24,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
});

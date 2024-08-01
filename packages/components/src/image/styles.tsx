import { styled } from '@rmc-vant/system';
import { baseStyleReset } from '../_styles';
import { ImageErrorIcon, ImageLoadingIcon } from './ImageIcons';
import { ImageName, getImageSlotClassNames } from './classNames';
import type { ImageComponentState, ImageProps } from './interface';

export const ImageRoot = styled<'div', ImageComponentState, ImageProps>('div', {
  name: ImageName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getImageSlotClassNames(componentState).root,
})(({ componentState: { block, round, radius }, theme }) => ({
  ...baseStyleReset({ theme }),
  position: 'relative',
  display: block ? 'block' : 'inline-block',
  minWidth: 1,
  minHeight: 1,
  borderRadius: round ? '50%' : radius,
  flexShrink: 0,
}));

export const ImagePlaceholder = styled<'div', ImageComponentState>('div', {
  name: ImageName,
  slot: 'placeholder',
  overridesResolver: ({ componentState }) =>
    getImageSlotClassNames(componentState).placeholder,
})(({ theme }) => ({
  boxSizing: 'border-box',
  position: 'absolute',
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 'inherit',
  textAlign: 'center',
  color: theme.palette.text.secondary,
  fontSize: theme.typography.fontSize.md,
  background: theme.palette.background.default,
}));

export const StyledImageImg = styled<'img', ImageComponentState>('img', {
  name: ImageName,
  slot: 'img',
  overridesResolver: ({ componentState }) =>
    getImageSlotClassNames(componentState).img,
})(({ componentState: { fit, position } }) => ({
  boxSizing: 'border-box',
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: fit,
  objectPosition: position,
}));

export const StyledImageLoadingIcon = styled(ImageLoadingIcon, {
  name: ImageName,
  slot: 'loadingIcon',
})(({ theme }) => ({
  boxSizing: 'border-box',
  color: theme.palette.gray400,
  fontSize: 32,
  width: '1em',
  height: '1em',
}));

export const StyledImageErrorIcon = styled(ImageErrorIcon, {
  name: ImageName,
  slot: 'errorIcon',
})(({ theme }) => ({
  boxSizing: 'border-box',
  color: theme.palette.gray400,
  fontSize: 32,
  width: '1em',
  height: '1em',
}));

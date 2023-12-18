import { styled } from '@rmc-vant/system';
import { baseStyleReset } from '../_styles';
import IOSSpinner from './IOSSpinner';
import MaterialSpinner from './MaterialSpinner';
import { LoadingName, getLoadingSlotClassNames } from './classNames';
import type { LoadingComponentState } from './interface';

export const LoadingRoot = styled<'span', LoadingComponentState>('span', {
  name: LoadingName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getLoadingSlotClassNames(componentState).root,
})(({ theme, componentState: { color, size, vertical } }) => ({
  ...baseStyleReset({ theme }),
  display: 'inline-flex',
  alignItems: 'center',
  color,
  fontSize: size,
  lineHeight: theme.typography.lineHeights.base,
  flexDirection: vertical ? 'column' : undefined,
  gap: theme.space.padding.xs,
}));

export const LoadingText = styled<'span', LoadingComponentState>('span', {
  name: LoadingName,
  slot: 'text',
  overridesResolver: ({ componentState }) =>
    getLoadingSlotClassNames(componentState).text,
})(({ componentState: { textColor, textSize } }) => ({
  fontSize: textSize,
  color: textColor,
  boxSizing: 'border-box',
}));

export const IOSSpinnerRoot = styled(IOSSpinner)();

export const MaterialSpinnerRoot = styled(MaterialSpinner)();

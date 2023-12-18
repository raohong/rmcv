import { styled } from '@rmc-vant/system';
import { baseStyleReset } from '../_styles';
import { ProgressName, getProgressSlotClassNames } from './classNames';
import { ProgressComponentState } from './interface';

export const ProgressRoot = styled<'div', ProgressComponentState>('div', {
  name: ProgressName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getProgressSlotClassNames(componentState).root,
})(({ theme, componentState: { trailColor, strokeWidth, inactive } }) => ({
  ...baseStyleReset({ theme }),
  margin: '20px 0',
  borderRadius: theme.radii.max,
  height: strokeWidth,
  background: inactive ? theme.palette.gray200 : trailColor || theme.palette.gray300,
}));

export const ProgressOuter = styled<'div', ProgressComponentState>('div', {
  name: ProgressName,
  slot: 'outer',
  overridesResolver: ({ componentState }) =>
    getProgressSlotClassNames(componentState).outer,
})(({ theme, componentState: { color, inactive, transitionAppear } }) => ({
  boxSizing: 'border-box',
  position: 'absolute',
  left: 0,
  top: 0,
  height: '100%',
  borderRadius: 'inherit',
  background: inactive ? theme.palette.gray500 : color || theme.palette.primary,
  transition: transitionAppear ? 'width 0.3s ease-out' : undefined,
}));

export const ProgressPivot = styled<'div', ProgressComponentState>('div', {
  name: ProgressName,
  slot: 'outer',
  overridesResolver: ({ componentState }) =>
    getProgressSlotClassNames(componentState).outer,
})(
  ({
    theme,
    componentState: {
      pivotTextColor,
      pivotColor,
      color,
      inactive,
      transitionAppear,
    },
  }) => ({
    boxSizing: 'border-box',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    borderRadius: 'inherit',
    top: '50%',
    transform: 'translateY(-50%)',
    color: pivotTextColor || theme.palette.white,
    fontSize: theme.typography.fontSize.xs,
    lineHeight: 1.6,
    padding: '0 5px',
    left: 0,
    background: inactive
      ? theme.palette.gray500
      : pivotColor || color || theme.palette.primary,
    transition: transitionAppear ? 'left 0.3s ease-out' : undefined,
  }),
);

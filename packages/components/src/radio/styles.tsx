import { styled } from '@rmc-vant/system';
import { toPX } from '@rmc-vant/utils';
import { baseStyleReset } from '../_styles';
import {
  RadioGroupName,
  RadioName,
  getRadioGroupSlotClassNames,
  getRadioSlotClassNames,
} from './classNames';
import type { RadioComponentState, RadioGroupComponentState } from './interface';

export const RadioGroupRoot = styled<'div', RadioGroupComponentState>('div', {
  name: RadioGroupName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getRadioGroupSlotClassNames(componentState).root,
})(({ theme, componentState: { direction } }) => ({
  ...baseStyleReset({ theme }),
  display: 'flex',
  flexDirection: direction === 'horizontal' ? undefined : 'column',
  flexWrap: 'wrap',
  gap: direction === 'vertical' ? theme.space.padding.xs : theme.space.padding.sm,
}));

export const RadioRoot = styled<'label', RadioComponentState>('label', {
  name: RadioName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getRadioSlotClassNames(componentState).root,
})(({ theme, componentState: { labelPosition, disabled } }) => ({
  ...baseStyleReset({ theme }),
  display: 'inline-flex',
  flexDirection: labelPosition === 'left' ? 'row-reverse' : undefined,
  alignItems: 'center',
  cursor: disabled ? 'not-allowed' : 'pointer',
  gap: theme.space.padding.xs,
}));

export const RadioInner = styled<'div', RadioComponentState>('div', {
  name: RadioName,
  slot: 'inner',
  overridesResolver: ({ componentState }) =>
    getRadioSlotClassNames(componentState).inner,
})(({
  theme,
  componentState: { shape, checkedColor, checked, customIcon, disabled, size },
}) => {
  return {
    display: 'flex',
    userSelect: 'none',
    fontSize: `calc(${size}px - ${2 * theme.borderBaseWidth}px)`,
    height: size,
    minWidth: size,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: customIcon ? 'inherit' : shape === 'round' ? '50%' : undefined,
    border: customIcon
      ? undefined
      : `${theme.borderBaseWidth}px solid ${theme.palette.gray500}`,
    flexShrink: 0,
    transitionDuration: theme.transition.duration.fast,
    transitionProperty: 'background-color, color, border-color',

    ...(!customIcon
    && (disabled || checked) && {
      color: disabled ? theme.palette.gray500 : theme.palette.white,
      backgroundColor: disabled ? theme.palette.border : checkedColor,
      borderColor: disabled ? theme.palette.gray500 : checkedColor,
    }),
  };
});

export const RadioInput = styled('input')({
  boxSizing: 'border-box',
  position: 'absolute',
  zIndex: 1,
  opacity: 0,
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  cursor: 'inherit',
});

export const RadioIcon = styled<'span', RadioComponentState>('span', {
  name: RadioName,
  slot: 'icon',
  overridesResolver: ({ componentState }) =>
    getRadioSlotClassNames(componentState).icon,
})({
  width: '1em',
  height: '1em',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const RadioLabel = styled<'span', RadioComponentState>('span', {
  name: RadioName,
  slot: 'label',
  overridesResolver: ({ componentState }) =>
    getRadioSlotClassNames(componentState).label,
})(({ theme, componentState: { disabled, size } }) => ({
  lineHeight: toPX(size),
  color: disabled ? theme.palette.text.third : theme.palette.text.primary,
  boxSizing: 'border-box',
}));

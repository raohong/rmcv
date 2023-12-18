import { Success } from '@rmc-vant/icons';
import { styled } from '@rmc-vant/system';
import { toPX } from '@rmc-vant/utils';
import { baseStyleReset } from '../_styles';
import {
  CheckboxGroupName,
  CheckboxName,
  getCheckboxGroupSlotClassNames,
  getCheckboxSlotClassNames,
} from './classNames';
import { CheckboxComponentState, CheckboxGroupComponentState } from './interface';

export const CheckboxGroupRoot = styled<'div', CheckboxGroupComponentState>('div', {
  name: CheckboxGroupName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getCheckboxGroupSlotClassNames(componentState).root,
})(({ theme, componentState: { direction } }) => ({
  display: 'flex',
  flexDirection: direction === 'horizontal' ? undefined : 'column',
  maxWidth: '100%',
  flexWrap: 'wrap',
  gap: `${theme.space.padding.md}px ${theme.space.padding.sm}px`,
}));

export const CheckboxRoot = styled<'label', CheckboxComponentState>('label', {
  name: CheckboxName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getCheckboxSlotClassNames(componentState).root,
})(({ theme, componentState: { labelPosition, disabled } }) => ({
  ...baseStyleReset({ theme }),
  display: 'inline-flex',
  alignItems: 'center',
  cursor: disabled ? 'not-allowed' : 'pointer',
  gap: theme.space.padding.xs,
  flexDirection: labelPosition === 'left' ? 'row-reverse' : undefined,
}));

export const CheckboxInner = styled<'div', CheckboxComponentState>('div', {
  name: CheckboxName,
  slot: 'inner',
  overridesResolver: ({ componentState }) =>
    getCheckboxSlotClassNames(componentState).inner,
})(
  ({
    theme,
    componentState: { checkedColor, checked, disabled, customIcon, size, shape },
  }) => ({
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '1em',
    minWidth: '1em',
    userSelect: 'none',
    fontSize: size,
    boxSizing: 'content-box',
    transitionProperty: 'border-color, background-color, color',
    transitionDuration: theme.transition.duration.fast,

    ...(!customIcon && {
      border: `${theme.borderBaseWidth}px solid ${theme.palette.gray500}`,
      borderRadius: shape === 'round' ? '0.5em' : undefined,
    }),

    ...(!customIcon &&
      disabled && {
        backgroundColor: theme.palette.border,
        color: theme.palette.gray500,
      }),

    ...(!customIcon &&
      checked &&
      !disabled && {
        backgroundColor: checkedColor,
        borderColor: checkedColor,
        color: theme.palette.white,
      }),
  }),
);

export const CheckboxLabel = styled<'span', CheckboxComponentState>('span', {
  name: CheckboxName,
  slot: 'label',
  overridesResolver: ({ componentState }) =>
    getCheckboxSlotClassNames(componentState).label,
})(({ theme, componentState: { disabled, size } }) => ({
  color: disabled ? theme.palette.text.third : theme.palette.text.primary,
  lineHeight: toPX(size),
  boxSizing: 'border-box',
}));

export const CheckboxIcon = styled<typeof Success, CheckboxComponentState>(Success, {
  name: CheckboxName,
  slot: 'icon',
  overridesResolver: ({ componentState }) =>
    getCheckboxSlotClassNames(componentState).icon,
})({
  width: '1em',
  height: '1em',
  position: 'absolute',
});

export const CheckboxInputPlaceholder = styled('input')({
  position: 'absolute',
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  opacity: 0,
  cursor: 'inherit',
});

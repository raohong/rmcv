import { keyframes, styled } from '@rmc-vant/system';
import { baseStyleReset, hairline } from '../_styles';
import { PasswordInputName, getPasswordInputSlotClassNames } from './classNames';
import type { PasswordInputComponentState } from './interface';

export const PasswordInputRoot = styled<'label', PasswordInputComponentState>(
  'label',
  {
    name: PasswordInputName,
    slot: 'root',
    overridesResolver: ({ componentState }) =>
      getPasswordInputSlotClassNames(componentState).root,
  },
)(({ theme }) => ({
  ...baseStyleReset({ theme }),
  display: 'block',
  margin: `0 ${theme.space.padding.md}px`,
}));

export const PasswordInputInner = styled<'div', PasswordInputComponentState>('div', {
  name: PasswordInputName,
  slot: 'inner',
  overridesResolver: ({ componentState }) =>
    getPasswordInputSlotClassNames(componentState).inner,
})(
  ({ componentState: { gutter } }) => ({
    display: 'flex',
    gap: gutter,
    cursor: 'unset',
    boxSizing: 'border-box',
    height: 50,
    position: 'relative',
    borderRadius: 6,
  }),
  hairline('around'),
);

export const PasswordInputItem = styled<'div', PasswordInputComponentState>('div', {
  name: PasswordInputName,
  slot: 'item',
  overridesResolver: ({ componentState }) =>
    getPasswordInputSlotClassNames(componentState).item,
})(({ theme, componentState: { gutter } }) => ({
  'boxSizing': 'border-box',
  'flex': 1,
  'display': 'flex',
  'alignItems': 'center',
  'justifyContent': 'center',
  'height': '100%',
  'backgroundColor': theme.palette.white,
  'fontSize': 20,
  'position': 'relative',
  'flexShrink': 0,
  '&:not(:last-child)': gutter
    ? undefined
    : {
        ...hairline('right')({ theme }),
      },
}));

export const PasswordInputMask = styled<'div', PasswordInputComponentState>('div', {
  name: PasswordInputName,
  slot: 'mask',
  overridesResolver: ({ componentState }) =>
    getPasswordInputSlotClassNames(componentState).mask,
})(({ theme }) => ({
  boxSizing: 'border-box',
  borderRadius: '50%',
  width: 10,
  background: theme.palette.text.primary,
  height: 10,
}));

const PasswordInputCursorAnimation = keyframes({
  from: {
    opacity: 0,
  },
});

export const PasswordInputCursor = styled<'span', PasswordInputComponentState>(
  'span',
  {
    name: PasswordInputName,
    slot: 'cursor',
    overridesResolver: ({ componentState }) =>
      getPasswordInputSlotClassNames(componentState).cursor,
  },
)(({ theme }) => ({
  boxSizing: 'border-box',
  display: 'inline-block',
  width: 1,
  height: '40%',
  background: theme.palette.text.primary,
  animation: `${PasswordInputCursorAnimation} 1.2s steps(2) infinite`,
}));

export const PasswordInputInfo = styled<'div', PasswordInputComponentState>('div', {
  name: PasswordInputName,
  slot: 'info',
  overridesResolver: ({ componentState }) =>
    getPasswordInputSlotClassNames(componentState).info,
})(({ theme, componentState: { errorInfo } }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: theme.typography.fontSize.md,
  marginTop: theme.space.padding.md,
  color: errorInfo ? theme.palette.danger : theme.palette.text.secondary,
}));

export const PasswordInputPlaceholder = styled<'input', PasswordInputComponentState>(
  'input',
  {
    name: PasswordInputName,
    slot: 'input',
    overridesResolver: ({ componentState }) =>
      getPasswordInputSlotClassNames(componentState).input,
  },
)(baseStyleReset, {
  position: 'absolute',
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  opacity: 0,
  border: 0,
  visibility: 'hidden',
});

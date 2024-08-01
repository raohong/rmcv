import { ClearFilled } from '@rmc-vant/icons';
import { styled } from '@rmc-vant/system';
import { baseStyleReset } from '../_styles';
import { InputName, TextareaName, getInputSlotClassNames } from './classNames';
import type { InputComponentState } from './interface';

const createStyles = (name: typeof InputName | typeof TextareaName) => {
  const StyledRoot = styled<'div', InputComponentState>('div', {
    name,
    slot: 'root',
    overridesResolver: ({ componentState }) =>
      getInputSlotClassNames(componentState).root,
  })(({ theme, componentState: { inputType } }) => ({
    ...baseStyleReset({ theme }),
    ...(inputType === InputName && {
      display: 'flex',
      alignItems: 'center',
      maxWidth: '100%',
    }),
  }));

  const StyledContainer = styled('div')({
    boxSizing: 'border-box',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    maxWidth: '100%',
  });

  const StyledAddonAfter = styled<'span', InputComponentState>('span', {
    name,
    slot: 'addonAfter',
    overridesResolver: ({ componentState }) =>
      getInputSlotClassNames(componentState).addonAfter,
  })(({ theme }) => ({
    boxSizing: 'border-box',
    fontSize: '18px',
    color: theme.palette.gray600,
    paddingLeft: theme.space.padding.xs,
  }));

  const StyledAddonBefore = styled<'span', InputComponentState>('span', {
    name,
    slot: 'addonBefore',
    overridesResolver: ({ componentState }) =>
      getInputSlotClassNames(componentState).addonBefore,
  })(({ theme }) => ({
    boxSizing: 'border-box',
    fontSize: '18px',
    color: theme.palette.gray600,
    paddingLeft: theme.space.padding.xs,
  }));

  const StyledSuffix = styled<'span', InputComponentState>('span', {
    name,
    slot: 'suffix',
    overridesResolver: ({ componentState }) =>
      getInputSlotClassNames(componentState).suffix,
  })(({ theme }) => ({
    boxSizing: 'border-box',
    paddingLeft: theme.space.padding.xs,
    fontSize: '18px',
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
    color: theme.palette.gray600,
  }));

  const StyledPrefix = styled<'span', InputComponentState>('span', {
    name,
    slot: 'prefix',
    overridesResolver: ({ componentState }) =>
      getInputSlotClassNames(componentState).prefix,
  })(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    fontSize: '18px',
    color: theme.palette.gray600,
    paddingRight: theme.space.padding.xs,
    boxSizing: 'border-box',
  }));

  const StyledClearIcon = styled<typeof ClearFilled, InputComponentState>(
    ClearFilled,
    {
      name,
      slot: 'clearIcon',
      overridesResolver: ({ componentState }) =>
        getInputSlotClassNames(componentState).clearIcon,
    },
  )(({ theme }) => ({
    boxSizing: 'border-box',
    paddingLeft: theme.space.padding.xs,
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
    color: theme.palette.gray500,
    fontSize: 18,
  }));

  const StyledCounter = styled<'div', InputComponentState>('div', {
    name,
    slot: 'counter',
    overridesResolver: ({ componentState }) =>
      getInputSlotClassNames(componentState).counter,
  })(({ theme, componentState: { inputType } }) => ({
    paddingLeft: theme.space.padding.xs,
    whiteSpace: 'nowrap',
    fontSize: theme.typography.fontSize.sm,
    lineHeight: theme.typography.lineHeights.xs,
    color: theme.palette.gray700,
    boxSizing: 'border-box',

    ...(inputType === TextareaName && {
      marginTop: theme.space.padding.base,
      textAlign: 'right',
    }),
  }));

  const StyledInput = styled<'input', InputComponentState>('input', {
    name,
    slot: 'input',
    overridesResolver: ({ componentState }) =>
      getInputSlotClassNames(componentState).input,
  })(({ theme, componentState: { readonly, disabled, inputAlign, status } }) => ({
    ...baseStyleReset({ theme }),
    'cursor': readonly ? 'unset' : undefined,
    'textAlign': inputAlign,
    'display': 'inline-block',
    'width': '100%',
    'lineHeight': '24px',
    'fontSize': theme.typography.fontSize.md,
    'color':
      status === 'error'
        ? theme.palette.danger
        : disabled
          ? theme.palette.text.third
          : theme.palette.text.primary,
    'background': theme.palette.background.light,
    'border': 'none',
    'boxShadow': 'none',
    'outline': 'none',
    'resize': 'none',

    '&::placeholder': {
      color: status === 'error' ? theme.palette.danger : theme.palette.text.third,
    },
  }));

  return {
    StyledAddonAfter,
    StyledAddonBefore,
    StyledClearIcon,
    StyledCounter,
    StyledPrefix,
    StyledRoot,
    StyledSuffix,
    StyledInput,
    StyledContainer,
  };
};

export const InputStyledComponents = createStyles(InputName);

export type IInputStyledComponents = typeof InputStyledComponents;

export const TextareaStyledComponents = createStyles(TextareaName);

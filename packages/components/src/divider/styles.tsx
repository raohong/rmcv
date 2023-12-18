import { styled } from '@rmc-vant/system';
import { baseStyleReset } from '../_styles';
import { DividerName, getDividerSlotClassNames } from './classNames';
import { DividerComponentState } from './interface';

export const DividerRoot = styled<'div', DividerComponentState>('div', {
  name: DividerName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getDividerSlotClassNames(componentState).root,
})(({ theme, componentState: { dashed, contentPosition, hairline } }) => ({
  ...baseStyleReset({ theme }),
  color: theme.palette.text.secondary,
  fontSize: theme.typography.fontSize.md,
  margin: `${theme.space.padding.md}px 0`,
  lineHeight: '24px',
  display: 'flex',
  alignItems: 'center',
  borderWidth: 0,

  '&::before, &::after': {
    content: '""',
    display: 'block',
    borderWidth: `${theme.borderBaseWidth}px 0 0`,
    borderColor: theme.palette.border,
    borderStyle: dashed ? 'dashed' : 'solid',
    transform: hairline ? 'scaleY(0.5)' : undefined,
  },

  ...(contentPosition === 'center' && {
    '&::after, &::before': {
      flex: 1,
    },
  }),

  ...(contentPosition === 'left' && {
    '&::before': {
      flexBasis: '10%',
    },
    '&::after': {
      flex: 1,
    },
  }),

  ...(contentPosition === 'right' && {
    '&::before': {
      flex: 1,
    },
    '&::after': {
      flexBasis: '10%',
    },
  }),
}));

export const DividerText = styled<'span', DividerComponentState>('span', {
  name: DividerName,
  slot: 'text',
  overridesResolver: ({ componentState }) =>
    getDividerSlotClassNames(componentState).text,
})(({ theme }) => ({
  boxSizing: 'border-box',
  padding: `0 ${theme.space.padding.md}px`,
}));

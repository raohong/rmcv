import { styled } from '@rmc-vant/system';
import React from 'react';
import { baseStyleReset } from '../_styles';
import { Button } from '../button';
import { PaginationName, getPaginationSlotClassNames } from './classNames';
import type { PaginationComponentState } from './interface';

const XButton = (props: React.ComponentProps<typeof Button>) => (
  <Button component='div' {...props} />
);

export const PaginationRoot = styled<'div', PaginationComponentState>('div', {
  name: PaginationName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getPaginationSlotClassNames(componentState).root,
})(
  {
    display: 'flex',
    alignItems: 'center',
  },
  baseStyleReset,
);

export const PaginationButton = styled<typeof XButton, PaginationComponentState>(
  XButton,
  {
    name: PaginationName,
  },
)(({ theme, componentState: { buttonDisabled } }) => ({
  'minWidth': 36,
  'userSelect': 'none',
  'height': 40,
  'flex': 1,
  ...(!buttonDisabled && {
    color: theme.palette.primary,
    background: theme.palette.white,
  }),

  '&:not(:last-child)': {
    '&:after': {
      borderRightWidth: 0,
    },
  },
}));

export const PaginationAction = styled<
  typeof PaginationButton,
  PaginationComponentState
>(PaginationButton, {
  name: PaginationName,
  slot: 'action',
  overridesResolver: ({ componentState }) =>
    getPaginationSlotClassNames(componentState).action,
})(({ theme }) => ({
  padding: `0 ${theme.space.padding.base}px`,
}));

export const PaginationJump = styled<
  typeof PaginationButton,
  PaginationComponentState
>(PaginationButton, {
  name: PaginationName,
  slot: 'jump',
  overridesResolver: ({ componentState }) =>
    getPaginationSlotClassNames(componentState).jump,
})(({ theme }) => ({
  fontFamily: 'Arial, Helvetica, sans-serif',
  color: theme.palette.gray700,
  flex: 0,
  padding: `0 ${theme.space.padding.base}px`,
}));

export const PaginationDescription = styled<'div', PaginationComponentState>('div', {
  name: PaginationName,
  slot: 'description',
  overridesResolver: ({ componentState }) =>
    getPaginationSlotClassNames(componentState).description,
})(({ theme }) => ({
  flex: 1,
  color: theme.palette.gray700,
  textAlign: 'center',
}));

export const PaginationPage = styled<
  typeof PaginationButton,
  PaginationComponentState
>(PaginationButton, {
  name: PaginationName,
  slot: 'page',
  overridesResolver: ({ componentState }) =>
    getPaginationSlotClassNames(componentState).page,
})(({ theme, componentState: { pageActive } }) => ({
  ...(pageActive && {
    color: theme.palette.white,
    background: theme.palette.primary,
  }),
  flex: 0,
}));

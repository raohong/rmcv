import { styled } from '@rmc-vant/system';
import { baseStyleReset } from '../_styles';
import { Loading } from '../loading';
import { ListName, getListSlotClassNames } from './classNames';
import type { ListComponentState } from './interface';

export const ListRoot = styled<'div', ListComponentState>('div', {
  name: ListName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getListSlotClassNames(componentState).root,
})(({ theme }) => ({
  ...baseStyleReset({ theme }),
}));

export const ListText = styled<'div', ListComponentState>('div', {
  name: ListName,
  slot: 'text',
  overridesResolver: ({ componentState }) =>
    getListSlotClassNames(componentState).text,
})(({ theme }) => ({
  boxSizing: 'border-box',
  color: theme.palette.text.secondary,
  fontSize: theme.typography.fontSize.md,
  padding: `${theme.space.padding.md}px 0`,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const ListLoadingIcon = styled<typeof Loading, ListComponentState>(Loading, {
  name: ListName,
  slot: 'loadingIcon',
  overridesResolver: ({ componentState }) =>
    getListSlotClassNames(componentState).loadingIcon,
})({
  fontSize: 16,
});

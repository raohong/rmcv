import type {} from '@react-spring/web';
import { animated } from '@react-spring/web';
import { styled } from '@rmc-vant/system';
import { baseStyleReset } from '../_styles';
import { Loading } from '../loading';
import { PullRefreshName, getPullRefreshSlotClassNames } from './classNames';
import type { PullRefreshComponentState } from './interface';
import { PullRefreshState } from './interface';

export const PullRefreshRoot = styled<'div', PullRefreshComponentState>('div', {
  name: PullRefreshName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getPullRefreshSlotClassNames(componentState).root,
})(({ theme, componentState: { refreshState } }) => ({
  ...baseStyleReset({ theme }),
  overflow: refreshState !== PullRefreshState.NORMAL ? 'hidden' : undefined,
}));

export const PullRefreshContent = styled<
  typeof animated.div,
  PullRefreshComponentState
>(animated.div, {
  name: PullRefreshName,
  slot: 'content',
  overridesResolver: ({ componentState }) =>
    getPullRefreshSlotClassNames(componentState).content,
})({
  boxSizing: 'border-box',
  minHeight: '100%',
  willChange: 'transform',
});

export const PullRefreshHeader = styled<'div', PullRefreshComponentState>('div', {
  name: PullRefreshName,
  slot: 'header',
  overridesResolver: ({ componentState }) =>
    getPullRefreshSlotClassNames(componentState).header,
})({
  boxSizing: 'border-box',
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
});

export const PullRefreshHeaderLoading = styled<
  typeof Loading,
  PullRefreshComponentState
>(Loading, {
  name: PullRefreshName,
  slot: 'headerLoading',
  overridesResolver: ({ componentState }) =>
    getPullRefreshSlotClassNames(componentState).headerLoading,
})({ fontSize: 16 });

export const PullRefreshHeaderText = styled<'span', PullRefreshComponentState>(
  'span',
  {
    name: PullRefreshName,
    slot: 'headerText',
    overridesResolver: ({ componentState }) =>
      getPullRefreshSlotClassNames(componentState).headerText,
  },
)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: theme.typography.fontSize.md,
}));

export const PullRefreshPullDistanceMeasurer = styled('div')({
  position: 'absolute',
  left: 0,
  top: 0,
  right: 0,
  zIndex: -1,
  pointerEvents: 'none',
});

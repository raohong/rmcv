import { animated } from '@react-spring/web';
import { styled } from '@rmc-vant/system';
import { baseStyleReset } from '../_styles';
import { SwipeCellName, getSwipeCellSlotClassNames } from './classNames';
import type { SwipeCellComponentState } from './interface';

export const SwipeCellRoot = styled<'div', SwipeCellComponentState>('div', {
  name: SwipeCellName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getSwipeCellSlotClassNames(componentState).root,
})(({ theme }) => ({
  ...baseStyleReset({ theme }),
  overflow: 'hidden',
  background: theme.palette.background.light,
  userSelect: 'none',
}));

export const SwipeCellWrapper = styled(animated.div)({
  position: 'relative',
  willChange: 'transform',
});

export const SwipeCellContent = styled<'div', SwipeCellComponentState>('div', {
  name: SwipeCellName,
  slot: 'content',
  overridesResolver: ({ componentState }) =>
    getSwipeCellSlotClassNames(componentState).content,
})({
  boxSizing: 'border-box',
});

export const SwipeCellLeftAction = styled<
  typeof animated.div,
  SwipeCellComponentState
>(animated.div, {
  name: SwipeCellName,
  slot: 'leftAction',
  overridesResolver: ({ componentState }) =>
    getSwipeCellSlotClassNames(componentState).leftAction,
})({
  boxSizing: 'border-box',
  position: 'absolute',
  right: '100%',
  top: 0,
  bottom: 0,
  display: 'inline-flex',
  alignItems: 'center',
});

export const SwipeCellRightAction = styled<
  typeof animated.div,
  SwipeCellComponentState
>(animated.div, {
  name: SwipeCellName,
  slot: 'rightAction',
  overridesResolver: ({ componentState }) =>
    getSwipeCellSlotClassNames(componentState).rightAction,
})({
  boxSizing: 'border-box',
  position: 'absolute',
  left: '100%',
  top: 0,
  bottom: 0,
  display: 'inline-flex',
  alignItems: 'center',
});

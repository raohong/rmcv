import { animated } from '@react-spring/web';
import { styled } from '@rmc-vant/system';
import { ScrollViewName, getScrollViewSlotClassNames } from './classNames';
import type { ScrollViewComponentState } from './interface';

export const StyledScrollViewRoot = styled<
  typeof animated.div,
  ScrollViewComponentState
>(animated.div, {
  name: ScrollViewName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getScrollViewSlotClassNames(componentState).root,
})(({ componentState: { inline } }) => ({
  width: '100%',
  maxWidth: '100%',
  maxHeight: '100%',
  height: '100%',
  overflow: 'hidden',
  touchAction: 'none',
  lineHeight: inline ? 0 : undefined,
}));

export const StyledScrollViewContent = styled<
  typeof animated.div,
  ScrollViewComponentState
>(animated.div, {
  name: ScrollViewName,
  slot: 'content',
  overridesResolver: ({ componentState }) =>
    getScrollViewSlotClassNames(componentState).content,
})(({ componentState: { inline }, theme: { typography } }) => ({
  display: inline ? 'inline-flex' : 'flex',
  flexDirection: inline ? undefined : 'column',
  lineHeight: inline ? typography.lineHeights.md : undefined,
}));

import { animated } from '@react-spring/web';
import { styled } from '@rmc-vant/system';
import { baseStyleReset } from '../_styles';
import { SwiperName, getSwiperSlotClassNames } from './classNames';
import type { SwiperComponentState } from './interface';

export const SwiperRoot = styled<typeof animated.div, SwiperComponentState>(
  animated.div,
  {
    name: SwiperName,
    slot: 'root',
    overridesResolver: ({ componentState }) =>
      getSwiperSlotClassNames(componentState).root,
  },
)(({ theme }) => ({
  ...baseStyleReset({ theme }),
  overflow: 'hidden',
  width: '100%',
  height: '100%',
  maxWidth: '100%',
  maxHeight: '100%',
}));

export const SwiperIndicators = styled<'div', SwiperComponentState>('div', {
  name: SwiperName,
  slot: 'indicators',
  overridesResolver: ({ componentState }) =>
    getSwiperSlotClassNames(componentState).indicators,
})(({ theme, componentState: { vertical } }) => ({
  display: 'flex',
  flexDirection: vertical ? 'column' : undefined,
  gap: 6,
  boxSizing: 'border-box',
  position: 'absolute',
  bottom: vertical ? '50%' : theme.space.padding.sm,
  left: vertical ? theme.space.padding.sm : '50%',
  transform: vertical ? 'translateY(50%)' : 'translateX(-50%)',
}));

export const SwiperIndicator = styled<typeof animated.div, SwiperComponentState>(
  animated.div,
  {
    name: SwiperName,
    slot: 'indicator',
    overridesResolver: ({ componentState }) =>
      getSwiperSlotClassNames(componentState).indicator,
  },
)(() => ({
  boxSizing: 'border-box',
  width: 6,
  height: 6,
  borderRadius: '50%',
}));

export const StyledSwiperItem = styled<typeof animated.div, SwiperComponentState>(
  animated.div,
  {
    name: SwiperName,
    slot: 'item',
    overridesResolver: ({ componentState }) =>
      getSwiperSlotClassNames(componentState).item,
  },
)({
  boxSizing: 'border-box',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
});

export const StyledSwiperContainer = styled<
  typeof animated.div,
  SwiperComponentState
>(animated.div, {
  name: SwiperName,
  slot: 'content',
})(({ componentState: { vertical } }) => ({
  boxSizing: 'border-box',
  display: vertical ? 'block' : 'flex',
  userSelect: 'none',
  position: 'relative',
  touchAction: 'none',
}));

export const StyledSwiperMeasure = styled(animated.div)({
  boxSizing: 'border-box',
  position: 'absolute',
  visibility: 'hidden',
  zIndex: -1,
  left: 0,
  top: 0,
});

import { animated } from '@react-spring/web';
import { styled } from '@rmc-vant/system';
import { BadgeName, getBadgeSlotClassNames } from './classNames';
import { BadgeComponentState } from './interface';

export const BadgeRoot = styled<'div', BadgeComponentState>('div', {
  name: BadgeName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getBadgeSlotClassNames(componentState).root,
})((props) => ({
  display: 'inline-flex',
  position: 'relative',
  fontFamily: props.theme.typography.fontFamilies.badge,
  lineHeight: '14px',
  padding: 0,
  margin: 0,
  boxSizing: 'border-box',
}));

const DotSize = 8;

export const BadgeWrapper = styled<typeof animated.div, BadgeComponentState>(
  animated.div,
  {
    name: BadgeName,
    slot: 'wrapper',
    overridesResolver: ({ componentState }) =>
      getBadgeSlotClassNames(componentState).wrapper,
  },
)(({ theme, componentState: { color, dot, fixed, position } }) => ({
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: theme.radii.max,
  color: theme.palette.white,
  border: `${theme.borderBaseWidth}px solid ${color || theme.palette.danger}`,
  padding: '0 3px',
  fontSize: theme.typography.fontSize.sm,
  fontWeight: theme.typography.fontWeightBold,
  background: color || theme.palette.danger,
  ...(dot
    ? { width: DotSize, height: DotSize }
    : { minWidth: DotSize, minHeight: DotSize }),

  ...(fixed && {
    position: 'absolute',
  }),
  ...(position === 'top-left' && {
    top: 0,
    left: 0,
    transform: 'translate3d(-50%, -50%, 0)',
  }),
  ...(position === 'top-right' && {
    top: 0,
    right: 0,
    transform: 'translate3d(50%, -50%, 0)',
  }),
  ...(position === 'bottom-left' && {
    bottom: 0,
    left: 0,
    transform: 'translate3d(-50%, 50%, 0)',
  }),
  ...(position === 'bottom-right' && {
    bottom: 0,
    right: 0,
    transform: 'translate3d(50%, 50%, 0)',
  }),
}));

export const StyledBadgeNumberWrapper = styled<'span', BadgeComponentState>('span', {
  name: BadgeName,
  slot: 'numberWrapper',
  overridesResolver: ({ componentState }) =>
    getBadgeSlotClassNames(componentState).numberWrapper,
})({
  display: 'inline-flex',
  alignItems: 'center',
});

export const StyledBadgeNumber = styled<'span', BadgeComponentState>('span', {
  name: BadgeName,
  slot: 'number',
  overridesResolver: ({ componentState }) =>
    getBadgeSlotClassNames(componentState).number,
})({
  overflow: 'hidden',
  position: 'relative',
  display: 'inline-block',
});

export const StyledBadgeNumberScroller = styled(animated.div)({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  background: 'inherit',

  '&[data-badge-number-scroller-reverse]': {
    top: 'initial',
    bottom: 0,
  },
});

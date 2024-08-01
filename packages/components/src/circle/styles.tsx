import { animated } from '@react-spring/web';
import { styled } from '@rmc-vant/system';
import { camelCase } from '@rmc-vant/utils';
import { baseStyleReset } from '../_styles';
import { CircleName } from './classNames';
import type { CircleComponentState, CircleStartPosition } from './interface';

export const getCircleSlotClassNames = ({
  startPosition,
}: CircleComponentState) => ({
  root: ['root', camelCase(`start-position-${startPosition}`)],
  text: ['text'],
});

export const CircleRoot = styled<'div', CircleComponentState>('div', {
  name: CircleName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getCircleSlotClassNames(componentState).root,
})(({ theme, componentState: { size } }) => ({
  ...baseStyleReset({ theme }),
  'width': size,
  'height': size,
  'position': 'relative',

  '& > svg': {
    width: '100%',
    height: '100%',
  },
}));

export const CircleText = styled<'div', CircleComponentState>('div', {
  name: CircleName,
  slot: 'text',
  overridesResolver: ({ componentState }) =>
    getCircleSlotClassNames(componentState).text,
})(({ theme }) => ({
  boxSizing: 'border-box',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: theme.palette.text.primary,
  fontWeight: theme.typography.fontWeightBold,
  fontSize: theme.typography.fontSize.md,
  lineHeight: theme.typography.lineHeights.md,
}));

const rotation: Record<CircleStartPosition, number> = {
  top: -90,
  bottom: 90,
  right: 0,
  left: -180,
};

export const CircleSVGGroup = styled<'g', CircleComponentState>('g', {
  name: CircleName,
  // @ts-ignore
})(({ componentState: { startPosition, fill, strokeLinecap, strokeWidth } }) => ({
  strokeWidth: `${strokeWidth}px`,
  fill,
  strokeLinecap,
  transformOrigin: 'center',
  transform: `rotate(${rotation[startPosition]}deg)`,
}));

export const CircleSVGLayer = styled<'circle', CircleComponentState>('circle')(
  ({ theme, componentState: { layerColor } }) => ({
    stroke: layerColor || theme.palette.white,
  }),
);

export const CircleSVGCircle = styled(animated.circle)(({ theme }) => ({
  stroke: theme.palette.primary,
}));

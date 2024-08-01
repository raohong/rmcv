import { PhotoOutlined } from '@rmc-vant/icons';
import { keyframes, styled } from '@rmc-vant/system';
import { isNumber } from '@rmc-vant/utils';
import { baseStyleReset } from '../_styles';
import { SkeletonName, getSkeletonSlotClassNames } from './classNames';
import type {
  SkeletonAvatarComponentState,
  SkeletonComponentState,
  SkeletonImageComponentState,
  SkeletonRowComponentState,
  SkeletonTitleComponentState,
} from './interface';

const blinkKeyFrames = keyframes({
  '50%': {
    opacity: 0.5,
  },
});

export const SkeletonRoot = styled<'div', SkeletonComponentState>('div', {
  name: SkeletonName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getSkeletonSlotClassNames(componentState).root,
})(({ theme, componentState: { animate, loading } }) => ({
  ...baseStyleReset({ theme }),
  display: 'flex',
  gap: theme.space.padding.xs,
  animation: animate && loading ? `${blinkKeyFrames} 1.2s infinite` : undefined,
}));

export const StyledSkeletonAvatar = styled<'div', SkeletonAvatarComponentState>(
  'div',
  {
    name: SkeletonName,
    slot: 'avatar',
  },
)(({ theme, componentState: { shape, size } }) => ({
  padding: 0,
  margin: 0,
  boxSizing: 'border-box',
  borderRadius: shape === 'round' ? theme.radii.max : undefined,
  width: size,
  height: size,
  background: theme.palette.active,
  flexShrink: 0,
}));

export const StyledSkeletonImage = styled<'div', SkeletonImageComponentState>('div')(
  ({ theme, componentState: { size, shape } }) => ({
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
    borderRadius: shape === 'round' ? 24 : 0,
    width: size[0],
    height: size[1],
    background: theme.palette.active,
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }),
);

export const StyledSkeletonImageIcon = styled<
  typeof PhotoOutlined,
  SkeletonImageComponentState
>(PhotoOutlined)(({ theme, componentState: { size } }) => ({
  fontSize: `calc(${isNumber(size[0]) ? `${size[0]}px` : size[0]} / 2)`,
  color: theme.palette.gray500,
}));

export const StyledSkeletonContent = styled<'div', SkeletonComponentState>('div', {
  name: SkeletonName,
})(({ theme }) => ({
  flex: 1,
  boxSizing: 'border-box',
  paddingTop: theme.space.padding.xs,
}));

export const StyledSkeletonRow = styled<'div', SkeletonRowComponentState>('div', {
  name: SkeletonName,
})(({ theme, componentState: { round, width } }) => ({
  'boxSizing': 'border-box',
  'padding': 0,
  'margin': 0,
  'height': 16,
  'background': theme.palette.active,
  width,
  'borderRadius': round ? theme.radii.max : undefined,
  '&:not(:first-of-type)': {
    marginTop: theme.space.padding.sm,
  },
}));

export const StyledSkeletonTitle = styled<
  typeof StyledSkeletonRow,
  SkeletonTitleComponentState
>(StyledSkeletonRow, {
  name: SkeletonName,
  shouldForwardProp: ['round', 'width'],
})();

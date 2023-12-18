import { SystemStyleInterpolation, Theme } from '@rmc-vant/system';
import { firstUpper } from '@rmc-vant/utils';

export const hapticFeedback: SystemStyleInterpolation = ({ theme }) => ({
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    background: theme.palette.black,
    opacity: 0.1,
    borderRadius: 'inherit',
  },
});

export const textEllipsis: SystemStyleInterpolation = () => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '100%',
  whiteSpace: 'nowrap',
});

export const elementOpacityHapticFeedback: () => SystemStyleInterpolation =
  (opacity?: (theme: Theme) => number) =>
  ({ theme }) => ({
    opacity: opacity ? opacity(theme) : theme.activeOpacity,
  });

export const elementBackgroundHapticFeedback: () => SystemStyleInterpolation =
  (bg?: (theme: Theme) => number) =>
  ({ theme }) => ({
    '&[class]': {
      background: bg ? bg(theme) : theme.palette.active,
    },
  });

export const hairline =
  (
    direction:
      | 'left'
      | 'top'
      | 'right'
      | 'bottom'
      | 'around'
      | 'topBottom'
      | 'leftRight',
    color?: string,
    selector = '&::after',
  ): SystemStyleInterpolation =>
  ({ theme }) => ({
    [selector]: {
      content: '""',
      position: 'absolute',
      left: '-50%',
      top: '-50%',
      bottom: '-50%',
      right: '-50%',
      borderStyle: 'solid',
      borderWidth: 0,
      transform: 'scale(0.5)',
      pointerEvents: 'none',
      borderColor: color ?? theme.palette.border,
      ...(direction === 'around' && {
        borderWidth: theme.borderBaseWidth,
      }),
      ...(direction !== 'around' &&
        !direction.match(/[A-Z]/) && {
          [`border${firstUpper(direction)}Width`]: theme.borderBaseWidth,
        }),
      ...(direction === 'leftRight' && {
        borderWidth: `0 ${theme.borderBaseWidth}px`,
      }),
      ...(direction === 'topBottom' && {
        borderWidth: `${theme.borderBaseWidth}px 0`,
      }),
    },
  });

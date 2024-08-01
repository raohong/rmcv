import { generateComponentClassNameUtility } from '@rmc-vant/system';
import { camelCase } from '@rmc-vant/utils';
import type { ButtonComponentState, ButtonNSlot, ButtonSlot } from './interface';

export const ButtonName = 'Button';

export const {
  buttonClassNames,
  getButtonSlotClassNames,
  composeButtonSlotClassNames,
} = generateComponentClassNameUtility<
  typeof ButtonName,
  ButtonComponentState,
  ButtonSlot,
  ButtonNSlot
>(
  ButtonName,
  {
    root: true,
    icon: true,
    loading: true,
    disabled: true,
    outlined: true,
    outlinedSizeMini: true,
    outlinedSizeSmall: true,
    outlinedSizeLarge: true,
    outlinedPrimary: true,
    outlinedSuccess: true,
    outlinedWarning: true,
    outlinedDanger: true,
    outlinedShapeRound: true,
    outlinedShapeSquare: true,
    contained: true,
    containedSizeMini: true,
    containedSizeSmall: true,
    containedSizeLarge: true,
    containedPrimary: true,
    containedSuccess: true,
    containedWarning: true,
    containedDanger: true,
    containedShapeRound: true,
    containedShapeSquare: true,
    loadingIcon: true,
    block: true,
  },
  ({ variant, size, shape, loading, disabled, type, block }) => ({
    root: [
      'root',
      variant,
      loading && 'loading',
      disabled && 'disabled',
      size !== 'normal' && camelCase(`${variant}-size-${size}`),
      type !== 'default' && camelCase(`${variant}-${type}`),
      shape !== 'default' && camelCase(`${variant}-shape-${shape}`),
      block && 'block',
    ],
    icon: ['icon'],
    loadingIcon: ['loadingIcon'],
  }),
);

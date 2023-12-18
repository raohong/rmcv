import { generateComponentClassNameUtility } from '@rmc-vant/system';
import { camelCase } from '@rmc-vant/utils';
import { ButtonComponentState, ButtonNSlot, ButtonSlot } from './interface';

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
    outlinedSizeNormal: true,
    outlinedSizeLarge: true,
    outlinedDefault: true,
    outlinedPrimary: true,
    outlinedSuccess: true,
    outlinedWarning: true,
    outlinedDanger: true,
    outlinedShapeRound: true,
    outlinedShapeSquare: true,
    contained: true,
    containedSizeMini: true,
    containedSizeSmall: true,
    containedSizeNormal: true,
    containedSizeLarge: true,
    containedDefault: true,
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
      camelCase(`${variant}-size-${size}`),
      camelCase(`${variant}-${type}`),
      shape !== 'default' && camelCase(`${variant}-shape-${shape}`),
      block && 'block',
    ],
    icon: ['icon'],
    loadingIcon: ['loadingIcon'],
  }),
);

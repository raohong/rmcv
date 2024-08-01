import type { SystemStyleObject, Theme } from '@rmc-vant/system';
import { styled } from '@rmc-vant/system';
import type React from 'react';
import { hairline } from '../_styles';
import type { OverridableComponent } from '../_utils';
import { Loading } from '../loading';
import type { TouchableProps } from '../touchable';
import { Touchable } from '../touchable';
import type { WithComponentStateProps } from '../types';
import { ButtonName, getButtonSlotClassNames } from './classNames';
import type {
  ButtonComponentState,
  ButtonStyleOverrides,
  ButtonType,
  ButtonVariant,
} from './interface';

const getButtonStyle = (
  variant: ButtonVariant,
  color: string,
  white: string,
): SystemStyleObject => {
  if (variant === 'contained') {
    return {
      color: white,
      background: color,
      borderColor: color,
    };
  }

  return {
    color,
    background: white,
    borderColor: color,
  };
};

const getButtonStyles = (
  { color, variant, type, colorIsGradient }: ButtonComponentState,
  { palette }: Theme,
): SystemStyleObject | undefined => {
  if (color && colorIsGradient && variant === 'outlined') {
    return undefined;
  }

  const colors: Record<Exclude<ButtonType, 'default'>, string> = {
    primary: palette.primary,
    success: palette.success,
    warning: palette.orange,
    danger: palette.danger,
  };

  if (type === 'default' || color) {
    return color ? getButtonStyle(variant, color, palette.white) : undefined;
  }

  const target = colors[type];

  return getButtonStyle(variant, target, palette.white);
};

export const ButtonRoot = styled<
  typeof Touchable,
  ButtonComponentState,
  ButtonStyleOverrides
>(Touchable, {
  name: ButtonName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getButtonSlotClassNames(componentState).root,
})(
  (props) => {
    const {
      theme: { palette, typography, space, disabledOpacity, radii },
      componentState: { size, disabled, shape, block },
    } = props;

    return {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      lineHeight: 1.2,
      background: palette.background.light,
      fontSize: typography.fontSize.md,
      color: palette.text.primary,
      borderRadius:
        shape === 'default' ? radii.md : shape === 'square' ? 0 : radii.max,
      borderColor: palette.border,
      borderWidth: 0,

      ...(disabled && {
        cursor: 'not-allowed',
        opacity: disabledOpacity,
      }),

      ...(block && {
        display: 'flex',
        width: '100%',
      }),

      ...(size === 'mini' && {
        height: 24,
        padding: `0 ${space.padding.base}px`,
        fontSize: typography.fontSize.xs,
      }),

      ...(size === 'small' && {
        height: 32,
        padding: `0 ${space.padding.xs}px`,
        fontSize: typography.fontSize.sm,
      }),

      ...(size === 'normal' && {
        height: 44,
        padding: `0 15px`,
      }),

      ...(size === 'large' && {
        height: 50,
        width: '100%',
        padding: `0 ${space.padding.lg}px`,
      }),
      ...getButtonStyles(props.componentState, props.theme),
    };
  },
  ({ theme, componentState: { border, hairline: _h } }) => ({
    ...(border
      ? _h
        ? hairline('around', 'inherit')({ theme })
        : {
            borderStyle: 'solid',
            borderWidth: theme.borderBaseWidth,
          }
      : undefined),
  }),
) as unknown as OverridableComponent<
  React.ForwardRefExoticComponent<TouchableProps>,
  'button',
  WithComponentStateProps<ButtonComponentState>
>;

export const ButtonIcon = styled<'span', ButtonComponentState, ButtonStyleOverrides>(
  'span',
  {
    name: ButtonName,
    slot: 'icon',
    overridesResolver: ({ componentState }) =>
      getButtonSlotClassNames(componentState).icon,
  },
)(({ componentState: { emptyContent }, theme: { space } }) => ({
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  fontSize: '1.2em',
  display: 'inline-flex',
  alignItems: 'center',
  ...(!emptyContent && { marginRight: space.padding.base }),
}));

export const ButtonLoading = styled<
  typeof Loading,
  ButtonComponentState,
  ButtonStyleOverrides
>(Loading, {
  name: ButtonName,
  slot: 'loading',
  overridesResolver: ({ componentState }) =>
    getButtonSlotClassNames(componentState).loadingIcon,
})();

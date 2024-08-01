import type { Theme } from '@rmc-vant/system';
import { styled } from '@rmc-vant/system';
import { baseStyleReset } from '../_styles';
import { TagName, getTagSlotClassNames } from './classNames';
import type { TagComponentState, TagType, TagVariant } from './interface';

const mixinTagType = (
  type: TagType,
  variant: TagVariant,
  { palette, borderBaseWidth }: Theme,
  color?: string,
  textColor?: string,
) => {
  const config: Record<TagType, string> = {
    primary: palette.primary,
    success: palette.success,
    danger: palette.danger,
    warning: palette.waning,
    default: palette.gray600,
  };

  if (variant === 'contained') {
    return {
      color: textColor ?? palette.white,
      background: color ?? config[type],
    };
  }

  const text = textColor ?? config[type];

  return {
    background: palette.background.light,
    color: text,
    border: `${borderBaseWidth}px solid ${text}`,
  };
};

export const TagRoot = styled<'span', TagComponentState>('span', {
  name: TagName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getTagSlotClassNames(componentState).root,
})(
  ({ theme, componentState: { size, type, variant, shape, color, textColor } }) => ({
    ...baseStyleReset({ theme }),
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    padding: `0 ${theme.space.padding.base}px`,
    lineHeight: '16px',
    fontSize: theme.typography.fontSize.sm,

    ...(size === 'medium' && {
      padding: `2px 6px`,
    }),

    ...(size === 'large' && {
      padding: `${theme.space.padding.base}px ${theme.space.padding.xs}px`,
      fontSize: theme.typography.fontSize.md,
      borderRadius: theme.radii.md,
    }),

    ...(shape === 'mark' && {
      borderRadius: `0 ${theme.radii.max}px ${theme.radii.max}px 0`,
    }),

    ...(shape === 'round' && {
      borderRadius: theme.radii.max,
    }),

    ...mixinTagType(type, variant, theme, color, textColor),
  }),
);

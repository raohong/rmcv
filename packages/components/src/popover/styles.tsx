import { Placement } from '@floating-ui/react-dom';
import { SystemStyleObject, styled } from '@rmc-vant/system';
import { firstUpper } from '@rmc-vant/utils';
import { hairline } from '../_styles';
import Popup from '../popup';
import Touchable from '../touchable';
import { PopoverName, getPopoverSlotClassNames } from './classNames';
import { PopoverComponentState } from './interface';

const TransformOriginMap: Record<Placement, SystemStyleObject> = {
  bottom: {
    transformOrigin: 'center top',
  },
  'bottom-end': {
    transformOrigin: 'right top',
  },
  'bottom-start': {
    transformOrigin: 'left top',
  },
  top: {
    transformOrigin: 'center bottom',
  },
  'top-end': {
    transformOrigin: 'right bottom',
  },
  'top-start': {
    transformOrigin: 'left bottom',
  },
  right: {
    transformOrigin: 'left center',
  },
  'right-start': {
    transformOrigin: 'left top',
  },
  'right-end': {
    transformOrigin: 'left center',
  },
  left: {
    transformOrigin: 'right center',
  },
  'left-start': {
    transformOrigin: 'right top',
  },
  'left-end': {
    transformOrigin: 'right center',
  },
};

export const PopoverRoot = styled<typeof Popup, PopoverComponentState>(Popup, {
  name: PopoverName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getPopoverSlotClassNames(componentState).root,
})(({ componentState: { placement } }) => ({
  ...TransformOriginMap[placement],
  width: 'max-content',
}));

export const PopoverMenus = styled<'div', PopoverComponentState>('div', {
  name: PopoverName,
  slot: 'menus',
  overridesResolver: ({ componentState }) =>
    getPopoverSlotClassNames(componentState).menus,
})(({ theme, componentState: { theme: popoverTheme } }) => ({
  boxSizing: 'border-box',
  boxShadow: '0 2px 12px rgba(50, 50, 51, 0.12)',
  backgroundColor: theme.palette.background.light,
  borderRadius: theme.radii.lg,
  overflow: 'hidden',
  background: popoverTheme === 'dark' ? '#4a4a4a' : theme.palette.background.light,
}));

export const PopoverMenu = styled<
  typeof Touchable,
  PopoverComponentState & {
    disabled: boolean;
  }
>(Touchable, {
  name: PopoverName,
  slot: 'menu',
  overridesResolver: ({ componentState }) =>
    getPopoverSlotClassNames(componentState).menu,
})(
  ({
    theme: { space, typography, palette },
    componentState: { theme, disabled },
  }) => ({
    boxSizing: 'border-box',
    padding: `0 ${space.padding.md}px`,
    minWidth: 128,
    height: 44,
    fontSize: typography.fontSize.md,
    lineHeight: typography.lineHeights.md,
    color: disabled
      ? theme === 'dark'
        ? palette.text.secondary
        : palette.text.third
      : theme === 'dark'
      ? palette.white
      : palette.text.primary,
    display: 'flex',
    alignItems: 'center',
    gap: space.padding.xs,

    [`&:last-child ${PopoverMenuText}::after`]: {
      display: 'none',
    },
  }),
);

export const PopoverMenuIcon = styled<'span', PopoverComponentState>('span', {
  name: PopoverName,
  slot: 'menuIcon',
  overridesResolver: ({ componentState }) =>
    getPopoverSlotClassNames(componentState).menuIcon,
})(() => ({
  boxSizing: 'border-box',
  fontSize: 20,
  flexShrink: 0,
}));

export const PopoverMenuText = styled<
  'span',
  PopoverComponentState & {
    align: 'center' | 'start';
  }
>('span', {
  name: PopoverName,
  slot: 'menuText',
  overridesResolver: ({ componentState }) =>
    getPopoverSlotClassNames(componentState).menuText,
})(
  ({ theme: { palette }, componentState: { theme, align } }) => ({
    boxSizing: 'border-box',
    flex: 1,
    position: 'relative',
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: align,
    borderColor: theme === 'light' ? palette.border : palette.gray700,
  }),
  hairline('bottom', 'inherit'),
);

const ReverseDirectionMap = {
  left: 'Right',
  top: 'Bottom',
  right: 'Left',
  bottom: 'Top',
};

export const PopoverArrow = styled<'span', PopoverComponentState>('span', {
  name: PopoverName,
  slot: 'menuArrow',
  overridesResolver: ({ componentState }) =>
    getPopoverSlotClassNames(componentState).arrow,
})(
  ({
    componentState: { arrowSize, placement, theme: popoverTheme },
    theme: { palette, space },
  }) => {
    const dir = placement.split('-')[0] as keyof typeof ReverseDirectionMap;

    const offset = `${space.padding.md}px`;

    return {
      boxSizing: 'border-box',
      position: 'absolute',
      borderWidth: arrowSize,
      borderStyle: 'solid',
      borderColor: 'transparent',
      color: popoverTheme === 'dark' ? '#4a4a4a' : palette.white,

      [`border${firstUpper(dir)}Color`]: 'currentColor',
      [`border${[ReverseDirectionMap[dir]]}Width`]: 0,
      [dir]: '100%',

      ...(placement === 'top' && {
        left: '50%',
        transform: 'translateX(-50%)',
      }),

      ...(placement === 'top-start' && {
        left: offset,
      }),

      ...(placement === 'top-end' && {
        right: offset,
      }),

      ...(placement === 'bottom' && {
        left: '50%',
        transform: 'translateX(-50%)',
      }),

      ...(placement === 'bottom-start' && {
        left: offset,
      }),

      ...(placement === 'bottom-end' && {
        right: offset,
      }),

      ...(placement === 'left' && {
        top: '50%',
        transform: 'translateY(-50%)',
      }),

      ...(placement === 'left-start' && {
        top: offset,
      }),

      ...(placement === 'left-end' && {
        bottom: offset,
      }),

      ...(placement === 'right' && {
        top: '50%',
        transform: 'translateY(-50%)',
      }),

      ...(placement === 'right-start' && {
        top: offset,
      }),

      ...(placement === 'right-end' && {
        bottom: offset,
      }),
    };
  },
);

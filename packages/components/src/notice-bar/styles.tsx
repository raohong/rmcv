import { animated } from '@react-spring/web';
import { styled } from '@rmc-vant/system';
import { baseStyleReset } from '../_styles';
import { NoticeBarName, getNoticeBarSlotClassNames } from './classNames';
import { NoticeBarComponentState } from './interface';

export const NoticeBarRoot = styled<'div', NoticeBarComponentState>('div', {
  name: NoticeBarName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getNoticeBarSlotClassNames(componentState).root,
})(({ theme, componentState: { wrappable, background, color } }) => ({
  ...baseStyleReset({ theme }),
  display: 'flex',
  alignItems: 'center',
  fontSize: theme.typography.fontSize.md,
  lineHeight: '24px',
  color: color ?? theme.palette.orangeDark,
  background: background ?? theme.palette.orangeLight,
  padding: `${!wrappable ? 0 : theme.space.padding.xs}px ${
    theme.space.padding.md
  }px`,
  height: wrappable ? undefined : 40,
  whiteSpace: wrappable ? 'normal' : 'nowrap',
}));

export const NoticeBarLeftIcon = styled<'span', NoticeBarComponentState>('span', {
  name: NoticeBarName,
  slot: 'leftIcon',
  overridesResolver: ({ componentState }) =>
    getNoticeBarSlotClassNames(componentState).leftIcon,
})(({ componentState: { iconColor } }) => ({
  color: iconColor,
  fontSize: 16,
  minWidth: 24,
  display: 'inline-flex',
  boxSizing: 'border-box',
}));

export const NoticeBarRightIcon = styled<'span', NoticeBarComponentState>('span', {
  name: NoticeBarName,
  slot: 'rightIcon',
  overridesResolver: ({ componentState }) =>
    getNoticeBarSlotClassNames(componentState).rightIcon,
})(({ componentState: { iconColor } }) => ({
  color: iconColor,
  fontSize: 16,
  minWidth: 24,
  display: 'inline-flex',
  boxSizing: 'border-box',
}));

export const NoticeBarWrapper = styled<'div', NoticeBarComponentState>('div')(
  ({ componentState: { wrappable, scrollable } }) => ({
    flex: 1,
    overflow: scrollable || !wrappable ? 'hidden' : undefined,
    boxSizing: 'border-box',
  }),
);

export const NoticeBarContent = styled<typeof animated.div, NoticeBarComponentState>(
  animated.div,
  {
    name: NoticeBarName,
    slot: 'content',
    overridesResolver: ({ componentState }) =>
      getNoticeBarSlotClassNames(componentState).content,
  },
)(({ componentState: { wrappable } }) => ({
  boxSizing: 'border-box',
  overflow: !wrappable ? 'hidden' : undefined,
  textOverflow: !wrappable ? 'ellipsis' : undefined,
}));

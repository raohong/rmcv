import { styled } from '@rmc-vant/system';
import Animation from '../animation';
import { Overlay } from '../overlay';
import { Touchable } from '../touchable';
import { PopupName, getPopupSlotClassNames } from './classNames';
import type {
  PopupComponentState,
  PopupPosition,
  PopupStyleOverrides,
} from './interface';

const getRoundStyle = (position: PopupPosition) => {
  const radius = 16;

  const configs: Record<
    Exclude<PopupPosition, 'none' | 'center'>,
    React.CSSProperties
  > = {
    top: { borderBottomLeftRadius: radius, borderBottomRightRadius: radius },
    bottom: { borderTopLeftRadius: radius, borderTopRightRadius: radius },
    right: { borderTopLeftRadius: radius, borderBottomLeftRadius: radius },
    left: { borderTopRightRadius: radius, borderBottomRightRadius: radius },
  };

  return position === 'none' || position === 'center'
    ? undefined
    : configs[position];
};

export const PopupOverlay = styled<typeof Overlay, PopupComponentState>(Overlay, {
  name: PopupName,
  slot: 'overlay',
  overridesResolver: ({ componentState }) =>
    getPopupSlotClassNames(componentState).overlay,
})();

export const PopupRoot = styled<
  typeof Animation,
  PopupComponentState,
  PopupStyleOverrides
>(Animation, {
  name: PopupName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getPopupSlotClassNames(componentState).root,
})(({ componentState: { position, round, zIndex }, theme }) => ({
  position: 'fixed',
  margin: 0,
  zIndex: zIndex ?? theme.zIndex.popup,
  ...(position === 'bottom' && {
    bottom: 0,
    left: 0,
    right: 0,
  }),
  ...(position === 'left' && {
    bottom: 0,
    left: 0,
    top: 0,
  }),
  ...(position === 'right' && {
    bottom: 0,
    top: 0,
    right: 0,
  }),
  ...(position === 'top' && {
    top: 0,
    left: 0,
    right: 0,
  }),
  ...(position === 'center' && {
    left: '50%',
    top: '50%',
    transform: `translate3d(-50%, -50%, 0)`,
  }),
  ...(position !== 'none' && {
    backgroundColor: theme.palette.background.light,
  }),
  ...(round && getRoundStyle(position)),
}));

const iconMargin = 22;

export const CloseIconRoot = styled<typeof Touchable, PopupComponentState>(
  Touchable,
  {
    name: PopupName,
    slot: 'closeIcon',
    overridesResolver: ({ componentState }) =>
      getPopupSlotClassNames(componentState).closeIcon,
  },
)(({ theme, componentState: { closeIconPosition } }) => ({
  position: 'absolute',
  display: 'flex',
  color: theme.palette.gray500,
  fontSize: 22,
  ...(closeIconPosition === 'top-left' && {
    top: iconMargin,
    left: iconMargin,
  }),
  ...(closeIconPosition === 'top-right' && {
    top: iconMargin,
    right: iconMargin,
  }),
  ...(closeIconPosition === 'bottom-left' && {
    bottom: iconMargin,
    left: iconMargin,
  }),
  ...(closeIconPosition === 'bottom-right' && {
    bottom: iconMargin,
    right: iconMargin,
  }),
}));

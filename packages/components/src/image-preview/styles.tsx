import { animated } from '@react-spring/web';
import { ClearFilled } from '@rmc-vant/icons';
import type { StyledComponent } from '@rmc-vant/system';
import { styled } from '@rmc-vant/system';
import type React from 'react';
import { baseStyleReset } from '../_styles';
import { Image } from '../image';
import { ImagePreviewName, getImagePreviewSlotClassNames } from './classNames';
import type { ImagePreviewComponentState } from './interface';

export const ImagePreviewRoot = styled('div', {
  name: ImagePreviewName,
  slot: 'root',
  overridesResolver: ({ componentState }) =>
    getImagePreviewSlotClassNames(componentState).root,
})(baseStyleReset);

export const ImagePreviewContent = styled('div')({
  position: 'fixed',
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  userSelect: 'none',
  overflow: 'hidden',
  zIndex: 1,
});

export const ImagePreviewOverlay = styled(animated.div)({
  position: 'fixed',
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  userSelect: 'none',
  willChange: 'opacity',
  background: 'rgba(0, 0, 0, 1)',
  zIndex: 1,
}) as StyledComponent<React.ComponentProps<typeof animated.div>>;

export const ImagePreviewHeader = styled(animated.div, {
  name: ImagePreviewName,
  slot: 'header',
  overridesResolver: ({ componentState }) =>
    getImagePreviewSlotClassNames(componentState).header,
})({
  display: 'flex',
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1,
  height: 52,
}) as StyledComponent<
  React.ComponentProps<typeof animated.div> & {
    componentState: ImagePreviewComponentState;
  }
>;

export const ImagePreviewIndex = styled('span', {
  name: ImagePreviewName,
  slot: 'index',
  overridesResolver: ({ componentState }) =>
    getImagePreviewSlotClassNames(componentState).index,
})(({ theme }) => ({
  color: theme.palette.white,
  fontSize: theme.typography.fontSize.md,
  lineHeight: theme.typography.lineHeights.md,
  textShadow: `0 1px 1px ${theme.palette.gray800}`,
}));

const AnimatedClearFilled = animated(ClearFilled);

export const ImagePreviewCloseIcon = styled<
  typeof AnimatedClearFilled,
  ImagePreviewComponentState
>(AnimatedClearFilled, {
  name: ImagePreviewName,
  slot: 'closeIcon',
  overridesResolver: ({ componentState }) =>
    getImagePreviewSlotClassNames(componentState).closeIcon,
})(({ theme }) => ({
  position: 'absolute',
  top: theme.space.padding.md,
  right: theme.space.padding.md,
  zIndex: 1,
  fontSize: 22,
  color: theme.palette.gray500,
}));

export const ImagePreviewList = styled(animated.div)({
  display: 'flex',
  overflow: 'hidden',
  height: '100%',
}) as StyledComponent<React.ComponentProps<typeof animated.div>>;

export const StyledImagePreviewItem = styled<'div', ImagePreviewComponentState>(
  'div',
  {
    slot: 'item',
    overridesResolver: ({ componentState }) =>
      getImagePreviewSlotClassNames(componentState).item,
  },
)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100%',
  touchAction: 'none',
  userSelect: 'none',
});

export const ImagePreviewItemContainer = styled(animated.div)({
  transformOrigin: 'center',
  willChange: 'transform',
  width: '100%',
}) as StyledComponent<React.ComponentProps<typeof animated.div>>;

export const ImagePreviewItemImage = styled<
  typeof Image,
  ImagePreviewComponentState
>(Image, {
  slot: 'image',
  overridesResolver: ({ componentState }) =>
    getImagePreviewSlotClassNames(componentState).image,
})({
  display: 'block',
  img: {
    height: 'auto',
  },
});

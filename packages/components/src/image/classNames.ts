import { generateComponentClassNameUtility } from '@rmc-vant/system';
import { camelCase } from '@rmc-vant/utils';
import type { ImageComponentState, ImageNSlot, ImageSlot } from './interface';

export const ImageName = 'Image';

export const {
  imageClassNames,
  composeImageSlotClassNames,
  getImageSlotClassNames,
} = generateComponentClassNameUtility<
  typeof ImageName,
  ImageComponentState,
  ImageSlot,
  ImageNSlot
>(
  ImageName,
  {
    root: true,
    statusError: true,
    statusLoading: true,
    placeholder: true,
    img: true,
    errorIcon: true,
    loadingIcon: true,
  },
  ({ round, status }: ImageComponentState) => ({
    root: ['root', round && 'round', camelCase(`status-${status}`)],
    placeholder: ['placeholder'],
    img: ['img'],
    errorIcon: ['errorIcon'],
    loadingIcon: ['loadingIcon'],
  }),
);

import { generateComponentClassNameUtility } from '@rmc-vant/system';
import type { ImagePreviewNSlot, ImagePreviewSlot } from './interface';

export const ImagePreviewName = 'ImagePreview';

export const {
  imagePreviewClassNames,
  composeImagePreviewSlotClassNames,
  getImagePreviewSlotClassNames,
} = generateComponentClassNameUtility<
  typeof ImagePreviewName,
  object,
  ImagePreviewSlot,
  ImagePreviewNSlot
>(
  ImagePreviewName,
  {
    root: true,
    header: true,
    index: true,
    item: true,
    image: true,
    closeIcon: true,
  },
  () => ({
    root: ['root'],
    header: ['header'],
    index: ['index'],
    item: ['item'],
    image: ['image'],
    closeIcon: ['closeIcon'],
  }),
);

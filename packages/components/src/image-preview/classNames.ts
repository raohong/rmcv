import { generateComponentClassNameUtility } from '@rmc-vant/system';
import type { ImagePreviewNSlot, ImagePreviewSlot } from './interface';

export const ImagePreviewName = 'ImagePreview';

export const {
  imagePreviewClassNames,
  composeImagePreviewSlotClassNames,
  getImagePreviewSlotClassNames,
} = generateComponentClassNameUtility<
  typeof ImagePreviewName,
  {},
  ImagePreviewSlot,
  ImagePreviewNSlot
>(
  ImagePreviewName,
  {
    root: true,
    header: true,
    index: true,
  },
  () => ({
    root: ['root'],
    header: ['header'],
    index: ['index'],
  }),
);

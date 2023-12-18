import _ImagePreview from './ImagePreview';
import useImagePreview from './useImagePreview';

export type {
  ImagePreviewProps,
  ImagePreviewOptions,
  ImagePreviewApiRef,
} from './interface';

type ImagePreviewType = typeof _ImagePreview;

export interface ImagePreviewInterface extends ImagePreviewType {
  useImagePreview: typeof useImagePreview;
}

const ImagePreview = _ImagePreview as ImagePreviewInterface;

ImagePreview.useImagePreview = useImagePreview;

export default ImagePreview;

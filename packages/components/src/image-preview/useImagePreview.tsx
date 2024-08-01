import { compose, isArray, omit } from '@rmc-vant/utils';
import { useState } from 'react';
import ImagePreview from './ImagePreview';
import type { ImagePreviewOptions } from './interface';

const useImagePreview = () => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);
  const [options, setOptions] = useState<Omit<ImagePreviewOptions, 'images'>>({});

  const { onChange, onClose, ...rest } = omit(options, [
    'activeIndex',
    'visible',
    'images',
  ]);

  const handleClose = () => {
    setOpen(false);
    onClose?.({ index: activeIndex, url: images[activeIndex] });
  };

  const apiRef = {
    close: handleClose,
    open: (options: string[] | ImagePreviewOptions) => {
      setOpen(true);
      setImages(isArray(options) ? options : (options.images ?? []));

      if (isArray(options)) {
        setActiveIndex(0);
        setImages(options);
      }
      else {
        setActiveIndex(options.defaultActiveIndex ?? 0);
        setOptions(omit(options, ['images']));
        setImages(options.images ?? []);
      }
    },
    swipeTo: (index: number) => {
      setActiveIndex(index);
    },
  };

  const holder = (
    <ImagePreview
      activeIndex={activeIndex}
      onChange={compose(setActiveIndex, onChange)}
      open={open}
      images={images}
      onClose={handleClose}
      {...rest}
    />
  );

  return [apiRef, holder] as const;
};

export default useImagePreview;

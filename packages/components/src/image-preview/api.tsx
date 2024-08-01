import React, { createRef, useImperativeHandle } from 'react';
import { reactRender } from '../_utils';
import type { ImagePreviewApiRef, ImagePreviewOptions } from './interface';
import useImagePreview from './useImagePreview';

let container: HTMLDivElement | undefined;

let instance: null | { current: ImagePreviewApiRef | null };

const ApiWrapper = React.forwardRef<ImagePreviewApiRef, unknown>((_props, ref) => {
  const [apiRef, holder] = useImagePreview();

  useImperativeHandle(ref, () => apiRef);

  return <>{holder}</>;
});

export const showImagePreview = (options: ImagePreviewOptions) => {
  if (instance?.current) {
    instance.current.open(options);

    return;
  }

  if (!container) {
    container = document.createElement('div');
    document.body.appendChild(container);
  }

  if (!instance) {
    // eslint-disable-next-line react/no-create-ref
    instance = createRef();
    reactRender(<ApiWrapper ref={instance} />, container!);
  }

  setTimeout(() => {
    if (instance?.current) {
      instance.current.open(options);
    }
  }, 0);
};

export const closeImagePreview = () => {
  if (instance?.current) {
    instance.current.close();
  }
};

export const imagePreviewSwipeTo = (index: number) => {
  if (instance?.current) {
    instance.current.swipeTo(index);
  }
};

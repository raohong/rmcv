import { compose, isArray, isBrowser, omit } from '@rmc-vant/utils';
import React, { useImperativeHandle, useState } from 'react';
// eslint-disable-next-line camelcase
import { render, unstable_batchedUpdates } from 'react-dom';
import { ConfigProvider, getGlobalConfig } from '../config-provider';
import ImagePreviewComponent from './ImagePreview';
import type {
  ImagePreviewInstance,
  ImagePreviewOptions,
  ImagePreviewWrapperData,
  ImagePreviewWrapperRef,
} from './interface';

let container: HTMLElement | null = null;
let wrapperRef: React.RefObject<ImagePreviewWrapperRef> | null = null;

const ImagePreviewWrapper = React.forwardRef<
  ImagePreviewWrapperRef,
  ImagePreviewWrapperData
>(({ children, ...props }, ref) => {
  const [visible, setVisible] = useState(true);
  const [data, setData] = useState(omit(props, ['activeIndex', 'visible']));
  const [activeIndex, setActiveIndex] = useState(props.defaultActiveIndex ?? 0);

  const { onChange, onClose, ...rest } = data;

  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };

  useImperativeHandle(ref, () => ({
    close: handleClose,
    open: () => {
      setVisible(true);
    },
    swipeTo: (index: number) => {
      setActiveIndex(index);
    },
    updateData: (nextData: ImagePreviewWrapperData) => {
      unstable_batchedUpdates(() => {
        setData(omit(nextData, ['activeIndex', 'visible']));
        setVisible(true);
        setActiveIndex(nextData.defaultActiveIndex ?? 0);
      });
    },
  }));

  return (
    <ConfigProvider {...getGlobalConfig()}>
      <ImagePreviewComponent
        activeIndex={activeIndex}
        onChange={compose(setActiveIndex, onChange)}
        visible={visible}
        onClose={handleClose}
        {...rest}
      />
    </ConfigProvider>
  );
});

function ImagePreview(images: string[]): React.RefObject<ImagePreviewInstance>;
function ImagePreview(
  options: ImagePreviewOptions,
): React.RefObject<ImagePreviewInstance>;
function ImagePreview(
  options: ImagePreviewOptions | string[],
): React.RefObject<ImagePreviewInstance> {
  const internalOptions = omit(isArray(options) ? { images: options } : options, [
    'children',
    'activeIndex',
    'visible',
  ]);
  const instanceRef: React.RefObject<ImagePreviewInstance> = {
    current: null,
  };

  if (!isBrowser) {
    return instanceRef;
  }

  if (!container) {
    container = document.createElement('div');
    document.body.appendChild(container);
  }

  if (!wrapperRef?.current) {
    wrapperRef = {
      current: null,
    };

    // todo 改为异步

    render(
      <ImagePreviewWrapper {...internalOptions} ref={wrapperRef} />,
      container!,
    );
  } else {
    wrapperRef.current.updateData(internalOptions);
  }

  return {
    current: {
      close: wrapperRef.current!.close,
      swipeTo: wrapperRef.current!.swipeTo,
    },
  } as React.RefObject<ImagePreviewInstance>;
}

export default ImagePreview;

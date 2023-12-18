import { useMergeRefs } from '@rmc-vant/hooks';
import clsx from 'clsx';
import React, { memo, useEffect, useMemo, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useThemeProps } from '../config-provider';
import { ImageName, composeImageSlotClassNames } from './classNames';
import { ImageComponentState, ImageLoadStatus, ImageProps } from './interface';
import {
  ImagePlaceholder,
  ImageRoot,
  StyledImageErrorIcon,
  StyledImageImg,
  StyledImageLoadingIcon,
} from './styles';

const Image = React.forwardRef<HTMLDivElement, ImageProps>((props, ref) => {
  const {
    className,
    style,
    src,
    srcSet,
    height,
    radius,
    errorIcon,
    loadingIcon,
    lazyLoad,
    alt,
    onLoad,
    onError,
    position,
    classNames,
    imgRef,
    block = false,
    round = false,
    showError = true,
    showLoading = true,
    fit,
    width = '100%',
    ...rest
  } = useThemeProps(ImageName, props);

  const [status, setStatus] = useState<ImageLoadStatus>(ImageLoadStatus.NONE);
  const [inited, setInited] = useState(() => !lazyLoad);
  const { inView, ref: intersectionObserverRef } = useInView();
  const internalRef = useMergeRefs(ref, lazyLoad ? intersectionObserverRef : null);

  useEffect(() => {
    if (!inited && inView && lazyLoad) {
      setInited(true);
      setStatus(ImageLoadStatus.LOADING);
    }
  }, [inView, inited, lazyLoad]);

  const handleLoadError: React.ReactEventHandler<HTMLImageElement> = (evt) => {
    setStatus(ImageLoadStatus.ERROR);
    onError?.(evt);
  };

  const handleLoadSuccess: React.ReactEventHandler<HTMLImageElement> = (evt) => {
    setStatus(ImageLoadStatus.NONE);
    onLoad?.(evt);
  };

  const componentState: ImageComponentState = useMemo(
    () => ({
      round,
      position,
      block,
      fit,
      status,
    }),
    [round, position, block, fit, status],
  );

  const slotClassNames = composeImageSlotClassNames(componentState, classNames);

  const getImageProps = () => {
    if (!inited && lazyLoad) {
      return {
        'data-src': src,
        'data-srcset': srcSet,
      };
    }

    return {
      src,
      srcSet,
    };
  };

  const renderPlaceholder = () => {
    if (status === ImageLoadStatus.LOADING && showLoading) {
      return (
        <ImagePlaceholder
          componentState={componentState}
          className={slotClassNames.placeholder}
        >
          {loadingIcon ?? (
            <StyledImageLoadingIcon
              className={slotClassNames.loadingIcon}
              componentState={componentState}
            />
          )}
        </ImagePlaceholder>
      );
    }

    if (status === ImageLoadStatus.ERROR && showError) {
      return (
        <ImagePlaceholder
          title={alt}
          componentState={componentState}
          className={slotClassNames.placeholder}
        >
          {errorIcon ?? (
            <StyledImageErrorIcon
              className={slotClassNames.errorIcon}
              componentState={componentState}
            />
          )}
        </ImagePlaceholder>
      );
    }

    return null;
  };

  return (
    <ImageRoot
      className={clsx(slotClassNames.root, className)}
      style={{
        ...style,
        width,
        height,
        borderRadius: radius,
      }}
      ref={internalRef}
      componentState={componentState}
      {...rest}
    >
      <StyledImageImg
        className={slotClassNames.img}
        alt={showError ? '' : alt}
        onError={handleLoadError}
        onLoad={handleLoadSuccess}
        draggable={false}
        componentState={componentState}
        ref={imgRef}
        {...getImageProps()}
      />
      {status !== ImageLoadStatus.NONE && renderPlaceholder()}
    </ImageRoot>
  );
});

export default memo(Image);

import React, { memo, useState } from 'react';
import classNames from 'classnames';
import Icon from '@rmc-vant/icons';
import { useInView } from 'react-intersection-observer';
import { useConfigContext } from '../config-provider';
import { useMergeRefs, useUpdateEffect, useValueRef } from '../_hooks';
import { ImageLoadErrorIcon, ImageLoadingIcon } from './imageIcons';

// eslint-disable-next-line no-shadow
enum ImageLoadSatus {
  LOADING = 'loading',
  ERROR = 'error',
  NONE = 'none',
}

export type ImageProps = {
  /**
   * @description 图片链接
   */
  src?: string;
  /**
   * @description 图片 srcSet
   */
  srcSet?: string;
  /**
   * @description 图片 alt
   */
  alt?: string;
  /**
   * @description 图片裁剪模式 ， 详情见 https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit
   */
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  height: string | number;
  width?: string | number;
  /**
   * @description 是否是圆形
   */
  radius?: number | string;
  /**
   * @description 图片 borderRadius
   */
  round?: boolean;
  /**
   * @description 是否开启 lazyLoad
   */
  lazyLoad?: boolean;
  /**
   * @description 是否显示 loading
   */
  showLoading?: boolean;
  /**
   * @description 是否显示加载错误
   */
  showError?: boolean;
  errorIcon?: React.ReactNode;
  loadingIcon?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const Image = React.forwardRef<HTMLDivElement, ImageProps>(
  (
    {
      className,
      style,
      src,
      srcSet,
      height,
      radius,
      round,
      errorIcon,
      loadingIcon,
      lazyLoad,
      alt,
      onLoad,
      onError,
      showError = true,
      showLoading = true,
      fit = 'none',
      width = '100%',
      ...rest
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
    const [status, setStatus] = useState(
      lazyLoad ? ImageLoadSatus.NONE : ImageLoadSatus.LOADING,
    );
    const [inited, setInited] = useState(() => !lazyLoad);
    const { inView, ref: intersectionObserverRef } = useInView();
    const internalRef = useMergeRefs(
      ref,
      lazyLoad ? intersectionObserverRef : null,
    );
    const inViewRef = useValueRef(inView);
    const lazyLoadRef = useValueRef(lazyLoad);
    const initedRef = useValueRef(inited);

    const internalSrc = src ?? srcSet;
    const basCls = getPrefixCls('image');

    useUpdateEffect(() => {
      if (lazyLoadRef.current) {
        // src 改变 lazyLoad 且不在视口且已经初始化 那么设置 inited: false
        if (!inViewRef.current && initedRef.current) {
          setInited(false);
          // 在视口中改变一律设置为加载状态
        } else if (inViewRef.current) {
          setInited(true);
          setStatus(ImageLoadSatus.LOADING);
        }
      } else {
        setInited(true);
        setStatus(ImageLoadSatus.LOADING);
      }
    }, [internalSrc, inViewRef, lazyLoadRef, initedRef]);

    useUpdateEffect(() => {
      if (!inited && inView) {
        setInited(true);
        setStatus(ImageLoadSatus.LOADING);
      }
    }, [inView, inited]);

    const handleLoadError: React.ReactEventHandler<HTMLImageElement> = (
      evt,
    ) => {
      setStatus(ImageLoadSatus.ERROR);
      onError?.(evt);
    };

    const handleLoadSuccess: React.ReactEventHandler<HTMLImageElement> = (
      evt,
    ) => {
      setStatus(ImageLoadSatus.NONE);
      onLoad?.(evt);
    };

    const getImageProps = () => {
      if (!inited) {
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
      const placeholderCls = `${basCls}-placeholder`;

      if (status === ImageLoadSatus.LOADING && showLoading) {
        return (
          <div className={placeholderCls}>
            {loadingIcon ?? (
              <Icon
                component={ImageLoadingIcon}
                className={`${basCls}-loading-icon`}
              />
            )}
          </div>
        );
      }

      if (status === ImageLoadSatus.ERROR && showError) {
        <div className={placeholderCls}>
          {errorIcon ?? (
            <Icon
              component={ImageLoadErrorIcon}
              className={`${basCls}-error-icon`}
            />
          )}
        </div>;
      }

      return null;
    };

    return (
      <div
        className={classNames(
          basCls,
          {
            [`${basCls}-round`]: round,
            [`${basCls}-${fit}`]: fit !== 'none',
          },
          className,
        )}
        style={{
          ...style,
          width,
          height,
          borderRadius: radius,
        }}
        ref={internalRef}
        {...rest}
      >
        <img
          className={`${basCls}-img`}
          alt={alt}
          onError={handleLoadError}
          onLoad={handleLoadSuccess}
          {...getImageProps()}
        />
        {status !== ImageLoadSatus.NONE && renderPlaceholder()}
      </div>
    );
  },
);

export default memo(Image);

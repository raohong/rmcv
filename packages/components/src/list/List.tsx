import React, { useImperativeHandle, useRef } from 'react';
import classNames from 'classnames';
import { useConfigContext } from '../config-provider';
import {
  useControllableValue,
  useEventListener,
  useIsomorphicLayoutEffect,
  usePersistFn,
  useScrollParent,
  useUnmountedRef,
} from '../_hooks';
import Loading from '../loading';
import { ListLoadingStatus } from './constants';
import type { ListRef, ListProps } from './type';
import {
  getBoundingClientRect,
  getScrollOffset,
  getScrollSize,
  omit,
} from '../_utils';

const List = React.forwardRef<ListRef, ListProps>((props, ref) => {
  const {
    children,
    className,
    onLoad,
    renderLoading,
    renderErrror,
    renderFinished,
    autoSetStatusOnLoad,
    loadingText = '加载中',
    errorText = '加载失败，点击重试',
    finishedText = '记载完成',
    offset = 300,
    immediateCheck = true,
    disableOnFinished = true,
    ...rest
  } = props;
  const [loadingStatus, setLoadingStatus] =
    useControllableValue<ListLoadingStatus>(props, {
      trigger: 'onLoadingStatusChange',
      valuePropName: 'loadingStatus',
      defaultValue: ListLoadingStatus.NONE,
    });
  const { getPrefixCls } = useConfigContext();
  const domRef = useRef<HTMLDivElement>(null);
  const checked = useRef(false);
  const unmountedRef = useUnmountedRef();
  const scrollableContainer = useScrollParent(domRef.current);

  const resolveLoad = usePersistFn(async () => {
    if (loadingStatus === ListLoadingStatus.LOADING) {
      return;
    }

    if (!autoSetStatusOnLoad) {
      onLoad?.();

      return;
    }

    try {
      setLoadingStatus(ListLoadingStatus.LOADING);
      const result = await onLoad?.();
      if (!unmountedRef.current) {
        setLoadingStatus(
          result === true ? ListLoadingStatus.FINISHED : ListLoadingStatus.NONE,
        );
      }
    } catch (err) {
      if (!unmountedRef.current) {
        setLoadingStatus(ListLoadingStatus.ERROR);
      }
    }
  });

  const check = usePersistFn(() => {
    if (!scrollableContainer) {
      return;
    }

    const { scrollTop } = getScrollOffset(scrollableContainer);
    const { scrollHeight } = getScrollSize(scrollableContainer);
    const { height } = getBoundingClientRect(scrollableContainer);

    if (scrollTop + offset + height >= scrollHeight) {
      resolveLoad();
    }
  });

  useEventListener('scroll', check, {
    target: scrollableContainer,
  });

  useIsomorphicLayoutEffect(() => {
    if (!checked.current && scrollableContainer && immediateCheck) {
      checked.current = true;

      check();
    }
  }, [scrollableContainer, check, immediateCheck]);

  useImperativeHandle(ref, () => ({
    check,
  }));

  const clickable =
    (loadingStatus === ListLoadingStatus.FINISHED && !disableOnFinished) ||
    loadingStatus === ListLoadingStatus.ERROR;

  const renderContent = () => {
    let content: React.ReactNode;

    switch (loadingStatus) {
      case ListLoadingStatus.LOADING:
        content = renderLoading ? (
          renderLoading()
        ) : (
          <Loading className={getPrefixCls('list-loading-icon')}>
            {loadingText}
          </Loading>
        );
        break;
      case ListLoadingStatus.ERROR:
        content = renderErrror ? renderErrror() : errorText;
        break;
      case ListLoadingStatus.FINISHED:
        content = renderFinished ? renderFinished() : finishedText;
        break;
      default:
        content = null;
    }

    return content === null ? null : (
      <div
        onClick={clickable ? resolveLoad : undefined}
        role={clickable ? 'button' : undefined}
        className={classNames(getPrefixCls('list-text'), {
          [getPrefixCls(`list-${loadingStatus}-text`)]:
            loadingStatus !== ListLoadingStatus.NONE,
        })}
      >
        {content}
      </div>
    );
  };

  return (
    <div
      ref={domRef}
      className={classNames(getPrefixCls('list'), className)}
      {...omit(rest, ['loadingStatus', 'onLoadingStatusChange'])}
    >
      {children}
      {renderContent()}
    </div>
  );
});

export default List;

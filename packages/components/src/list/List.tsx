'use-client';

import {
  useControllableValue,
  useEventCallback,
  useMeasure,
  useUnmountedRef,
} from '@rmc-vant/hooks';
import {
  getBoundingClientRect,
  getNodeScroll,
  getNodeScrollSize,
  getScrollParents,
  omit,
} from '@rmc-vant/utils';
import clsx from 'clsx';
import React, {
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useThemeProps } from '../config-provider';
import { ListName, composeListSlotClassNames } from './classNames';
import type {
  ListComponentState,
  ListProps,
  ListRef,
} from './interface';
import {
  ListLoadingStatus,
} from './interface';
import { ListLoadingIcon, ListRoot, ListText } from './styles';

const List = React.forwardRef<ListRef, ListProps>((props, ref) => {
  const {
    children,
    className,
    onLoad,
    renderLoading,
    renderError,
    renderFinished,
    classNames,
    autoSetStatusOnLoad,
    loadingText = '加载中',
    errorText = '加载失败，点击重试',
    finishedText = '记载完成',
    offset = 300,
    immediateCheck = true,
    disableOnFinished = true,
    ...rest
  } = useThemeProps(ListName, props);

  const [loadingStatus, setLoadingStatus] = useControllableValue(props, {
    trigger: 'onLoadingStatusChange',
    valuePropName: 'loadingStatus',
    defaultValue: ListLoadingStatus.NONE,
  });
  const domRef = useRef<HTMLDivElement>(null);
  const {
    data: { width },
  } = useMeasure({ ref: domRef });
  const [checked, setChecked] = useState(false);
  const unmountedRef = useUnmountedRef();

  const resolveLoad = async () => {
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
    }
    catch {
      if (!unmountedRef.current) {
        setLoadingStatus(ListLoadingStatus.ERROR);
      }
    }
  };

  const sync = useEventCallback((target?: Window | Element | null) => {
    if (!target) {
      return;
    }

    const { scrollTop } = getNodeScroll(target);
    const { scrollHeight } = getNodeScrollSize(target);
    const { height } = getBoundingClientRect(target);

    if (scrollTop + offset + height >= scrollHeight) {
      resolveLoad();

      return true;
    }
  });

  useEffect(() => {
    const parents = getScrollParents(domRef.current!);

    const handler = (evt: Event) => {
      // @ts-ignore
      sync(evt.target);
    };

    parents.forEach((elem) => {
      elem.addEventListener('scroll', handler);
    });

    return () => {
      parents.forEach((elem) => {
        elem.removeEventListener('scroll', handler);
      });
    };
  }, [domRef, sync]);

  useEffect(() => {
    if (!checked && domRef.current && width > 0 && immediateCheck) {
      const parents = getScrollParents(domRef.current!);

      setChecked(true);
      sync();

      parents.some(sync);
    }
  }, [sync, immediateCheck, checked, width]);

  useImperativeHandle(ref, () => ({
    sync,
  }));

  const clickable
    = (loadingStatus === ListLoadingStatus.FINISHED && !disableOnFinished)
    || loadingStatus === ListLoadingStatus.ERROR;

  const componentState: ListComponentState = useMemo(
    () => ({
      status: loadingStatus,
    }),
    [loadingStatus],
  );
  const slotClassNames = composeListSlotClassNames(componentState, classNames);

  const renderContent = () => {
    let content: React.ReactNode;

    switch (loadingStatus) {
      case ListLoadingStatus.LOADING:
        content = renderLoading
          ? (
              renderLoading()
            )
          : (
              <ListLoadingIcon
                componentState={componentState}
                className={slotClassNames.loadingIcon}
              >
                {loadingText}
              </ListLoadingIcon>
            );
        break;
      case ListLoadingStatus.ERROR:
        content = renderError ? renderError() : errorText;
        break;
      case ListLoadingStatus.FINISHED:
        content = renderFinished ? renderFinished() : finishedText;
        break;
      default:
        content = null;
    }

    return (
      <ListText
        componentState={componentState}
        onClick={clickable ? resolveLoad : undefined}
        role={clickable ? 'button' : undefined}
        className={slotClassNames.text}
        tabIndex={clickable ? undefined : -1}
      >
        {content}
      </ListText>
    );
  };

  return (
    <ListRoot
      ref={domRef}
      className={clsx(slotClassNames.root, className)}
      {...omit(rest, ['loadingStatus', 'onLoadingStatusChange'])}
      componentState={componentState}
    >
      {children}
      {renderContent()}
    </ListRoot>
  );
});

export default List;

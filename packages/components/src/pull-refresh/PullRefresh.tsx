'use-client';

import { useSpring } from '@react-spring/web';
import {
  useInterval,
  useMeasure,
  useScrollParent,
  useUnmountedRef,
  useUpdateEffect,
} from '@rmc-vant/hooks';
import { getNodeScroll, isCloseTo, isNumber } from '@rmc-vant/utils';
import { rubberbandIfOutOfBounds, useDrag } from '@use-gesture/react';
import clsx from 'clsx';
import React, { useImperativeHandle, useMemo, useRef, useState } from 'react';
import { useThemeProps } from '../config-provider';
import { PullRefreshName, composePullRefreshSlotClassNames } from './classNames';
import type {
  PullRefreshComponentState,
  PullRefreshProps,
  PullRefreshRef,
  PullRefreshRenderParams,
} from './interface';
import {
  PullRefreshState,
} from './interface';
import {
  PullRefreshContent,
  PullRefreshHeader,
  PullRefreshHeaderLoading,
  PullRefreshHeaderText,
  PullRefreshPullDistanceMeasurer,
  PullRefreshRoot,
} from './styles';

const PullRefresh = React.forwardRef<PullRefreshRef, PullRefreshProps>(
  (props, ref) => {
    const {
      renderLoading,
      renderLoosing,
      renderNormal,
      renderPulling,
      renderSuccess,
      onRefresh,
      className,
      children,
      contentClassName,
      classNames,
      pullDistance,
      headerHeight = 50,
      disabled = false,
      pullingText = '下拉即可刷新',
      loosingText = '释放即可刷新',
      loadingText = '加载中...',
      successText = '加载成功',
      successDuration = 500,
      ...rest
    } = useThemeProps(PullRefreshName, props);

    const {
      setRef: setDistanceRef,
      data: { height: pullDistanceInPX },
    } = useMeasure();
    const {
      setRef: setHeaderRef,
      data: { height: h },
    } = useMeasure();
    const domRef = useRef<HTMLDivElement>(null);
    const scrollableParent = useScrollParent(domRef);
    const [refreshState, setRefreshState] = useState<PullRefreshState>(
      PullRefreshState.NORMAL,
    );
    const [{ y }, ctrl] = useSpring({ y: 0 }, []);
    const { start: setSuccessTimer } = useInterval(
      () => {
        setRefreshState(PullRefreshState.NORMAL);
      },
      { interval: successDuration },
    );
    const unmountedRef = useUnmountedRef();
    const lastDragState = useRef<{ velocity: number } | null>(null);

    const componentState: PullRefreshComponentState = useMemo(
      () => ({
        disabled,
        refreshState,
      }),
      [disabled, refreshState],
    );

    const slotClassNames = composePullRefreshSlotClassNames(
      componentState,
      classNames,
    );

    const renderText = (text: React.ReactNode) => (
      <PullRefreshHeaderText
        className={slotClassNames.headerText}
        componentState={componentState}
      >
        {text}
      </PullRefreshHeaderText>
    );
    const renderHeader = () => {
      const progress = y.to(val => val / pullDistanceInPX);
      const params: PullRefreshRenderParams = {
        value: y,
        progress,
        headerHeight: h,
        pullDistance: pullDistanceInPX,
      };

      switch (refreshState) {
        case PullRefreshState.LOADING:
          return renderLoading
            ? (
                renderLoading(params)
              )
            : (
                <PullRefreshHeaderLoading
                  componentState={componentState}
                  className={slotClassNames.headerLoading}
                >
                  {loadingText}
                </PullRefreshHeaderLoading>
              );
        case PullRefreshState.SUCCESS:
          return renderSuccess ? renderSuccess() : renderText(successText);
        case PullRefreshState.LOOSING:
          return renderLoosing ? renderLoosing(params) : renderText(loosingText);
        case PullRefreshState.PULLING:
          return renderPulling ? renderPulling?.(params) : renderText(pullingText);
        default:
          return renderNormal ? renderNormal() : null;
      }
    };

    const handleRefresh = async () => {
      try {
        await onRefresh?.();
        if (!unmountedRef.current) {
          setRefreshState(PullRefreshState.SUCCESS);
          setSuccessTimer();
        }
      }
      catch {
        if (!unmountedRef.current) {
          setRefreshState(PullRefreshState.NORMAL);
        }
      }
    };

    useUpdateEffect(() => {
      if (
        h > 0
        && (refreshState === PullRefreshState.LOADING
        || refreshState === PullRefreshState.NORMAL)
      ) {
        const dest = refreshState === PullRefreshState.NORMAL ? 0 : h;

        if (dest !== y.get()) {
          ctrl.start({
            y: dest,
            config: {
              velocity: lastDragState.current?.velocity ?? 0,
            },
          });

          lastDragState.current = null;
        }
      }
    }, [refreshState, h, ctrl, y]);

    useImperativeHandle(ref, () => ({
      startRefresh() {
        setRefreshState(PullRefreshState.LOADING);
        handleRefresh();
      },
      stopRefresh() {
        setRefreshState(PullRefreshState.NORMAL);
      },
    }));

    useDrag(
      ({
        event,
        first,
        last,
        cancel,
        canceled,
        delta,
        offset,
        xy,
        velocity,
        direction,
        memo = { enabled: false, value: 0 },
      }) => {
        if (canceled || !scrollableParent) {
          return undefined;
        }

        if (first) {
          if (domRef.current) {
            if (!isCloseTo(getNodeScroll(scrollableParent).scrollTop)) {
              cancel();
            }
          }
          return undefined;
        }

        const previousY = xy[1] - delta[1];
        const dragState = memo as { enabled: boolean; value: number };
        const vy = direction[1] * velocity[1];

        if (refreshState === PullRefreshState.NORMAL && delta[1] > 0) {
          if (delta[1] > 0) {
            const { scrollTop } = getNodeScroll(scrollableParent);

            if (scrollTop === 0) {
              dragState.enabled = true;
              dragState.value = previousY;
            }
          }
          else {
            return undefined;
          }
        }

        const max = h * 1.8;
        const my = xy[1] - dragState.value;
        const prevent = () => {
          event.preventDefault();
          event.stopPropagation();
        };

        if (!dragState.enabled) {
          if (
            refreshState === PullRefreshState.LOADING
            || refreshState === PullRefreshState.SUCCESS
          ) {
            if (!last) {
              ctrl.set({ y: rubberbandIfOutOfBounds(offset[1], 0, max) });
            }
            else {
              ctrl.start({
                // Loading 状态只有想下拉超过 0.5h 才恢复
                y:
                  refreshState === PullRefreshState.LOADING && offset[1] >= h * 0.5
                    ? h
                    : 0,
                config: {
                  velocity: vy,
                },
              });
            }

            prevent();
          }
          return undefined;
        }

        let nextState: PullRefreshState = refreshState;

        prevent();

        if (last) {
          if (refreshState === PullRefreshState.LOOSING) {
            nextState = PullRefreshState.LOADING;
          }
          else if (refreshState === PullRefreshState.PULLING) {
            nextState = PullRefreshState.NORMAL;
          }
        }
        else if (
          refreshState === PullRefreshState.NORMAL
          || refreshState === PullRefreshState.PULLING
          || refreshState === PullRefreshState.LOOSING
        ) {
          nextState
            = my >= pullDistanceInPX
              ? PullRefreshState.LOOSING
              : PullRefreshState.PULLING;
        }

        if (!last) {
          ctrl.set({ y: rubberbandIfOutOfBounds(my, 0, max) });
        }
        else {
          lastDragState.current = { velocity: vy };
        }

        if (nextState !== refreshState) {
          setRefreshState(nextState);

          if (nextState === PullRefreshState.LOADING) {
            handleRefresh();
          }
        }

        return dragState;
      },
      {
        target: domRef,
        axis: 'y',
        from: () => [0, y.get()],
        pointer: {
          touch: true,
        },
        eventOptions: {
          passive: false,
        },
      },
    );

    return (
      <PullRefreshRoot
        className={clsx(slotClassNames.root, className)}
        {...rest}
        componentState={componentState}
      >
        <PullRefreshContent
          style={{
            y,
            touchAction: refreshState !== PullRefreshState.NORMAL ? 'none' : '',
          }}
          ref={domRef}
          componentState={componentState}
          className={clsx(slotClassNames.content, contentClassName)}
        >
          <PullRefreshPullDistanceMeasurer
            ref={setDistanceRef}
            style={{ height: pullDistance || headerHeight }}
          />
          {refreshState !== PullRefreshState.NORMAL && (
            <PullRefreshHeader
              componentState={componentState}
              ref={setHeaderRef}
              className={slotClassNames.header}
              style={{
                height: headerHeight,
                marginTop: `calc(-1 * ${
                  isNumber(headerHeight) ? `${headerHeight}px` : headerHeight
                })`,
              }}
            >
              {renderHeader()}
            </PullRefreshHeader>
          )}
          {children}
        </PullRefreshContent>
      </PullRefreshRoot>
    );
  },
);

export default PullRefresh;

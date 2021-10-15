import { useSpring, animated } from '@react-spring/web';
import React, { useImperativeHandle, useRef, useState } from 'react';
import classNames from 'classnames';
import { rubberbandIfOutOfBounds, useDrag } from 'react-use-gesture';
import { useConfigContext } from '../config-provider';
import Loading from '../loading';
import {
  useInterval,
  useMeasure,
  useScrollParent,
  useUnmountedRef,
  useUpdateEffect,
} from '../_hooks';
import { getScrollOffset } from '../_utils';
import type {
  PullRefreshRef,
  PullRefreshProps,
  PullRefreshRenderParams,
} from './type';

// eslint-disable-next-line no-shadow
enum RefreshState {
  NORMAL,
  PULLING,
  LOOSING,
  LOADING,
  SUCCESS,
}

const PullRefresh = React.forwardRef<PullRefreshRef, PullRefreshProps>(
  (
    {
      pullDistance,
      renderLoading,
      renderLoosing,
      renderNormal,
      renderPulling,
      renderSuccess,
      onRefresh,
      className,
      children,
      contentClassName,
      headHeight,
      pullingText = '下拉即可刷新',
      loosingText = '释放即可刷新',
      loadingText = '加载中...',
      successText = '加载成功',
      successDuration = 4000,
      ...rest
    },
    ref,
  ) => {
    const {
      setRef: setDistanceRef,
      data: { height: pullDistanceInPX },
    } = useMeasure();
    const {
      setRef: setHeaderRef,
      data: { height: h },
    } = useMeasure();
    const { getPrefixCls } = useConfigContext();
    const domRef = useRef<HTMLDivElement>(null);
    const scrollableParent = useScrollParent(domRef.current);
    const [refrehState, setRefreshState] = useState<RefreshState>(
      RefreshState.NORMAL,
    );
    const [{ y }, ctrl] = useSpring({ y: 0 }, []);
    const { start: setSuccessTimer } = useInterval(
      () => {
        setRefreshState(RefreshState.NORMAL);
      },
      { interval: successDuration },
    );
    const unmountedRef = useUnmountedRef();
    const lastDragState = useRef<{ velocity: number } | null>(null);

    const basCls = getPrefixCls('pull-refresh');
    const renderText = (text: React.ReactNode) => (
      <span className={`${basCls}-text`}>{text}</span>
    );

    const renderHeader = () => {
      const progress = y.to((val) => val / pullDistanceInPX);
      const params: PullRefreshRenderParams = {
        value: y,
        progress,
        headerHeight: h,
        pullDistance: pullDistanceInPX,
      };

      switch (refrehState) {
        case RefreshState.LOADING:
          return renderLoading ? (
            renderLoading(params)
          ) : (
            <Loading className={`${basCls}-header-loading-icon`}>
              {loadingText}
            </Loading>
          );
        case RefreshState.SUCCESS:
          return renderSuccess ? renderSuccess() : renderText(successText);
        case RefreshState.LOOSING:
          return renderLoosing
            ? renderLoosing(params)
            : renderText(loosingText);
        case RefreshState.PULLING:
          return renderPulling
            ? renderPulling?.(params)
            : renderText(pullingText);
        default:
          return renderNormal ? renderNormal() : null;
      }
    };

    const handleRefresh = async () => {
      try {
        await onRefresh?.();
        if (!unmountedRef.current) {
          setRefreshState(RefreshState.SUCCESS);
          setSuccessTimer();
        }
      } catch {
        if (!unmountedRef.current) {
          setRefreshState(RefreshState.NORMAL);
        }
      }
    };

    useUpdateEffect(() => {
      if (
        h > 0 &&
        (refrehState === RefreshState.LOADING ||
          refrehState === RefreshState.NORMAL)
      ) {
        const dest = refrehState === RefreshState.NORMAL ? 0 : h;

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
    }, [refrehState, h, ctrl, y]);

    useImperativeHandle(ref, () => ({
      refresh() {
        setRefreshState(RefreshState.LOADING);
        handleRefresh();
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
        movement,
        xy,
        vxvy,
        previous,
        memo = { enabled: false, value: 0 },
      }) => {
        if (canceled || !scrollableParent) {
          return;
        }

        if (first && getScrollOffset(scrollableParent).scrollTop !== 0) {
          cancel();
          return;
        }

        const dragState = memo as { enabled: boolean; value: number };

        if (refrehState === RefreshState.NORMAL && delta[1] > 0) {
          const { scrollTop } = getScrollOffset(scrollableParent);

          if (scrollTop === 0) {
            dragState.enabled = true;
            // eslint-disable-next-line prefer-destructuring
            dragState.value = previous[1];
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
            refrehState === RefreshState.LOADING ||
            refrehState === RefreshState.SUCCESS
          ) {
            if (!last) {
              ctrl.set({ y: rubberbandIfOutOfBounds(movement[1], 0, max) });
            } else {
              ctrl.start({
                y: refrehState === RefreshState.LOADING ? h : 0,
                config: {
                  velocity: vxvy[1],
                },
              });
            }

            prevent();
          }
          return;
        }

        let nextState: RefreshState = refrehState;

        prevent();

        if (last) {
          if (refrehState === RefreshState.LOOSING) {
            nextState = RefreshState.LOADING;
          } else if (refrehState === RefreshState.PULLING) {
            nextState = RefreshState.NORMAL;
          }
        } else if (
          refrehState === RefreshState.NORMAL ||
          refrehState === RefreshState.PULLING ||
          refrehState === RefreshState.LOOSING
        ) {
          nextState =
            my >= pullDistanceInPX
              ? RefreshState.LOOSING
              : RefreshState.PULLING;
        }

        if (!last) {
          ctrl.set({ y: rubberbandIfOutOfBounds(my, 0, max) });
        } else {
          lastDragState.current = { velocity: vxvy[1] };
        }

        if (nextState !== refrehState) {
          setRefreshState(nextState);

          if (nextState === RefreshState.LOADING) {
            handleRefresh();
          }
        }

        // eslint-disable-next-line consistent-return
        return dragState;
      },
      {
        domTarget: domRef,
        lockDirection: 'y',
        axis: 'y',
        useTouch: true,
        initial: () => [0, y.get()],
        eventOptions: {
          passive: false,
        },
      },
    );

    return (
      <div className={classNames(basCls, className)} {...rest}>
        <animated.div
          style={{
            y,
            touchAction: refrehState !== RefreshState.NORMAL ? 'none' : '',
          }}
          ref={domRef}
          className={classNames(`${basCls}-content`, contentClassName)}
        >
          <div
            ref={setDistanceRef}
            className={`${basCls}-pull-distance`}
            style={{ height: pullDistance }}
          />
          <div
            style={{
              height: headHeight,
            }}
            ref={setHeaderRef}
            className={`${basCls}-header`}
          >
            {renderHeader()}
          </div>
          {children}
        </animated.div>
      </div>
    );
  },
);

export default PullRefresh;

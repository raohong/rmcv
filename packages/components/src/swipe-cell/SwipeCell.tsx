import { useSpring } from '@react-spring/web';
import {
  useClickAway,
  useMeasure,
  useUpdateIsomorphicLayoutEffect,
} from '@rmc-vant/hooks';
import { clamp, isEmpty } from '@rmc-vant/utils';
import { useDrag } from '@use-gesture/react';
import clsx from 'clsx';
import React, { useImperativeHandle, useMemo, useRef, useState } from 'react';
import type { SwipeCellPosition } from 'rmc-vant';
import { useThemeProps } from '../config-provider';
import { SwipeCellName, composeSwipeCellSlotClassNames } from './classNames';
import type {
  SwipeCellComponentState,
  SwipeCellOpenPosition,
  SwipeCellProps,
  SwipeCellRef,
} from './interface';
import {
  SwipeCellContent,
  SwipeCellLeftAction,
  SwipeCellRightAction,
  SwipeCellRoot,
  SwipeCellWrapper,
} from './styles';

const SwipeCell = React.forwardRef<SwipeCellRef, SwipeCellProps>((_, ref) => {
  const {
    left,
    right,
    className,
    onClose,
    onClick,
    onOpen,
    children,
    classNames,
    disabled = false,
    closeOnActionClick = true,
    ...props
  } = useThemeProps(SwipeCellName, _);
  const [openState, setOpenState] = useState<SwipeCellOpenPosition>();
  const [{ x }, spring] = useSpring(
    {
      x: 0,
    },
    [],
  );
  const {
    setRef: leftActionRef,
    data: { width: leftWidth },
  } = useMeasure();
  const {
    setRef: rightActionRef,
    data: { width: rightWidth },
  } = useMeasure();
  const lastVelocity = useRef(0);
  const cellRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [closeOnClickAway, setCloseOnClickAway] = useState(true);

  const leftActionEnabled = leftWidth > 0;
  const rightActionEnabled = rightWidth > 0;

  const componentState: SwipeCellComponentState = useMemo(
    () => ({
      disabled,
    }),
    [disabled],
  );

  const slotClassNames = composeSwipeCellSlotClassNames(componentState, classNames);

  const handleClose = async (
    currentPosition?: SwipeCellPosition,
    v = 0,
    trigger = true,
  ) => {
    if (!openState) {
      spring.start({
        x: 0,
        config: {
          velocity: v,
          clamp: true,
        },
      });
    }
    else {
      lastVelocity.current = v;

      setOpenState(undefined);
    }

    if (trigger && currentPosition) {
      onClose?.(currentPosition);
    }
  };

  const handleOpen = (currentPos: SwipeCellOpenPosition, v = 0, trigger = true) => {
    const targetDistance = currentPos === 'left' ? leftWidth : -rightWidth;

    if (!targetDistance) {
      return;
    }

    if (currentPos === openState) {
      spring.start({
        x: targetDistance,
        config: {
          velocity: v,
          clamp: true,
        },
      });
    }
    else {
      lastVelocity.current = v;
    }

    setOpenState(currentPos);

    if (trigger) {
      onOpen?.(currentPos);
    }
  };

  const bind = useDrag(
    ({ offset: [ox], velocity: [vx], direction: [dx], last, tap }) => {
      if (tap) {
        return;
      }

      const distance = clamp(ox, -rightWidth, leftWidth);
      const VELOCITY_THRESHOLD = 0.5;

      if (!last) {
        setDragging(true);
        spring.set({ x: distance });

        return;
      }
      setTimeout(() => {
        setDragging(false);
      }, 16 * 5);

      const cx = x.get();

      if (cx === 0) {
        return;
      }

      const currentPosition = cx > 0 ? 'left' : 'right';
      const movement = Math.abs(cx);
      const minMovement
        = currentPosition === 'left' ? leftWidth / 3 : rightWidth / 3;
      const v = vx * dx;

      if (vx >= VELOCITY_THRESHOLD) {
        if (
          (currentPosition === 'left' && dx === 1)
          || (currentPosition === 'right' && dx === -1)
        ) {
          handleOpen(currentPosition, v);
        }
        else {
          handleClose(currentPosition, v);
        }
      }
      else if (movement >= minMovement) {
        handleOpen(currentPosition, v);
      }
      else {
        handleClose(currentPosition, v);
      }
    },
    {
      axis: 'x',
      tapThreshold: true,
      enabled: (leftActionEnabled || rightActionEnabled) && !disabled,
      from: () => [x.get(), 0],
    },
  );

  useUpdateIsomorphicLayoutEffect(() => {
    if (openState) {
      const targetDistance = openState === 'left' ? leftWidth : -rightWidth;

      if (!targetDistance) {
        return;
      }

      spring.start({
        x: targetDistance,
        config: {
          velocity: lastVelocity.current,
          clamp: true,
        },
      });
    }
    else {
      spring.start({
        x: 0,
        config: {
          velocity: lastVelocity.current,
          clamp: true,
        },
      });
    }

    lastVelocity.current = 0;
  }, [leftWidth, rightWidth, openState, spring]);

  const handleActionClick = (position: SwipeCellOpenPosition) => {
    if (closeOnActionClick) {
      handleClose(position);
    }
  };

  const open = (pos: SwipeCellOpenPosition) => {
    if (!disabled) {
      handleOpen(pos, 0, false);
    }
  };

  const close = () => {
    handleClose();
  };

  useClickAway(() => {
    if (closeOnClickAway) {
      handleClose('outside');
    }
  }, cellRef);

  useImperativeHandle(ref, () => ({
    open,
    close,
    disableClickAwayManager() {
      setCloseOnClickAway(false);

      return () => {
        setCloseOnClickAway(false);
      };
    },
  }));

  return (
    <SwipeCellRoot
      ref={cellRef}
      className={clsx(slotClassNames.root, className)}
      {...props}
      {...bind()}
      componentState={componentState}
    >
      <SwipeCellWrapper style={{ x }}>
        {!isEmpty(left) && (
          <SwipeCellLeftAction
            role='button'
            tabIndex={0}
            onClick={() => handleActionClick('left')}
            className={slotClassNames.leftAction}
            componentState={componentState}
            ref={leftActionRef}
          >
            {left}
          </SwipeCellLeftAction>
        )}
        <SwipeCellContent
          onClick={() => {
            if (!dragging) {
              handleClose('cell');
            }
          }}
          componentState={componentState}
          role='button'
          tabIndex={0}
          className={slotClassNames.content}
        >
          {children}
        </SwipeCellContent>
        {!isEmpty(right) && (
          <SwipeCellRightAction
            componentState={componentState}
            role='button'
            tabIndex={0}
            onClick={() => handleActionClick('right')}
            className={slotClassNames.rightAction}
            ref={rightActionRef}
          >
            {right}
          </SwipeCellRightAction>
        )}
      </SwipeCellWrapper>
    </SwipeCellRoot>
  );
});

export default SwipeCell;

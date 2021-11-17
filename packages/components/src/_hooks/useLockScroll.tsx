import isObject from 'lodash/isObject';
import { unlock, lock as lockScroll } from 'tua-body-scroll-lock';
import React, { useCallback, useEffect, useRef } from 'react';

// 暂时没找到 void
// @ts-ignore
function useLockScroll<T extends HTMLElement = HTMLElement>(
  lock: boolean,
  disable?: boolean,
): (target: T | null) => void;
function useLockScroll<T extends HTMLElement = HTMLElement>(
  lock: boolean,
  options: {
    disable?: boolean;
    target: React.RefObject<T>;
  },
): undefined;
function useLockScroll<T extends HTMLElement = HTMLElement>(
  lock: boolean,
  option:
    | boolean
    | {
        disable?: boolean;
        target: React.RefObject<T>;
      },
) {
  const lockDisable = isObject(option) ? !!option.disable : !!option;
  const outterRef = isObject(option) ? option.target : null;
  const lastLockTarget = useRef<T | null>(null);

  const setRef = useCallback(
    (target: T | null) => {
      if (!target || lockDisable) {
        return;
      }

      if (!lastLockTarget.current || lastLockTarget.current !== target) {
        unlock(lastLockTarget.current);
      }

      lastLockTarget.current = target;
    },
    [lockDisable],
  );

  useEffect(() => {
    if (outterRef) {
      setRef(outterRef.current);
    }
  }, [outterRef]);

  useEffect(() => {
    if (lock && !lockDisable && lastLockTarget.current) {
      lockScroll(lastLockTarget.current);
    }

    return () => {
      if (lastLockTarget.current) {
        unlock(lastLockTarget.current);
      }
    };
  }, [lock, lockDisable]);

  useEffect(() => {
    return () => {
      if (lastLockTarget.current) {
        unlock(lastLockTarget.current);
        lastLockTarget.current = null;
      }
    };
  }, []);

  return isObject(option) ? unlock : setRef;
}

export default useLockScroll;

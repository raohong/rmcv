import { isPlainObject } from '@rmc-vant/utils';
import type React from 'react';
import { useEffect, useState } from 'react';
import { lock as lockScroll, unlock } from 'tua-body-scroll-lock';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

// @ts-expect-error 暂时没找到 void
function _useLockScroll<T extends HTMLElement = HTMLElement>(
  lock: boolean,
  disable?: boolean,
): (target: T | null) => void;
function _useLockScroll<T extends HTMLElement = HTMLElement>(
  lock: boolean,
  options: {
    disable?: boolean;
    target: React.RefObject<T>;
  },
): undefined;
function _useLockScroll<T extends HTMLElement = HTMLElement>(
  lock: boolean,
  option:
    | boolean
    | {
      disable?: boolean;
      target: React.RefObject<T>;
    },
) {
  const lockDisable = isPlainObject(option) ? !!option.disable : !!option;
  const outerRef = isPlainObject(option) ? option.target : null;
  const [lastLockTarget, setLastLockTarget] = useState<T | null>(null);

  const setRef = setLastLockTarget;

  useIsomorphicLayoutEffect(() => {
    if (outerRef) {
      setRef(outerRef.current);
    }
  }, [outerRef, setRef]);

  useEffect(() => {
    if (lock && !lockDisable && lastLockTarget) {
      lockScroll(lastLockTarget);
    }

    return () => {
      if (lastLockTarget) {
        unlock(lastLockTarget);
      }
    };
  }, [lock, lockDisable, lastLockTarget]);

  return isPlainObject(option) ? unlock : setRef;
}

export const useLockScroll = _useLockScroll;

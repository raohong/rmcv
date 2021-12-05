import React, { useEffect, useRef } from 'react';
import isFunction from 'lodash/isFunction';
import { getDocumentElement } from '../_dom-utils';
import { toArray } from '../_utils';
import usePersistFn from './usePersistFn';
import useUnmountedRef from './useUnmountedRef';

type ClickAwayMouseEvent = 'onMouseDown' | 'onMouseUp' | 'onClick';
type ClickAwayTouchEvent = 'onTouchStart' | 'onTouchEnd';

type ClickAwayTarget =
  | React.MutableRefObject<Element | null>
  | (() => Element | null);

const eventNameList: (ClickAwayMouseEvent | ClickAwayTouchEvent)[] = [
  'onClick',
  'onMouseDown',
  'onMouseUp',
  'onTouchEnd',
  'onTouchStart',
];

const getEventName = <T extends ClickAwayMouseEvent | ClickAwayTouchEvent>(
  eventName: T,
): T extends `on${infer EventName}` ? Lowercase<EventName> : never => {
  return !eventNameList.includes(eventName)
    ? undefined
    : (eventName.slice(2).toLowerCase() as any);
};

const resolveTarget = (target: ClickAwayTarget | ClickAwayTarget[]) =>
  toArray(target)
    .filter(Boolean)
    .map((item) => (isFunction(item) ? item() : item.current)) as Element[];

const useClickAway = (
  onClickAway: (evr: MouseEvent | TouchEvent) => void,
  target: ClickAwayTarget | ClickAwayTarget[],
  options: {
    mouseEvent?: ClickAwayMouseEvent;
    touchEvent?: ClickAwayTouchEvent;
  } = { mouseEvent: 'onClick' },
) => {
  const unmountedRef = useUnmountedRef();
  const { mouseEvent, touchEvent } = options;
  const movingRef = useRef(false);

  const getAllTarget = usePersistFn(() => resolveTarget(target));
  const callback = usePersistFn((evt: MouseEvent | TouchEvent) => {
    const list = getAllTarget();

    if (unmountedRef.current || !list.length || movingRef.current) {
      return;
    }

    const current = evt.target as Element;

    if (list.every((item) => !item?.contains(current))) {
      onClickAway(evt);
    }
  });

  useEffect(() => {
    if (!mouseEvent) {
      return undefined;
    }

    const doc = getDocumentElement(getAllTarget()[0]);
    const name = getEventName(mouseEvent);

    doc.addEventListener(name, callback);

    return () => {
      doc.removeEventListener(name, callback);
    };
  }, [mouseEvent, callback, getAllTarget]);

  useEffect(() => {
    if (!touchEvent) {
      return undefined;
    }

    const doc = getDocumentElement(getAllTarget()[0]);
    const name = getEventName(touchEvent);

    const handleTouchMove = () => {
      movingRef.current = true;
    };

    const handleTouchEnd = () => {
      movingRef.current = false;
      cancel();
    };

    const cancel = () => {
      doc.removeEventListener('touchmove', handleTouchMove);
      doc.removeEventListener('touchcancel', handleTouchEnd);
      doc.removeEventListener('touchend', handleTouchEnd);
    };

    const handleTouchStart = (evt: TouchEvent) => {
      callback(evt);

      doc.addEventListener('touchmove', handleTouchMove);
      doc.addEventListener('touchcancel', handleTouchEnd);
      doc.addEventListener('touchend', handleTouchEnd);
    };

    if (name === 'touchstart') {
      doc.addEventListener(name, handleTouchStart);
    } else {
      doc.addEventListener(name, callback);
    }

    return () => {
      if (name === 'touchstart') {
        doc.removeEventListener(name, handleTouchStart);
        cancel();
      } else {
        doc.removeEventListener(name, callback);
      }

      movingRef.current = false;
    };
  }, [callback, touchEvent, getAllTarget]);
};

export default useClickAway;

import { isElement } from './instanceOf';
import isWindow from './isWindow';

export interface IBCR {
  left: number;
  top: number;
  bottom: number;
  right: number;
  width: number;
  height: number;
}

const getClientRect = (node: Element): IBCR => {
  const rect = node.getBoundingClientRect();

  return {
    left: rect.left,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    width: rect.width,
    height: rect.height,
  };
};

const getWinClientRect = (): IBCR => {
  const w = window.innerWidth;
  const h = window.innerHeight;

  return {
    left: 0,
    top: 0,
    right: w,
    bottom: h,
    width: w,
    height: h,
  };
};

export const getBoundingClientRect = (node?: null | Window | Element) => {
  if (node === null || node === undefined || isWindow(node)) {
    return getWinClientRect();
  }

  return isElement(node) ? getClientRect(node) : getWinClientRect();
};

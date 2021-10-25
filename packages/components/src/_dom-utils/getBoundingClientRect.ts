import getDocumentElement from './getDocumentElement';
import isWindow from './isWindow';

export type IBCR = {
  left: number;
  top: number;
  bottom: number;
  right: number;
  width: number;
  height: number;
};

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

const getBoundingClientRect = (node: null | Window | Element) => {
  if (node === null || isWindow(node)) {
    return getClientRect(getDocumentElement(node));
  }

  return getClientRect(node);
};

export default getBoundingClientRect;

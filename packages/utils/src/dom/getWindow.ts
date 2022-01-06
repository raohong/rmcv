import isWindow from './isWindow';

const getWindow = (node: null | Node | Window) => {
  if (!node) {
    return window;
  }

  if (!isWindow(node)) {
    const doc = node.ownerDocument;

    return doc?.defaultView || window;
  }

  return node;
};

export default getWindow;

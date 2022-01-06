import getNodeName from './getNodeName';
import getParentNode from './getParentNode';
import getWindow from './getWindow';
import { isHTMLElement } from './instanceOf';
import isScrollParent from './isScrollParent';
import isWindow from './isWindow';

const getScrollParent = (node: null | Node | Window): Element | Window => {
  if (
    !node ||
    ['document', 'html', 'body'].includes(getNodeName(node)) ||
    isWindow(node)
  ) {
    return getWindow(node);
  }

  if (isHTMLElement(node)) {
    if (getComputedStyle(node).position === 'fixed') {
      return getWindow(node);
    }

    if (isScrollParent(node)) {
      return node;
    }
  }

  return getScrollParent(getParentNode(node));
};

export default getScrollParent;

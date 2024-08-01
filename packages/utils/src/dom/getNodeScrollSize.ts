import { getDocumentElement } from './getDocumentElement';
import { isHTMLElement } from './instanceOf';
import isWindow from './isWindow';

export const getNodeScrollSize = (node: Window | Element) => {
  let target: Element;
  if (isWindow(node) || !isHTMLElement(node)) {
    target = getDocumentElement(node);
  }
  else {
    target = node;
  }

  return {
    scrollWidth: target.scrollWidth,
    scrollHeight: target.scrollHeight,
  };
};

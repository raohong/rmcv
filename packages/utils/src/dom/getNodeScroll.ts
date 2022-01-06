import getWindow from './getWindow';
import { isHTMLElement } from './instanceOf';

const getHTMLElementScroll = (node: HTMLElement) => ({
  scrollLeft: node.scrollLeft,
  scrollTop: node.scrollTop,
});

const getWindowScroll = (node: Node | Window) => {
  const win = getWindow(node);

  return {
    scrollLeft: win.scrollX || win.pageXOffset,
    scrollTop: win.scrollY || win.pageYOffset,
  };
};

const getNodeScroll = (node: Node | Window) => {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  }

  return getHTMLElementScroll(node);
};

export default getNodeScroll;

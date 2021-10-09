import { isWindow } from './dom';

const isScrollable = (overflow: string) => /scroll|auto/i.test(overflow);

const getDefaultScrollingElement = () => window;

const findScrollableContainer = (elem: Element | Window | null) => {
  const defaultScrollingElement = getDefaultScrollingElement();

  if (
    isWindow(elem) ||
    elem === null ||
    elem.nodeType === 9 ||
    elem === document.body
  ) {
    return defaultScrollingElement;
  }

  const elemStyle = getComputedStyle(elem);

  if (elemStyle.position === 'fixed') {
    return defaultScrollingElement;
  }

  let parent = elem.parentElement;

  while (parent) {
    const style = window.getComputedStyle(parent);

    if (isScrollable(style.overflow + style.overflowY + style.overflowX)) {
      return parent === document.body ? defaultScrollingElement : parent;
    }

    parent = parent.parentElement;
  }

  return defaultScrollingElement;
};

export default findScrollableContainer;

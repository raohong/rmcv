export const isWindow = (win: any): win is Window => win === window;

const getDocRect = () => {
  const html = document.documentElement;

  return {
    left: 0,
    top: 0,
    bottom: html.clientHeight,
    right: html.clientWidth,
    width: html.clientWidth,
    height: html.clientHeight,
  };
};

export type IBCR = {
  left: number;
  top: number;
  bottom: number;
  right: number;
  width: number;
  height: number;
};

export const getScrollOffset = (elem: Window | Element) => {
  if (isWindow(elem)) {
    return {
      scrollLeft: elem.pageXOffset,
      scrollTop: elem.pageYOffset,
    };
  }

  return {
    scrollLeft: elem.scrollLeft,
    scrollTop: elem.scrollTop,
  };
};

export const getScrollSize = (elem: Window | Element) => {
  if (isWindow(elem)) {
    return {
      scrollWidth: document.documentElement.scrollWidth,
      scrollHeight: document.documentElement.scrollHeight,
    };
  }

  return {
    scrollWidth: elem.scrollWidth,
    scrollHeight: elem.scrollHeight,
  };
};

export const getBoundingClientRect = (elem: Window | Element) => {
  if (isWindow(elem)) {
    return getDocRect();
  }

  const rect = elem.getBoundingClientRect();

  return {
    left: rect.left,
    top: rect.top,
    bottom: rect.bottom,
    right: rect.right,
    height: rect.height,
    width: rect.width,
  };
};

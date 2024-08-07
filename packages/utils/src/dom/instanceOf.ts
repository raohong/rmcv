import getWindow from './getWindow';

export const isElement = (node: any): node is Element => {
  // @ts-expect-error window
  const OwnElement = getWindow(node).Element;

  return node instanceof OwnElement || node instanceof Element;
};

export const isHTMLElement = (node: any): node is HTMLElement => {
  // @ts-expect-error window
  const OwnElement = getWindow(node).HTMLElement;

  return node instanceof OwnElement || node instanceof HTMLElement;
};

export const isShadowRoot = (node: any): node is ShadowRoot => {
  // @ts-expect-error window
  const OwnElement = getWindow(node).ShadowRoot;

  return node instanceof OwnElement || node instanceof ShadowRoot;
};

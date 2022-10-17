import getWindow from './getWindow';

export const getComputedStyle = (node: Element) =>
  getWindow(node).getComputedStyle(node);

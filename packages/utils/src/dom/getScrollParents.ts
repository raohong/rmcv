import { getParentNode } from './getParentNode';
import { getScrollParent } from './getScrollParent';
import getWindow from './getWindow';

export const getScrollParents = (node: Node | Window): (Element | Window)[] => {
  const scrollParent = getScrollParent(node);
  const win = getWindow(node);
  const isRoot = win === scrollParent;
  const target = isRoot ? win : scrollParent;

  const next = [target];

  return isRoot ? next : next.concat(getScrollParents(getParentNode(node as Node)));
};

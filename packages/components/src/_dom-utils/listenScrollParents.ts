import getParentNode from './getParentNode';
import getScrollParent from './getScrollParent';
import getWindow from './getWindow';

const listenScrollParents = (node: Node | Window): (Element | Window)[] => {
  const scrollParent = getScrollParent(node);
  const win = getWindow(node);
  const isRoot = win === scrollParent;
  const target = isRoot ? win : scrollParent;

  const next = [target];

  return isRoot
    ? next
    : next.concat(listenScrollParents(getParentNode(node as Node)));
};

export default listenScrollParents;

import { getDocumentElement } from './getDocumentElement';

export const getParentNode = (node: Node): Node => {
  if (node.nodeType === 9) {
    return node as HTMLElement;
  }

  return node.parentNode || getDocumentElement(node);
};

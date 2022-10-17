import { isElement } from './instanceOf';

export const getDocumentElement = (node?: Node | Window | null) =>
  (isElement(node) ? node.ownerDocument : window.document).documentElement;

export default getDocumentElement;

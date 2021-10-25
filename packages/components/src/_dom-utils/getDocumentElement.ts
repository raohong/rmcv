import { isElement } from './instanceOf';

const getDocumentElement = (node?: Node | Window | null) =>
  (isElement(node) ? node.ownerDocument : window.document).documentElement;

export default getDocumentElement;

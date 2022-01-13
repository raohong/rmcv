import getWindow from './getWindow';

const getComputedStyle = (node: Element) => getWindow(node).getComputedStyle(node);

export default getComputedStyle;

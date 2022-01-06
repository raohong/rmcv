const getNodeName = (node: Window | Node) =>
  // @ts-ignore
  (node.nodeName ?? '').toLowerCase?.();

export default getNodeName;

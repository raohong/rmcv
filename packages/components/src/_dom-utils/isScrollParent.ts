const isScrollParent = (node: Element) => {
  const { overflow, overflowX, overflowY } = getComputedStyle(node);

  return /hidden|auto|scroll/.test(overflow + overflowX + overflowY);
};

export default isScrollParent;

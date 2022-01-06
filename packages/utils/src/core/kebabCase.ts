const kebabCase = (target: string) => {
  if (!target) {
    return target;
  }

  return target
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/_/g, '-')
    .toLowerCase();
};

export default kebabCase;

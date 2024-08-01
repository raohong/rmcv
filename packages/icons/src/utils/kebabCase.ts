const kebabCase = (str: string) => {
  const pattern = /\w[A-Z\s]/g;

  return str.replace(pattern, match => `${match[0]}-${match[1].trim()}`);
};

export default kebabCase;

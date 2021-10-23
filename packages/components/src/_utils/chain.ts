const chain = <T extends (...args: any[]) => void>(
  ...fns: (T | undefined)[]
): ((...args: Parameters<T>) => void) => {
  return (...args) => {
    fns.forEach((item) => {
      if (item) {
        item(...args);
      }
    });
  };
};

export default chain;

export const omit = <
  T extends Record<symbol | string | number, unknown>,
  K extends symbol | string | number,
>(
  source: T,
  keys: K[],
): Omit<T, K> => {
  const result = { ...source };

  keys.forEach((key) => {
    delete result[key];
  });

  return result;
};

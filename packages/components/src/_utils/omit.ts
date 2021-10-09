const omit = <
  S extends Record<string | number | symbol, any>,
  K extends string | number | symbol,
>(
  source: S,
  keys: K[],
): Omit<S, K> => {
  const result = { ...source };

  keys.forEach((key) => {
    delete result[key];
  });

  return result;
};

export default omit;

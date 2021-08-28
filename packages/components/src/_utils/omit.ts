export const omit = <T extends object, K extends string | number | symbol>(
  target: T,
  keys?: K[],
): Omit<T, K> => {
  const cloned = { ...target };

  keys?.forEach((key) => {
    delete (cloned as Record<K, unknown>)[key];
  });

  return cloned;
};

const data = {
  name: '2',
  age1: 2,
};

const s = omit(data, ['name', 'age']);

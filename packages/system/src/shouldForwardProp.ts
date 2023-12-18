const NAMES = ['sx', 'componentState', 'as', 'styleOverrides'] as const;
const map = Object.fromEntries(NAMES.map((name) => [name, true]));

export const shouldForwardProp = (x: string) => {
  return !(x in map);
};

export const toArray = <T extends any>(value: T | T[]): T[] =>
  Array.isArray(value) ? value : [value];

export type IntrinsicElementsKeys = keyof JSX.IntrinsicElements;

export type JSXIntrinsicElementProps<
  Props extends object,
  K extends IntrinsicElementsKeys = 'div',
  ExcludeKeys extends string = never,
> = Props &
Omit<JSX.IntrinsicElements[K], 'ref' | 'key' | ExcludeKeys | keyof Props> & {
  [x: `data-${string}`]: unknown;
};

export type LiteralUnion<T extends U, U = string> = T | (U & {});

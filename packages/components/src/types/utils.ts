export type IntrinsicElementsKeys = keyof JSX.IntrinsicElements;

export type JSXIntrinsicElementProps<
  K extends IntrinsicElementsKeys,
  ExcludeKeys extends string = never,
> = Omit<JSX.IntrinsicElements[K], 'ref' | 'key' | ExcludeKeys>;

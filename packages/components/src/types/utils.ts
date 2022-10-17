import type React from 'react';

export type IntrinsicElementsKeys = keyof JSX.IntrinsicElements;

type GetElementType<T> = T extends React.SVGProps<infer S>
  ? S
  : // eslint-disable-next-line @typescript-eslint/no-unused-vars
  T extends React.DetailedHTMLProps<infer A, infer E>
  ? E
  : never;

export type JSXIntrinsicElementProps<
  Props extends object,
  K extends IntrinsicElementsKeys = 'div',
  ExcludeKeys extends string = never,
> = Props &
  Omit<
    React.HTMLAttributes<GetElementType<JSX.IntrinsicElements[K]>>,
    'ref' | 'key' | ExcludeKeys | keyof Props
  >;

export type LiteralUnion<T extends U, U = string> = T | (U & {});

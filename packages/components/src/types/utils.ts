import type React from 'react';

export type IntrinsicElementsKeys = keyof JSX.IntrinsicElements;

export interface IWithAutocompleteForReactComponent<
  DefaultElement extends IntrinsicElementsKeys,
  Props extends object,
  ExcludeProps extends object = object,
> extends React.ForwardRefExoticComponent<
    Omit<Props & JSX.IntrinsicElements[DefaultElement], keyof ExcludeProps>
  > {
  <Elem extends IntrinsicElementsKeys = DefaultElement>(
    props: Omit<
      Props & JSX.IntrinsicElements[Elem],
      keyof ExcludeProps & 'tag'
    > & {
      tag?: Elem;
    },
  ): JSX.Element;
}

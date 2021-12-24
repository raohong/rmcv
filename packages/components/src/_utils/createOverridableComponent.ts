import React, { RefAttributes } from 'react';

interface OverridableComponent<
  C extends React.ComponentType<React.ComponentProps<C>>,
  DefaultElement extends keyof JSX.IntrinsicElements = 'div',
  ExcludeProps extends object = object,
> extends React.FC<
    Omit<
      Omit<React.ComponentProps<C>, 'ref'> &
        Omit<
          JSX.IntrinsicElements[DefaultElement],
          Exclude<'ref', keyof React.ComponentProps<C>>
        >,
      keyof ExcludeProps | 'component'
    >
  > {
  // JSX.IntrinsicElements
  <Tag extends keyof JSX.IntrinsicElements>(
    props: Omit<
      Omit<
        JSX.IntrinsicElements[Tag],
        Exclude<'ref', keyof React.ComponentProps<C>>
      > &
        Omit<React.ComponentProps<C>, 'ref'>,
      keyof ExcludeProps | 'component'
    > & {
      component: Tag;
    },
  ): JSX.Element;

  // ClassComponent
  <Custom extends React.ComponentClass<React.ComponentProps<Custom>>>(
    props: Omit<
      Omit<React.ComponentProps<C> & React.ComponentProps<Custom>, 'ref'>,
      keyof ExcludeProps | 'component'
    > & {
      component: Custom;
    } & RefAttributes<InstanceType<Custom>>,
  ): JSX.Element;

  <
    Custom extends React.ForwardRefExoticComponent<
      React.ComponentProps<Custom>
    >,
  >(
    props: Omit<
      Omit<React.ComponentProps<C>, 'ref'> & React.ComponentProps<Custom>,
      keyof ExcludeProps | 'component'
    > & {
      component: Custom;
    },
  ): JSX.Element;
}

function createOverridableComponent<
  C extends React.ComponentType<React.ComponentProps<C>>,
  DefaultElement extends keyof JSX.IntrinsicElements = 'div',
  ExcludeProps extends object = object,
>(component: C): OverridableComponent<C, DefaultElement, ExcludeProps> {
  return component as unknown as OverridableComponent<
    C,
    DefaultElement,
    ExcludeProps
  >;
}

export default createOverridableComponent;

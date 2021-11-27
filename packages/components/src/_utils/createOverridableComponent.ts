import React, { PropsWithoutRef, RefAttributes } from 'react';

interface OverridableComponent<
  C extends React.ComponentType<React.ComponentProps<C>>,
  DefaultElement extends keyof JSX.IntrinsicElements = 'div',
  ExcludeProps extends object = object,
> extends React.FC<
    PropsWithoutRef<React.ComponentProps<C>> &
      JSX.IntrinsicElements[DefaultElement]
  > {
  // JSX.IntrinsicElements
  <Tag extends keyof JSX.IntrinsicElements>(
    props: Omit<
      JSX.IntrinsicElements[Tag] & PropsWithoutRef<React.ComponentProps<C>>,
      keyof ExcludeProps | 'component'
    > & {
      component: Tag;
    },
  ): React.ReactElement | null;

  // ClassComponent
  <Custom extends React.ComponentClass<React.ComponentProps<Custom>>>(
    props: Omit<
      PropsWithoutRef<React.ComponentProps<C>> & React.ComponentProps<Custom>,
      keyof ExcludeProps | 'component'
    > & {
      component: Custom;
    } & RefAttributes<InstanceType<Custom>>,
  ): React.ReactElement | null;

  <
    Custom extends React.ForwardRefExoticComponent<
      React.ComponentProps<Custom>
    >,
  >(
    props: Omit<
      PropsWithoutRef<React.ComponentProps<C>> & React.ComponentProps<Custom>,
      keyof ExcludeProps | 'component'
    > & {
      component: Custom;
    },
  ): React.ReactElement | null;
}

function createOverridableComponent<
  C extends React.ForwardRefExoticComponent<React.ComponentProps<C>>,
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

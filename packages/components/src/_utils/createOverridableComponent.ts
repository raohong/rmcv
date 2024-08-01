import type {
  ComponentClass,
  ComponentProps,
  ComponentType,
  FC,
  ForwardRefExoticComponent,
  JSXElementConstructor,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

type Union<Base extends object, Target extends object> = Pick<
  Target,
  Exclude<keyof Target, keyof Base>
> &
Base;

export interface OverridableComponent<
  C extends ComponentType<ComponentProps<D>>,
  DefaultElement extends keyof JSX.IntrinsicElements = 'div',
  AdditionalProps extends object = object,
  ExcludeProps extends object = object,
  D extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = | keyof JSX.IntrinsicElements
  | React.JSXElementConstructor<any>,
> extends FC<
  Omit<
    Union<ComponentProps<C>, JSX.IntrinsicElements[DefaultElement]>,
      keyof ExcludeProps | 'component'
  > &
  AdditionalProps
  > {
  // JSX.IntrinsicElements
  <Tag extends keyof JSX.IntrinsicElements>(
    props: Omit<
      Union<PropsWithoutRef<ComponentProps<C>>, JSX.IntrinsicElements[Tag]>,
      keyof ExcludeProps | 'component'
    > & {
      /**
       * @description 自定义 component
       * @default div
       */
      component: Tag;
    } & AdditionalProps,
  ): JSX.Element;

  // ClassComponent
  <
    Custom extends ComponentClass<ComponentProps<D>>,
    D extends keyof JSX.IntrinsicElements | JSXElementConstructor<any> = | keyof JSX.IntrinsicElements
    | JSXElementConstructor<any>,
  >(
    props: Omit<
      Union<PropsWithoutRef<ComponentProps<C>>, ComponentProps<Custom>>,
      keyof ExcludeProps | 'component'
    > & {
      /**
       * @description 自定义 component
       */
      component: Custom;
    } & RefAttributes<InstanceType<Custom>> &
    AdditionalProps,
  ): JSX.Element;

  <
    Custom extends ForwardRefExoticComponent<ComponentProps<D>>,
    D extends keyof JSX.IntrinsicElements | JSXElementConstructor<any> = | keyof JSX.IntrinsicElements
    | JSXElementConstructor<any>,
  >(
    props: Omit<
      Union<PropsWithoutRef<ComponentProps<C>>, ComponentProps<Custom>>,
      keyof ExcludeProps | 'component'
    > & {
      /**
       * @description 自定义 component
       */
      component: Custom;
    } & AdditionalProps,
  ): JSX.Element;
}

export function createOverridableComponent<
  C extends ComponentType<ComponentProps<C>>,
  DefaultElement extends keyof JSX.IntrinsicElements = 'div',
  AdditionalProps extends object = object,
  ExcludeProps extends object = object,
>(
  component: C,
): OverridableComponent<C, DefaultElement, AdditionalProps, ExcludeProps> {
  return component as unknown as OverridableComponent<
    C,
    DefaultElement,
    AdditionalProps,
    ExcludeProps
  >;
}

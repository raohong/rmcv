import type {
  ComponentClass,
  ComponentProps,
  ComponentType,
  FC,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

type Union<Base extends object, Target extends object> = Pick<
  Target,
  Exclude<keyof Target, keyof Base>
> &
  Base;

export interface OverridableComponent<
  C extends ComponentType<ComponentProps<C>>,
  DefaultElement extends keyof JSX.IntrinsicElements = 'div',
  ExcludeProps extends object = object,
> extends FC<
    Omit<
      Union<JSX.IntrinsicElements[DefaultElement], ComponentProps<C>>,
      keyof ExcludeProps | 'component'
    >
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
    },
  ): JSX.Element;

  // ClassComponent
  <Custom extends ComponentClass<ComponentProps<Custom>>>(
    props: Omit<
      Union<PropsWithoutRef<ComponentProps<C>>, ComponentProps<Custom>>,
      keyof ExcludeProps | 'component'
    > & {
      /**
       * @description 自定义 component
       */
      component: Custom;
    } & RefAttributes<InstanceType<Custom>>,
  ): JSX.Element;

  <Custom extends ForwardRefExoticComponent<ComponentProps<Custom>>>(
    props: Omit<
      Union<PropsWithoutRef<ComponentProps<C>>, ComponentProps<Custom>>,
      keyof ExcludeProps | 'component'
    > & {
      /**
       * @description 自定义 component
       */
      component: Custom;
    },
  ): JSX.Element;
}

function createOverridableComponent<
  C extends ComponentType<ComponentProps<C>>,
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

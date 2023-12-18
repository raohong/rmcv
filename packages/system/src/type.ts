import type { PropsOf, Theme } from '@emotion/react';
import type { CSSObject } from '@emotion/styled';
import type { CreateStyledComponent } from '@emotion/styled/base';
import React from 'react';

export type SystemStyleObject = CSSObject;

export type SystemSxInterpolation =
  | CSSObject
  | ((props: { theme: Theme }) => CSSObject);

export interface SystemStyledComponentProps {
  sx?:
    | SystemSxInterpolation
    | (null | undefined | boolean | number | string | SystemSxInterpolation)[];
}

export type SystemStyleInterpolation<
  Props extends Record<string, any> = Record<string, any>,
> = (props: Props & { theme: Theme }) => SystemStyleObject;

export interface StyledOptions<
  State = object,
  StyleOverrides = Record<string, string>,
> {
  label?: string;
  shouldForwardProp?: ((propName: string) => boolean) | string[];
  target?: string;
  slot?: string;
  name?: string;
  cache?: boolean;
  overridesResolver?: (
    props: { theme?: Theme; componentState: State },
    styles: StyleOverrides,
  ) => (string | undefined | null | false)[];
}

/**
 * see emotion
 */
export interface CreateStyled {
  <C extends React.ComponentClass<React.ComponentProps<C>>>(
    component: C,
  ): CreateStyledComponent<
    PropsOf<C> & {
      theme?: Theme;
    } & SystemStyledComponentProps,
    {},
    {
      ref?: React.Ref<InstanceType<C>>;
    }
  >;
  <
    C extends React.ComponentClass<React.ComponentProps<C>>,
    State = object,
    StyleOverrides = Record<string, string>,
  >(
    component: C,
    options?: StyledOptions<State, StyleOverrides>,
  ): CreateStyledComponent<
    PropsOf<C> & {
      theme?: Theme;
      componentState: State;
    } & SystemStyledComponentProps,
    {},
    {
      ref?: React.Ref<InstanceType<C>>;
    }
  >;

  <C extends React.ComponentClass<React.ComponentProps<C>>>(
    component: C,
  ): CreateStyledComponent<
    PropsOf<C> & {
      theme?: Theme;
    } & SystemStyledComponentProps,
    {},
    {
      ref?: React.Ref<InstanceType<C>>;
    }
  >;
  <
    C extends React.ComponentClass<React.ComponentProps<C>>,
    State = object,
    StyleOverrides = Record<string, string>,
  >(
    component: C,
    options?: StyledOptions<State, StyleOverrides>,
  ): CreateStyledComponent<
    PropsOf<C> & {
      theme?: Theme;
      componentState: State;
    } & SystemStyledComponentProps,
    {},
    {
      ref?: React.Ref<InstanceType<C>>;
    }
  >;

  <C extends React.ComponentType<React.ComponentProps<C>>>(
    component: C,
  ): CreateStyledComponent<
    PropsOf<C> & {
      theme?: Theme;
    } & SystemStyledComponentProps
  >;
  <
    C extends React.ComponentType<React.ComponentProps<C>>,
    State = object,
    StyleOverrides = Record<string, string>,
  >(
    component: C,
    options?: StyledOptions<State, StyleOverrides>,
  ): CreateStyledComponent<
    PropsOf<C> & {
      theme?: Theme;
      componentState: State;
    } & SystemStyledComponentProps
  >;

  <Tag extends keyof JSX.IntrinsicElements>(tag: Tag): CreateStyledComponent<
    {
      theme?: Theme;
      as?: React.ElementType;
    } & SystemStyledComponentProps,
    JSX.IntrinsicElements[Tag]
  >;
  <
    Tag extends keyof JSX.IntrinsicElements,
    State = object,
    StyleOverrides = Record<string, string>,
  >(
    tag: Tag,
    options?: StyledOptions<State, StyleOverrides>,
  ): CreateStyledComponent<
    {
      theme?: Theme;
      as?: React.ElementType;
      componentState: State;
    } & SystemStyledComponentProps,
    JSX.IntrinsicElements[Tag]
  >;
}

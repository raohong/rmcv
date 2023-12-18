import type { Theme } from '@emotion/react';
import emotionStyled, { FunctionInterpolation } from '@emotion/styled';
import {
  isArray,
  isFunction,
  memorized,
  runIfFn,
  shallowEqual,
} from '@rmc-vant/utils';
import { shouldForwardProp } from './shouldForwardProp';
import { defaultTheme, isEmptyTheme } from './theme';
import {
  CreateStyled,
  StyledOptions,
  SystemStyleObject,
  SystemStyledComponentProps,
} from './type';

const getDefaultStyleOverrides = (theme: Record<string, any>, name: string) => {
  return theme.components?.[name]?.styleOverrides;
};

const isStringTag = (tag: any) =>
  typeof tag === 'string' && tag[0].charCodeAt(0) >= 97;

const withDefaultThemeStyles = (cache: boolean, styles: any[], name?: string) =>
  styles.map((item) => {
    if (!isFunction(item)) {
      return item;
    }

    if (!cache) {
      return (props: any) =>
        item({
          ...props,
          theme: isEmptyTheme(props.theme) ? defaultTheme : props.theme,
        });
    }

    const memorizedStyle = memorized(item, (last, current) => {
      return (
        shallowEqual(last.theme, current.theme) &&
        shallowEqual(last.sx, current.sx) &&
        shallowEqual(last.componentState, current.componentState)
      );
    });

    return ({ theme, componentState, sx }: any) => {
      return memorizedStyle({
        theme: isEmptyTheme(theme) ? defaultTheme : theme,
        componentState,
        sx,
      });
    };
  });

const getComponentStylesOverrides = (
  slots: (string | undefined | false | null)[],
  styles: Record<string, any>,
) => {
  return slots.map((item) => item && styles[item]);
};

const enhanceShouldForwardProp = (raw?: ((x: string) => boolean) | string[]) => {
  if (!raw) {
    return shouldForwardProp;
  }

  return (x: string) => {
    if (isFunction(raw)) {
      return raw(x);
    }

    return Array.isArray(raw)
      ? !raw.includes(x) && shouldForwardProp(x)
      : shouldForwardProp(x);
  };
};

const internalStyled = <C extends React.ComponentClass<React.ComponentProps<C>>>(
  tag: C,
  styledOptions: StyledOptions<any, any> = {},
) => {
  const { name, cache = true, overridesResolver, slot, ...options } = styledOptions;

  options.label ??= '';

  if (slot) {
    options.shouldForwardProp = enhanceShouldForwardProp(options.shouldForwardProp);
  } else if (isStringTag(tag)) {
    options.shouldForwardProp = undefined;
  }

  // @ts-ignore
  const createStyleComponent = emotionStyled(tag, options);

  const proxyCreateStyleComponent = (styleArgs: any, ...internalStyles: any[]) => {
    // @ts-ignore
    if (Array.isArray(styleArgs) && styleArgs.raw) {
      return createStyleComponent(
        styleArgs,
        ...withDefaultThemeStyles(cache, internalStyles),
      );
    }

    const styles: FunctionInterpolation<
      SystemStyleObject & {
        theme: Theme;
        componentState?: Record<string, any>;
      } & SystemStyledComponentProps
    >[] = [styleArgs, ...internalStyles];

    if (overridesResolver && name) {
      styles.push(({ theme, componentState }) => {
        const themeStyleOverrides = getDefaultStyleOverrides(theme, name);

        if (!themeStyleOverrides || !componentState) {
          return;
        }

        const styleOverrides = Object.fromEntries(
          Object.entries(themeStyleOverrides).map(([slot, style]) => {
            return [
              slot,
              typeof style === 'function' ? style({ theme, componentState }) : style,
            ];
          }),
        );

        const slots = overridesResolver({ theme, componentState }, styleOverrides);

        return getComponentStylesOverrides(slots, styleOverrides);
      });
    }

    styles.push(({ theme, sx }) => {
      const args = { theme };

      if (isArray(sx)) {
        return sx.map((item) => runIfFn(item, args));
      }
      return runIfFn(sx, args);
    });

    return createStyleComponent(withDefaultThemeStyles(cache, styles, name));
  };

  return proxyCreateStyleComponent as unknown as typeof createStyleComponent;
};

export const styled = internalStyled as unknown as CreateStyled;

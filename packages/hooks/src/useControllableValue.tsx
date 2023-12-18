import { isFunction } from '@rmc-vant/utils';
import { useMemo, useState } from 'react';
import type { SetStateAction } from 'react';
import { useEventCallback } from './useEventCallback';
import { useUpdateEffect } from './useUpdateEffect';

type DefaultUseControllableValueProps = {
  value?: unknown;
};

type UseControlValueValueOptions<
  P extends Record<keyof any, any>,
  K extends keyof P = keyof P,
  V = P[K],
> = {
  defaultValue?: V;
  trigger?: K | (string & {});
  valuePropName?: K;
  defaultValuePropName?: string;
  format?: (value: V | undefined) => V | null;
};

type CommonOptions<V> = {
  defaultValue?: V;
  trigger?: string;
  valuePropName?: string;
  defaultValuePropName?: string;
  format?: (value: V | undefined) => V | null;
};

const defaultFormat = <V extends any>(v: V) => v;

type ReturnType<V> = [V, (value: V | ((prev: V) => V), ...args: any) => void];

function _useControllableValue<
  P extends DefaultUseControllableValueProps,
  K extends keyof P = 'value',
  V = P[K],
>(props: P, options?: UseControlValueValueOptions<P, K, V>): ReturnType<V>;
function _useControllableValue<
  P extends Record<keyof any, any>,
  K extends keyof P = keyof P,
  V = P[K],
>(props: P, options?: UseControlValueValueOptions<P, K, V>): ReturnType<V>;

function _useControllableValue<
  P extends Record<keyof any, any>,
  Value extends any = any,
>(props: P, options?: CommonOptions<Value>): ReturnType<Value> {
  const {
    defaultValue,
    trigger = 'onChange',
    valuePropName = 'value',
    defaultValuePropName = 'defaultValue',
    format = defaultFormat,
  } = options ?? {};

  const triggerFn = props[trigger];
  const has = valuePropName in props;
  const defaultValueFromProps: Value = format(props[defaultValuePropName]);
  const value = useMemo(
    () => format(props[valuePropName]),
    [props[valuePropName], format],
  );
  const [state, setState] = useState<Value>(() =>
    has
      ? value ?? defaultValueFromProps ?? defaultValue
      : defaultValueFromProps ?? defaultValue ?? undefined,
  );

  const renderedValue = has ? value : state;

  const update = useEventCallback((action: SetStateAction<Value>, ...rest: any) => {
    if (!has) {
      setState(action);
    }

    triggerFn?.(isFunction(action) ? action(renderedValue) : action, ...rest);
  });

  useUpdateEffect(() => {
    if (has) {
      setState(value);
    }
  }, [has, value]);

  return [renderedValue, update];
}

export const useControllableValue = _useControllableValue;

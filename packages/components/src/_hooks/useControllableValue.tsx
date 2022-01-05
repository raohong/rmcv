import { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { isFunction } from 'lodash';
import usePersistFn from './usePersistFn';
import useUpdateEffect from './useUpdateEffect';

type UseControllavleValueProps<V = any> = {
  value?: V;
} & Record<string | number | symbol, any>;

type UseControllValueValueOptions<V> = {
  defaultValue?: V;
  trigger?: string;
  valuePropName?: string;
  defaultValuePropName?: string;
  format?: (value: V | undefined) => V | null;
};

const defaultFormat = <V extends any>(v: V) => v;

type ReturnType<V> = [V, Dispatch<SetStateAction<V>>];

function useControllableValue<Value extends any>(
  props: UseControllavleValueProps<Value>,
  options?: UseControllValueValueOptions<Value>,
): ReturnType<Value>;
function useControllableValue<Value extends any>(
  props: Record<string | number | symbol, any>,
  options?: UseControllValueValueOptions<Value>,
): ReturnType<Value> {
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
  const value = format(props[valuePropName]);
  const [state, setState] = useState<Value>(
    (has
      ? value ?? defaultValueFromProps ?? defaultValue
      : defaultValueFromProps ?? defaultValue) ?? null,
  );

  const renderedValue = has ? value : state;

  const update = usePersistFn((action: SetStateAction<Value>) => {
    if (!has) {
      setState(action);
    }

    triggerFn?.(isFunction(action) ? action(renderedValue) : action);
  });

  useUpdateEffect(() => {
    if (has) {
      setState(value);
    }
  }, [has, value]);

  return [renderedValue, update];
}

export default useControllableValue;

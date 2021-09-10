import { useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { isFunction } from '../_utils';
import { usePersistFn } from './usePersistFn';
import { useUpdateEffect } from './useUpdateEffect';

type UseControllavleValueProps<V = any> = {
  value?: V;
} & Record<string | number | symbol, any>;

type UseControllValueValueOptions<V> = {
  defaultValue?: V;
  trigger?: string;
  valuePropName?: string;
  defaultValuePropName?: string;
};

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
  } = options ?? {};

  const triggerFn = props[trigger];
  const has = valuePropName in props;
  const defaultValueFromProps: Value = props[defaultValuePropName];
  const value = props[valuePropName];
  const [state, setState] = useState<Value>(
    defaultValueFromProps ?? defaultValue ?? value ?? null,
  );

  const update = usePersistFn((action: SetStateAction<Value>) => {
    if (!has) {
      setState(action);
    } else {
      triggerFn?.(isFunction(action) ? action(value) : action);
    }
  });

  useUpdateEffect(() => {
    if (has) {
      setState(value);
    }
  }, [has, value]);

  return [has ? value : state, update];
}

export { useControllableValue };

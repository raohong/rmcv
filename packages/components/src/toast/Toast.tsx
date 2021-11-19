import isString from 'lodash/isString';
import cloneDeep from 'lodash/cloneDeep';
import isObject from 'lodash/isObject';
import type {
  ToastType,
  ToastConfig,
  ToastConfigType,
  ToastInstance,
  ToastOptions,
  ToastInterface,
} from './type';
import createToastInstance from './createToastInstance';
import { isBrowser } from '../_utils';

let isMultiple = false;
let lastKey: string | null = null;
let toastInteface: ToastInterface | null = null;
let container: HTMLElement | null = null;
const defaultOptions = new Map<ToastConfigType, ToastConfig>();

const types: ToastType[] = ['fail', 'loading', 'normal', 'success'];
const configTypes: ToastConfigType[] = [...types, 'common'];

const santizeType = (type: ToastType = 'normal'): ToastType =>
  types.includes(type) ? type : 'normal';

const getOptions = (params: ToastType | ToastOptions) => {
  const baseOptions: ToastOptions = {
    ...defaultOptions.get('common'),
  };

  if (isString(params)) {
    baseOptions.type = santizeType(params);
    Object.assign(baseOptions, defaultOptions.get(baseOptions.type!));
  } else {
    baseOptions.type = santizeType(params.type);
    Object.assign(baseOptions, {
      ...defaultOptions.get(baseOptions.type!),
      ...params,
      type: baseOptions.type,
    });
  }

  return baseOptions;
};

function allowMultiple() {
  isMultiple = true;
}

function setDefaultOptions(type: ToastConfigType, options: ToastConfig): void;
function setDefaultOptions(
  options: ToastConfig & { type?: ToastConfigType },
): void;
function setDefaultOptions(
  type: ToastConfigType | (ToastConfig & { type?: ToastConfigType }),
  options?: any,
) {
  const internalType = isObject(type) ? type.type ?? 'common' : type;
  const internalOptions = isObject(type) ? type : options;

  if (configTypes.includes(internalType)) {
    defaultOptions.set(internalType, cloneDeep(internalOptions));
  }
}

function resetDefaultOptions(type?: ToastConfigType) {
  if (!type) {
    defaultOptions.clear();
  } else if (configTypes.includes(type)) {
    defaultOptions.delete(type);
  }
}

interface ToastWithInternalType {
  (message: string): ToastInstance;
  (options: Omit<ToastOptions, 'type'>): ToastInstance;
}

function Toast(message: string): ToastInstance;
function Toast(options: ToastOptions): ToastInstance;
function Toast(params: string | ToastOptions) {
  const ref: { current: ToastInstance | null } = {
    current: null,
  };

  if (!isBrowser) {
    return ref.current;
  }

  if (!toastInteface) {
    container = document.createElement('div');
    document.body.appendChild(container);
    toastInteface = createToastInstance(container);
  }

  const options = {
    ...getOptions(isString(params) ? 'normal' : params.type || 'normal'),
  };

  let key: string | null = null;

  if (isString(params)) {
    options.message = params;
  } else {
    Object.assign(options, params);
  }

  if (toastInteface.instance.current) {
    key = toastInteface.instance.current.create(isMultiple, options);
    lastKey = key;

    ref.current = {
      update(nextOptions: ToastOptions) {
        toastInteface!.instance.current?.update(key!, nextOptions);
      },
      close: () => {
        toastInteface!.instance.current?.close(key!);
      },
    };
  }

  return ref.current;
}

function clear(clearAll?: boolean) {
  if (toastInteface?.instance?.current) {
    toastInteface.instance.current.close(
      clearAll ? undefined : lastKey ?? undefined,
    );
  }
}

function reset() {
  resetDefaultOptions();
  isMultiple = false;
  lastKey = null;
  toastInteface = null;

  if (container) {
    container.parentNode?.removeChild(container);
  }
}

type InternalAPIType = 'fail' | 'loading' | 'success';

interface IToastAPI extends Record<InternalAPIType, ToastWithInternalType> {
  resetDefaultOptions: typeof resetDefaultOptions;
  allowMultiple: typeof allowMultiple;
  setDefaultOptions: typeof setDefaultOptions;
  (message: string): ToastInstance;
  (options: ToastOptions): ToastInstance;
  clear: (clearAll?: boolean) => void;
  __reset: () => void;
}

function setAPI(api: IToastAPI) {
  const internalTypes: InternalAPIType[] = ['fail', 'loading', 'success'];

  internalTypes.forEach((type) => {
    api[type] = (params: string | ToastOptions) => {
      if (isString(params)) {
        return Toast({ type, message: params });
      }

      return Toast({
        ...params,
        type,
      });
    };
  });
}

const ToastAPI = Toast as IToastAPI;

ToastAPI.resetDefaultOptions = resetDefaultOptions;
ToastAPI.setDefaultOptions = setDefaultOptions;
ToastAPI.allowMultiple = allowMultiple;
ToastAPI.clear = clear;

if (process.env.NODE_ENV === 'test') {
  ToastAPI.__reset = reset;
}

setAPI(ToastAPI);

export default ToastAPI;

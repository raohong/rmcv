import { isString, isPlainObject, isBrowser, omit } from '@rmc-vant/utils';
import type {
  ToastType,
  ToastConfig,
  ToastConfigType,
  ToastInstance,
  ToastOptions,
  ToastWrapperInstance,
  ToastInterface,
  InternalAPIType,
} from './interface';
import createToastWrapper from './createToastWrapper';

let isMultiple = false;
let lastKey: string | null = null;
let toastWrapperInstance: ToastWrapperInstance | null = null;
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
    Object.assign(baseOptions, {
      ...defaultOptions.get(baseOptions.type!),
      ...params,
      type: santizeType(params.type),
    });
  }

  return baseOptions;
};

function allowMultiple() {
  isMultiple = true;
}

function setDefaultOptions(type: ToastConfigType, options: ToastConfig): void;
function setDefaultOptions(options: ToastConfig & { type?: ToastConfigType }): void;
function setDefaultOptions(
  type: ToastConfigType | (ToastConfig & { type?: ToastConfigType }),
  options?: any,
) {
  const internalType = isPlainObject(type) ? type.type ?? 'common' : type;
  const internalOptions = isPlainObject(type) ? type : options;

  if (configTypes.includes(internalType)) {
    defaultOptions.set(internalType, { ...omit(internalOptions, ['type']) });
  }
}

function resetDefaultOptions(type?: ToastConfigType) {
  if (!type) {
    defaultOptions.clear();
  } else if (configTypes.includes(type)) {
    defaultOptions.delete(type);
  }
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

  if (!toastWrapperInstance) {
    container = document.createElement('div');
    document.body.appendChild(container);
    toastWrapperInstance = createToastWrapper(container);
  }

  const type = santizeType(isString(params) ? 'normal' : params.type || 'normal');

  const options = {
    ...getOptions(type),
  };

  let key: string | null = null;

  if (isString(params)) {
    options.message = params;
  } else {
    Object.assign(options, params);
    if ('loadingType' in params && params.type === undefined) {
      options.type === 'loading';
    }
  }

  if (toastWrapperInstance.instance.current) {
    key = toastWrapperInstance.instance.current.create(isMultiple, options);
    lastKey = key;

    ref.current = {
      update(nextOptions: ToastOptions) {
        toastWrapperInstance!.instance.current?.update(key!, nextOptions);
      },
      close: () => {
        toastWrapperInstance!.instance.current?.close(key!);
      },
    };
  }

  return ref.current;
}

function clear(clearAll?: boolean) {
  if (toastWrapperInstance?.instance?.current) {
    toastWrapperInstance.instance.current.close(
      clearAll ? undefined : lastKey ?? undefined,
    );
  }
}

function reset() {
  resetDefaultOptions();
  isMultiple = false;
  lastKey = null;
  toastWrapperInstance = null;

  if (container) {
    container.parentNode?.removeChild(container);
    container = null;
  }
}

function setAPI(api: ToastInterface) {
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

const ToastAPI = Toast as ToastInterface;

ToastAPI.resetDefaultOptions = resetDefaultOptions;
ToastAPI.setDefaultOptions = setDefaultOptions;
ToastAPI.allowMultiple = allowMultiple;
ToastAPI.clear = clear;

if (process.env.NODE_ENV === 'test') {
  ToastAPI.__reset = reset;
}

setAPI(ToastAPI);

export default ToastAPI;

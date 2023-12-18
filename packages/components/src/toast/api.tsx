import { isBrowser, isPlainObject, isString, omit } from '@rmc-vant/utils';
import createToastWrapper from './createToastWrapper';
import type {
  ToastConfig,
  ToastConfigType,
  ToastOptions,
  ToastType,
  ToastWrapperInstance,
} from './interface';

let lastKey: string | null = null;
let toastWrapperInstance: ToastWrapperInstance | null = null;
let container: HTMLElement | null = null;
const defaultOptions = new Map<ToastConfigType, ToastConfig>();

const types: ToastType[] = ['fail', 'loading', 'normal', 'success'];
const configTypes: ToastConfigType[] = [...types, 'common'];

const getOptions = (type: ToastType, message: string | ToastOptions) => {
  const baseOptions: ToastOptions = {
    ...defaultOptions.get('common'),
  };

  if (isString(message)) {
    baseOptions.message = message;
    Object.assign(baseOptions, defaultOptions.get(baseOptions.type!));
  } else {
    Object.assign(baseOptions, {
      ...defaultOptions.get(type),
      ...message,
      type,
    });
  }

  return baseOptions;
};

export function allowMultipleToast() {
  getToastWrapperInstance()?.instance.current?.setMultiple(true);
}

export function setToastDefaultOptions(
  type: ToastConfigType,
  options: ToastConfig,
): void;
export function setToastDefaultOptions(
  options: ToastConfig & { type?: ToastConfigType },
): void;
export function setToastDefaultOptions(
  type: ToastConfigType | (ToastConfig & { type?: ToastConfigType }),
  options?: any,
) {
  const internalType = isPlainObject(type) ? type.type ?? 'common' : type;
  const internalOptions = isPlainObject(type) ? type : options;

  if (configTypes.includes(internalType)) {
    defaultOptions.set(internalType, { ...omit(internalOptions, ['type']) });
  }
}

export function resetToastDefaultOptions(type?: ToastConfigType) {
  if (!type) {
    defaultOptions.clear();
  } else if (configTypes.includes(type)) {
    defaultOptions.delete(type);
  }
}

const getToastWrapperInstance = () => {
  if (!isBrowser) {
    return;
  }

  if (!toastWrapperInstance) {
    container = document.createElement('div');
    document.body.appendChild(container);
    toastWrapperInstance = createToastWrapper(container);
  }

  return toastWrapperInstance;
};

export function showToast(message: string | ToastOptions) {
  const instance = getToastWrapperInstance();
  return instance?.instance.current?.showToast(getOptions('normal', message));
}

export function showFailToast(message: string | Omit<ToastOptions, 'type'>) {
  const instance = getToastWrapperInstance();
  return instance?.instance.current?.showFailToast(getOptions('fail', message));
}

export function showLoadingToast(message: string | Omit<ToastOptions, 'type'>) {
  const instance = getToastWrapperInstance();
  return instance?.instance.current?.showLoadingToast(
    getOptions('loading', message),
  );
}
export function showSuccessToast(message: string | Omit<ToastOptions, 'type'>) {
  const instance = getToastWrapperInstance();
  return instance?.instance.current?.showSuccessToast(
    getOptions('success', message),
  );
}

export function clearToast(clearAll?: boolean) {
  if (toastWrapperInstance?.instance?.current) {
    toastWrapperInstance.instance.current.close(
      clearAll ? undefined : lastKey ?? undefined,
    );
  }
}

export function resetToast() {
  resetToastDefaultOptions();
  lastKey = null;
  toastWrapperInstance = null;

  if (container) {
    container.parentNode?.removeChild(container);
    container = null;
  }
}

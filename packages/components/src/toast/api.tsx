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
  }
  else {
    Object.assign(baseOptions, {
      ...defaultOptions.get(type),
      ...message,
      type,
    });
  }

  return baseOptions;
};

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
  const internalType = isPlainObject(type) ? (type.type ?? 'common') : type;
  const internalOptions = isPlainObject(type) ? type : options;

  if (configTypes.includes(internalType)) {
    defaultOptions.set(internalType, { ...omit(internalOptions, ['type']) });
  }
}

export function resetToastDefaultOptions(type?: ToastConfigType) {
  if (!type) {
    defaultOptions.clear();
  }
  else if (configTypes.includes(type)) {
    defaultOptions.delete(type);
  }
}

const getToastWrapperInstance = async () => {
  if (!isBrowser) {
    return;
  }

  if (!toastWrapperInstance) {
    container = document.createElement('div');
    document.body.appendChild(container);

    toastWrapperInstance = createToastWrapper(container!);
  }

  return toastWrapperInstance;
};

export async function allowMultipleToast() {
  return (await getToastWrapperInstance())?.instance.current?.setMultiple(true);
}

export async function showToast(message: string | ToastOptions) {
  const instance = await getToastWrapperInstance();

  instance?.instance.current?.showToast(getOptions('normal', message));
}

export async function showFailToast(message: string | Omit<ToastOptions, 'type'>) {
  const instance = await getToastWrapperInstance();
  instance?.instance.current?.showFailToast(getOptions('fail', message));
}

export async function showLoadingToast(
  message: string | Omit<ToastOptions, 'type'>,
) {
  const instance = await getToastWrapperInstance();
  instance?.instance.current?.showLoadingToast(getOptions('loading', message));
}
export async function showSuccessToast(
  message: string | Omit<ToastOptions, 'type'>,
) {
  const instance = await getToastWrapperInstance();
  instance?.instance.current?.showSuccessToast(getOptions('success', message));
}

export function clearToast(clearAll?: boolean) {
  if (toastWrapperInstance?.instance?.current) {
    toastWrapperInstance.instance.current.close(
      clearAll ? undefined : (lastKey ?? undefined),
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

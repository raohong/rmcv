import { isBrowser } from '@rmc-vant/utils';
import createDialogWrapper from './createDialogWrapper';
import type { DialogOptions, DialogType, DialogWrapperInstance } from './interface';

let defaultOptionsStore: Partial<DialogOptions> = {};
let dialogWrapperInstance: DialogWrapperInstance | null = null;
let container: HTMLElement | null = null;
let lastKey: string | null = null;

export const resetDefaultOptions = () => {
  defaultOptionsStore = {};
};

export const setDefaultOptions = (options: Partial<DialogOptions>) => {
  Object.assign(defaultOptionsStore, options);
};

async function createDialogInstance(options: DialogOptions = {}, type?: DialogType) {
  if (!isBrowser) {
    throw new Error('Imperative API runs only on the browser side');
  }

  if (!container) {
    container = document.createElement('div');
    document.body.appendChild(container);
  }

  if (!dialogWrapperInstance) {
    dialogWrapperInstance = await createDialogWrapper(container!);
  }

  if (!dialogWrapperInstance.instance?.current) {
    throw new Error('Create DialogWrapper Instance failed');
  }

  return new Promise<void>((resolve, reject) => {
    lastKey = dialogWrapperInstance!.instance!.current!.open(options, {
      resolve,
      reject: type === 'confirm' ? reject : undefined,
    });
  });
}

export const showDialog = (options: DialogOptions) => createDialogInstance(options);

export const showConfirmDialog = (options: DialogOptions) =>
  createDialogInstance(
    {
      ...options,
      showCancelButton: true,
      overlayClosable: false,
    },
    'confirm',
  );

export const showAlertDialog = (options: DialogOptions) =>
  createDialogInstance(options, 'alert');

export const closeDialog = (all?: boolean) => {
  if (dialogWrapperInstance?.instance?.current) {
    dialogWrapperInstance.instance.current.close(
      all ? undefined : (lastKey ?? undefined),
    );
  }
};

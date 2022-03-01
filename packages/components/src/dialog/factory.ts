import { isBrowser } from '@rmc-vant/utils';
import createDialogWrapper from './createDialogWrapper';
import type {
  DialogOptions,
  DialogWrapperInstance,
  DialogType,
  DialogInterface,
} from './interface';

let defaultOptionsStore: Partial<DialogOptions> = {};
let dialogWrapperInstance: DialogWrapperInstance | null = null;
let container: HTMLElement | null = null;
let lastKey: string | null = null;

const resetDefaultOptions = () => {
  defaultOptionsStore = {};
};

const setDefaultOptions = (options: Partial<DialogOptions>) => {
  Object.assign(defaultOptionsStore, options);
};

function createDialogInstance(options: DialogOptions = {}, type?: DialogType) {
  if (!isBrowser) {
    throw Error('Imperative API runs only on the browser side');
  }

  if (!container) {
    container = document.createElement('div');
    document.body.appendChild(container);
  }

  if (!dialogWrapperInstance) {
    dialogWrapperInstance = createDialogWrapper(container!);
  }

  if (!dialogWrapperInstance.instance?.current) {
    throw Error('Create DialogWrapper Instace failed');
  }

  return new Promise<void>((resolve, reject) => {
    lastKey = dialogWrapperInstance!.instance!.current!.open(options, {
      resolve,
      reject: type === 'confirm' ? reject : undefined,
    });
  });
}

function NomralDialog(options: DialogOptions) {
  return createDialogInstance(options);
}

const Dialog = NomralDialog as DialogInterface;

Dialog.resetDefaultOptions = resetDefaultOptions;
Dialog.setDefaultOptions = setDefaultOptions;
Dialog.confirm = (options: DialogOptions) =>
  createDialogInstance(
    {
      ...options,
      showCancelButton: true,
      overlayClosable: false,
    },
    'confirm',
  );

Dialog.alert = (options: DialogOptions) => createDialogInstance(options, 'alert');

Dialog.close = (all?: boolean) => {
  if (dialogWrapperInstance?.instance?.current) {
    dialogWrapperInstance.instance.current.close(
      all ? undefined : lastKey ?? undefined,
    );
  }
};

export default Dialog;

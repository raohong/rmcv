import InternalDialogComponent from './Dialog';
import Dialog from './factory';

export type {
  DialogAction,
  DialogInterface,
  DialogOptions,
  DialogProps,
  DialogType,
  DialogThemeConfig,
} from './interface';

export const DialogComponent = InternalDialogComponent;

export default Dialog;

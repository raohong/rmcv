import InternalDialogComponent from './Dialog';
import Dialog from './factory';
import './style';

export type {
  DialogAction,
  DialogInterface,
  DialogOptions,
  DialogProps,
  DialogType,
} from './interface';

export const DialogComponent = InternalDialogComponent;

export default Dialog;

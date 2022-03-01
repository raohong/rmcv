import './style';

import InternalDialogComponent from './Dialog';
import Dialog from './factory';

export type {
  DialogAction,
  DialogInterface,
  DialogOptions,
  DialogProps,
  DialogType,
} from './interface';

export const DialogComponent = InternalDialogComponent;

export default Dialog;

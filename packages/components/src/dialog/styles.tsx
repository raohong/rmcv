import { styled } from '@rmc-vant/system';
import Popup from '../popup';
import { DialogName } from './classNames';
import { DialogComponentState } from './interface';

export const DialogRoot = styled<typeof Popup, DialogComponentState>(Popup, {
  name: DialogName,
  slot: 'root',
})(({ theme }) => ({
  borderRadius: 16,
  textAlign: 'center',
  overflow: 'hidden',
  width: 'max(90%, 320px)',
  backgroundColor: theme.palette.background.light,
}));

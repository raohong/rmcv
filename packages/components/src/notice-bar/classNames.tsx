import { generateComponentClassNameUtility } from '@rmc-vant/system';
import type { NoticeBarComponentState, NoticeBarSlot } from './interface';

export const NoticeBarName = 'NoticeBar';

export const {
  noticeBarClassNames,
  composeNoticeBarSlotClassNames,
  getNoticeBarSlotClassNames,
} = generateComponentClassNameUtility<
  typeof NoticeBarName,
  NoticeBarComponentState,
  NoticeBarSlot,
  'root' | 'leftIcon' | 'rightIcon' | 'content'
>(
  NoticeBarName,
  {
    root: true,
    leftIcon: true,
    rightIcon: true,
    content: true,
    closeIcon: true,
  },
  ({ mode }) => ({
    root: ['root'],
    leftIcon: ['leftIcon'],
    rightIcon: ['rightIcon', mode === 'closeable' && 'closeable'],
    content: ['content'],
  }),
);

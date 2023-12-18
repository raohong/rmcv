import { generateComponentClassNameUtility } from '@rmc-vant/system';
import { camelCase } from '@rmc-vant/utils';
import { ListComponentState, ListLoadingStatus, ListSlot } from './interface';

export const ListName = 'List';

export const { listClassNames, getListSlotClassNames, composeListSlotClassNames } =
  generateComponentClassNameUtility<
    typeof ListName,
    ListComponentState,
    ListSlot,
    'root' | 'loadingIcon' | 'text'
  >(
    ListName,
    {
      root: true,
      text: true,
      textStatusError: true,
      textStatusFinished: true,
      textStatusLoading: true,
      loadingIcon: true,
    },
    ({ status }: ListComponentState) => ({
      root: ['root'],
      loadingIcon: ['loadingIcon'],
      text: [
        'text',
        status !== ListLoadingStatus.NONE && camelCase(`text-status-${status}`),
      ],
    }),
  );

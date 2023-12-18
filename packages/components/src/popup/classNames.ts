import { generateComponentClassNameUtility } from '@rmc-vant/system';
import { camelCase } from '@rmc-vant/utils';
import type { PopupComponentState, PopupNSlot, PopupSlot } from './interface';

export const PopupName = 'Popup';

export const {
  popupClassNames,
  getPopupSlotClassNames,
  composePopupSlotClassNames,
} = generateComponentClassNameUtility<
  typeof PopupName,
  PopupComponentState,
  PopupSlot,
  PopupNSlot
>(
  PopupName,
  {
    root: true,
    overlay: true,
    closeIcon: true,
    closeIconBottomLeft: true,
    closeIconBottomRight: true,
    closeIconTopLeft: true,
    closeIconTopRight: true,
    positionBottom: true,
    positionLeft: true,
    positionTop: true,
    positionRight: true,
    positionCenter: true,
    round: true,
  },
  ({ round, position, closeIconPosition }: PopupComponentState) => {
    return {
      root: [
        'root',
        round && 'round',
        position !== 'none' && camelCase(`position-${position}`),
      ],
      overlay: ['overlay'],
      closeIcon: ['closeIcon', camelCase(`closeIcon-${closeIconPosition}`)],
    };
  },
);

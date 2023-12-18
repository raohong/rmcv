import { generateComponentClassNameUtility } from '@rmc-vant/system';

export const CountDownName = 'CountDown';

export const {
  countDownClassNames,
  composeCountDownSlotClassNames,
  getCountDownSlotClassNames,
} = generateComponentClassNameUtility(CountDownName, {
  root: true,
});

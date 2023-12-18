import { generateComponentClassNameUtility } from '@rmc-vant/system';
import { camelCase } from '@rmc-vant/utils';
import type {
  StepComponentState,
  StepNSlot,
  StepSlot,
  StepsComponentState,
  StepsNSlot,
  StepsSlot,
} from './interface';

export const StepsName = 'Steps';

export const StepName = 'Step';

export const {
  stepsClassNames,
  composeStepsSlotClassNames,
  getStepsSlotClassNames,
} = generateComponentClassNameUtility<
  typeof StepsName,
  StepsComponentState,
  StepsSlot,
  StepsNSlot
>(
  StepsName,
  {
    root: true,

    vertical: true,
    horizontal: true,
  },
  ({ direction }) => ({
    root: ['root', direction],
  }),
);

export const { stepClassNames, composeStepSlotClassNames, getStepSlotClassNames } =
  generateComponentClassNameUtility<
    typeof StepName,
    StepComponentState,
    StepSlot,
    StepNSlot
  >(
    StepName,
    {
      root: true,
      title: true,
      tail: true,
      icon: true,
      iconWrapper: true,
      dot: true,
      process: true,
      processDot: true,
      processIcon: true,
      processTail: true,
      processTitle: true,
      finish: true,
      finishDot: true,
      finishIcon: true,
      finishTail: true,
      finishTitle: true,
      wait: true,
      waitDot: true,
      waitIcon: true,
      waitTail: true,
      waitTitle: true,
    },
    ({ status }) => ({
      root: ['root', status],
      title: ['title', camelCase(`${status}-title`)],
      tail: ['tail', camelCase(`${status}-tail`)],
      icon: ['icon', camelCase(`${status}-icon`)],
      dot: ['dot', camelCase(`${status}-dot`)],
      iconWrapper: ['iconWrapper'],
    }),
  );

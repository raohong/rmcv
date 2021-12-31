export type {
  StepStatus,
  StepProps,
  StepsProps,
  StepsDirection,
} from './interface';

import Step from './Step';
import InternalSteps from './Steps';

type InternalStepsType = typeof InternalSteps;

export interface StepsType extends InternalStepsType {
  Item: typeof Step;
}

const Steps = InternalSteps as StepsType;

Steps.Item = Step;

export default Steps;

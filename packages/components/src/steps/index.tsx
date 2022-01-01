import './style';

export type {
  StepStatus,
  StepProps,
  StepsProps,
  StepsDirection,
} from './interface';
import InternalStep from './Step';
import InternalSteps from './Steps';

export const Steps = InternalSteps;
export const Step = InternalStep;

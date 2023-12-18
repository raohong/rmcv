import { TLength } from './utils';

export type RadiiProps = {
  sm: TLength;
  md: TLength;
  lg: TLength;
  max: TLength;
};

export const radii: RadiiProps = {
  sm: 2,
  md: 4,
  lg: 8,
  max: 999,
};

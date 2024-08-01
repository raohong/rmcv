import { useId as _useId } from 'react';
import { useConfigContext } from '../config-provider';

export const useXId = () => {
  const { prefix } = useConfigContext();
  const id = _useId();

  return `${prefix}-${id}`;
};

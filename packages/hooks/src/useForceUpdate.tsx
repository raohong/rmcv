import { useCallback, useState } from 'react';

export const useForceUpdate = () => {
  const [, set] = useState(0);

  const forceUpdate = useCallback(() => {
    set(p => p + 1);
  }, []);

  return forceUpdate;
};

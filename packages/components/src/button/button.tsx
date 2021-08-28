import React from 'react';
import { useConfigContext } from '../config-provider';
import '../style';

export const Button = React.forwardRef(() => {
  const { getPrefixCls } = useConfigContext();

  return <button type="button" aria-label="dq" />;
});

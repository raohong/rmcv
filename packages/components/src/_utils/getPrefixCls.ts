const PREFIX = 'rmcv';

export const getPrefixCls = (suffixCls?: string, customizePrefixCls?: string) =>
  `${customizePrefixCls ?? PREFIX}${suffixCls ? `-${suffixCls}` : ''}`;

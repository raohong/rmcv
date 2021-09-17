const PREFIX = 'rmcvant';

export const getPrefixCls = (suffixCls?: string, customizePrefixCls?: string) =>
  customizePrefixCls || `${PREFIX}${suffixCls ? `-${suffixCls}` : ''}`;

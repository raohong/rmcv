const PREFIX = 'rmc-vant';

export const getPrefixCls = (suffixCls?: string, customizePrefixCls?: string) =>
  customizePrefixCls || `${PREFIX}${suffixCls ? `-${suffixCls}` : ''}`;

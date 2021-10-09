const PREFIX = 'rmcvant';

const getPrefixCls = (suffixCls?: string, customizePrefixCls?: string) =>
  customizePrefixCls || `${PREFIX}${suffixCls ? `-${suffixCls}` : ''}`;

export default getPrefixCls;

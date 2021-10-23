const PREFIX = 'rmcv';

const getPrefixCls = (suffixCls?: string, customizePrefixCls?: string) =>
  `${customizePrefixCls ?? PREFIX}${suffixCls ? `-${suffixCls}` : ''}`;

export default getPrefixCls;

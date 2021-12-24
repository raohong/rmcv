import React, { memo } from 'react';
import { useConfigContext } from '../config-provider';
import { usePrevious } from '../_hooks';
import NumberScroller from './NumberScroller';
import type { BadgeCountProps, NumberDir, NumberSign } from './interface';

const BadgeCount: React.FC<BadgeCountProps> = ({ count, showZero }) => {
  const previous = usePrevious(count);
  const { getPrefixCls } = useConfigContext();

  /**
   * 如果当前值是0且不显示，为了动画，当次渲染使用以前的 count
   */
  const persisted = count !== previous && count === 0 && !showZero;
  const value = (persisted ? previous : count) as number;
  const list = String(Math.abs(value)).split('').map(Number);
  const sign =
    previous === undefined ? 0 : (Math.sign(value - previous) as NumberSign);

  // value 为0 的时候， dir 取 sign 的反值
  const dir = // eslint-disable-next-line no-nested-ternary
  (value < 0 ? -1 : value > 0 ? 1 : sign === 0 ? 1 : -sign) as NumberDir;

  return (
    <span
      title={String(value)}
      className={getPrefixCls('badge-number-wrapper')}
    >
      {value < 0 && <span>-</span>}
      {list.map((item, index) => (
        <NumberScroller
          baseCls={getPrefixCls('badge-number')}
          dir={dir}
          sign={sign}
          value={item}
          // eslint-disable-next-line react/no-array-index-key
          key={list.length - 1 - index}
        />
      ))}
    </span>
  );
};

export default memo(BadgeCount);

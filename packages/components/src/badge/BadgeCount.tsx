import { usePrevious } from '@rmc-vant/hooks';
import React, { memo } from 'react';
import NumberScroller from './NumberScroller';
import type { BadgeComponentState, NumberDir, NumberSign } from './interface';
import { StyledBadgeNumber, StyledBadgeNumberWrapper } from './styles';

const BadgeCount: React.FC<{
  count: number;
  showZero?: boolean;
  componentState: BadgeComponentState;
  className?: string;
  wrapperClassName?: string;
}> = ({ count, showZero, componentState, wrapperClassName, className }) => {
  const previous = usePrevious(count);

  /**
   * 如果当前值是0且不显示，为了动画，当次渲染使用以前的 count
   */
  const persisted = count !== previous && count === 0 && !showZero;
  const value = (persisted ? previous : count) as number;
  const list = String(Math.abs(value)).split('').map(Number);
  const sign =
    previous === undefined ? 0 : (Math.sign(value - previous) as NumberSign);

  // value 为0 的时候， dir 取 sign 的反值
  const dir = (value < 0 ? -1 : value > 0 ? 1 : sign === 0 ? 1 : -sign) as NumberDir; // eslint-disable-next-line no-nested-ternary

  return (
    <StyledBadgeNumberWrapper
      className={wrapperClassName}
      componentState={componentState}
      title={String(value)}
    >
      {value < 0 && <span>-</span>}
      {list.map((item, index) => (
        <StyledBadgeNumber
          className={className}
          componentState={componentState} // eslint-disable-next-line react/no-array-index-key
          key={list.length - 1 - index}
        >
          <NumberScroller dir={dir} sign={sign} value={item} />
        </StyledBadgeNumber>
      ))}
    </StyledBadgeNumberWrapper>
  );
};

export default memo(BadgeCount);

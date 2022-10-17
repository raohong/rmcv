import { getBoundingClientRect } from '@rmc-vant/utils';
import classNames from 'classnames';
import React from 'react';
import { useConfigContext } from '../config-provider';
import type { RateItemProps } from './interface';

const RateItem: React.FC<RateItemProps> = ({
  icon,
  voidIcon,
  value,
  color,
  index,
  allowHalf,
  onClickChange,
  clickable,
}) => {
  const { getPrefixCls } = useConfigContext();
  const cls = getPrefixCls('rate-item');

  const handleChange = (evt: React.MouseEvent<HTMLDivElement>) => {
    if (!clickable) {
      return;
    }

    if (!allowHalf) {
      onClickChange(index);
      return;
    }

    const { clientX } = evt;
    const rect = getBoundingClientRect(evt.currentTarget);
    const isAtLeft = clientX <= rect.width / 2 + rect.left;

    onClickChange(isAtLeft ? index - 0.5 : index);
  };
  const fullIconVisible = value > index - 1;
  const progress = (Math.max(0, 1 - (value - index + 1)) / 1) * 100;

  return (
    <div className={cls} onClick={handleChange}>
      {React.cloneElement(voidIcon, {
        className: classNames(getPrefixCls('rate-icon'), voidIcon.props.className),
      })}
      {fullIconVisible && (
        <div
          className={getPrefixCls('rate-item-overlay')}
          style={{
            clipPath: progress > 0 ? `inset(0 ${progress}% 0 0)` : undefined,
          }}
        >
          {React.cloneElement(icon, {
            className: classNames(
              getPrefixCls('rate-icon'),
              getPrefixCls('rate-full-icon'),
              icon.props.className,
            ),
            style: {
              ...icon.props.style,
              color,
            },
          })}
        </div>
      )}
    </div>
  );
};

export default RateItem;

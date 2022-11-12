import { useControllableValue, useMeasure, useMergeRefs } from '@rmc-vant/hooks';
import { StarFilled, StarOutlined } from '@rmc-vant/icons';
import { clamp, getBoundingClientRect, omit } from '@rmc-vant/utils';
import { useDrag } from '@use-gesture/react';
import classNames from 'classnames';
import React, { useMemo, useRef } from 'react';
import { useConfigContext } from '../config-provider';
import RateItem from './RateItem';
import type { RateProps } from './interface';

const getIcon = <P extends { className: string; style?: React.CSSProperties }>(
  target: React.ReactNode,
  getDefault: () => React.ReactElement<P>,
): React.ReactElement<P> => {
  if (!target) {
    return getDefault();
  }

  return React.isValidElement(target) ? target : <span>{target}</span>;
};

const Rate = React.forwardRef<HTMLDivElement, RateProps>(
  (
    {
      className,
      size,
      gutter,
      color,
      disabled,
      voidColor,
      icon,
      voidIcon,
      disabledColor,
      allowHalf,
      readonly,
      style,
      touchable = true,
      count = 5,
      ...rest
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
    const domRef = useRef<HTMLDivElement>(null);
    const [value, setValue] = useControllableValue(rest, {
      defaultValue: 0,
    });

    const mergedRef = useMergeRefs(domRef, ref);
    const list = Array.from({ length: count }, (_, i) => i + 1);
    const renderedValue = useMemo(() => {
      let target = value;

      if (allowHalf && !readonly && value % 0.5 !== 0) {
        target = Math.floor(value);
      }

      return clamp(0, target, count);
    }, [value, allowHalf, readonly, count]);

    const { data } = useMeasure({
      ref: domRef,
      format: (el) => {
        if (!el) {
          return Array.from({ length: count }, () => ({ left: 0, width: 0 }));
        }

        return Array.from(el.querySelectorAll(`.${cls}-item`)).reduce(
          (offsets, item) => {
            const { left, width } = getBoundingClientRect(item);

            offsets.push({
              width,
              left,
            });

            return offsets;
          },
          [] as { left: number; width: number }[],
        );
      },
    });

    useDrag(
      ({ tap, values: [cx] }) => {
        if (tap) {
          return;
        }

        const index = data.findIndex(
          (item) => cx >= item.left + item.width / 5 && cx < item.left + item.width,
        );

        if (index !== -1) {
          const target = data[index];
          const value =
            cx > target.left + target.width / 2 ? index + 1 : index + 0.5;

          setValue(allowHalf ? value : Math.round(value));
        } else if (cx < data[0].left) {
          setValue(0);
        }
      },
      {
        enabled: touchable && !readonly && !disabled,
        target: domRef,
        axis: 'x',
        pointer: {
          touch: true,
        },
        preventScrollAxis: 'x',
        eventOptions: {
          passive: false,
        },
        filterTaps: true,
      },
    );

    const cls = getPrefixCls('rate');
    const internalIcon = getIcon(icon, () => <StarFilled />);
    const internalVoidIcon = getIcon(voidIcon, () => <StarOutlined />);

    return (
      <div
        className={classNames(
          cls,
          {
            [`${cls}-disabled`]: disabled,
            [`${cls}-readonly`]: readonly,
          },
          cls,
        )}
        ref={mergedRef}
        {...omit(rest, ['children', 'value', 'onChange', 'defaultValue'])}
        style={{
          columnGap: gutter,
          color: disabled ? disabledColor : voidColor,
          ...style,
        }}
      >
        {list.map((item) => (
          <RateItem
            key={item}
            onClickChange={setValue}
            color={color}
            index={item}
            value={renderedValue}
            allowHalf={allowHalf}
            icon={internalIcon}
            voidIcon={internalVoidIcon}
            clickable={!disabled && !readonly}
          />
        ))}
      </div>
    );
  },
);

export default Rate;

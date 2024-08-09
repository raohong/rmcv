'use-client';

import { useControllableValue, useMergeRefs } from '@rmc-vant/hooks';
import { StarFilled, StarOutlined } from '@rmc-vant/icons';
import { useComponentTheme } from '@rmc-vant/system';
import { clamp, getBoundingClientRect, omit } from '@rmc-vant/utils';
import { useDrag } from '@use-gesture/react';
import clsx from 'clsx';
import React, { useMemo, useRef } from 'react';
import { useThemeProps } from '../config-provider';
import { RateName, composeRateSlotClassNames } from './classNames';
import type { RateComponentState, RateProps } from './interface';
import { RateFullIcon, RateIcon, RateItem, RateMask, RateRoot } from './styles';

const getIcon = <P extends { className: string; style?: React.CSSProperties }>(
  target: React.ReactNode,
  getDefault: () => React.ReactElement<P>,
): React.ReactElement<P> => {
  if (!target) {
    return getDefault();
  }

  return React.isValidElement(target) ? target : <span>{target}</span>;
};

const Rate = React.forwardRef<HTMLDivElement, RateProps>((props, ref) => {
  const {
    className,
    gutter,
    color,
    voidColor,
    icon,
    voidIcon,
    disabledColor,
    allowHalf,
    size = 20,
    disabled = false,
    touchable = true,
    readonly = false,
    count = 5,
    ...rest
  } = useThemeProps(RateName, props);
  const domRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useControllableValue(rest, {
    defaultValue: 0,
  });
  const theme = useComponentTheme();
  const componentState: RateComponentState = useMemo(
    () => ({
      readonly,
      disabled,
      voidColor: voidColor ?? theme.palette.gray500,
      color: color ?? theme.palette.danger,
      disabledColor: disabledColor ?? theme.palette.gray500,
      size,
      gutter,
    }),
    [theme, readonly, voidColor, disabled, color, size, gutter, disabledColor],
  );
  const slotClassNames = composeRateSlotClassNames(componentState);

  const mergedRef = useMergeRefs(domRef, ref);
  const list = Array.from({ length: count }, (_, i) => i + 1);
  const renderedValue = useMemo(() => {
    let target = value;

    if (allowHalf && !readonly && value % 0.5 !== 0) {
      target = Math.floor(value);
    }

    return clamp(0, target, count);
  }, [value, allowHalf, readonly, count]);

  const getOffsets = () => {
    if (!domRef.current) {
      return undefined;
    }

    return (Array.from(domRef.current.childNodes) as HTMLDivElement[])
      .reduce(
        (offsets, item) => {
          const { left, width } = getBoundingClientRect(item);

          offsets.push({
            width,
            left,
          });

          return offsets;
        },
        [] as { left: number; width: number }[],
      )
      .sort((a, b) => a.left - b.left);
  };

  const handleChange = (index: number, evt: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || readonly) {
      return;
    }

    if (!allowHalf) {
      setValue(index);
      return;
    }

    const { clientX } = evt;
    const rect = getBoundingClientRect(evt.currentTarget);
    const isAtLeft = clientX <= rect.width / 2 + rect.left;

    setValue(isAtLeft ? index - 0.5 : index);
  };

  useDrag(
    ({ tap, values: [cx], memo }) => {
      if (tap) {
        return;
      }

      const offsets = (memo || getOffsets()) as
        | undefined
        | {
          left: number;
          width: number;
        }[];

      if (!offsets) {
        return;
      }

      const index = offsets.findIndex(
        (item, index) =>
          index < count - 1 && cx >= item.left && cx < offsets[index + 1].left,
      );

      if (index !== -1) {
        const target = offsets[index];
        const value = cx >= target.left + target.width / 2 ? index + 0.5 : index;

        setValue(allowHalf ? value : Math.floor(value));
      }
      else {
        setValue(cx < offsets[0].left ? 0 : count - 1);
      }

      return offsets;
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

  const internalIcon = getIcon(icon, () => <StarFilled />);
  const internalVoidIcon = getIcon(voidIcon, () => <StarOutlined />);

  return (
    <RateRoot
      ref={mergedRef}
      className={clsx(className, slotClassNames.root)}
      {...omit(rest, ['children', 'value', 'onChange', 'defaultValue'])}
      aria-disabled={disabled}
      aria-readonly={readonly}
      data-value={value}
      componentState={componentState}
    >
      {list.map((index) => {
        const fullIconVisible = renderedValue > index - 1;
        const progress = (Math.max(0, 1 - (renderedValue - index + 1)) / 1) * 100;

        return (
          <RateItem

            key={index}
            role='button'
            tabIndex={0}
            componentState={componentState}
            className={slotClassNames.item}
            onClick={evt => handleChange(index, evt)}
          >
            <RateIcon
              componentState={componentState}
              className={slotClassNames.icon}
            >
              {internalVoidIcon}
            </RateIcon>
            {fullIconVisible && (
              <RateMask
                style={{
                  clipPath: `inset(0 ${progress}% 0 0)`,
                }}
                componentState={componentState}
                className={slotClassNames.mask}
              >
                <RateFullIcon
                  className={slotClassNames.fullIcon}
                  componentState={componentState}
                >
                  {internalIcon}
                </RateFullIcon>
              </RateMask>
            )}
          </RateItem>
        );
      })}
    </RateRoot>
  );
});

export default Rate;

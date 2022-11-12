import {
  useControllableValue,
  useMeasure,
  useMergeRefs,
  useUpdateIsomorphicLayoutEffect,
} from '@rmc-vant/hooks';
import {
  clamp,
  getBoundingClientRect,
  isArray,
  isHTMLElement,
  omit,
} from '@rmc-vant/utils';
import { useDrag } from '@use-gesture/react';
import classNames from 'classnames';
import React, { useMemo, useRef, useState } from 'react';
import '../_utils';
import { useConfigContext } from '../config-provider';
import { SliderProps } from './interface';
import {
  calculateNextValueByOffset,
  formatStep,
  getOffset,
  getPropKeys,
  normalizeValue,
  sanitize,
} from './utils';

enum RangeKey {
  MAX = 'max',
  MIN = 'min',
}

const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      step,
      className,
      barHeight,
      buttonSize,
      activeColor,
      inactiveColor,
      reverse,
      disabled,
      readonly,
      range,
      children,
      button,
      leftButton,
      rightButton,
      vertical,
      onAfterChange,
      onClick,
      min = 0,
      max = 100,
      style,
      ...props
    },
    ref,
  ) => {
    const isRangeMode = !!range;
    const internalMax = sanitize(max);
    const internalMin = sanitize(min);
    const totalLength = internalMax - internalMin;
    const internalStep = formatStep(sanitize(step), internalMin, internalMax);

    const { getPrefixCls } = useConfigContext();
    const cls = getPrefixCls('slider');

    const domRef = useRef<HTMLDivElement>(null);
    const mergedRef = useMergeRefs(domRef, ref);
    const {
      data: { width, height },
    } = useMeasure({ ref: domRef });

    const [animating, setAnimating] = useState(false);
    const [value, setValue] = useControllableValue(props, {
      defaultValue: isRangeMode ? [0, 0] : 0,
    });
    const [dragging, setDragging] = useState(false);

    const normalizedValue = useMemo(
      () => normalizeValue(value, isRangeMode),
      [value, isRangeMode],
    );
    const [valueMap, setValueMap] = useState<Record<RangeKey, number>>({
      [RangeKey.MAX]: normalizedValue[1],
      [RangeKey.MIN]: normalizedValue[0],
    });

    const distance = vertical ? height : width;
    const unit = distance / totalLength;
    const stepOffset = Number((unit * internalStep).toFixed(1));
    const orientation = vertical ? 'vertical' : 'horizontal';
    const { sizePropKey, valuePropKey, offsetPropKey } = getPropKeys(
      vertical,
      reverse,
    );

    const getInitialOffset = () =>
      getBoundingClientRect(domRef.current ?? null)[offsetPropKey];

    const bind = useDrag(
      ({
        tap,
        last,
        values,
        first,
        args: [key, bindedValue],
        memo = getInitialOffset(),
      }) => {
        if (tap) {
          return;
        }

        const dist = values[vertical ? 1 : 0];
        const currentOffset = clamp(
          reverse ? memo - dist : dist - memo,
          0,
          distance,
        );
        const currentValue = calculateNextValueByOffset(currentOffset, {
          last,
          stepOffset,
          distance,
          step: internalStep,
          min: internalMin,
          max: internalMax,
        });
        let nextValue: [number, number] | number = currentValue;

        if (isRangeMode) {
          const otherValue =
            valueMap[key === RangeKey.MAX ? RangeKey.MIN : RangeKey.MAX];
          nextValue = [currentValue, otherValue];
          nextValue.sort((a, b) => a - b);

          setValueMap((prev) => ({
            ...prev,
            [key as RangeKey]: currentValue,
          }));
        }

        if (first) {
          setDragging(true);
          setAnimating(false);
        }

        setValue(nextValue);

        if (last) {
          // todo 类型冲突
          onAfterChange?.(nextValue as any);
          setAnimating(currentValue !== bindedValue);
          setDragging(false);
        }

        return memo;
      },
      {
        eventOptions: {
          passive: false,
        },
        preventDefault: true,
        axis: vertical ? 'y' : 'x',
        enabled: !disabled && !readonly && stepOffset > 0,
        filterTaps: true,
      },
    );

    useUpdateIsomorphicLayoutEffect(() => {
      setValue((prev) => {
        if (isArray(prev)) {
          return isRangeMode ? prev : prev[0];
        }

        return isRangeMode ? [prev, prev] : prev;
      });
    }, [isRangeMode, setValue]);

    useUpdateIsomorphicLayoutEffect(() => {
      /**
       * 拖拽结束后并且过渡动画结束后
       * 重置坐标
       */
      if (!animating && isRangeMode && isArray(value) && !dragging) {
        setValueMap({
          [RangeKey.MIN]: value[0],
          [RangeKey.MAX]: value[1],
        });
      }
    }, [animating, value, isRangeMode, dragging]);

    const handleTransitionEnd = () => {
      setAnimating(false);
    };

    const handleClick = (evt: React.MouseEvent<HTMLDivElement>) => {
      onClick?.(evt);

      if (readonly || disabled || distance === 0) {
        return;
      }

      if (
        isHTMLElement(evt.target) &&
        (evt.target as HTMLElement).closest(`.${cls}-thumb`)
      ) {
        return;
      }

      const eventOffsetKey = vertical ? 'clientY' : 'clientX';
      const currentOffset = Math.abs(
        evt[eventOffsetKey] - getBoundingClientRect(domRef.current)[offsetPropKey],
      );
      const currentValue = calculateNextValueByOffset(currentOffset, {
        last: true,
        min: internalMin,
        stepOffset,
        step: internalStep,
        distance,
        max: internalMax,
      });

      let nextValue: [number, number] | number = currentValue;

      if (isRangeMode) {
        const key =
          Math.abs(currentValue - normalizedValue[0]) <=
          Math.abs(currentValue - normalizedValue[1])
            ? RangeKey.MIN
            : RangeKey.MAX;

        nextValue = [
          currentValue,
          valueMap[key === RangeKey.MAX ? RangeKey.MIN : RangeKey.MAX],
        ];
        nextValue.sort((a, b) => a - b);
        setValueMap((prev) => ({
          ...prev,
          [key]: currentValue,
        }));
        setAnimating(currentValue !== valueMap[key]);
      } else {
        setAnimating(nextValue !== normalizedValue[0]);
      }
      setValue(nextValue);
    };

    const getButton = (
      value: number,
      target?: React.ReactNode,
      listeners?: any,
      key?: string,
    ) => {
      const content = React.isValidElement(target) ? (
        target
      ) : (
        <span
          style={{
            width: buttonSize,
            height: buttonSize,
          }}
          className={`${cls}-thumb-content`}
        />
      );
      const offset = getOffset(value, internalMin, internalMax);

      return (
        <span
          aria-valuenow={value}
          aria-valuemax={internalMax}
          aria-valuemin={internalMin}
          role="slider"
          aria-disabled={disabled}
          aria-orientation={orientation}
          className={`${cls}-thumb`}
          style={{ [offsetPropKey]: offset }}
          key={key}
          {...listeners}
        >
          {content}
        </span>
      );
    };

    const renderButtons = () => {
      if (isRangeMode) {
        return [
          getButton(
            valueMap[RangeKey.MIN],
            leftButton?.(valueMap[RangeKey.MIN]),
            bind(RangeKey.MIN, valueMap[RangeKey.MIN]),
            RangeKey.MIN,
          ),
          getButton(
            valueMap[RangeKey.MAX],
            rightButton?.(valueMap[RangeKey.MAX]),
            bind(RangeKey.MAX, valueMap[RangeKey.MAX]),
            RangeKey.MAX,
          ),
        ];
      }

      return getButton(
        normalizedValue[0],
        button?.(normalizedValue[0]),
        bind('value', normalizedValue[0]),
      );
    };

    return (
      <div
        ref={mergedRef}
        className={classNames(
          cls,
          {
            [`${cls}-animating`]: animating,
            [`${cls}-vertical`]: vertical,
            [`${cls}-disabled`]: disabled,
            [`${cls}-readonly`]: readonly,
            [`${cls}-reverse`]: reverse,
          },
          className,
        )}
        onClick={handleClick}
        style={{
          [sizePropKey]: barHeight,
          ...style,
        }}
        {...omit(props, ['value', 'defaultValue', 'onChange'])}
      >
        <div
          style={{
            backgroundColor: inactiveColor,
          }}
          className={`${cls}-rail`}
        />
        <div
          style={
            isRangeMode
              ? {
                  [offsetPropKey]: getOffset(
                    Math.min(...normalizedValue),
                    internalMin,
                    internalMax,
                  ),
                  [valuePropKey]: getOffset(
                    Math.abs(normalizedValue[1] - normalizedValue[0]),
                    internalMin,
                    internalMax,
                  ),
                  backgroundColor: activeColor,
                }
              : {
                  [offsetPropKey]: 0,
                  [valuePropKey]: getOffset(
                    normalizedValue[0],
                    internalMin,
                    internalMax,
                  ),
                  backgroundColor: activeColor,
                }
          }
          className={`${cls}-track`}
          onTransitionEnd={handleTransitionEnd}
        />
        {renderButtons()}
      </div>
    );
  },
);

export default Slider;

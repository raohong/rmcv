'use-client';

import {
  useControllableValue,
  useMeasure,
  useMergeRefs,
  useUpdateIsomorphicLayoutEffect,
} from '@rmc-vant/hooks';
import { useComponentTheme } from '@rmc-vant/system';
import {
  clamp,
  getBoundingClientRect,
  isArray,
  isHTMLElement,
  omit,
} from '@rmc-vant/utils';
import { useDrag } from '@use-gesture/react';
import clsx from 'clsx';
import React, { useMemo, useRef, useState } from 'react';
import { useThemeProps } from '../config-provider';
import { SliderName, composeSliderSlotClassNames } from './classNames';
import type { SliderComponentState, SliderProps } from './interface';
import {
  SliderButton,
  SliderRail,
  SliderRoot,
  SliderThumb,
  SliderTrack,
} from './styles';
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

const Slider = React.forwardRef<HTMLDivElement, SliderProps>((_props, ref) => {
  const {
    step,
    className,
    activeColor,
    inactiveColor,
    range,
    children,
    button,
    leftButton,
    rightButton,
    onAfterChange,
    onClick,
    vertical = false,
    barHeight = 2,
    buttonSize = 24,
    reverse = false,
    disabled = false,
    readonly = false,
    min = 0,
    max = 100,
    classNames,
    ...props
  } = useThemeProps(SliderName, _props);
  const isRangeMode = !!range;
  const internalMax = sanitize(max);
  const internalMin = sanitize(min);
  const totalLength = internalMax - internalMin;
  const internalStep = formatStep(sanitize(step), internalMin, internalMax);

  const domRef = useRef<HTMLDivElement>(null);
  const mergedRef = useMergeRefs(domRef, ref);
  const {
    data: { width, height },
  } = useMeasure({ ref: domRef });

  const [animating, setAnimating] = useState(false);
  const [value, setValue] = useControllableValue(props, {
    defaultValue: isRangeMode ? ([0, 0] as [number, number]) : 0,
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

  const { palette } = useComponentTheme();
  const { sizePropKey, valuePropKey, offsetPropKey } = getPropKeys(
    vertical,
    reverse,
  );

  const componentState: SliderComponentState = useMemo(
    () => ({
      readonly,
      disabled,
      animating,
      reverse,
      activeColor: activeColor ?? palette.primary,
      inactiveColor: inactiveColor ?? palette.gray300,
      buttonSize,
      barHeight,
      vertical,
      sizeProp: sizePropKey,
    }),
    [
      readonly,
      disabled,
      animating,
      activeColor,
      inactiveColor,
      reverse,
      palette,
      barHeight,
      buttonSize,
      vertical,
      sizePropKey,
    ],
  );
  const slotClassNames = composeSliderSlotClassNames(componentState, classNames);

  const distance = vertical ? height : width;
  const unit = distance / totalLength;
  const stepOffset = Number((unit * internalStep).toFixed(1));
  const orientation = vertical ? 'vertical' : 'horizontal';

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
      const currentOffset = clamp(reverse ? memo - dist : dist - memo, 0, distance);
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
        const otherValue
          = valueMap[key === RangeKey.MAX ? RangeKey.MIN : RangeKey.MAX];
        nextValue = [currentValue, otherValue];
        nextValue.sort((a, b) => a - b);

        setValueMap(prev => ({
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
      isHTMLElement(evt.target)
      && (evt.target as HTMLElement).closest(`.${slotClassNames.thumb}`)
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
      const key
        = Math.abs(currentValue - normalizedValue[0])
        <= Math.abs(currentValue - normalizedValue[1])
          ? RangeKey.MIN
          : RangeKey.MAX;

      nextValue = [
        currentValue,
        valueMap[key === RangeKey.MAX ? RangeKey.MIN : RangeKey.MAX],
      ];
      nextValue.sort((a, b) => a - b);
      setValueMap(prev => ({
        ...prev,
        [key]: currentValue,
      }));
      setAnimating(currentValue !== valueMap[key]);
    }
    else {
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
    const content = React.isValidElement(target)
      ? (
          target
        )
      : (
          <SliderButton
            componentState={componentState}
            className={slotClassNames.button}
          />
        );
    const offset = getOffset(value, internalMin, internalMax);

    return (
      <SliderThumb
        componentState={componentState}
        aria-valuenow={value}
        aria-valuemax={internalMax}
        aria-valuemin={internalMin}
        role='slider'
        aria-disabled={disabled}
        aria-orientation={orientation}
        className={slotClassNames.thumb}
        style={{
          [offsetPropKey]: offset,
          cursor: dragging ? 'grabbing' : undefined,
        }}
        key={key}
        {...listeners}
      >
        {content}
      </SliderThumb>
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
    <SliderRoot
      ref={mergedRef}
      className={clsx(className, slotClassNames.root)}
      onClick={handleClick}
      {...omit(props, ['value', 'defaultValue', 'onChange'])}
      componentState={componentState}
    >
      <SliderRail componentState={componentState} className={slotClassNames.rail} />
      <SliderTrack
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
              }
            : {
                [offsetPropKey]: 0,
                [valuePropKey]: getOffset(
                  normalizedValue[0],
                  internalMin,
                  internalMax,
                ),
              }
        }
        componentState={componentState}
        className={slotClassNames.track}
        onTransitionEnd={handleTransitionEnd}
      />
      {renderButtons()}
    </SliderRoot>
  );
});

export default Slider;

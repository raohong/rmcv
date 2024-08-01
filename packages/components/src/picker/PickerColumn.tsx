import { useSpring } from '@react-spring/web';
import { useUpdateEffect } from '@rmc-vant/hooks';
import { clamp, isNumber } from '@rmc-vant/utils';
import { useDrag } from '@use-gesture/react';
import { useRef } from 'react';
import { getDataOrAriaProps } from '../_utils';
import type { PickerColumnProps, PickerValue } from './interface';
import { PickerColumnRoot, PickerColumnWrapper, PickerOption } from './styles';

const PickerColumn = <V extends PickerValue>({
  onChange,
  selectedIndex,
  optionHeight,
  className,
  options,
  immediateChange,
  columnIndex,
  totalHeight,
  slotClassNames,
  componentState,
  ...rest
}: PickerColumnProps<V>) => {
  const ref = useRef<HTMLDivElement>(null);
  const [{ y }, ctrl] = useSpring(() => ({
    y: isNumber(selectedIndex) ? selectedIndex * -optionHeight : 0,
  }));
  const lastVelocity = useRef(0);

  const { length } = options;
  const bounds = [-optionHeight * (length - 1), 0];

  const handleChange = (targetIndex: number, velocity: number = 0) => {
    const value = options[targetIndex]?.value as V;

    if (immediateChange) {
      onChange?.(columnIndex, value);
      lastVelocity.current = velocity;
    }
    else {
      ctrl.start({
        y: targetIndex * -optionHeight,
        config: {
          velocity,
        },
        onRest({ finished }) {
          if (!immediateChange && finished) {
            onChange?.(columnIndex, value);
          }
        },
      });
    }
  };

  useDrag(
    ({ offset: [, cy], last, tap, velocity: [, vy], direction: [, dy] }) => {
      if (tap || selectedIndex === undefined) {
        return;
      }

      if (!last) {
        ctrl.set({ y: cy });
        return;
      }

      const power = 0.7;
      const timeConst = 350;
      let index = selectedIndex;

      let target = cy;
      if (cy > bounds[0] && cy < bounds[1]) {
        target = timeConst * power * vy * dy + cy;
      }

      target = clamp(target, (length - 1) * -optionHeight, 0);
      index = Math.floor(Math.abs(target) / optionHeight);

      if (options[index]?.disabled) {
        index = selectedIndex;
      }

      if (index === selectedIndex) {
        ctrl.start({
          y: index * -optionHeight,
          config: {
            velocity: vy,
          },
        });
      }
      else {
        handleChange(index, vy);
      }
    },
    {
      target: ref,
      from: () => [0, y.get()],
      axis: 'y',
      filterTaps: true,
      eventOptions: {
        passive: false,
      },
      rubberband: 0.5,
      bounds: {
        top: bounds[0],
        bottom: bounds[1],
      },
      pointer: {
        touch: true,
      },
      preventDefault: true,
    },
  );

  useUpdateEffect(() => {
    if (
      optionHeight > 0
      && isNumber(selectedIndex)
      && y.get() !== -optionHeight * selectedIndex
    ) {
      ctrl.start({
        y: -optionHeight * selectedIndex,
        config: {
          velocity: lastVelocity.current,
        },
      });
      lastVelocity.current = 0;
    }
  }, [optionHeight, selectedIndex, ctrl, y]);

  return (
    <PickerColumnRoot
      componentState={componentState}
      ref={ref}
      style={{ height: totalHeight }}
      {...getDataOrAriaProps(rest)}
    >
      <PickerColumnWrapper
        style={{
          y,
          top: `calc(50% - ${optionHeight / 2}px)`,
        }}
      >
        {options.map((item, index) => (
          <PickerOption
            role='button'
            componentState={{
              ...componentState,
              disabled: !!item.disabled,
            }}
            tabIndex={0}
            aria-disabled={item.disabled || undefined}
            data-selected={index === selectedIndex || undefined}
            onClick={
              item.disabled
                ? undefined
                : () => {
                    handleChange(index);
                  }
            }
            style={{ height: optionHeight }}
            key={item.value}
            className={slotClassNames.option}
          >
            {item.label ?? item.value}
          </PickerOption>
        ))}
      </PickerColumnWrapper>
    </PickerColumnRoot>
  );
};

export default PickerColumn;

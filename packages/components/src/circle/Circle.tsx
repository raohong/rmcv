import { useSpring } from '@react-spring/web';
import { useIsomorphicLayoutEffect, useMeasure } from '@rmc-vant/hooks';
import { isPlainObject, uuid } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useMemo, useState } from 'react';
import { useThemeProps } from '../config-provider';
import { CircleName, composeCircleSlotClassNames } from './classNames';
import type { CircleComponentState, CircleProps } from './interface';
import {
  CircleRoot,
  CircleSVGCircle,
  CircleSVGGroup,
  CircleSVGLayer,
  CircleText,
} from './styles';

const Circle = React.forwardRef<HTMLDivElement, CircleProps>((props, ref) => {
  const {
    layerColor,
    text,
    className,
    children,
    color,
    gradientColor,
    strokeLinecap,
    classNames,
    fill = 'none',
    size = 100,
    startPosition = 'top',
    clockwise = true,
    progress = 0,
    strokeWidth = 4,
    ...rest
  } = useThemeProps(CircleName, props);

  const r = 50;
  const shape = {
    r: r - strokeWidth / 2,
    cx: r,
    cy: r,
  };

  const [id, setId] = useState<string>();
  const [{ p }] = useSpring(
    {
      p: progress,
      config: {
        tension: 300,
        friction: 30,
      },
    },
    [progress],
  );
  const {
    setRef,
    data: { len },
  } = useMeasure({
    format: (target: SVGCircleElement | undefined) => {
      if (target === undefined) {
        return { len: Number(Number(Math.PI * 2 * shape.r).toFixed(4)) };
      }

      return { len: target.getTotalLength() };
    },
  });

  const componentState: CircleComponentState = useMemo(
    () => ({
      fill,
      strokeLinecap,
      strokeWidth,
      startPosition,
      size,
    }),
    [fill, startPosition, strokeWidth, size, strokeLinecap],
  );

  const slotClassNames = composeCircleSlotClassNames(componentState, classNames);

  const output = !clockwise ? [-len, 0] : [len, 0];
  const isGradient = isPlainObject(gradientColor);

  useIsomorphicLayoutEffect(() => {
    setId(`circle-${uuid()}`);
  }, []);

  return (
    <CircleRoot
      className={clsx(slotClassNames.root, className)}
      componentState={componentState}
      ref={ref}
      {...rest}
    >
      <svg viewBox={`0 0 ${r * 2} ${r * 2}`}>
        {isGradient && (
          <defs>
            <linearGradient id={id}>
              {Object.entries(gradientColor!).map(
                ([offset, linearGradientColor]) => (
                  <stop
                    offset={offset}
                    key={offset}
                    stopColor={linearGradientColor}
                  />
                ),
              )}
            </linearGradient>
          </defs>
        )}
        <CircleSVGGroup componentState={componentState}>
          <CircleSVGLayer {...shape} stroke={layerColor} />
          <CircleSVGCircle
            {...shape}
            ref={setRef}
            style={{
              stroke: isGradient ? `url(#${id})` : color,
              strokeDashoffset: p.to([0, 100], output),
              strokeDasharray: len,
              opacity: p.to([0, 4, 100], [0, 1, 1]),
            }}
          />
        </CircleSVGGroup>
      </svg>

      <CircleText className={slotClassNames.text} componentState={componentState}>
        {text ?? children}
      </CircleText>
    </CircleRoot>
  );
});

export default Circle;

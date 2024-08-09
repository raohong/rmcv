'use-client';

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
        return {
          len: Math.PI * 2 * shape.r,
        };
      }

      return { len: target.getTotalLength() + 1 };
    },
  });

  const componentState: CircleComponentState = useMemo(
    () => ({
      fill,
      strokeLinecap,
      strokeWidth,
      startPosition,
      size,
      layerColor,
    }),
    [fill, startPosition, strokeWidth, size, strokeLinecap, layerColor],
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
      ref={ref}
      {...rest}
      componentState={componentState}
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
          <CircleSVGLayer {...shape} componentState={componentState} />
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

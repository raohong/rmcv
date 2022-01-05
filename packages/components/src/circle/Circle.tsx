import React, { useState } from 'react';
import classNames from 'classnames';
import { isObject } from 'lodash';
import { animated, useSpring } from '@react-spring/web';
import { useConfigContext } from '../config-provider';
import { uuid } from '../_utils';
import { useIsomorphicLayoutEffect, useMeasure } from '../_hooks';
import type { CircleProps } from './interface';

const Circle: React.FC<CircleProps> = ({
  size,
  layerColor,
  text,
  strokeLinecap,
  clockise,
  style,
  className,
  children,
  fill,
  color,
  gradientColor,
  progress = 100,
  strokeWidth = 4,
}) => {
  const r = 50;
  const shape = {
    r: r - strokeWidth / 2,
    cx: r,
    cy: r,
  };

  const { getPrefixCls } = useConfigContext();
  const [id, setId] = useState<string>();
  const [{ p }] = useSpring(
    {
      p: progress,
    },
    [progress],
  );
  const {
    setRef,
    data: { len },
  } = useMeasure({
    format: (target: SVGCircleElement | undefined) => {
      if (target === undefined) {
        return { len: Number(Number(Math.PI * 2 * shape.r).toFixed(2)) };
      }

      return { len: target.getTotalLength() };
    },
  });

  const baseCls = getPrefixCls('circle');

  const output = clockise ? [-len, 0] : [len, 0];
  const isGradient = isObject(gradientColor);

  useIsomorphicLayoutEffect(() => {
    setId(uuid());
  }, []);

  return (
    <div
      className={classNames(baseCls, className)}
      style={{
        ...style,
        width: size,
        height: size,
      }}
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
        <g
          className={`${baseCls}-group`}
          fill={fill}
          style={{
            fill,
            strokeLinecap,
            strokeWidth,
          }}
        >
          <circle {...shape} stroke={layerColor} />
          <animated.circle
            {...shape}
            ref={setRef}
            className={`${baseCls}-svg-circle`}
            style={{
              stroke: isGradient ? `url(#${id})` : color,
              strokeDashoffset: p.to([0, 100], output),
              strokeDasharray: len,
            }}
          />
        </g>
      </svg>
      <div className={`${baseCls}-text`}>{text ?? children}</div>
    </div>
  );
};

export default Circle;

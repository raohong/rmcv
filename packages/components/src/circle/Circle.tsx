import React, { useState } from 'react';
import classNames from 'classnames';
import { animated, useSpring } from '@react-spring/web';
import { useConfigContext } from '../config-provider';
import { isObject, uuid } from '../_utils';
import { useIsomorphicLayoutEffect } from '../_hooks';

export type CircleProps = {
  /**
   * @description 当前进度
   * @default 100
   */
  progress?: number;
  /**
   * @description 圆环直径
   * @default 100
   */
  size?: number | string;
  /**
   * @description 进度条颜色
   * @default #1989fa
   */
  color?: string;
  /**
   * @description 进度条渐变颜色 优先级大于 color
   */
  gradientColor?: Record<string, string>;
  /**
   * @description 轨道颜色
   * @default #fff
   */
  layerColor?: string;
  /**
   * @description 文字，优先级大于 children
   */
  text?: string;
  /**
   * @description 填充颜色
   */
  fill?: string;
  /**
   * @description 进度条宽度
   */
  strokeWidth?: number;
  /**
   * @description 进度条端点形状
   */
  strokeLinecap?: 'round' | 'butt' | 'square';
  /**
   * @description 进度条方向是否是顺时针
   */
  clockise?: boolean;
  /**
   * @description 自定义 class
   */
  className?: string;
  /**
   * @description 自定义 style
   */
  style?: React.CSSProperties;
  /**
   * @description 内容
   */
  children?: React.ReactNode;
};

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
  const { getPrefixCls } = useConfigContext();
  const [id, setId] = useState<string>();
  const [{ p }] = useSpring(
    {
      p: progress,
    },
    [progress],
  );

  const baseCls = getPrefixCls('circle');
  const r = 50;
  const shape = {
    r: r - strokeWidth / 2,
    cx: r,
    cy: r,
  };
  const len = Number(Number(Math.PI * 2 * shape.r).toFixed(2));
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
              {Object.entries(gradientColor).map(
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

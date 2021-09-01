import React from 'react';
import classNames from 'classnames';
import { animated, useSpring } from '@react-spring/web';
import { useConfigContext } from '../config-provider';

const line = (t: number) => t;

export type OverlayProps = {
  /**
   * @description overlay 可见性
   */
  visible?: boolean;
  /**
   * @description overlay z-index
   */
  zIndex?: number;
  /**
   * @description overlay 动画持续时间
   */
  duration?: number;
  /**
   * @description overlay 自定义 class
   */
  className?: string;
  /**
   * @description overlay 自定义 style
   */
  style?: React.CSSProperties;
  /**
   * @description 点击事件
   */

  onClick?: React.MouseEventHandler<HTMLDivElement>;
  /**
   * @description 关闭后是否销毁
   */
  /**
   * @description overlay 内容
   */
  children?: React.ReactNode;
};

const Overlay = React.forwardRef<HTMLDivElement, OverlayProps>(
  (
    {
      visible,
      zIndex = 1,
      duration = 300,
      className,
      style,
      onClick,
      children,
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
    const [{ opacity }] = useSpring(
      {
        from: {
          opacity: 0,
        },
        to: { opacity: visible ? 1 : 0 },
        config: {
          duration,
          easing: line,
        },
      },
      [duration, visible],
    );

    return (
      <animated.div
        ref={ref}
        style={{
          ...style,
          zIndex,
          opacity,
          display: opacity.to((v) => (v === 0 ? 'none' : '')),
        }}
        onClick={onClick}
        className={classNames(getPrefixCls('overlay'), className)}
      >
        {children}
      </animated.div>
    );
  },
);

export default Overlay;

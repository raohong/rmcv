import React from 'react';
import classNames from 'classnames';
import { animated, Transition, Spring } from '@react-spring/web';
import type { SpringConfig } from '@react-spring/web';
import { useConfigContext } from '../config-provider';

export type OverlayProps = {
  /**
   * @description overlay 可见性
   */
  visible?: boolean;
  /**
   * @description 关闭是是否卸载 children
   */
  lazyRender?: boolean;
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
  /**
   * @description 自定义 config
   */
  springConfig?: SpringConfig;
} & React.HTMLAttributes<HTMLDivElement>;

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
      lazyRender,
      springConfig,
      ...rest
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();

    const renderContent = (styles: object, key?: React.ReactText) => {
      return (
        <animated.div
          ref={ref}
          key={key}
          style={{
            ...style,
            zIndex,
            ...styles,
          }}
          onClick={onClick}
          className={classNames(getPrefixCls('overlay'), className)}
          {...rest}
        >
          {children}
        </animated.div>
      );
    };

    const config = springConfig ?? {
      duration,
    };

    return lazyRender ? (
      <Transition
        items={visible ? [1] : []}
        from={{
          opacity: 0,
        }}
        enter={{
          opacity: 1,
        }}
        leave={{
          opacity: 0,
        }}
        config={config}
      >
        {(styles, _, { key }) => renderContent(styles, key)}
      </Transition>
    ) : (
      <Spring
        from={{ opacity: 0 }}
        to={{
          opacity: visible ? 1 : 0,
        }}
        config={config}
      >
        {({ opacity }) =>
          renderContent({
            opacity,
            display: opacity.to((val) => (val > 0 ? '' : 'none')),
          })
        }
      </Spring>
    );
  },
);

export default Overlay;

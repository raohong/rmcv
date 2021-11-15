import React from 'react';
import classNames from 'classnames';
import { animated, Transition, Spring } from '@react-spring/web';
import type { SpringConfig } from '@react-spring/web';
import { useConfigContext } from '../config-provider';
import { useLockScroll, useMergeRefs } from '../_hooks';

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
   * @description 是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动
   */
  lockScroll?: boolean;
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

      className,
      style,
      onClick,
      children,
      lazyRender,
      springConfig,
      zIndex = 1,
      duration = 300,
      lockScroll = true,
      ...rest
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();

    const lockRef = useLockScroll(!!visible, lockScroll);
    const domRef = useMergeRefs(ref, lockRef);

    const renderContent = (styles: object, key?: React.ReactText) => {
      return (
        <animated.div
          ref={domRef}
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

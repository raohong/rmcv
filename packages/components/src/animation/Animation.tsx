import { SpringConfig, SpringValues, animated, useSpring } from '@react-spring/web';
import {
  useDeepMemorized,
  useMergeRefs,
  useUpdateIsomorphicLayoutEffect,
} from '@rmc-vant/hooks';
import React, { useEffect, useRef, useState } from 'react';

export type AnimationConfig = {
  config?: SpringConfig | ((key: string) => SpringConfig);
  delay?: number | ((key: string) => number);
  from?: object;
  enter?: object;
  leave?: object;
};

export type AnimationProps = {
  lazyRender?: boolean;
  animate?: boolean;
  onAnimationCompleted?: (animate: boolean) => void;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  immediate?: boolean;
  transitionAppear?: boolean;
  renderComponent?: (
    animationStyles: SpringValues,
    props: object,
  ) => React.ReactElement;
} & React.HTMLAttributes<HTMLDivElement> &
  AnimationConfig;

const defaultRender: AnimationProps['renderComponent'] = (animations, props) => (
  <animated.div style={animations} {...props} />
);

const resolveAutoHeight = (el: HTMLElement | null, state?: object) => {
  if (
    state &&
    'height' in state &&
    el &&
    (state as { height: any }).height === 'auto'
  ) {
    return {
      ...state,
      height: el.scrollHeight,
    };
  }

  return state;
};

const Animation = (
  {
    from,
    enter,
    leave,
    config,
    onAnimationCompleted,
    animate,
    immediate,
    style,
    renderComponent = defaultRender,
    delay,
    lazyRender,
    transitionAppear,
    ...rest
  }: AnimationProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const domRef = useRef<HTMLElement>(null);
  const [internalAnimate, setInternalAnimate] = useState(animate);
  const mergedRef = useMergeRefs(domRef, ref);
  const [initial, setInitial] = useState(!!transitionAppear);

  const [springs] = useSpring(
    {
      from: { display: !lazyRender ? 'none' : undefined, ...from },
      to: async (next) => {
        let internalImmediate = immediate;

        if (!initial && animate) {
          setInitial(true);

          internalImmediate = true;
        }

        if (!lazyRender) {
          await next({ display: '', immediate: true });
        }

        if (animate) {
          const autoHeight = enter && 'height' in enter;
          await next({
            ...resolveAutoHeight(domRef.current, enter),
            config,
            delay,
            ...(autoHeight ? { overflow: 'hidden' } : {}),
            immediate: internalImmediate,
          });

          if (autoHeight) {
            await next({ height: '', overflow: '', immediate: true });
          }
        } else {
          const autoHeight = leave && 'height' in leave;

          await next({
            ...resolveAutoHeight(domRef.current, leave),
            config,
            immediate,
            delay,
            ...(autoHeight ? { overflow: 'hidden' } : {}),
          });

          if (!lazyRender) {
            await next({ display: 'none', immediate: true });
          }

          if (autoHeight) {
            await next({ height: '', overflow: '', immediate: true });
          }
        }
      },
      onRest({ finished }) {
        if (finished) {
          onAnimationCompleted?.(!!animate);

          if (lazyRender && !animate) {
            setInternalAnimate(false);
          }
        }
      },
    },
    useDeepMemorized([
      internalAnimate,
      animate,
      from,
      enter,
      leave,
      immediate,
      onAnimationCompleted,
      delay,
      lazyRender,
      config,
    ]),
  );

  useEffect(() => {
    setInitial(true);
  }, []);

  useUpdateIsomorphicLayoutEffect(() => {
    if (animate) {
      setInternalAnimate(true);
    }
  }, [animate]);

  if (!internalAnimate && lazyRender) {
    return null;
  }

  return renderComponent(springs as SpringValues, {
    ref: mergedRef,
    ...rest,
    style: {
      ...style,
      ...springs,
    },
  });
};

export default React.forwardRef(Animation);

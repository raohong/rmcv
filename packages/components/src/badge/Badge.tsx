import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import { isNil, isNumber, isArray } from '@rmc-vant/utils';
import { useTransition, animated } from '@react-spring/web';
import { usePrevious } from '@rmc-vant/hooks';
import { useConfigContext } from '../config-provider';
import BadgeCount from './BadgeCount';
import { BadgeOffsetValue, BadgePosition, BadgeProps } from './interface';

function easeInBack(x: number): number {
  const c1 = 1.70158 + 2.0;
  const c3 = c1 + 1;

  return c3 * x * x * x - c1 * x * x;
}

function easeOutBack(x: number): number {
  const c1 = 1.70158 + 2.0;
  const c3 = c1 + 1;

  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
}

const getTranslate = (position: BadgePosition) => {
  const maps: Record<BadgePosition, string> = {
    'top-left': '-50%, -50%',
    'top-right': '50%, -50%',
    'bottom-left': '-50%, 50%',
    'bottom-right': '50%, 50%',
  };

  return maps[position] || maps['top-right'];
};

const formatOffset = (
  offset?: BadgeOffsetValue | [BadgeOffsetValue, BadgeOffsetValue],
) => {
  if (!offset) {
    return undefined;
  }

  const target = isArray(offset) ? offset : [offset, offset];

  return target.map((item) => (isNumber(item) ? `${item}px` : item || '0px'));
};

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>((props, ref) => {
  const {
    dot,
    content,
    children,
    color,
    className,
    showZero,
    offset,
    position = 'top-right',
    max = 99,
    ...rest
  } = props;
  const { getPrefixCls } = useConfigContext();

  const hasDot = !(isNil(dot) || dot === false);
  const hasContent = !(
    isNil(content) ||
    (isNumber(content) && content === 0 && !showZero)
  );
  // 为了渲染内容，第一次不能用动画
  const [ready, setReady] = useState(false);
  const previousHasDot = usePrevious(hasDot);
  const previousHasContent = usePrevious(hasContent);
  const visible = hasDot || hasContent;
  /**
   * 是否启用动画，必要条件至少是一个相同
   */
  const animate =
    ready && (hasDot === previousHasDot || hasContent === previousHasContent);
  /**
   * 1. 如果有 content, 根据 hasDot 判断
   * 2. 如果没有 content, hasDot 显示 dot, 如果没有 那么为了动画，根据 hasDot !== previousHasDot 判断
   */
  const renderDot = hasContent ? hasDot : hasDot || hasDot !== previousHasDot;

  const [trans] = useTransition(
    visible ? [1] : [],
    {
      from: {
        scale: 0.6,
      },
      enter: { scale: 1 },
      leave: { scale: 0.6 },
      initial: false,
      config: (_1, _2, state) =>
        state === 'enter'
          ? {
              duration: 220,
              easing: easeOutBack,
            }
          : {
              duration: 180,
              easing: easeInBack,
            },
    },
    [visible],
  );

  useEffect(() => {
    setReady(true);
  }, []);

  const baseCls = getPrefixCls('badge');
  const empty = isNil(children);
  const internalOffset = formatOffset(offset);

  const getContent = () => {
    if (renderDot) {
      return null;
    }

    if (isNumber(content)) {
      if (content > max) {
        return `${max}+`;
      }

      return <BadgeCount count={content} showZero={showZero} />;
    }

    return content;
  };

  const renderContent = (styles?: object, key?: React.ReactText) => {
    const targetContent = getContent();

    return (
      <animated.div
        key={key}
        className={classNames({
          [`${baseCls}-fixed`]: !empty,
          [`${baseCls}-${position}`]: position && position !== 'top-right',
          [`${baseCls}-dot`]: renderDot,
          [`${baseCls}-content`]: !renderDot,
        })}
        style={{
          backgroundColor: color,
          ...styles,
        }}
      >
        {targetContent}
      </animated.div>
    );
  };

  return (
    <div className={classNames(baseCls, className)} ref={ref} {...rest}>
      {children}
      {!animate
        ? visible && renderContent()
        : trans(({ scale }, _, { key }) => {
            const transform = scale.to((val) =>
              empty
                ? `scale(${val})`
                : `${
                    internalOffset
                      ? `translate3d(${internalOffset[0]}, ${internalOffset[1]}, 0) `
                      : ''
                  }translate3d(${getTranslate(position)}, 0) scale(${val})`,
            );
            return renderContent(
              {
                transform,
              },
              key,
            );
          })}
    </div>
  );
});

export default Badge;

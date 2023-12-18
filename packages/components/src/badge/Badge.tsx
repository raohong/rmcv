import { easings, useTransition } from '@react-spring/web';
import { usePrevious } from '@rmc-vant/hooks';
import { isArray, isNil, isNumber } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useEffect, useMemo, useState } from 'react';
import { useThemeProps } from '../config-provider';
import BadgeCount from './BadgeCount';
import { BadgeName, composeBadgeSlotClassNames } from './classNames';
import type {
  BadgeComponentState,
  BadgeOffsetValue,
  BadgePosition,
  BadgeProps,
} from './interface';
import { BadgeRoot, BadgeWrapper } from './styles';

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
    classNames,
    position = 'top-right',
    max = 99,
    ...rest
  } = useThemeProps(BadgeName, props);

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
              easing: easings.easeOutBack,
            }
          : {
              duration: 180,
              easing: easings.easeInBack,
            },
    },
    [visible],
  );

  useEffect(() => {
    setReady(true);
  }, []);

  const empty = isNil(children);
  const internalOffset = formatOffset(offset);

  const componentState: BadgeComponentState = useMemo(
    () => ({
      fixed: !empty,
      dot: renderDot,
      position,
      color,
    }),
    [empty, color, position, renderDot],
  );
  const slotClassNames = composeBadgeSlotClassNames(componentState, classNames);

  const getContent = () => {
    if (renderDot) {
      return null;
    }

    if (isNumber(content)) {
      if (content > max) {
        return `${max}+`;
      }

      return (
        <BadgeCount
          componentState={componentState}
          count={content}
          showZero={showZero}
          className={slotClassNames.number}
        />
      );
    }

    return content;
  };

  const renderContent = (styles?: object, key?: React.ReactText) => {
    const targetContent = getContent();

    return (
      <BadgeWrapper
        className={slotClassNames.wrapper}
        key={key}
        componentState={componentState}
        style={styles}
      >
        {targetContent}
      </BadgeWrapper>
    );
  };

  return (
    <BadgeRoot
      componentState={componentState}
      className={clsx(className, slotClassNames.root)}
      ref={ref}
      {...rest}
    >
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
    </BadgeRoot>
  );
});

export default Badge;

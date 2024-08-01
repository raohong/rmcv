import { useMeasure, useMergeRefs } from '@rmc-vant/hooks';
import { isEmpty } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useMemo, useRef } from 'react';
import { elementOpacityHapticFeedback } from '../_styles';
import { useThemeProps } from '../config-provider';
import { NavBarName, composeNavBarSlotClassNames } from './classNames';
import type { NavBarComponentState, NavBarProps } from './interface';
import {
  NavBarArrowIcon,
  NavBarLeft,
  NavBarPlaceholder,
  NavBarRight,
  NavBarRoot,
  NavBarText,
  NavBarTitle,
} from './styles';

const feedback = elementOpacityHapticFeedback();

const NavBar = React.forwardRef<HTMLDivElement, NavBarProps>((props, ref) => {
  const {
    title,
    leftText,
    rightText,
    left,
    right,
    leftArrow,
    onClickLeft,
    onClickRight,
    placeholder,
    className,
    classNames,
    zIndex = 1,
    fixed = false,
    safeAreaInsetTop = true,
    border = true,
    ...rest
  } = useThemeProps(NavBarName, props);
  const domRef = useRef<HTMLDivElement | null>(null);
  const mergedRef = useMergeRefs(domRef, ref);
  const {
    data: { height },
  } = useMeasure({ ref: domRef });

  const componentState: NavBarComponentState = useMemo(
    () => ({
      zIndex,
      fixed,
      border,
    }),
    [zIndex, fixed, border],
  );
  const slotClassNames = composeNavBarSlotClassNames(componentState, classNames);
  const internalSafeAreaInset = fixed && safeAreaInsetTop;

  const renderLeft = () => {
    if (isEmpty(left)) {
      return (
        <>
          {!!leftArrow && (
            <NavBarArrowIcon
              className={slotClassNames.arrowIcon}
              componentState={componentState}
            />
          )}
          <NavBarText
            className={slotClassNames.text}
            componentState={componentState}
          >
            {leftText}
          </NavBarText>
        </>
      );
    }

    return left;
  };

  const renderRight = () => {
    let target: React.ReactNode;
    if (isEmpty(right)) {
      target = isEmpty(rightText)
        ? null
        : (
            <NavBarText className={slotClassNames.text} componentState={componentState}>
              {rightText}
            </NavBarText>
          );
    }
    else {
      target = right;
    }

    return isEmpty(target)
      ? null
      : (
          <NavBarRight
            onClick={onClickRight}
            className={slotClassNames.left}
            componentState={componentState}
            activeStyle={feedback}
          >
            {target}
          </NavBarRight>
        );
  };

  return (
    <>
      {!!placeholder && !!fixed && (
        <NavBarPlaceholder
          disabled={!internalSafeAreaInset}
          style={{ height: height === 0 ? undefined : height }}
        />
      )}
      <NavBarRoot
        className={clsx(slotClassNames.root, className)}
        disabled={!internalSafeAreaInset}
        ref={mergedRef}
        {...rest}
        componentState={componentState}
      >
        <NavBarLeft
          onClick={onClickLeft}
          className={slotClassNames.left}
          componentState={componentState}
          activeStyle={feedback}
        >
          {renderLeft()}
        </NavBarLeft>
        <NavBarTitle
          componentState={componentState}
          className={slotClassNames.title}
        >
          {title}
        </NavBarTitle>
        {renderRight()}
      </NavBarRoot>
    </>
  );
});

export default NavBar;

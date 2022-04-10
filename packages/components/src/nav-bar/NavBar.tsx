import classNames from 'classnames';
import { useMeasure, useMergeRefs } from '@rmc-vant/hooks';
import { isEmpty } from '@rmc-vant/utils';
import { ArrowLeft } from '@rmc-vant/icons';
import React, { useRef } from 'react';
import { useConfigContext } from '../config-provider';
import SafeArea from '../safe-area';
import type { NavBarProps } from './interface';
import Touchable from '../touchable';

const NavBar = React.forwardRef<HTMLDivElement, NavBarProps>(
  (
    {
      title,
      leftText,
      rightText,
      left,
      right,
      leftArrow,
      onClickLeft,
      onClickRight,
      fixed,
      placeholder,
      zIndex,
      className,
      style,
      safeAreaInsetTop = true,
      border = true,
      children,
      ...rest
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
    const domRef = useRef<HTMLDivElement | null>(null);
    const mergedRef = useMergeRefs(domRef, ref);
    const {
      data: { height },
    } = useMeasure({ ref: domRef });

    const baseCls = getPrefixCls('nav-bar');

    const renderLeft = () => {
      if (isEmpty(left)) {
        return (
          <>
            {!!leftArrow && <ArrowLeft className={`${baseCls}-arrow-icon`} />}
            <span className={`${baseCls}-text`}>{leftText}</span>
          </>
        );
      }

      return left;
    };

    const renderRight = () => {
      let target: React.ReactNode;
      if (isEmpty(right)) {
        target = isEmpty(rightText) ? null : (
          <span className={`${baseCls}-text`}>{rightText}</span>
        );
      } else {
        target = right;
      }

      return isEmpty(target) ? null : (
        <Touchable
          activeClassName={`${baseCls}-haptics-feedback`}
          onClick={onClickRight}
          className={`${baseCls}-right`}
        >
          {target}
        </Touchable>
      );
    };

    return (
      <>
        {!!placeholder && !!fixed && (
          <SafeArea
            className={`${baseCls}-placeholder`}
            disabled={!safeAreaInsetTop}
            style={{ height: height === 0 ? undefined : height }}
          />
        )}
        <SafeArea
          className={classNames(
            baseCls,
            {
              [`${baseCls}-fixed`]: fixed,
              [`${baseCls}-border`]: border,
            },
            className,
          )}
          disabled={!safeAreaInsetTop}
          ref={mergedRef}
          style={{
            zIndex,
            ...style,
          }}
          {...rest}
        >
          <Touchable
            activeClassName={`${baseCls}-haptics-feedback`}
            onClick={onClickLeft}
            className={`${baseCls}-left`}
          >
            {renderLeft()}
          </Touchable>
          <div className={`${baseCls}-title`}>{title}</div>
          {renderRight()}
        </SafeArea>
      </>
    );
  },
);

export default NavBar;

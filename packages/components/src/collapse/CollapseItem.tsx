import { useSpring } from '@react-spring/web';
import { ArrowDown } from '@rmc-vant/icons';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import Animation from '../animation';
import Cell, { cellClassNames } from '../cell';
import { useThemeProps } from '../config-provider';
import { CollapseItemName, composeCollapseItemSlotClassNames } from './classNames';
import { useCollapseContext } from './context';
import type { CollapseItemComponentState, CollapseItemProps } from './interface';
import { CollapseExpandIcon, CollapseItemContent, CollapseItemRoot } from './styles';

const CollapseItem = React.forwardRef<HTMLDivElement, CollapseItemProps>(
  (props, ref) => {
    const {
      icon,
      title,
      value,
      className,
      children,
      showArrow,
      collapseKey,
      border,
      lazyRender,
      readonly = false,
      disabled = false,
      ...rest
    } = useThemeProps(CollapseItemName, props);

    const {
      expandIcon,
      getExpanded,
      toggle,
      size = 'normal',
    } = useCollapseContext() ?? {};

    const expanded = getExpanded ? getExpanded(collapseKey) : true;
    const [{ p }] = useSpring({ p: expanded ? 1 : 0 }, [expanded]);

    const componentState: CollapseItemComponentState = useMemo(
      () => ({
        expanded,
        size,
        disabled,
        readonly,
      }),
      [expanded, size, disabled, readonly],
    );
    const slotClassNames = composeCollapseItemSlotClassNames(componentState);

    const handleToggle = () => {
      if (!readonly && !disabled) {
        toggle?.(collapseKey);
      }
    };

    return (
      <CollapseItemRoot
        ref={ref}
        componentState={componentState}
        aria-expanded={expanded}
        className={clsx(className, slotClassNames.root)}
        {...rest}
      >
        <Cell
          icon={icon}
          size={size}
          title={title}
          value={value}
          isLink={!!showArrow}
          onClick={handleToggle}
          tabIndex={disabled ? -1 : 0}
          aria-disabled={disabled}
          clickable={!disabled}
          border={border}
          rightIcon={
            expandIcon ? (
              expandIcon({ expanded })
            ) : (
              <CollapseExpandIcon
                className={slotClassNames.expandIcon}
                componentState={componentState}
                style={{
                  rotate: p.to([0, 1], [0, -180]),
                }}
              >
                <ArrowDown />
              </CollapseExpandIcon>
            )
          }
          sx={
            disabled
              ? ({ theme }) => ({
                  [`& > .${cellClassNames.title}`]: {
                    color: theme.palette.text.third,
                  },
                  [`&.${cellClassNames.root}`]: { cursor: 'not-allowed' },
                })
              : undefined
          }
        />
        <Animation
          enter={{ height: 'auto' }}
          leave={{ height: 0 }}
          from={{ height: 0 }}
          animate={expanded}
          lazyRender={lazyRender}
        >
          <CollapseItemContent
            componentState={componentState}
            className={slotClassNames.content}
          >
            {children}
          </CollapseItemContent>
        </Animation>
      </CollapseItemRoot>
    );
  },
);

export default CollapseItem;

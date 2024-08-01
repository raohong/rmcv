import { useControllableValue } from '@rmc-vant/hooks';
import type { SystemSxInterpolation } from '@rmc-vant/system';
import { clamp, toNumber } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import { getDataOrAriaProps } from '../_utils';
import { useThemeProps } from '../config-provider';
import { PaginationName, composePaginationSlotClassNames } from './classNames';
import type { PaginationComponentState, PaginationProps } from './interface';
import {
  PaginationAction,
  PaginationDescription,
  PaginationJump,
  PaginationPage,
  PaginationRoot,
} from './styles';
import { getPages, sanitizePage, sanitizePageRange } from './utils';

const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (props, ref) => {
    const {
      className,
      itemRender,
      previous,
      next,
      classNames,
      forceEllipses,
      siblingRange = 1,
      mode = 'multi',
      pageSize = 10,
      total = 0,
      ...rest
    } = useThemeProps(PaginationName, props);
    const boundaryRange = (rest.boundaryRange ?? forceEllipses) ? 0 : 1;
    const totalPage = Math.ceil(Math.max(0, toNumber(total, 0)) / pageSize);
    const [currentPage, setCurrentPage] = useControllableValue(props, {
      defaultValuePropName: 'defaultCurrentPage',
      valuePropName: 'currentPage',
      defaultValue: 1,
    });

    const internalPage = sanitizePage(currentPage, totalPage);

    const handlePrev = () => {
      setCurrentPage(internalPage - 1);
    };

    const handleNext = () => {
      if (total > 0) {
        setCurrentPage(internalPage + 1);
      }
    };

    const handleJump = (type: 'prevJump' | 'nextJump') => {
      setCurrentPage(
        clamp(internalPage + (type === 'prevJump' ? -2 : 2), 1, totalPage),
      );
    };

    const handleClickPage = (page: number) => {
      setCurrentPage(page);
    };

    const componentState = useMemo(
      () =>
        ({
          mode,
        }) satisfies PaginationComponentState,
      [mode],
    );

    const slotClassNames = composePaginationSlotClassNames(
      componentState,
      classNames,
    );

    const prevNextActions = [
      {
        key: 'previous',
        disabled: internalPage <= 1,
        action: handlePrev,
        actionText: previous || '上一页',
      },
      {
        key: 'next',
        disabled: internalPage >= totalPage,
        action: handleNext,
        actionText: next || '下一页',
      },
    ] as const;

    const activeStyle: SystemSxInterpolation = ({ theme }) => ({
      '&[role="button"]': {
        color: theme.palette.white,
        background: theme.palette.primary,
      },
    });

    const renderPrevNextActions = () => {
      return prevNextActions.map(({ disabled, action, key, actionText }) => {
        const original = (
          <PaginationAction
            tabIndex={disabled ? -1 : 0}
            onClick={action}
            disabled={disabled}
            border={!disabled}
            key={key}
            className={slotClassNames.action}
            componentState={{
              ...componentState,
              buttonDisabled: disabled,
            }}
            shape='square'
            activeStyle={activeStyle}
            hairline
          >
            {actionText}
          </PaginationAction>
        );

        return itemRender ? itemRender(key, internalPage, original) : original;
      });
    };

    const renderPages = () => {
      if (mode === 'simple') {
        return [
          <PaginationDescription
            key='simple'
            componentState={componentState}
            className={slotClassNames.description}
          >
            <span>
              {internalPage}
              /
              {totalPage}
            </span>
          </PaginationDescription>,
        ];
      }
      const pages = getPages(
        internalPage,
        totalPage,
        sanitizePageRange(boundaryRange, total),
        sanitizePageRange(siblingRange, total),
        !!forceEllipses,
      );

      return pages.map((item) => {
        let original: React.ReactElement;

        if (item === 'nextJump' || item === 'prevJump') {
          original = (
            <PaginationJump
              key={item}
              componentState={componentState}
              onClick={() => handleJump(item)}
              className={slotClassNames.jump}
              shape='square'
              activeStyle={activeStyle}
              hairline
            >
              ...
            </PaginationJump>
          );
        }
        else {
          original = (
            <PaginationPage
              key={item}
              onClick={() => handleClickPage(item)}
              className={slotClassNames.page}
              shape='square'
              componentState={{
                ...componentState,
                pageActive: internalPage === item,
              }}
              activeStyle={activeStyle}
              hairline
            >
              {itemRender ? itemRender('page', internalPage, <>{item}</>) : item}
            </PaginationPage>
          );
        }

        return original;
      });
    };

    const prevNext = renderPrevNextActions();

    return (
      <PaginationRoot
        className={clsx(className, slotClassNames.root)}
        componentState={componentState}
        ref={ref}
        {...getDataOrAriaProps(rest)}
      >
        {[prevNext[0], ...renderPages(), prevNext[1]]}
      </PaginationRoot>
    );
  },
);

export default Pagination;

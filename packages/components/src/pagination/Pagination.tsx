import { useControllableValue } from '@rmc-vant/hooks';
import { clamp, toNumber } from '@rmc-vant/utils';
import classNames from 'classnames';
import React, { memo } from 'react';
import Button from '../button';
import { useConfigContext } from '../config-provider';
import type { PaginationProps } from './interface';
import { getPages, sanitizePage, sanitizePageRange } from './utils';

const Pagination = React.forwardRef<HTMLUListElement, PaginationProps>(
  (
    {
      className,
      itemRender,
      responsive,
      previous,
      next,
      previousNextFlexible = true,
      forceEllipses = true,
      siblingRange = 1,
      boundaryRange = 1,
      mode = 'multi',
      pageSize = 10,
      total = 0,
      ...props
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();

    const totalPage = Math.ceil(Math.max(0, toNumber(total, 0)) / pageSize);
    const [currentPage, setCurrentPage] = useControllableValue(props, {
      defaultValuePropName: 'defaultCurrentPage',
      valuePropName: 'currentPage',
      defaultValue: 1,
    });

    const internalPage = sanitizePage(currentPage, totalPage);

    const cls = getPrefixCls('pagination');
    const buttonCls = `${cls}-button`;

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

    const renderPrevNextActions = () => {
      return prevNextActions.map(({ disabled, key, action, actionText }) => {
        const original = (
          <Button
            tabIndex={disabled ? -1 : 0}
            onClick={action}
            disabled={disabled}
            className={buttonCls}
            border={!disabled}
            hairline
          >
            {actionText}
          </Button>
        );

        return {
          key,
          className: classNames(
            prevNextActions && `${cls}-flexible`,
            disabled && `${cls}-disabled`,
          ),
          content: itemRender ? itemRender(key, internalPage, original) : original,
        };
      });
    };

    const renderPages = () => {
      if (mode === 'simple') {
        return [
          {
            key: 'page-simple',
            content: (
              <span>
                {internalPage}/{totalPage}
              </span>
            ),
            className: `${cls}-desc`,
          },
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
        let className = '';

        if (item === 'nextJump' || item === 'prevJump') {
          original = (
            <Button onClick={() => handleJump(item)} className={buttonCls} hairline>
              ...
            </Button>
          );
          className = `${cls}-ellipsis`;
        } else {
          original = (
            <Button
              onClick={() => handleClickPage(item)}
              className={buttonCls}
              hairline
            >
              {item}
            </Button>
          );

          className = classNames(internalPage === item && `${cls}-active`);

          if (itemRender) {
            original = itemRender('page', internalPage, original);
          }
        }

        return {
          key: item,
          content: original,
          className,
        };
      });
    };

    const prevNext = renderPrevNextActions();

    return (
      <ul
        className={classNames(className, mode === 'simple' && `${cls}-${mode}`, cls)}
        ref={ref}
      >
        {[prevNext[0], ...renderPages(), prevNext[1]].map((item) => (
          <li className={classNames(`${cls}-item`, item.className)} key={item.key}>
            {item.content}
          </li>
        ))}
      </ul>
    );
  },
);

export default memo(Pagination);

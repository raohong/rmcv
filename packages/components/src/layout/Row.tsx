import React, { useMemo } from 'react';
import classNames from 'classnames';
import { isArray, isNumber, isString } from '@rmc-vant/utils';
import { createOverridableComponent } from '../_utils';
import { useConfigContext } from '../config-provider';
import type { RowContextState, RowProps } from './interface';
import RowContext from './RowContext';

const santalizeGutter = (
  gutter: RowProps['gutter'],
): undefined | string | number => {
  if (!gutter) {
    return undefined;
  }

  if (isString(gutter)) {
    return gutter;
  }

  if (isNumber(gutter) && gutter > 0) {
    return gutter;
  }

  return undefined;
};

const formatGutter = (gutter: string | number | undefined, ratio: number) => {
  if (isNumber(gutter)) {
    return gutter * ratio;
  }

  if (isString(gutter)) {
    return `calc(${gutter} * ${ratio})`;
  }

  return undefined;
};

const Row = React.forwardRef<HTMLDivElement, RowProps>(
  (
    {
      children,
      gutter,
      className,
      style,
      align,
      justify,
      wrap = true,
      component = 'div',
      ...rest
    },
    ref,
  ) => {
    const { getPrefixCls } = useConfigContext();
    const baseCls = getPrefixCls('row');

    const cls = classNames(
      baseCls,
      {
        [`${baseCls}-align-${align}`]: align,
        [`${baseCls}-justify-${justify}`]: justify,
        [`${baseCls}-wrap`]: wrap,
      },
      className,
    );

    const internalGutters = useMemo(() => {
      const input = isArray(gutter) ? [gutter[0], gutter[1]] : [gutter, gutter];

      return input
        .map(santalizeGutter)
        .map((item) => formatGutter(item, 1)) as Exclude<
        RowContextState['gutter'],
        undefined
      >;
    }, [gutter]);

    const value: RowContextState = useMemo(
      () => ({
        gutter: internalGutters?.map((item) => formatGutter(item, 0.5)) as Exclude<
          RowContextState['gutter'],
          undefined
        >,
      }),
      [internalGutters],
    );

    return (
      <RowContext.Provider value={value}>
        {React.createElement(
          component,
          {
            className: cls,
            ref,
            style: {
              rowGap: formatGutter(internalGutters[1], 1),
              marginLeft: formatGutter(internalGutters[0], -0.5),
              marginRight: formatGutter(internalGutters[0], -0.5),
              ...style,
            },
            ...rest,
          },
          children,
        )}
      </RowContext.Provider>
    );
  },
);

export default createOverridableComponent(Row);

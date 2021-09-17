import classNames from 'classnames';
import React from 'react';
import { CollapseItemProps } from 'rmc-vant';
import { useConfigContext } from '../config-provider';
import { useControllableValue } from '../_hooks';
import { isNil, omit, toArray } from '../_utils';
import { COLLAPSEITEM_SYMBOL } from './CollapseItem';
import type { CollapseKey, CollapseProps } from './type';

const formatActiveKey = (key: CollapseKey | undefined) =>
  // eslint-disable-next-line no-nested-ternary
  isNil(key) ? null : toArray(key).map(String);

const Collapase = React.forwardRef<HTMLDivElement, CollapseProps>(
  (props, ref) => {
    const { disabled, border, children, className, accordion, ...rest } = props;
    const { getPrefixCls } = useConfigContext();
    const [activeKey, setActiveKey] = useControllableValue<string[]>(props, {
      defaultValuePropName: 'defaultActiveKey',
      valuePropName: 'activeKey',
      format: formatActiveKey,
    });

    const baseCls = getPrefixCls('collapse');

    const getCollapsed = (key: string | undefined) =>
      isNil(key) ? false : !activeKey?.includes(key);

    const toggle = (current: string | undefined) => {
      if (isNil(current)) {
        return;
      }

      setActiveKey((prev) => {
        if (isNil(prev)) {
          return [current];
        }

        if (prev.includes(current)) {
          return accordion ? [] : prev.filter((item) => item !== current);
        }

        return accordion ? [current] : prev.concat(current);
      });
    };

    const list = toArray(children).map((child, index) => {
      if (
        React.isValidElement(child) &&
        child.type &&
        (child.type as unknown as React.ComponentType & { [x: symbol]: any })[
          COLLAPSEITEM_SYMBOL
        ]
      ) {
        const key = String(child.key ?? index);

        return React.cloneElement(
          child as React.ReactElement<CollapseItemProps>,
          {
            key,
            itemKey: key,
            toggle,
            disabled: disabled || child.props.disabled,
            collapsed: getCollapsed(key),
          },
        );
      }

      return child;
    });

    return (
      <div
        ref={ref}
        className={classNames(
          baseCls,
          {
            [`${baseCls}-border`]: border,
          },
          className,
        )}
        {...omit(rest, ['defaultActiveKey', 'activeKey', 'onChange'])}
      >
        {list}
      </div>
    );
  },
);

export default Collapase;

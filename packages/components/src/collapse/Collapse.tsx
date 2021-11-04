import classNames from 'classnames';
import React from 'react';
import isNil from 'lodash/isNil';
import isArray from 'lodash/isArray';
import omit from 'lodash/omit';
import { CollapseItemProps } from 'rmc-vant';
import { toArray } from '../_utils';
import { useConfigContext } from '../config-provider';
import { useControllableValue } from '../_hooks';
import { COLLAPSEITEM_SYMBOL } from './CollapseItem';
import type { CollapseKey, CollapseProps } from './type';

const formatActiveKey = (key: CollapseKey | undefined) => {
  if (isNil(key) || isArray(key)) {
    return key ?? null;
  }

  const value = toArray(key);

  value.forEach((_, i) => {
    value[i] = String(_);
  });

  return value;
};
// eslint-disable-next-line no-nested-ternary

const Collapase = React.forwardRef<HTMLDivElement, CollapseProps>(
  (props, ref) => {
    const { disabled, children, className, accordion, ...rest } = props;
    const { getPrefixCls } = useConfigContext();
    const [activeKey, setActiveKey] = useControllableValue<string[]>(props, {
      defaultValuePropName: 'defaultActiveKey',
      valuePropName: 'activeKey',
      format: formatActiveKey,
    });

    const baseCls = getPrefixCls('collapse');

    /**
     * null or undefined 不受控制
     */
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
        // @ts-ignore
        child.type &&
        // @ts-ignore
        (child.type as unknown as React.ComponentType & { [x: symbol]: any })[
          COLLAPSEITEM_SYMBOL
        ]
      ) {
        const targetChild = child as React.ReactElement<CollapseItemProps>;
        const key = String(targetChild.key ?? index);

        return React.cloneElement(targetChild, {
          key,
          itemKey: key,
          toggle,
          disabled: disabled || targetChild.props.disabled,
          collapsed: getCollapsed(key),
        });
      }

      return child;
    });

    return (
      <div
        ref={ref}
        className={classNames(baseCls, className)}
        {...omit(rest, ['defaultActiveKey', 'activeKey', 'onChange'])}
      >
        {list}
      </div>
    );
  },
);

export default Collapase;

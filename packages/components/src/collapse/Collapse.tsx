import { useControllableValue } from '@rmc-vant/hooks';
import { isNil, omit, toArray } from '@rmc-vant/utils';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import { flatReactNode } from '../_utils';
import { useThemeProps } from '../config-provider';
import { CollapseName, collapseClassNames } from './classNames';
import { CollapseContext } from './context';
import type { CollapseContextState, CollapseProps } from './interface';
import { CollapseRoot } from './styles';

const Collapse = React.forwardRef<HTMLDivElement, CollapseProps>((props, ref) => {
  const { accordion, expandIcon, size, className, children, ...rest } =
    useThemeProps(CollapseName, props);

  const [activeKey, setActiveKey] = useControllableValue(props, {
    defaultValuePropName: 'defaultActiveKey',
    valuePropName: 'activeKey',
  });

  const ctxValue: CollapseContextState = useMemo(
    () => ({
      size,
      expandIcon,
      getExpanded(key) {
        if (isNil(key)) {
          return true;
        }

        return toArray(activeKey)
          .slice(0, accordion ? 1 : undefined)
          .includes(key);
      },
      toggle(key) {
        if (isNil(key)) {
          return;
        }

        const keys = toArray(activeKey).filter(Boolean) as string[];

        if (keys.includes(key)) {
          setActiveKey(accordion ? [] : keys.filter((item) => item !== key));
          return;
        }

        setActiveKey(accordion ? [key] : keys.concat(key));
      },
    }),
    [activeKey, accordion, expandIcon, size, setActiveKey],
  );

  const list = flatReactNode(children).map((item) =>
    React.isValidElement(item)
      ? React.cloneElement(item, {
          collapseKey: item.key,
        })
      : item,
  );

  return (
    <CollapseContext.Provider value={ctxValue}>
      <CollapseRoot
        ref={ref}
        componentState={{}}
        className={clsx(className, collapseClassNames.root)}
        {...omit(rest, ['defaultActiveKey', 'activeKey', 'onChange'])}
      >
        {list}
      </CollapseRoot>
    </CollapseContext.Provider>
  );
});

export default Collapse;

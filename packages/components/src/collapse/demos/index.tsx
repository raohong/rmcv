import { DemoBlock } from '@rmc-vant/demo';
import React, { useState } from 'react';
import { Collapse, CollapseItem, CollapseItemProps, CollapseProps } from 'rmc-vant';

const CollapseDemo: React.FC<
  CollapseProps & {
    controllable?: boolean;
    itemProps?: CollapseItemProps[];
  }
> = ({ controllable, itemProps, ...props }) => {
  const [activeKey, set] = useState<string[]>([]);

  const list = [
    {
      key: '1',
      name: '代码是写出来给人看的，附带能在机器上运行。',
    },
    {
      key: '2',
      name: '技术无非就是那些开发它的人的共同灵魂。',
    },
    {
      key: '3',
      name: '在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。',
    },
  ];

  return (
    <Collapse
      {...(controllable
        ? {
            activeKey,
            onChange: set,
          }
        : {})}
      {...props}
    >
      {list.map((item, index) => (
        <CollapseItem
          title={`标题 ${index + 1}`}
          key={item.key}
          {...itemProps?.[index]}
        >
          {item.name}
        </CollapseItem>
      ))}
    </Collapse>
  );
};

export default () => {
  return (
    <>
      <DemoBlock title="基础用法">
        <CollapseDemo controllable />
      </DemoBlock>
      <DemoBlock title="手风琴模式">
        <CollapseDemo accordion />
      </DemoBlock>
      <DemoBlock title="禁用状态">
        <CollapseDemo itemProps={[{}, { disabled: true }, { disabled: true }]} />
      </DemoBlock>
    </>
  );
};

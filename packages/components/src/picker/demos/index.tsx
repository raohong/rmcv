import { DemoBlock } from '@rmc-vant/demo';
import React, { useState } from 'react';
import { Cell, Picker, showToast } from 'rmc-vant';

const cityData = [
  {
    value: '浙江',
    children: [
      {
        value: '杭州',
        children: [{ value: '西湖区' }, { value: '余杭区' }],
      },
      {
        value: '温州',
        children: [{ value: '鹿城区' }, { value: '瓯海区' }],
      },
    ],
  },
  {
    value: '福建',
    children: [
      {
        value: '福州',
        children: [{ value: '鼓楼区' }, { value: '台江区' }],
      },
      {
        value: '厦门',
        children: [{ value: '思明区' }, { value: '海沧区' }],
      },
    ],
  },
];

const DynamicDemo = () => {
  const [columns, setColumns] = useState([cityData, cityData[0].children]);
  const [value, setValue] = useState([columns[0][0].value, columns[1][0].value]);

  return (
    <Picker
      value={value}
      onChange={(next, sourceIndex) => {
        const current = [...next];
        const nextColumns = [...columns];

        if (sourceIndex === 0) {
          const index = Math.max(
            0,
            cityData.findIndex((item) => item.value === current[0]),
          );
          nextColumns[1] = cityData[index].children;
          current[1] = nextColumns[1][0].value;
        }

        setValue(current);
        setColumns(nextColumns);
      }}
      columns={columns}
    />
  );
};

export default () => {
  const data = [['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华']];

  return (
    <>
      <DemoBlock title="基础用法" card>
        <Picker
          columns={data}
          title="选择城市"
          onConfirm={(value) => {
            showToast(`确定：${value?.[0]}`);
          }}
          onCancel={() => {
            showToast('取消');
          }}
        />
      </DemoBlock>
      <DemoBlock title="默认选择项" card>
        <Picker columns={data} title="选择城市" defaultValue={['宁波']} />
      </DemoBlock>
      <DemoBlock title="禁用选项" card>
        <Picker
          columns={[
            [
              { value: '杭州', disabled: true },
              { value: '宁波' },
              { value: '温州' },
            ],
          ]}
        />
      </DemoBlock>
      <DemoBlock title="级联选择" card>
        <Picker columns={cityData} title="选择地区" />
      </DemoBlock>
      <DemoBlock title="加载状态" card>
        <Picker
          loading
          columns={[[{ value: '杭州' }, { value: '宁波' }, { value: '温州' }]]}
        />
      </DemoBlock>
      <DemoBlock title="动态设置选项" card>
        <DynamicDemo />
      </DemoBlock>
      <DemoBlock title="弹出层模式" card>
        <Picker
          popup
          title="选择地区"
          columns={[[{ value: '杭州' }, { value: '宁波' }, { value: '温州' }]]}
        >
          <Cell title="选择地区" isLink clickable />
        </Picker>
      </DemoBlock>
    </>
  );
};

import { DemoBlock } from '@rmc-vant/demo';
import React, { useState } from 'react';
import { Cell, Image, Radio, Space } from 'rmc-vant';

const ControlledDemo = () => {
  const [value, setValue] = useState<string>();

  return (
    <Space size={12} fill>
      <Radio checked={value === 'css'} onChange={setValue} value="css">
        选项1
      </Radio>
      <Radio checked={value === 'js'} onChange={setValue} value="js">
        选项2
      </Radio>
    </Space>
  );
};

export default () => {
  return (
    <>
      <DemoBlock title="基础用法">
        <Radio.Group
          options={[
            {
              label: '选项1',
              value: 1,
            },
            {
              label: '选项2',
              value: 2,
            },
          ]}
        />
      </DemoBlock>
      <DemoBlock title="单独使用">
        <ControlledDemo />
      </DemoBlock>
      <DemoBlock title="水平排列">
        <Radio.Group
          direction="horizontal"
          options={[
            {
              label: '选项1',
              value: 1,
            },
            {
              label: '选项2',
              value: 2,
            },
          ]}
        />
      </DemoBlock>
      <DemoBlock title="禁用状态">
        <Radio.Group defaultValue={1} disabled>
          <Radio value={1}>选项1</Radio>
          <Radio value={2}>选项2</Radio>
        </Radio.Group>
      </DemoBlock>
      <DemoBlock title="自定义形状">
        <Radio.Group defaultValue={1} shape="square">
          <Radio value={1}>选项1</Radio>
          <Radio value={2}>选项2</Radio>
        </Radio.Group>
      </DemoBlock>
      <DemoBlock title="自定义颜色">
        <Radio.Group defaultValue={1} checkedColor="#ee0a24">
          <Radio value={1}>选项1</Radio>
          <Radio value={2}>选项2</Radio>
        </Radio.Group>
      </DemoBlock>
      <DemoBlock title="自定义大小">
        <Radio.Group defaultValue={1} size={24}>
          <Radio value={1}>选项1</Radio>
          <Radio value={2}>选项2</Radio>
        </Radio.Group>
      </DemoBlock>
      <DemoBlock title="自定义图标">
        <Radio.Group
          defaultValue={1}
          size={24}
          renderIcon={(checked) => (
            <Image
              width="auto"
              height="1em"
              src={
                checked
                  ? 'https://cdn.jsdelivr.net/npm/@vant/assets/user-active.png'
                  : 'https://cdn.jsdelivr.net/npm/@vant/assets/user-inactive.png'
              }
            />
          )}
        >
          <Radio value={1}>选项1</Radio>
          <Radio value={2}>选项2</Radio>
        </Radio.Group>
      </DemoBlock>
      <DemoBlock title="搭配单元格组件使用">
        <Radio.Group defaultValue="1">
          <Cell.Group>
            <Cell
              title="选项1"
              value={<Radio sx={{ position: 'unset' }} value="1" />}
              clickable
            />
            <Cell
              title="选项2"
              value={<Radio sx={{ position: 'unset' }} value="2" />}
              clickable
            />
          </Cell.Group>
        </Radio.Group>
      </DemoBlock>
    </>
  );
};

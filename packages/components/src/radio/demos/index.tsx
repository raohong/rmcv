import { DemoBlock } from '@rmc-vant/demo';
import React, { useState } from 'react';
import { Cell, CellGroup, Image, Radio, RadioGroup, Space } from 'rmc-vant';

const ControlledDemo = () => {
  const [value, setValue] = useState<string>();

  return (
    <Space size={12}>
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
        <RadioGroup>
          <Radio value={1}>选项1</Radio>
          <Radio value={2}>选项2</Radio>
        </RadioGroup>
      </DemoBlock>
      <DemoBlock title="单独使用">
        <ControlledDemo />
      </DemoBlock>
      <DemoBlock title="水平排列">
        <RadioGroup direction="horizontal">
          <Radio value={1}>选项1</Radio>
          <Radio value={2}>选项2</Radio>
        </RadioGroup>
      </DemoBlock>
      <DemoBlock title="禁用状态">
        <RadioGroup defaultValue={1} disabled>
          <Radio value={1}>选项1</Radio>
          <Radio value={2}>选项2</Radio>
        </RadioGroup>
      </DemoBlock>
      <DemoBlock title="自定义形状">
        <RadioGroup defaultValue={1} shape="square">
          <Radio value={1}>选项1</Radio>
          <Radio value={2}>选项2</Radio>
        </RadioGroup>
      </DemoBlock>
      <DemoBlock title="自定义颜色">
        <RadioGroup defaultValue={1} checkedColor="#ee0a24">
          <Radio value={1}>选项1</Radio>
          <Radio value={2}>选项2</Radio>
        </RadioGroup>
      </DemoBlock>
      <DemoBlock title="自定义大小">
        <RadioGroup defaultValue={1} iconSize={24}>
          <Radio value={1}>选项1</Radio>
          <Radio value={2}>选项2</Radio>
        </RadioGroup>
      </DemoBlock>
      <DemoBlock title="自定义图标">
        <RadioGroup
          defaultValue={1}
          iconSize={20}
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
        </RadioGroup>
      </DemoBlock>
      <DemoBlock title="搭配单元格组件使用">
        <RadioGroup defaultValue="1">
          <CellGroup>
            <Cell title="选项1" value={<Radio value="1" />} clickable />
            <Cell title="选项2" value={<Radio value="2" />} clickable />
          </CellGroup>
        </RadioGroup>
      </DemoBlock>
    </>
  );
};

import { DemoBlock } from '@rmc-vant/demo';
import React, { useState } from 'react';
import { Cell, Checkbox, Image, Space } from 'rmc-vant';

const ControlledDemo = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Space size={12}>
      <Checkbox checked={checked} onChange={setChecked} value="css">
        选项1
      </Checkbox>
    </Space>
  );
};

export default () => {
  return (
    <>
      <DemoBlock title="基础用法">
        <Checkbox.Group
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
        <Checkbox.Group direction="horizontal">
          <Checkbox value={1}>选项1</Checkbox>
          <Checkbox value={2}>选项2</Checkbox>
        </Checkbox.Group>
      </DemoBlock>
      <DemoBlock title="禁用状态">
        <Checkbox.Group defaultValue={[1]} disabled>
          <Checkbox value={1}>选项1</Checkbox>
          <Checkbox value={2}>选项2</Checkbox>
        </Checkbox.Group>
      </DemoBlock>
      <DemoBlock title="自定义形状">
        <Checkbox.Group defaultValue={[1]} shape="square">
          <Checkbox value={1}>选项1</Checkbox>
          <Checkbox value={2}>选项2</Checkbox>
        </Checkbox.Group>
      </DemoBlock>
      <DemoBlock title="自定义颜色">
        <Checkbox.Group defaultValue={[1]} checkedColor="#ee0a24">
          <Checkbox value={1}>选项1</Checkbox>
          <Checkbox value={2}>选项2</Checkbox>
        </Checkbox.Group>
      </DemoBlock>
      <DemoBlock title="自定义大小">
        <Checkbox.Group defaultValue={[1]} iconSize={24}>
          <Checkbox value={1}>选项1</Checkbox>
          <Checkbox value={2}>选项2</Checkbox>
        </Checkbox.Group>
      </DemoBlock>
      <DemoBlock title="自定义图标">
        <Checkbox.Group
          defaultValue={[1]}
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
          <Checkbox value={1}>选项1</Checkbox>
          <Checkbox value={2}>选项2</Checkbox>
        </Checkbox.Group>
      </DemoBlock>
      <DemoBlock title="限制最大可选数">
        <Checkbox.Group max={2} defaultValue={[1, 2]}>
          <Checkbox value={1}>选项1</Checkbox>
          <Checkbox value={2}>选项2</Checkbox>
          <Checkbox value={3}>选项3</Checkbox>
          <Checkbox value={4}>选项4</Checkbox>
        </Checkbox.Group>
      </DemoBlock>
      <DemoBlock title="搭配单元格组件使用">
        <Checkbox.Group defaultValue={['1']}>
          <Cell.Group>
            <Cell title="选项1" value={<Checkbox value="1" />} clickable />
            <Cell title="选项2" value={<Checkbox value="2" />} clickable />
          </Cell.Group>
        </Checkbox.Group>
      </DemoBlock>
    </>
  );
};

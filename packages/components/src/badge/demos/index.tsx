import { DemoBlock } from '@rmc-vant/demo';
import {
  Cross,
  DownOutlined,
  Minus,
  Plus,
  ReplayOutlined,
  Success,
} from '@rmc-vant/icons';
import React, { useState } from 'react';
import { Badge, Button, Space } from 'rmc-vant';

const Box = () => (
  <div
    style={{
      height: 40,
      width: 40,
      backgroundColor: '#f2f3f5',
      borderRadius: 4,
    }}
  />
);

const NumberScroll = () => {
  const [num, set] = useState(2);

  const random = () => {
    set(1 + Math.floor(Math.random() * 100));
  };

  return (
    <Space size="large">
      <Badge content={num} max={99} showZero>
        <Box />
      </Badge>
      <Space size={0}>
        <Button onClick={() => set(num + 1)} icon={<Plus />} />
        <Button onClick={() => random()} icon={<ReplayOutlined />} />
        <Button onClick={() => set(num - 1)} icon={<Minus />} />
      </Space>
    </Space>
  );
};

export default () => {
  return (
    <>
      <DemoBlock title="基础用法">
        <Space size="large">
          <Badge content={5}>
            <Box />
          </Badge>
          <Badge content={10}>
            <Box />
          </Badge>
          <Badge content="Hot">
            <Box />
          </Badge>
          <Badge dot>
            <Box />
          </Badge>
        </Space>
      </DemoBlock>
      <DemoBlock title="最大值">
        <Space size="large">
          <Badge content={20} max={9}>
            <Box />
          </Badge>
          <Badge content={50} max={20}>
            <Box />
          </Badge>
          <Badge content={100} max={99}>
            <Box />
          </Badge>
        </Space>
      </DemoBlock>
      <DemoBlock title="数字动态变化">
        <NumberScroll />
      </DemoBlock>
      <DemoBlock title="自定义颜色">
        <Space size="large">
          <Badge content={5} color="#1989fa">
            <Box />
          </Badge>
          <Badge content={10} color="#1989fa">
            <Box />
          </Badge>
          <Badge dot color="#1989fa">
            <Box />
          </Badge>
        </Space>
      </DemoBlock>
      <DemoBlock title="自定义徽标内容">
        <Space size="large">
          <Badge content={<Success style={{ margin: '2px 0' }} />}>
            <Box />
          </Badge>
          <Badge content={<Cross style={{ margin: '2px 0' }} />}>
            <Box />
          </Badge>
          <Badge content={<DownOutlined style={{ margin: '2px 0' }} />}>
            <Box />
          </Badge>
        </Space>
      </DemoBlock>
      <DemoBlock title="自定义徽标位置">
        <Space size="large">
          <Badge content={10} position="top-left">
            <Box />
          </Badge>
          <Badge content={10} position="bottom-left">
            <Box />
          </Badge>
          <Badge content={10} position="bottom-right">
            <Box />
          </Badge>
        </Space>
      </DemoBlock>
      <DemoBlock title="独立展示">
        <Space size="large">
          <Badge content={10} />
          <Badge content={200} max={99} />
        </Space>
      </DemoBlock>
    </>
  );
};

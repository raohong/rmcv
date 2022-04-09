import React, { useRef } from 'react';
import { DemoBlock } from '@rmc-vant/demo';
import {
  PlayCircleOutlined,
  ReplayOutlined,
  PauseCircleOutlined,
} from '@rmc-vant/icons';
import { CountDown, Tag, Space, Grid, GridItem, CountDownRef } from 'rmc-vant';

const ControllableDemo = () => {
  const ref = useRef<CountDownRef | null>(null);

  return (
    <>
      <CountDown
        style={{ marginLeft: 16, marginBottom: 24 }}
        ref={ref}
        time={3600 * 1000}
        autoStart={false}
      />
      <Grid column={3} clickable>
        <GridItem
          onClick={() => ref.current?.start()}
          icon={<PlayCircleOutlined />}
          text="开始"
        />
        <GridItem
          onClick={() => ref.current?.pause()}
          icon={<PauseCircleOutlined />}
          text="暂停"
        />
        <GridItem
          onClick={() => ref.current?.reset()}
          icon={<ReplayOutlined />}
          text="重置"
        />
      </Grid>
    </>
  );
};

export default () => {
  return (
    <>
      <DemoBlock title="基础用法">
        <CountDown time={30 * 60 * 60 * 1000} />
      </DemoBlock>
      <DemoBlock title="自定义格式">
        <CountDown time={30 * 60 * 60 * 1000} format="DD 天 HH 时 mm 分 ss 秒" />
      </DemoBlock>
      <DemoBlock title="毫秒级渲染">
        <CountDown time={30 * 60 * 60 * 1000} format="HH:mm:ss:SSS" millisecond />
      </DemoBlock>
      <DemoBlock title="自定义渲染">
        <CountDown time={5 * 60 * 60 * 1000}>
          {({ hours, minutes, seconds }) => (
            <Space split=":" size={4}>
              <Tag color="#ee0a24">{String(hours).padStart(2, '0')}</Tag>
              <Tag color="#ee0a24">{String(minutes).padStart(2, '0')}</Tag>
              <Tag color="#ee0a24">{String(seconds).padStart(2, '0')}</Tag>
            </Space>
          )}
        </CountDown>
      </DemoBlock>
      <DemoBlock title="手动控制" expand>
        <ControllableDemo />
      </DemoBlock>
    </>
  );
};

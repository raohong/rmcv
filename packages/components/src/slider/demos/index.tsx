import React from 'react';
import { DemoBlock } from '@rmc-vant/demo';
import { Slider, Toast, Space } from 'rmc-vant';

export default () => {
  return (
    <>
      <DemoBlock title="基础用法">
        <Slider
          onChange={(val) => {
            Toast(`当前值：${val}`);
          }}
          defaultValue={20}
        />
      </DemoBlock>
      <DemoBlock title="双滑块">
        <Slider
          onChange={(val) => {
            Toast(`当前值：${val.join(',')}`);
          }}
          defaultValue={[0, 20]}
          range
        />
      </DemoBlock>
      <DemoBlock title="指定范围选择">
        <Slider
          onChange={(val) => {
            Toast(`当前值：${val}`);
          }}
          defaultValue={50}
          min={-50}
          max={50}
        />
      </DemoBlock>
      <DemoBlock title="禁用">
        <Slider defaultValue={50} disabled />
      </DemoBlock>
      <DemoBlock title="指定步长">
        <Slider defaultValue={50} step={10} />
      </DemoBlock>
      <DemoBlock title="自定义样式">
        <Slider defaultValue={50} barHeight={4} activeColor="#ee0a24" />
      </DemoBlock>
      <DemoBlock title="自定义按钮">
        <Slider
          defaultValue={50}
          activeColor="#ee0a24"
          button={(val) => (
            <div
              style={{
                width: 26,
                color: '#fff',
                fontSize: 10,
                lineHeight: '18px',
                textAlign: 'center',
                backgroundColor: '#ee0a24',
                borderRadius: 100,
              }}
            >
              {val}
            </div>
          )}
        />
      </DemoBlock>

      <DemoBlock title="垂直模式">
        <Space>
          <Slider
            onChange={(val) => {
              Toast(`当前值：${val.join(',')}`);
            }}
            defaultValue={[0, 50]}
            style={{ height: 150 }}
            range
            vertical
          />
          <Slider
            onChange={(val) => {
              Toast(`当前值：${val.join(',')}`);
            }}
            defaultValue={[20, 50]}
            style={{ height: 150 }}
            range
            vertical
          />
        </Space>
      </DemoBlock>
      <DemoBlock title="反转轨道">
        <Slider
          defaultValue={[0, 20]}
          onChange={(val) => {
            Toast(`当前值：${val.join(',')}`);
          }}
          range
          reverse
        />
      </DemoBlock>
    </>
  );
};

import { DemoBlock } from '@rmc-vant/demo';
import React from 'react';
import { TabPane, Tabs, TabsProps } from 'rmc-vant';

const Box: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  style,
  ...rest
}) => (
  <div
    style={{
      padding: 20,
      minHeight: 80,
      background: '#fff',
      ...style,
    }}
    {...rest}
  >
    {children}
  </div>
);

const renderTabs = (nums: number, props?: TabsProps) => {
  return (
    <Tabs {...props}>
      {Array.from({ length: nums }, (_, i) => (
        <TabPane key={String(i)} tab={`标签 ${i + 1}`}>
          <Box>标签 {i + 1}</Box>
        </TabPane>
      ))}
    </Tabs>
  );
};

export default () => {
  return (
    <div style={{ marginBottom: '200vh' }}>
      <DemoBlock expand title="基础用法">
        <Tabs defaultActiveKey="2">
          <TabPane key="1" tab="内容标签标签标签标签标签1">
            <Box>内容1</Box>
          </TabPane>
          <TabPane key="2" tab="内容2">
            <Box>内容2</Box>
          </TabPane>
          <TabPane key="3" tab="内容3">
            <Box>内容3</Box>
          </TabPane>
          <TabPane key="4" tab="内容4">
            <Box>内容4</Box>
          </TabPane>
        </Tabs>
      </DemoBlock>
      <DemoBlock expand title="标签栏滚动">
        {renderTabs(8)}
      </DemoBlock>
      <DemoBlock expand title="禁用标签">
        <Tabs>
          <TabPane key="1" tab="内容1">
            <Box>内容1</Box>
          </TabPane>
          <TabPane key="2" tab="内容2">
            <Box>内容2</Box>
          </TabPane>
          <TabPane key="3" tab="内容3" disabled>
            <Box>内容3</Box>
          </TabPane>
        </Tabs>
      </DemoBlock>
      <DemoBlock expand title="样式风格">
        <Tabs type="card">
          <TabPane key="1" tab="内容1">
            <Box style={{ background: 'inherit' }}>内容1</Box>
          </TabPane>
          <TabPane key="2" tab="内容2">
            <Box style={{ background: 'inherit' }}> 内容2</Box>
          </TabPane>
          <TabPane key="3" tab="内容3" disabled>
            <Box style={{ background: 'inherit' }}>内容3</Box>
          </TabPane>
        </Tabs>
      </DemoBlock>
      <DemoBlock expand title="粘性布局">
        {renderTabs(4, {
          sticky: true,
        })}
      </DemoBlock>
      <DemoBlock expand title="收缩布局">
        {renderTabs(4, {
          shrink: true,
        })}
      </DemoBlock>
      <DemoBlock expand title="切换动画">
        {renderTabs(4, {
          animated: true,
        })}
      </DemoBlock>
      <DemoBlock expand title="滑动切换">
        {renderTabs(4, {
          swipeable: true,
        })}
      </DemoBlock>
      <DemoBlock expand title="滚动导航">
        {renderTabs(8, {
          scrollspy: true,
        })}
      </DemoBlock>
    </div>
  );
};

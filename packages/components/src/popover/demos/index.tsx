import { DemoBlock } from '@rmc-vant/demo';
import {
  PhotoOutlined,
  AddOutlined,
  MusicOutlined,
  MoreOutlined,
} from '@rmc-vant/icons';
import React from 'react';
import { Popover, Button, Grid, GridItem, Space } from 'rmc-vant';

export default () => {
  return (
    <>
      <DemoBlock title="基础用法">
        <Space>
          <Popover
            actions={[
              {
                text: '选项一',
              },
              {
                text: '选项二',
              },
              {
                text: '选项三',
              },
            ]}
            placement="bottom"
          >
            <Button type="primary">浅色风格</Button>
          </Popover>
          <Popover
            actions={[
              {
                text: '选项一',
              },
              {
                text: '选项二',
              },
              {
                text: '选项三',
              },
            ]}
            placement="bottom"
            theme="dark"
          >
            <Button type="primary">深色风格</Button>
          </Popover>
        </Space>
      </DemoBlock>
      <DemoBlock title="选项配置">
        <Space>
          <Popover
            actions={[
              {
                icon: <AddOutlined />,
                text: '选项一',
              },
              {
                icon: <MusicOutlined />,
                text: '选项二',
              },
              {
                icon: <MoreOutlined />,
                text: '选项三',
              },
            ]}
            placement="bottom-start"
          >
            <Button type="primary">展示图标</Button>
          </Popover>
          <Popover
            actions={[
              {
                disabled: true,
                text: '选项一',
              },
              {
                disabled: true,
                text: '选项二',
              },
              {
                text: '选项三',
              },
            ]}
            placement="bottom-start"
          >
            <Button type="primary">禁用图标</Button>
          </Popover>
        </Space>
      </DemoBlock>
      <DemoBlock title="自定义内容">
        <Popover
          placement="bottom-start"
          renderContent={() => (
            <Grid style={{ width: 250 }} clickable square direction="vertical">
              {Array.from({ length: 6 }, (_, i) => (
                <GridItem key={i} icon={<PhotoOutlined />} text="选项" />
              ))}
            </Grid>
          )}
        >
          <Button type="primary">自定义内容</Button>
        </Popover>
      </DemoBlock>
    </>
  );
};

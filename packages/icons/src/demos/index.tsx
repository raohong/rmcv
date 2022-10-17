import { DemoBlock } from '@rmc-vant/demo';
import * as datas from '@rmc-vant/icons';
import type { IconProps } from '@rmc-vant/icons';
import React from 'react';
import { Col, Grid, GridItem, Row, TabPane, Tabs } from 'rmc-vant';

const { ICONS, default: _default, ...data } = datas;

type KEY = keyof typeof data;

const SIcon: React.FC<{ name: KEY } & Omit<IconProps, 'name'>> = ({
  name,
  ...rest
}) => {
  return React.createElement(data[name], {
    size: 32,
    ...rest,
  });
};

export default () => {
  const tabs = [
    {
      key: 'base',
      tab: '基础图标',
    },
    {
      key: 'outlined',
      tab: '线框风格',
    },
    {
      key: 'filled',
      tab: '填充风格',
    },
  ] as const;

  return (
    <Tabs lazyRender>
      <TabPane tab="用法示例" key="example">
        <div
          style={{
            margin: 16,
            background: '#fff',
            borderRadius: 8,
            paddingBottom: 16,
          }}
        >
          <DemoBlock title="基础用法">
            <Row style={{ margin: '16px 0' }}>
              <Col span={6}>
                <SIcon name="ChatOutlined" />
              </Col>
              <Col span={6}>
                <SIcon name="UserCircleOutlined" />
              </Col>
            </Row>
          </DemoBlock>
          <DemoBlock title="图标颜色">
            <Row style={{ margin: '16px 0' }}>
              <Col span={6}>
                <SIcon name="CartOutlined" color="#1989fa" />
              </Col>
              <Col span={6}>
                <SIcon name="FireOutlined" color="#ee0a24" />
              </Col>
            </Row>
          </DemoBlock>
          <DemoBlock title="图标大小">
            <Row style={{ margin: '16px 0' }}>
              <Col span={6}>
                <SIcon name="ChatOutlined" />
              </Col>
              <Col span={6}>
                <SIcon name="ChatOutlined" size={48} />
              </Col>
            </Row>
          </DemoBlock>
        </div>
      </TabPane>
      {tabs.map((item) => (
        <TabPane key={item.key} tab={item.tab}>
          <DemoBlock>
            <Grid style={{ marginTop: 16 }} column={3}>
              {ICONS[item.key].map((name) => {
                return (
                  <GridItem
                    key={name}
                    text={name}
                    icon={<SIcon name={name as KEY} />}
                  />
                );
              })}
            </Grid>
          </DemoBlock>
        </TabPane>
      ))}
    </Tabs>
  );
};

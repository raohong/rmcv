import { DemoBlock } from '@rmc-vant/demo';
import React from 'react';
import { Button, Col, Row, Sticky } from 'rmc-vant';

export default () => {
  return (
    <>
      <DemoBlock title="基础用法">
        <Sticky>
          <Button type="primary">基础用法</Button>
        </Sticky>
      </DemoBlock>
      <DemoBlock title="吸顶距离">
        <Row>
          <Col offset={8} span={8}>
            <Sticky offsetTop={50}>
              <Button type="primary">吸顶距离</Button>
            </Sticky>
          </Col>
        </Row>
      </DemoBlock>
      <DemoBlock title="指定容器">
        <div
          style={{
            height: 200,
            background: '#fff',
          }}
          id="container"
        >
          <Row>
            <Col offset={16} span={8}>
              <Sticky target="#container">
                <Button type="warning">指定容器</Button>
              </Sticky>
            </Col>
          </Row>
        </div>
      </DemoBlock>
      <DemoBlock title="吸底距离">
        <div style={{ marginTop: 200 }}>
          <Sticky position="bottom">
            <Button type="primary">吸底距离</Button>
          </Sticky>
        </div>
      </DemoBlock>
      <div style={{ height: '100vh' }} />
    </>
  );
};

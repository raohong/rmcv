import { DemoBlock } from '@rmc-vant/demo';
import React, { useState } from 'react';
import { Button, Circle, Col, Row, Space } from 'rmc-vant';

export default () => {
  const [p, set] = useState(80);

  return (
    <>
      <DemoBlock title="基础用法">
        <Circle progress={p} />
      </DemoBlock>

      <DemoBlock title="样式定制">
        <Row align="middle">
          <Col span={8}>
            <Circle progress={p} strokeWidth={6} text="宽度定制" />
          </Col>
          <Col span={8}>
            <Circle progress={p} color="rgb(238, 10, 36)" text="颜色定制" />
          </Col>
          <Col span={8}>
            <Circle
              progress={p}
              gradientColor={{
                '0%': '#3fecff',
                '100%': '#6149f6',
              }}
              text="渐变色"
            />
          </Col>
          <Col span={8}>
            <Circle progress={p} text="逆时针" clockwise={false} />
          </Col>
          <Col span={16}>
            <Circle progress={p} text="大小定制" size={120} />
          </Col>
        </Row>

        <Space>
          <Button
            onClick={() => set(Math.min(100, p + 10))}
            size="small"
            type="primary"
          >
            增加
          </Button>
          <Button
            onClick={() => set(Math.max(0, p - 10))}
            size="small"
            type="primary"
            variant="outlined"
          >
            减少
          </Button>
        </Space>
      </DemoBlock>

      <DemoBlock title="开始位置">
        <Row>
          <Col span={8}>
            <Circle progress={80} startPosition="left" text="左侧" />
          </Col>
          <Col span={8}>
            <Circle progress={80} startPosition="right" text="右侧" />
          </Col>
          <Col span={8}>
            <Circle progress={80} startPosition="bottom" text="底部" />
          </Col>
        </Row>
      </DemoBlock>
    </>
  );
};

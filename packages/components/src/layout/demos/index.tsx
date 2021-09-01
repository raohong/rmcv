import React from 'react';
import { Row, Col } from 'rmc-vant';

const renderBlock = () => {
  const colors = ['#2486ff', 'blue', 'green', 'yellow'];

  return (
    <div
      style={{
        height: 100,
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
      }}
    ></div>
  );
};

export default () => (
  <div>
    <Row gutter={16}>
      <Col span={6}>{renderBlock()}</Col>
      <Col span={6}>{renderBlock()}</Col>
      <Col span={6}>{renderBlock()}</Col>
      <Col span={6}>{renderBlock()}</Col>
      <Col span={6}>{renderBlock()}</Col>
      <Col span={6}>{renderBlock()}</Col>
    </Row>
  </div>
);

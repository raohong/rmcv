import React from 'react';
import { Tag } from 'rmc-vant';

export default () => (
  <div>
    <Tag type="danger">表填</Tag>
    <br />
    <Tag plain type="danger">
      表填
    </Tag>
    <p />
    <Tag round type="success">
      表填
    </Tag>
    <br />
    <Tag mark type="warning">
      表填
    </Tag>
    <br />

    <p />
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      <Tag color="#7232dd">标签</Tag>
      <Tag color="#ffe1e1" textColor="#ad0000">
        标签
      </Tag>
      <Tag color="#7232dd" plain>
        标签
      </Tag>
    </div>
  </div>
);

import React, { useState } from 'react';
import { Badge, Button } from 'rmc-vant';
import { Cross, DownOutlined } from '@rmc-vant/icons';

const Box = () => (
  <div
    style={{
      height: 40,
      width: 60,
      backgroundColor: '#dedede',
    }}
  />
);

export default () => {
  const [count, setCount] = useState(0);
  const [showZero, setShowZero] = useState(false);
  const [dot, setDot] = useState(false);

  return (
    <div
      style={{
        paddingTop: 32,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Badge showZero={showZero} dot={dot} content={count}>
          <Box />
        </Badge>

        <Button
          type="primary"
          style={{ marginLeft: 16 }}
          onClick={() => setCount(count + 1)}
        >
          ADD
        </Button>
        <Button
          type="primary"
          style={{ marginLeft: 16 }}
          onClick={() => setCount(count - 1)}
        >
          SUB
        </Button>
      </div>
      <br />
      <Button type="primary" onClick={() => setDot(!dot)}>
        show dot
      </Button>
      <Button
        type="primary"
        style={{ marginLeft: 16 }}
        onClick={() => setShowZero(!showZero)}
      >
        show zero
      </Button>

      <br />

      <Badge content={100}>
        <Box />
      </Badge>
    </div>
  );
};

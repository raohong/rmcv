import React, { useState } from 'react';
import { Badge, Button, ConfigProvider } from 'rmc-vant';

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
  const [count, setCount] = useState(1);
  const [showZero, setShowZero] = useState(true);
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
        <ConfigProvider
          theme={{
            badge: '123',
          }}
        >
          <Badge showZero={showZero} dot={dot} content={count}>
            <Box />
          </Badge>
        </ConfigProvider>

        <Button
          type="primary"
          style={{ marginLeft: 16 }}
          onClick={() =>
            setCount(() => {
              return count + 1;
            })
          }
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
    </div>
  );
};

import React, { useState } from 'react';
import { Button, Sticky, Image } from 'rmc-vant';

export default () => {
  const [num, set] = useState(1);

  return (
    <div
      style={{
        height: '100vh',
        overflow: 'auto',
        paddingTop: 24,
      }}
    >
      <Image height={200} />
      <div
        style={{
          height: 240,
          overflow: 'auto',
          background: '#ddd',
        }}
      >
        <Sticky offsetTop={10} target={(node) => node?.parentElement ?? undefined}>
          <Button
            onClick={() => {
              set(num + 1);
            }}
            style={{
              paddingBottom: num * 6,
              paddingTop: num * 6,
            }}
            type="primary"
          >
            <div>TOP</div>
          </Button>
        </Sticky>
      </div>

      <div
        style={{
          height: '300vh',
        }}
      />
      <div
        style={{
          height: 120,
          background: '#ddd',
          paddingTop: 40,
        }}
      >
        <Sticky offsetBottom={20}>
          <Button type="primary">
            <div>BOTTOM</div>
          </Button>
        </Sticky>
      </div>

      <Image height={200} />
    </div>
  );
};

import React, { useState } from 'react';
import { CountDown, Cell, Button } from 'rmc-vant';

export default () => {
  const [autoStart, set] = useState(false);
  const [millisecond, setMilliseconds] = useState(false);

  return (
    <div>
      <Cell.Group title="倒计时">
        <Cell
          title="基础用法"
          label={
            <CountDown
              millisecond={millisecond}
              format="DD:HH:mm:ss:SSS"
              autoStart={autoStart}
              time={20}
            />
          }
        />
      </Cell.Group>
      <Button type="primary" onClick={() => set(true)}>
        Start
      </Button>
      <Button
        style={{ marginLeft: 24 }}
        type="primary"
        onClick={() => setMilliseconds(!millisecond)}
      >
        切换为 millseconds
      </Button>
    </div>
  );
};

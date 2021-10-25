import React, { useState } from 'react';
import { Progress, Button } from 'rmc-vant';

export default () => {
  const [p, set] = useState(0);

  return (
    <div>
      <Progress inactive percentage={p} />

      <Button
        type="primary"
        onClick={() => {
          set(p + 10);
        }}
      >
        ADD
      </Button>
      <Button
        size="small"
        type="primary"
        onClick={() => {
          set(p - 10);
        }}
      >
        SUB
      </Button>
    </div>
  );
};

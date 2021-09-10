import React, { useState } from 'react';
import { Circle, Button } from 'rmc-vant';

export default () => {
  const [p, set] = useState(50);

  return (
    <div>
      <Circle layerColor="#ebedf0" progress={p} text="吃饭进度" />
      <p></p>
      <Button onClick={() => set(p + 10)}>ADD</Button>
      <Button onClick={() => set(p - 10)}>SUB</Button>

      <p></p>
      <Circle
        gradientColor={{
          '0%': 'red',
          '100%': 'green',
        }}
        progress={p}
        text="吃饭进度"
      />
    </div>
  );
};

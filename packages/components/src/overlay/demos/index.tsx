import React, { useState } from 'react';
import { Button, Overlay } from 'rmc-vant';

export default () => {
  const [visible, set] = useState(false);

  return (
    <div>
      <Button onClick={() => set(true)} type="primary">
        open
      </Button>
      <Overlay visible={visible} onClick={() => set(false)}></Overlay>
    </div>
  );
};

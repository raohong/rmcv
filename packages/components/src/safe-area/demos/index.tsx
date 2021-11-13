import React from 'react';
import { SafeArea, Overlay, Button } from 'rmc-vant';

export default () => (
  <>
    <Overlay visible zIndex={1000} />
    <SafeArea
      bottom
      style={{
        position: 'fixed',
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 10000,
      }}
    >
      <Button size="large" type="primary" block>
        OK
      </Button>
    </SafeArea>
  </>
);

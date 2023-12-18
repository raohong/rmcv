import React from 'react';
import { Button, Overlay, SafeArea } from 'rmc-vant';

export default () => (
  <>
    <Overlay open zIndex={1000} />
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

import React, { useRef } from 'react';
import { PullRefresh, Image, Button } from 'rmc-vant';
import { PullRefreshRef } from '../interface';

export default () => {
  const ref = useRef<PullRefreshRef>(null);

  return (
    <div
      style={{
        maxHeight: '100vh',
        overflow: 'auto',
      }}
    >
      <div
        style={{
          maxHeight: 550,
          overflow: 'auto',
        }}
      >
        <div
          style={{
            paddingTop: 100,
          }}
        ></div>
        <div
          style={{
            maxHeight: 500,
            overflow: 'auto',
          }}
        >
          <PullRefresh
            ref={ref}
            onRefresh={() =>
              new Promise((r) =>
                setTimeout(() => {
                  r(1);
                }, 3000),
              )
            }
          >
            <div>1312</div>

            <Image height={400} />
            <Image height={400} />
            <Image height={400} />
            <Image height={400} />

            <Button
              type="primary"
              style={{
                position: 'fixed',
                left: 0,
                top: 20,
              }}
              onClick={() => {
                ref.current?.refresh();
              }}
            >
              REFRESH
            </Button>
          </PullRefresh>
        </div>
      </div>
    </div>
  );
};

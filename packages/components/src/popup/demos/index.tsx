import React, { useState } from 'react';
import { Button, Popup, PopupPositon } from 'rmc-vant';

export default () => {
  const list: PopupPositon[] = ['center', 'bottom', 'left', 'right', 'top'];
  const [visibles, setVisibles] = useState<
    Partial<Record<PopupPositon, boolean>>
  >({});

  return (
    <div>
      {list.map((item) => (
        <div
          key={item}
          style={{
            marginBottom: 24,
          }}
        >
          <Button
            onClick={() => {
              setVisibles((prev) => ({
                ...prev,
                [item]: true,
              }));
            }}
            type="primary"
          >
            {item}
          </Button>
          <Popup
            onVisibleChange={(current) => {
              setVisibles((prev) => ({
                ...prev,
                [item]: current,
              }));
            }}
            visible={visibles[item]}
            position={item}
            style={
              item === 'center'
                ? {
                    height: '25vh',
                    width: '70vw',
                  }
                : item === 'bottom' || item === 'top'
                ? {
                    height: '30%',
                  }
                : {
                    width: '30%',
                  }
            }
            overlayClosable
            round
            lazyRender
            closeable={item !== 'center'}
            closeIconPosition="top-left"
            transiton={
              item === 'center'
                ? {
                    from: {
                      scale: 0.7,
                      x: '-50%',
                      y: '-50%',
                      opacity: 0,
                    },
                    enter: {
                      scale: 1,
                      x: '-50%',
                      y: '-50%',
                      opacity: 1,
                    },
                    leave: {
                      scale: 0.7,
                      x: '-50%',
                      y: '-50%',
                      opacity: 0,
                    },
                    config: {
                      tension: 210,
                      friction: 20,
                    },
                  }
                : undefined
            }
          />
        </div>
      ))}
    </div>
  );
};

import { DemoBlock } from '@rmc-vant/demo';
import React, { useRef } from 'react';
import { Button, Cell, Dialog, SwipeCell, SwipeCellRef } from 'rmc-vant';

export default () => {
  const swipeCellRef = useRef<SwipeCellRef>(null);

  return (
    <>
      <DemoBlock title="基础用法">
        <SwipeCell
          left={
            <Button style={{ height: '100%' }} type="primary" shape="square">
              选择
            </Button>
          }
          right={
            <>
              <Button style={{ height: '100%' }} type="danger" shape="square">
                删除
              </Button>
              <Button style={{ height: '100%' }} type="primary" shape="square">
                收藏
              </Button>
            </>
          }
        >
          <Cell title="单元格" value="内容" border={false} />
        </SwipeCell>
      </DemoBlock>
      <DemoBlock title="异步关闭">
        <SwipeCell
          right={
            <>
              <Button
                onClick={async () => {
                  const dispose = swipeCellRef.current?.disableClickAwayManager();
                  try {
                    await Dialog.confirm({ title: '确定删除吗' });
                  } catch {
                    console.log('cancel');
                  } finally {
                    dispose?.();
                    swipeCellRef.current?.close();
                  }
                }}
                style={{ height: '100%' }}
                type="danger"
                shape="square"
              >
                删除
              </Button>
            </>
          }
          closeOnActionClick={false}
          ref={swipeCellRef}
        >
          <Cell title="单元格" value="内容" border={false} />
        </SwipeCell>
      </DemoBlock>
    </>
  );
};

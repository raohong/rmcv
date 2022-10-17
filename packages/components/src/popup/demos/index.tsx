import { DemoBlock } from '@rmc-vant/demo';
import { CloseOutlined } from '@rmc-vant/icons';
import React, { useState } from 'react';
import { Cell, Popup, PopupProps } from 'rmc-vant';

const PopupDemoItem: React.FC<
  Omit<PopupProps, 'visible' | 'onClose'> & {
    name: string;
    defaultVisible?: boolean;
  }
> = ({ name, defaultVisible = false, ...props }) => {
  const [visible, set] = useState(defaultVisible);
  const sizeProp =
    props.position === 'left' || props.position === 'right' ? 'width' : 'height';

  return (
    <>
      <Cell onClick={() => set(true)} title={name} clickable />

      <Popup
        {...props}
        style={{
          [sizeProp]:
            props.position === 'left' || props.position === 'right'
              ? '20vw'
              : '30vh',
          ...props.style,
        }}
        visible={visible}
        onClose={() => set(false)}
        teleport={() => document.body}
        lazyRender
      />
    </>
  );
};

export default () => {
  const [visible, set] = useState(false);

  return (
    <>
      <DemoBlock title="基础用法">
        <Cell onClick={() => set(true)} title="展示弹出层" clickable />
      </DemoBlock>
      <DemoBlock title="弹出层位置">
        <PopupDemoItem position="top" name="顶部弹出" />
        <PopupDemoItem position="bottom" name="底部弹出" />
        <PopupDemoItem position="left" name="右侧弹出" />
        <PopupDemoItem position="right" name="左侧弹出" />
      </DemoBlock>

      <DemoBlock title="关闭图标">
        <PopupDemoItem position="bottom" name="关闭图标" closeable />
        <PopupDemoItem
          position="bottom"
          name="自定义图标"
          closeIcon={<CloseOutlined />}
          closeable
        />
        <PopupDemoItem
          position="bottom"
          name="图标位置"
          closeIconPosition="top-left"
          closeable
        />
      </DemoBlock>

      <DemoBlock title="圆角弹窗">
        <PopupDemoItem position="bottom" name="圆角弹窗" round />
      </DemoBlock>
      <DemoBlock title="指定挂载位置">
        <PopupDemoItem position="bottom" name="挂载 body" teleport="body" />
      </DemoBlock>
      <Popup
        visible={visible}
        onClose={() => set(false)}
        position="center"
        style={{
          padding: '40px 60px',
          borderRadius: 4,
        }}
      >
        基础用法
      </Popup>
    </>
  );
};

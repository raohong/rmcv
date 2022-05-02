import { DemoBlock } from '@rmc-vant/demo';
import { ImagePreview, Cell, ImagePreviewComponent, Toast } from 'rmc-vant';
import React, { useState } from 'react';

const list = [
  'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
  'https://cdn.jsdelivr.net/npm/@vant/assets/apple-3.jpeg',
  'https://cdn.jsdelivr.net/npm/@vant/assets/apple-4.jpeg',
];

const ComponentDemo = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Cell
        title="组件调用"
        onClick={() => {
          setVisible(true);
        }}
        isLink
      />
      <ImagePreviewComponent
        images={list}
        visible={visible}
        onClose={() => setVisible(false)}
      />
    </>
  );
};

export default () => {
  return (
    <>
      <DemoBlock title="基础用法">
        <Cell
          title="预览图片"
          onClick={() => {
            ImagePreview(list);
          }}
          isLink
        />
      </DemoBlock>
      <DemoBlock title="传入配置项">
        <Cell
          title="指定初始位置"
          onClick={() => {
            ImagePreview({
              images: list,
              defaultActiveIndex: 1,
            });
          }}
          isLink
        />
        <Cell
          title="监听关闭事件"
          onClick={() => {
            ImagePreview({
              images: list,
              onClose() {
                Toast('关闭');
              },
            });
          }}
          isLink
        />
      </DemoBlock>
      <DemoBlock title="组件调用">
        <ComponentDemo />
      </DemoBlock>
    </>
  );
};

import { DemoBlock } from '@rmc-vant/demo';
import React, { useState } from 'react';
import { Cell, ImagePreview, showToast } from 'rmc-vant';

const images = [
  'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
  'https://cdn.jsdelivr.net/npm/@vant/assets/apple-3.jpeg',
  'https://cdn.jsdelivr.net/npm/@vant/assets/apple-4.jpeg',
];

const ComponentDemo = () => {
  const [open, setOPen] = useState(false);

  return (
    <>
      <Cell
        title="组件调用"
        onClick={() => {
          setOPen(true);
        }}
        isLink
      />
      <ImagePreview images={images} open={open} onClose={() => setOPen(false)} />
    </>
  );
};

export default () => {
  const [api, holder] = ImagePreview.useImagePreview();

  return (
    <>
      {holder}
      <DemoBlock title="基础用法">
        <Cell
          title="预览图片"
          onClick={() => {
            api.open(images);
          }}
          isLink
        />
      </DemoBlock>
      <DemoBlock title="传入配置项">
        <Cell
          title="指定初始位置"
          onClick={() => {
            api.open({
              images,
              defaultActiveIndex: 1,
            });
          }}
          isLink
        />
        <Cell
          title="监听关闭事件"
          onClick={() => {
            api.open({
              images,
              onClose() {
                showToast('关闭');
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

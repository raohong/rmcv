---
title: ImagePreview
subTitle: 图片预览
category: components
group: show
---

## 介绍

图片放大预览，支持函数调用和组件调用两种方式。

## 引入

```tsx
import {
  ImagePreview,
  closeImagePreview,
  imagePreviewSwipeTo,
  showImagePreview,
  useImagePreview,
} from 'rmc-vant';
```

### 函数调用

`showImagePreview` 是一个函数，调用函数后会直接在页面中展示图片预览界面。

demo|function

```tsx
import { Cell, showImagePreview } from 'rmc-vant';

export default () => {
  return (
    <Cell
      onClick={() =>
        showImagePreview(['https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg'])}
      title='函数调用'
      isLink
    />
  );
};
```

### 组件调用

引入 `ImagePreview`

```tsx
import { ImagePreview } from 'rmc-vant';
```

### hooks 调用

引入 `useImagePreview`

demo|useImagePreview

```tsx
import { Cell, useImagePreview } from 'rmc-vant';

export default () => {
  const [api, holder] = useImagePreview([]);

  return (
    <>
      <Cell
        type='primary'
        onClick={() =>
          api.open(['https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg'])}
        title='查看详情'
        isLink
      />
      {holder}
    </>
  );
};
```

## 代码演示

### 基础用法

直接传入图片数组，即可展示图片预览。

demo|base

```tsx
import { Cell, showImagePreview } from 'rmc-vant';

export default () => {
  return (
    <Cell
      onClick={() =>
        showImagePreview([
          'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
          'https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
        ])}
      title='预览图片'
      isLink
    />
  );
};
```

### 指定初始位置

`showImagePreview` 支持传入配置对象，并通过 `defaultActiveIndex` 选项指定图片的初始位置（索引值）。

demo|defaultActiveIndex

```tsx
import { Cell, showImagePreview } from 'rmc-vant';

export default () => {
  return (
    <Cell
      onClick={() =>
        showImagePreview({
          images: [
            'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
            'https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
          ],
          defaultActiveIndex: 1,
        })}
      title='查看详情'
      isLink
    />
  );
};
```

### 展示关闭按钮

设置 `closeable` 属性后，会在弹出层的右上角显示关闭图标，并且可以通过 `closeIcon` 属性自定义图标，使用 `closeIconPosition` 属性可以自定义图标位置。

demo|closeable

```tsx
import { Cell, showImagePreview } from 'rmc-vant';

export default () => {
  return (
    <Cell
      onClick={() =>
        showImagePreview({
          images: [
            'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
            'https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
          ],
          closeable: true,
        })}
      title='关闭按钮'
      isLink
    />
  );
};
```

### 监听关闭事件

通过 `onClose` 选项监听图片预览的关闭事件。

demo|onClose

```tsx
import { Cell, showImagePreview, showToast } from 'rmc-vant';

export default () => {
  return (
    <Cell
      onClick={() =>
        showImagePreview({
          images: [
            'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
            'https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
          ],
          closeable: true,
          onClose() {
            console.log('toast');
            showToast({ message: '已关闭', zIndex: 2 });
          },
        })}
      title='查看图片'
      isLink
    />
  );
};
```

## API

### ImagePreview Options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| lazyRender | 是否在显示图片预览时才渲染节点 | `boolean` |
| showIndex | 是否显示页码 | `boolean` | `true` |
| maxZoom | 手势缩放时，最大缩放比例 | `number` | `3` |
| minZoom | 手势缩放时，最小缩放比例 | `number` | `1/3` |
| closable | 是否显示关闭图标 | `boolean` |  |
| images | 需要预览的图片 URL 数组 | `string[]` |  |
| defaultActiveIndex | 图片预览起始位置索引 | `number` |  |
| PortalContainer | 自定义渲染位置 | `PortalContainer` |  |
| onChange | 切换当前图片时触发 | `(current: number) => void` |  |
| onClose | 关闭时回调 | `(state: { index: number; url: string }) => void` |  |
| afterClose | 关闭动画完成 | `() => void` |  |
| classNames | 给各个 slot 自定义类名 | `Record<ImagePreviewNSlot, string>` |  |

### ImagePreview Props

除了 和 `ImagePreview Options` 一样的属性外，还有下列属性。

| 参数        | 说明             | 类型      | 默认值 |
| ----------- | ---------------- | --------- | ------ |
| activeIndex | 当前图片索引     | `number`  |
| open        | 是否显示图片预览 | `boolean` |

### Types

#### ImagePreviewNSlot

```tsx
type ImagePreviewNSlot =
  | 'root'
  | 'header'
  | 'index'
  | 'item'
  | 'image'
  | 'closeIcon';
```

#### ImagePreviewApiRef

```tsx
type ImagePreviewApiRef = {
  swipeTo: (activeIndex: number) => void;
  close: () => void;
  open: (options: string[] | ImagePreviewOptions) => void;
};
```

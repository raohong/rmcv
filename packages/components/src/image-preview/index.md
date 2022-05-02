---
title: ImagePreview
subTitle: 图片预览
category: components
type: 展示组件
demo: true
---

### 介绍

图片放大预览，支持函数调用和组件调用两种方式。

### 引入

```tsx
import { Image } from 'rmc-vant';
```

### 函数调用

`ImagePreview` 是一个函数，调用函数后会直接在页面中展示图片预览界面。

```tsx
ImagePreview({
  images: ['https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg'],
});
```

### 组件调用

引入 `ImagePreviewComponent`

```tsx
import { ImagePreviewComponent } from 'rmc-vant';
```

## 代码演示

### 基础用法

直接传入图片数组，即可展示图片预览。

```tsx
ImagePreview({
  images: [
    'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    'https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
  ],
});
```

### 指定初始位置

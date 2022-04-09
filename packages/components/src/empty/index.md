---
title: Empty
subTitle: 空状态
category: components
type: 展示组件
demo: true
theme: light
---

### 介绍

空状态时的占位提示。

### 引入

```tsx
import { Empty } from 'rmc-vant';
```

## 代码演示

### 基础用法

```tsx
<Empty description="描述文字" />
```

### 图片类型

Empty 组件内置了多种占位图片类型，可以在不同业务场景下使用。

```tsx
<>
  <Empty description="描述文字" image="error" />
  <Empty description="描述文字" image="network" />
  <Empty description="描述文字" image="search" />
</>
```

### 自定义大小

通过 `imageSize` 属性图片的大小。

```tsx
<Empty imageSize={100} description="描述文字" />
```

### 自定义图片 URL

需要自定义图片时，可以在 `image` 属性中传入任意图片 `URL`。

```tsx
<Empty
  imageSize={80}
  image="https://cdn.jsdelivr.net/npm/@vant/assets/custom-empty-image.png"
  description="描述文字"
/>
```

### 底部内容

传入 `children` 可以在 `Empty` 组件的下方插入内容

```tsx
<Empty description="描述文字">
  <Button style={{ width: 160 }} type="danger" shape="round">
    按钮
  </Button>
</Empty>
```

## API

### Props

{{"api": true}}

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

{{"cssVar": true}}

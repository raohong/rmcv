---
title: Space
subTitle: 间距
category: components
type: 基础组件
demo: true
theme: light
---

### 介绍

设置元素之间的间距。

### 引入

```tsx
import { Space } from 'rmc-vant';
```

## 代码演示

### 基础用法

`Space` 组件会在各个子组件之间设置一定的间距，默认间距为 8px。

```tsx
<Space>
  <Button>按钮</Button>
  <Button>按钮</Button>
  <Button>按钮</Button>
  <Button>按钮</Button>
</Space>
```

### 垂直排列

将 `direction` 属性设置为 `vertical`，可以设置垂直方向排列的间距。

```tsx
<Space direction="vertical" fill>
  <Button>按钮</Button>
  <Button>按钮</Button>
  <Button>按钮</Button>
  <Button>按钮</Button>
</Space>
```

## API

### Props

{{"api": true}}

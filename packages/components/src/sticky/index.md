---
title: Sticky
subTitle: 粘性布局
category: components
type: 展示组件
demo: true
---

### 介绍

将页面元素固定在在可视范围。

### 引入

```tsx
import { Sticky } from 'rmc-vant';
```

## 代码演示

### 基础用法

将内容包裹在 `Sticky` 组件内即可。

```tsx
<Sticky>
  <Button type="primary">基础用法</Button>
</Sticky>
```

### 吸顶距离

通过 `offsetTop` 属性可以设置组件在吸顶时与顶部的距离。

```tsx
<Sticky offsetTop={50}>
  <Button type="primary">吸顶距离</Button>
</Sticky>
```

### 指定容器

通过 `container` 属性可以指定组件的容器，页面滚动时，组件会始终保持在容器范围内，当组件即将超出容器底部时，会固定在容器的底部。

```tsx
<Sticky target="#container">
  <Button type="warning">指定容器</Button>
</Sticky>
```

### 吸底距离

将 `position` 设置为 bottom 可以让组件吸附在底部。通过 `offsetBottom` 属性可以设置组件在吸底时与底部的距离。

```tsx
<Sticky position="bottom" offsetBottom={10}>
  <Button type="primary">吸底距离</Button>
</Sticky>
```

## API

### Props

{{"api": true}}

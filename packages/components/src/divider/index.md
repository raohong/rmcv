---
title: Divider
subTitle: 分割线
category: components
type: 展示组件
demo: true
---

### 介绍

用于将内容分隔为多个区域。

### 引入

```tsx
import { Divider } from 'rmc-vant';
```

## 代码演示

### 基础用法

默认渲染一条水平分割线。

```tsx
<Divider />
```

### 展示文字

插入内容。

```tsx
<Divider>文本</Divider>
```

### 内容位置

通过 `contentPosition` 指定内容所在位置。

```tsx
<>
  <Divider contentPosition="left">文本</Divider>
  <Divider contentPosition="right">文本</Divider>
</>
```

### 虚线

添加 dashed 属性使分割线渲染为虚线。

```tsx
<Divider dashed>文本</Divider>
```

### 自定义样式

可以直接通过 `style` 属性设置分割线的样式。

```tsx
<Divider
  style={{
    color: '#1989fa',
    borderColor: '#1989fa',
    padding: '0 16px',
  }}
>
  文本
</Divider>
```

## API

### Props

{{"api": true}}

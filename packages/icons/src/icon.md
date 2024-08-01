---
title: Icon
subTitle: 图标
category: components
group: base
theme: light
demo: './demos/index.tsx'
---

## 介绍

基于 SVG 的图标集，可以通过 Icon 组件使用

### 引用

```tsx
import { Icon, UserCircleOutlined } from '@rmc-vant/icons';
```

## 代码演示

### 基础用法

```tsx
<Space>
  <ChatOutlined />
  <UserCircleOutlined />
</Space>;
```

### 图标颜色

通过 `color` 属性来设置图标的颜色。

```tsx
<Space>
  <CartOutlined color='#1989fa' />
  <FireOutlined color='#ee0a24' />
</Space>;
```

### 图标大小

通过 `size` 属性来设置图标的尺寸大小，可以指定任意 CSS 单位。

```tsx
<Space>
  <ChatOutlined />
  <ChatOutlined size={48} />
</Space>;
```

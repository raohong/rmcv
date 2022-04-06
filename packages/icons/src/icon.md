---
title: Icon
subTitle: 图标
category: components
type: 基础组件
demo: true
---

### 介绍

基于 SVG 的图标集，可以通过 Icon 组件使用

### 引用

```tsx
import { Icon, UserCircleOutlined } from '@rmc-vant/icons';
```

## 代码演示

### 基础用法

```tsx
<>
  <ChatOutlined />
  <UserCircleOutlined />
</>
```

### 图标颜色

通过 `color` 属性来设置图标的颜色。

```tsx
<>
  <CartOutlined color="#1989fa" />
  <FireOutlined color="#ee0a24" />
</>
```

### 图标大小

通过 `size` 属性来设置图标的尺寸大小，可以指定任意 CSS 单位。

```tsx
<>
  <ChatOutlined />
  <ChatOutlined size={48} />
</>
```

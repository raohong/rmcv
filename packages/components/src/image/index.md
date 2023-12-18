---
title: Image
subTitle: 图片
category: components
type: 基础组件
demo: true
theme: light
---

### 介绍

增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。

### 引入

```tsx
import { Image } from 'rmc-vant';
```

## 代码演示

### 基础用法

基础用法与原生 `img` 标签一致，可以设置 `src`、`width` 、`height`、`alt` 等原生属性。

```tsx
<Image src="https://img.yzcdn.cn/vant/cat.jpeg" width={100} height={100} />
```

### 填充模式

通过 fit 属性可以设置图片填充模式，等同于原生的 [object-fit](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit) 属性，可选值见下方表格。

```tsx
<Image
  width="10rem"
  height="10rem"
  fit="contain"
  src="https://img.yzcdn.cn/vant/cat.jpeg"
/>
```

### 圆形图片

通过 `round` 属性可以设置图片变圆，注意当图片宽高不相等且 `fit` 为 `contain` 或 `scale-down` 时，将无法填充一个完整的圆形。

```tsx
<Image width="10rem" height="10rem" src="https://img.yzcdn.cn/vant/cat.jpeg" round />
```

### 图片懒加载

设置 `lazy-load` 属性来开启图片懒加载。

```tsx
<Image
  width="10rem"
  height="10rem"
  src="https://img.yzcdn.cn/vant/cat.jpeg"
  lazyLoad
/>
```

### 加载中提示

`Image` 组件提供了默认的加载中提示，支持通过 `loadingIcon` 插槽自定义内容。

```tsx
<Image
  src="https://img.yzcdn.cn/vant/cat.jpeg"
  loadingIcon={<Loading type="spinner" size={20} />}
/>
```

### 加载失败提示

`Image` 组件提供了默认的加载失败提示，支持通过 `error` 插槽自定义内容。

```tsx
<Image src="https://img.yzcdn.cn/vant/cat.jpeg" errorIcon={<span>加载失败</span>} />
```

## API

### Props

{{"api": true}}

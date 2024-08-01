---
title: Image
subTitle: 图片
category: components
group: base
---

## 介绍

增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。

## 引入

```tsx
import { Image } from 'rmc-vant';
```

## 代码演示

### 基础用法

基础用法与原生 `img` 标签一致，可以设置 `src`、`width` 、`height`、`alt` 等原生属性。

demo|base

```tsx
<Image src='https://img.yzcdn.cn/vant/cat.jpeg' width={100} height={100} />;
```

### 填充模式

通过 fit 属性可以设置图片填充模式，等同于原生的 [object-fit](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit) 属性，可选值见下方表格。

demo|fit

```tsx
<Image
  width='10rem'
  height='10rem'
  fit='contain'
  src='https://img.yzcdn.cn/vant/cat.jpeg'
/>;
```

### 圆形图片

通过 `round` 属性可以设置图片变圆，注意当图片宽高不相等且 `fit` 为 `contain` 或 `scale-down` 时，将无法填充一个完整的圆形。

demo|round

```tsx
<Image width='10rem' height='10rem' src='https://img.yzcdn.cn/vant/cat.jpeg' round />;
```

### 图片懒加载

设置 `lazy-load` 属性来开启图片懒加载。

demo|lazyLoad

```tsx
<Image
  width='10rem'
  height='10rem'
  src='https://img.yzcdn.cn/vant/cat.jpeg'
  lazyLoad
/>;
```

### 加载中提示

`Image` 组件提供了默认的加载中提示，支持通过 `loadingIcon` 插槽自定义内容。

demo|loadingIcon

```tsx
<Image
  src='https://img.yzcdn.cn/vant/cat.jpeg'
  loadingIcon={<Loading type='spinner' size={20} />}
/>;
```

### 加载失败提示

`Image` 组件提供了默认的加载失败提示，支持通过 `error` 插槽自定义内容。

demo|error

```tsx
<Image src='https://img.yzcdn.cn/vant/cat.jpeg' errorIcon={<span>加载失败</span>} />;
```

## API

### Image Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| src | 图片链接 | `string` |  |
| fit | 图片裁剪模式，详情见 [object-fit](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit) | `contain` \| `cover` \| `fill` \| `none` \| `scale-down` | `none` |
| position | 图片位置，详情见 [object-position](https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-position) | `center` \| `left` \| `top` \| `bottom` \| `right` |  |
| width | 宽度 | `string` \| `number` |  |
| height | 高度 | `string` \| `number` |  |
| radius | 图片 borderRadius | `string` \| `number` |  |
| round | 是否是圆形 | `boolean` |  |
| lazyLoad | 否开启 lazyLoad | `boolean` |  |
| showLoading | 是否显示 loading | `boolean` | `true` |
| showError | 是否显示加载错误 | `boolean` | `true` |
| errorIcon | 自定义 error | `React.ReactNode` |  |
| loadingIcon | 自定义 loading | `React.ReactNode` |  |
| block | 是否渲染为 block 元素 | `boolean` |  |
| classNames | 给各个 slot 自定义类名 | `Record<ImageNSlot, string>` |  |

### Types

#### ImageNSlot

```ts
type ImageNSlot = 'root' | 'placeholder' | 'img' | 'errorIcon' | 'loadingIcon';
```

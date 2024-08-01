---
title: Empty
subTitle: 空状态
category: components
group: show
theme: light
---

## 介绍

空状态时的占位提示。

## 引入

```tsx
import { Empty } from 'rmc-vant';
```

## 代码演示

### 基础用法

demo|base

```tsx
<Empty description='描述文字' />;
```

### 图片类型

Empty 组件内置了多种占位图片类型，可以在不同业务场景下使用。

demo|image

```tsx
<>
  <Empty description='描述文字' image='error' />
  <Empty description='描述文字' image='network' />
  <Empty description='描述文字' image='search' />
</>;
```

### 自定义大小

通过 `imageSize` 属性图片的大小。

demo|imageSize

```tsx
<Empty imageSize={100} description='描述文字' />;
```

### 自定义图片 URL

需要自定义图片时，可以在 `image` 属性中传入任意图片 `URL`。

demo|url

```tsx
<Empty
  imageSize={80}
  image='https://cdn.jsdelivr.net/npm/@vant/assets/custom-empty-image.png'
  description='描述文字'
/>;
```

### 底部内容

传入 `children` 可以在 `Empty` 组件的下方插入内容

demo|children

```tsx
<Empty description='描述文字'>
  <Button style={{ width: 160 }} type='danger' shape='round'>
    按钮
  </Button>
</Empty>;
```

## API

### Empty Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| image | 图片类型，支持传入图片 URL | `default` \| `error` \| `network` \| `search` \| `string` \| `React.ReactElement` | `default` |
| imageSize | 图片大小，默认单位为 | `ImageSize \| [ImageSize, ImageSize]` | - |
| description | 图片下方的描述文字 | `React.ReactNode` | - |
| classNames | 给各个 slot 自定义类名 | `Record<EmptyNSlot, string>` | - |

### Types

#### ImageSize

```ts
type ImageSize = string | number;
```

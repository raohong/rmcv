---
title: Divider
subTitle: 分割线
category: components
group: show
theme: light
---

## 介绍

用于将内容分隔为多个区域。

## 引入

```tsx
import { Divider } from 'rmc-vant';
```

## 代码演示

### 基础用法

默认渲染一条水平分割线。

demo|base

```tsx
<Divider />;
```

### 展示文字

插入内容。

demo|text

```tsx
<Divider>文本</Divider>;
```

### 内容位置

通过 `contentPosition` 指定内容所在位置。

demo|contentPosition

```tsx
<>
  <Divider contentPosition='left'>文本</Divider>
  <Divider contentPosition='right'>文本</Divider>
</>;
```

### 虚线

添加 dashed 属性使分割线渲染为虚线。

demo|dashed

```tsx
<Divider dashed>文本</Divider>;
```

### 自定义样式

可以直接通过 `style` 属性设置分割线的样式。

demo|style

```tsx
<Divider
  style={{
    color: '#1989fa',
    borderColor: '#1989fa',
    padding: '0 16px',
  }}
>
  文本
</Divider>;
```

## API

### Divider Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| contentPosition | 文本内容 | `left` \| `right` \| `center` | `center` |
| dashed | border 样式是否是 dashed | `boolean` |  |
| hairline | 是否是 0.5px | `boolean` |  |
| classNames | 给各个 slot 自定义类名 | `Record<'root' \| 'text', string>` |  |

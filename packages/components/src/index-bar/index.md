---
title: IndexBar
subTitle: 索引栏
category: components
type: 导航组件
demo: xedni-bar
theme: light
---

### 介绍

用于列表的索引分类显示和快速定位。

### 引入

```tsx
import { IndexAnchor, IndexBar } from 'rmc-vant';
```

## 代码演示

### 基础用法

点击索引栏时，会自动跳转到对应的 `IndexAnchor` 锚点位置。

```tsx
<IndexBar>
  <IndexAnchor index="A" />
  <Cell title="文本" />
  <Cell title="文本" />
  <Cell title="文本" />
  <IndexAnchor index="B" />
  <Cell title="文本" />
  <Cell title="文本" />
  <Cell title="文本" />
</IndexBar>
```

### 自定义索引列表

可以通过 `indexList` 属性自定义展示的索引字符列表。

```tsx
const customIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9];

<IndexBar indexList={customIndex}>
  {customIndex.map((item) => (
    <div key={item}>
      <IndexAnchor index={item}>标题 {item}</IndexAnchor>
      <Cell title="文本" />
      <Cell title="文本" />
      <Cell title="文本" />
    </div>
  ))}
</IndexBar>;
```

## API

### Props

{{"api": true}}

---
title: Tag
subTitle: 标签
category: components
group: show
theme: light
---

## 介绍

用于标记关键词和概括主要内容。

## 引入

```tsx
import { Tag } from 'rmc-vant';
```

## 代码演示

### 基础用法

通过 `type` 属性控制标签颜色。

demo|type

```tsx
<Space>
  <Tag type='primary'>标签</Tag>
  <Tag type='success'>标签</Tag>
  <Tag type='danger'>标签</Tag>
  <Tag type='warning'>标签</Tag>
</Space>;
```

### 空心样式

设置 `plain` 属性设置为空心样式。

demo|plain

```tsx
<Tag type='primary' plain>
  标签
</Tag>;
```

### 圆角样式

通过 `round` 设置为圆角样式。

demo|round

```tsx
<Tag type='primary' round>
  标签
</Tag>;
```

### 标记样式

通过 `mark` 设置为标记样式(半圆角)。

demo|mark

```tsx
<Tag type='primary' mark>
  标签
</Tag>;
```

### 可关闭标签

添加 `closeable` 属性表示标签是可关闭的

demo|closeable

```tsx
const [visible, setVisible] = useState(true);

return (
  <Tag type='primary' show={visible} onClose={() => setVisible(false)} closeable>
    标签
  </Tag>
);
```

### 标签大小

通过 `size` 属性调整标签大小。

demo|size

```tsx
<Space>
  <Tag type='primary'>标签</Tag>
  <Tag type='primary' size='medium'>
    标签
  </Tag>
  <Tag type='primary' size='large'>
    标签
  </Tag>
</Space>;
```

### 自定义颜色

通过 `color` 和 `textColor` 属性设置标签颜色。

demo|color

```tsx
<Space>
  <Tag color='#7232dd'>标签</Tag>
  <Tag color='#ffe1e1' text-color='#ad0000'>
    标签
  </Tag>
  <Tag color='#7232dd' plain>
    标签
  </Tag>
</Space>;
```

## API

### Tag Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型 | `success` \| `primary` \| `danger` \| `warning` \| `default` | `primary` |
| shape | 形状 | `round` \| `mark` \| `default` | `default` |
| size | 大小 | `medium` \| `large` \| `small` | `small` |
| variant | 样式 | `outlined` \| `contained` | `contained` |
| color | 背景色， plain 时 border-color 会设置为 color | `string` |  |
| textColor | 字体颜色, plain 时 border-color 颜色优先于 color | `string` |  |
| closeable | 是否可关闭 | `boolean` |  |
| show | 是否显示 | `boolean` |  |
| classNames | 给各个 slot 自定义类名 | `Record<TagNSlot, string>` |  |

### Tag Events

| 参数    | 说明       | 类型         | 默认值 |
| ------- | ---------- | ------------ | ------ |
| onClose | 关闭时触发 | `() => void` |        |

---
title: Tag
subTitle: 标签
category: components
type: 展示组件
demo: true
---

### 介绍

用于标记关键词和概括主要内容。

### 引入

```tsx
import { Tag } from 'rmc-vant';
```

## 代码演示

### 基础用法

通过 `type` 属性控制标签颜色。

```tsx
<>
  <Tag type="primary">标签</Tag>
  <Tag type="success">标签</Tag>
  <Tag type="danger">标签</Tag>
  <Tag type="warning">标签</Tag>
</>
```

### 空心样式

设置 `plain` 属性设置为空心样式。

```tsx
<Tag type="primary" plain>
  标签
</Tag>
```

### 圆角样式

通过 `round` 设置为圆角样式。

```tsx
<Tag type="primary" round>
  标签
</Tag>
```

### 标记样式

通过 `mark` 设置为标记样式(半圆角)。

```tsx
<Tag type="primary" mark>
  标签
</Tag>
```

### 可关闭标签

添加 `closeable` 属性表示标签是可关闭的

```tsx
const [visible, setVisible] = useState(true);

<Tag type="primary" visible={visible} onClose={() => setVisible(false)} closeable>
  标签
</Tag>;
```

### 标签大小

通过 `size` 属性调整标签大小。

```tsx
<>
  <Tag type="primary">标签</Tag>
  <Tag type="primary" size="medium">
    标签
  </Tag>
  <Tag type="primary" size="large">
    标签
  </Tag>
</>
```

### 自定义颜色

通过 `color` 和 `textColor` 属性设置标签颜色。

```tsx
<>
  <Tag color="#7232dd">标签</Tag>
  <Tag color="#ffe1e1" text-color="#ad0000">
    标签
  </Tag>
  <Tag color="#7232dd" plain>
    标签
  </Tag>
</>
```

## API

### Props

{{"api": true}}

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

{{"cssVar": true}}

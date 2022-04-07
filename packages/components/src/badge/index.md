---
title: Badge
subTitle: 徽标
category: components
type: 展示组件
demo: true
---

### 介绍

在右上角展示徽标数字或小红点。

### 引入

```tsx
import { Badge } from 'rmc-vant';
```

## 代码演示

### 基础用法

设置 `content` 属性后，`Badge` 会在子元素的右上角显示对应的徽标，也可以通过 `dot` 来显示小红点。

```tsx
<>
  <Badge content={5}>
    <span />
  </Badge>
  <Badge content={10}>
    <span />
  </Badge>
  <Badge content="Hot">
    <span />
  </Badge>
  <Badge dot>
    <span />
  </Badge>
</>
```

### 最大值

设置 `max` 属性后，当 `content` 的数值超过最大值时，会自动显示为 `{max}+`。

```tsx
<>
  <Badge content={20} max={9}>
    <span />
  </Badge>
  <Badge content={50} max={20}>
    <span />
  </Badge>
  <Badge content={100} max={99}>
    <span />
  </Badge>
</>
```

### 数字动态变化

当内容是数字，展示动态变化的效果。

```tsx
const [num, set] = useState(2);

const random = () => {
  set(1 + Math.floor(Math.random() * 100));
};

return (
  <Space size="large">
    <Badge content={num} max={99}>
      <Box />
    </Badge>
    <Space size={0}>
      <Button onClick={() => set(num + 1)} icon={<Plus />} />
      <Button onClick={() => random()} icon={<ReplayOutlined />} />
      <Button onClick={() => set(num - 1)} icon={<Minus />} />
    </Space>
  </Space>
);
```

### 自定义颜色

通过 `color` 属性来设置徽标的颜色。

```tsx
<>
  <Badge content={5} color="#1989fa">
    <span />
  </Badge>
  <Badge content={10} color="#1989fa">
    <span />
  </Badge>
  <Badge dot color="#1989fa">
    <span />
  </Badge>
</>
```

### 自定义徽标内容

通过 `content` 属性可以自定义徽标的内容，比如传入一个图标。

```tsx
<>
  <Badge content={<Success />}>
    <span />
  </Badge>
  <Badge content={<Cross />}>
    <span />
  </Badge>
  <Badge content={<DownOutlined />}>
    <span />
  </Badge>
</>
```

### 自定义徽标位置

通过 `position` 属性来设置徽标的位置。

```tsx
<>
  <Badge content={10} position="top-left">
    <span />
  </Badge>
  <Badge content={10} position="bottom-left">
    <span />
  </Badge>
  <Badge content={10} position="bottom-right">
    <span />
  </Badge>
</>
```

### 独立展示

当 `Badge` 没有子元素时，会作为一个独立的元素进行展示。

```tsx
<>
  <Badge content={10} />
  <Badge content={200} max={99} />
</>
```

## API

### Props

{{"api": true}}

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

{{"cssVar": true}}

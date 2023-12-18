---
title: Rate
subTitle: 评分
category: components
type: 表单组件
demo: true
theme: light
---

### 介绍

用于对事物进行评级操作。

### 引入

```tsx
import { Rate } from 'rmc-vant';
```

## 代码演示

### 基础用法

通过 `defaultValue` 设置 默认值

```tsx
<Rate defaultValue={3} />
```

### 自定义图标

通过 `icon` 属性设置选中时的图标，`voidIcon` 属性设置未选中时的图标。

```tsx
<Rate defaultValue={3} icon={<LikeFilled />} voidIcon={<LikeOutlined />} />
```

### 自定义样式

通过 `size` 属性设置图标大小，`color` 属性设置选中时的颜色，`voidColor` 设置未选中时的颜色。

```tsx
<Rate
  size={25}
  defaultValue={3}
  color="#ffd21e"
  voidColor="#eee"
  voidIcon={<StarFilled />}
/>
```

### 半星

设置 `allowHalf` 属性后可以选中半星。

```tsx
<Rate defaultValue={2.5} allowHalf />
```

### 自定义数量

通过 `count` 属性设置评分总数。

```tsx
<Rate defaultValue={3} count={6} />
```

### 禁用状态

通过 `disabled` 属性来禁用评分。

```tsx
<Rate defaultValue={3} disabled />
```

### 只读状态

通过 `readonly` 属性将评分设置为只读状态。

```tsx
<Rate defaultValue={3} readonly />
```

### 只读状态显示小数

设置 `readonly` 和 `allowHalf` 属性后，Rate 组件可以展示任意小数结果。

```tsx
<Rate defaultValue={3.3} allowHalf readonly />
```

### 滑动

设置 `touchable` 属性后，可通过滑动来改变评分。

```tsx
<Rate defaultValue={1} touchable />
```

### 监听 onChange 事件

评分变化时，会触发 `onChange` 事件。

```tsx
<Rate
  defaultValue={1}
  onChange={(value) => {
    Toast(`当前值：${value}`);
  }}
/>
```

## API

### Props

{{"api": true}}

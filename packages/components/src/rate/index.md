---
title: Rate
subTitle: 评分
category: components
group: form
---

## 介绍

用于对事物进行评级操作。

## 引入

```tsx
import { Rate } from 'rmc-vant';
```

## 代码演示

### 基础用法

通过 `defaultValue` 设置 默认值

demo|base

```tsx
<Rate defaultValue={2} />;
```

### 自定义图标

通过 `icon` 属性设置选中时的图标，`voidIcon` 属性设置未选中时的图标。

demo|icon

```tsx
<Rate defaultValue={3} icon={<LikeFilled />} voidIcon={<LikeOutlined />} />;
```

### 自定义样式

通过 `size` 属性设置图标大小，`color` 属性设置选中时的颜色，`voidColor` 设置未选中时的颜色。

demo|size

```tsx
<Rate
  size={25}
  defaultValue={3}
  color='#ffd21e'
  voidColor='#eee'
  voidIcon={<StarFilled />}
/>;
```

### 半星

设置 `allowHalf` 属性后可以选中半星。

demo|allowHalf

```tsx
<Rate defaultValue={2.5} allowHalf />;
```

### 自定义数量

通过 `count` 属性设置评分总数。

demo|count

```tsx
<Rate defaultValue={3} count={6} />;
```

### 禁用状态

通过 `disabled` 属性来禁用评分。

demo|disabled

```tsx
<Rate defaultValue={3} disabled />;
```

### 只读状态

通过 `readonly` 属性将评分设置为只读状态。

demo|readonly

```tsx
<Rate defaultValue={3} readonly />;
```

### 只读状态显示小数

设置 `readonly` 和 `allowHalf` 属性后，Rate 组件可以展示任意小数结果。

demo|allowHalf

```tsx
<Rate defaultValue={3.3} allowHalf readonly />;
```

### 滑动

设置 `touchable` 属性后，可通过滑动来改变评分。

demo|touchable

```tsx
<Rate defaultValue={1} touchable />;
```

### 监听 onChange 事件

评分变化时，会触发 `onChange` 事件。

demo|onChange

```tsx
<Rate
  defaultValue={1}
  onChange={(value) => {
    Toast(`当前值：${value}`);
  }}
/>;
```

## API

### Rate Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前分值 | `number` |  |
| defaultValue | 默认分值 | `number` |  |
| count | 图标总数 | `number` | `5` |
| size | 图标大小 | `string` \| `number` | `20` |
| gutter | 图标间距 | `string` \| `number` |  |
| color | 选中时的颜色 | `string` |  |
| voidColor | 未选中时的颜色 | `string` |  |
| disabledColor | 禁用时的颜色 | `string` |  |
| icon | 选中时的图标 | `React.ReactNode` |  |
| voidIcon | 未选中时的图标 | `React.ReactNode` |  |
| allowHalf | 是否允许半选 | `boolean` |  |
| readonly | 是否为只读状态，只读状态下无法修改评分 | `boolean` |  |
| disabled | 是否禁用评分 | `boolean` |  |
| touchable | 是否可以通过滑动手势选择评分 | `boolean` | `true` |

### Rate Events

| 参数     | 说明           | 类型                        | 默认值 |
| -------- | -------------- | --------------------------- | ------ |
| onChange | 分值变化时触发 | `(current: number) => void` |        |

### Types

#### RateNSlot

```ts
export type RateNSlot = 'root' | 'item' | 'icon' | 'fullIcon' | 'mask';
```

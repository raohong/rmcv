---
title: Badge
subTitle: 徽标
category: components
group: show
theme: light
---

## 介绍

在右上角展示徽标数字或小红点。

## 引入

```tsx
import { Badge } from 'rmc-vant';
```

## 代码演示

### 基础用法

设置 `content` 属性后，`Badge` 会在子元素的右上角显示对应的徽标，也可以通过 `dot` 来显示小红点。

demo|base

```tsx
<Space size={24}>
  <Badge content={5}>
    <Button />
  </Badge>
  <Badge content={10}>
    <Button />
  </Badge>
  <Badge content='Hot'>
    <Button />
  </Badge>
  <Badge dot>
    <Button />
  </Badge>
</Space>;
```

### 最大值

设置 `max` 属性后，当 `content` 的数值超过最大值时，会自动显示为 `{max}+`。

demo|max

```tsx
<Space size={24}>
  <Badge content={20} max={9}>
    <Button />
  </Badge>
  <Badge content={50} max={20}>
    <Button />
  </Badge>
  <Badge content={100} max={99}>
    <Button />
  </Badge>
</Space>;
```

### 数字动态变化

当内容是数字，展示动态变化的效果。

demo|dynamicNumber

```tsx
const [num, set] = useState(2);

const random = () => {
  set(1 + Math.floor(Math.random() * 100));
};

return (
  <Space size='large'>
    <Badge content={num} max={99}>
      <Button type='success'>Button</Button>
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

demo|color

```tsx
<Space size={24}>
  <Badge content={5} color='#1989fa'>
    <Button />
  </Badge>
  <Badge content={10} color='#1989fa'>
    <Button />
  </Badge>
  <Badge dot color='#1989fa'>
    <Button />
  </Badge>
</Space>;
```

### 自定义徽标内容

通过 `content` 属性可以自定义徽标的内容，比如传入一个图标。

demo|content

```tsx
<Space size={24}>
  <Badge content={<Success />}>
    <Button />
  </Badge>
  <Badge content={<Cross />}>
    <Button />
  </Badge>
  <Badge content={<DownOutlined />}>
    <Button />
  </Badge>
</Space>;
```

### 自定义徽标位置

通过 `position` 属性来设置徽标的位置。

demo|position

```tsx
<Space>
  <Badge content={10} position='top-left'>
    <Button>top-left</Button>
  </Badge>
  <Badge content={10} position='bottom-left'>
    <Button type='primary'>bottom-left</Button>
  </Badge>
  <Badge content={10} position='bottom-right'>
    <Button>bottom-right</Button>
  </Badge>
</Space>;
```

### 独立展示

当 `Badge` 没有子元素时，会作为一个独立的元素进行展示。

demo|noChildren

```tsx
<>
  <Badge content={10} />
  <Badge content={200} max={99} />
</>;
```

## Slots

- **root** Badge 的容器
- **wrapper** Badge 内容的容器
- **number** Badge 数字
- **numberWrapper** Badge 数字的容器

## API

### Badge Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 徽标内容 | `React.ReactNode` |  |
| dot | 是否是圆点 | `boolean` |  |
| className | 徽标 className | `string` |  |
| max | 徽标内容为数字时，最大值 | `number` |  |
| showZero | 当 content 是 0 时，是否显示 | `boolean` |  |
| position | 徽标位置 | `top-left` \| `top-right` \| `bottom-left` \| `bottom-right` | `top-right` |
| offset | 设置徽标的偏移量，数组的两项分别对应水平和垂直方向的偏移量 | **BadgeOffsetValue \| [BadgeOffsetValue, BadgeOffsetValue]** |  |
| classNames | 给各个 slot 自定义 className | `Record<BadgeNSlot, string>` |  |

### Types

#### BadgeOffsetValue

```ts
type BadgeOffsetValue = string | number;
```

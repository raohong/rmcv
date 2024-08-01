---
title: Cell
subTitle: 单元格
category: components
group: base
---

## 介绍

单元格为列表中的单个展示项。

## 引入

```tsx
import { Cell, CellGroup } from 'rmc-vant';
```

## 代码演示

### 基础用法

`Cell` 可以单独使用，也可以与 `CellGroup` 搭配使用，`CellGroup` 可以为 `Cell` 提供上下外边框。

demo|base

```tsx
<CellGroup>
  <Cell title='单元格' value='内容' />
  <Cell title='单元格' value='内容' label='描述信息' />
</CellGroup>;
```

### 卡片风格

通过 `CellGroup` 的 `inset` 属性，可以将单元格转换为圆角卡片风格（这时候 `CellGroup` 的 border 属性无效）。

demo|card

```tsx
<CellGroup inset>
  <Cell title='单元格' value='内容' />
  <Cell title='单元格' value='内容' label='描述信息' />
</CellGroup>;
```

### 展示图标

通过 `icon` 属性在标题左侧展示图标。

demo|icon

```tsx
<CellGroup>
  <Cell icon={<LocationOutlined />} title='单元格' value='内容' />
</CellGroup>;
```

### 只设置 value

只设置 `value` 时，内容会靠左对齐。

demo|value

```tsx
<CellGroup>
  <Cell value='内容' />
</CellGroup>;
```

### 展示箭头

设置 `isLink` 属性后会在单元格右侧显示箭头，并且可以通过 `arrowDirection` 属性控制箭头方向。

demo|link

```tsx
<CellGroup>
  <Cell title='单元格' isLink />
  <Cell title='单元格' value='内容' isLink />
  <Cell title='单元格' value='内容' arrowDirection='down' isLink />
</CellGroup>;
```

### 分组标题

通过 `CellGroup` 的 `title` 属性可以指定分组标题。

demo|title

```tsx
<>
  <CellGroup title='分组1'>
    <Cell icon={<LocationOutlined />} title='单元格' value='内容' />
  </CellGroup>
  <CellGroup title='分组2'>
    <Cell title='单元格' value='内容' />
    <Cell title='单元格' value='内容' label='描述信息' />
  </CellGroup>
</>;
```

### 垂直居中

通过 `center` 属性可以让 `Cell` 的左右内容都垂直居中。

demo|center

```tsx
<CellGroup>
  <Cell title='单元格' value='内容' label='描述信息' center />
</CellGroup>;
```

## API

### Cell Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 左侧标题 | `React.ReactNode` |  |
| value | 右侧内容 | `React.ReactNode` |  |
| label | 标题下方的描述信息 | `React.ReactNode` |  |
| icon | 左侧图标或图片链接 | `React.ReactNode` |  |
| rightIcon | 右侧图标 | `React.ReactNode` |  |
| border | 是否显示内边框 | `boolean` |  |
| size | 单元格大小 | `normal` \| `large` | `normal` |
| clickable | 是否开启点击反馈 | `boolean` |  |
| isLink | 是否展示右侧箭头并开启点击反馈 | `boolean` |  |
| center | 是否使内容垂直居中 | `boolean` |  |
| arrowDirection | 箭头方向 | `left` \| `up` \| `down` \| `right` | `right` |
| classNames | 给各个 slot 自定义类名 | `Record<CellNSlot, string>` |  |
| component | 自定义 component | `keyof JSX.IntrinsicElements` |  |

### CellGroup Props

| 参数       | 说明                   | 类型                             | 默认值   |
| ---------- | ---------------------- | -------------------------------- | -------- |
| title      | 分组标题               | `React.ReactNode`                |          |
| border     | 是否显示外边框         | `boolean`                        |          |
| inset      | 是否展示为圆角卡片风格 | `boolean`                        |          |
| size       | 设置 Cell 的大小       | `normal` \| `large`              | `normal` |
| component  | 自定义 component       | `keyof JSX.IntrinsicElements`    |          |
| classNames | 给各个 slot 自定义类名 | `<RecordCellGroupNSlot, string>` |          |

### Types

#### CellNSlot

```ts
type CellNSlot =
  | 'root'
  | 'label'
  | 'value'
  | 'title'
  | 'arrow'
  | 'icon'
  | 'rightIcon';
```

#### CellGroupNSlot

```ts
type CellGroupNSlot = 'root' | 'title' | 'content';
```

#### CellSize

```ts
type CellSize = 'normal' | 'large';
```

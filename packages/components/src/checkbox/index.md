---
title: Checkbox
subTitle: 复选框
category: components
type: 表单组件
demo: true
---

### 介绍

在一组备选项中进行多选。

### 引入

```tsx
import { Checkbox, CheckboxGroup } from 'rmc-vant';
```

## 代码演示

### 基础用法

配合 `CheckboxGroup` 组件使用。

```tsx
<CheckboxGroup name="option">
  <Checkbox value={1}>选项1</Checkbox>
  <Checkbox value={2}>选项2</Checkbox>
</CheckboxGroup>
```

### 单独使用

可以单独使用 `Checkbox` 组件，通过 `checked` 属性来控制是否选中

```tsx
const [value, setValue] = useState<string>();

return (
  <Space size={12}>
    <Checkbox checked={value === 'css'} onChange={setValue} value="css">
      选项1
    </Checkbox>
    <Checkbox checked={value === 'js'} onChange={setValue} value="js">
      选项2
    </Checkbox>
  </Space>
);
```

### 水平排列

将 direction 属性设置为 horizontal 后，单选框组会变成水平排列。

```tsx
<CheckboxGroup direction="horizontal">
  <Checkbox value={1}>选项1</Checkbox>
  <Checkbox value={2}>选项2</Checkbox>
</CheckboxGroup>
```

### 禁用状态

通过 `disabled` 属性禁止选项切换，在 `Checkbox` 上设置 disabled 可以禁用单个选项。

```tsx
<CheckboxGroup disabled>
  <Checkbox value={1}>选项1</Checkbox>
  <Checkbox value={2}>选项2</Checkbox>
</CheckboxGroup>
```

### 自定义形状

将 `shape` 属性设置为 `square` ，单选框的形状会变成方形，在 `Checkbox` 上设置 `shape` 为 `square` 可以让单个选项变成方形。

```tsx
<CheckboxGroup shape="square">
  <Checkbox value={1}>选项1</Checkbox>
  <Checkbox value={2}>选项2</Checkbox>
</CheckboxGroup>
```

### 自定义颜色

通过 `checkedColor` 属性设置选中状态的图标颜色。

```tsx
<CheckboxGroup checkedColor="#ee0a24">
  <Checkbox value={1}>选项1</Checkbox>
  <Checkbox value={2}>选项2</Checkbox>
</CheckboxGroup>
```

### 自定义大小

通过 `iconSize` 属性可以自定义图标的大小。

```tsx
<CheckboxGroup iconSize={24}>
  <Checkbox value={1}>选项1</Checkbox>
  <Checkbox value={2}>选项2</Checkbox>
</CheckboxGroup>
```

### 自定义图标

通过 `renderIcon` 自定义图标。

```tsx
<CheckboxGroup
  iconSize={20}
  renderIcon={(checked) => (
    <Image
      width="auto"
      height="1em"
      src={
        checked
          ? 'https://cdn.jsdelivr.net/npm/@vant/assets/user-active.png'
          : 'https://cdn.jsdelivr.net/npm/@vant/assets/user-inactive.png'
      }
    />
  )}
>
  <Checkbox value={1}>选项1</Checkbox>
  <Checkbox value={2}>选项2</Checkbox>
</CheckboxGroup>
```

### 限制最大可选数

通过 `max` 属性可以限制复选框组的最大可选数。

```tsx
<CheckboxGroup max={2}>
  <Checkbox value={1}>选项1</Checkbox>
  <Checkbox value={2}>选项2</Checkbox>
  <Checkbox value={3}>选项3</Checkbox>
  <Checkbox value={4}>选项4</Checkbox>
</CheckboxGroup>
```

### 搭配单元格组件使用

搭配单元格组件使用时，需要再引入 `Cell` 和 `CellGroup` 组件。

```tsx
<CheckboxGroup defaultValue={['1']}>
  <CellGroup>
    <Cell title="选项1" value={<Checkbox value="1" />} clickable />
    <Cell title="选项2" value={<Checkbox value="2" />} clickable />
  </CellGroup>
</CheckboxGroup>
```

## API

### CheckboxGroup Props

{{"api": "CheckboxGroup"}}

### Checkbox Props

{{"api": "Checkbox"}}

---
title: Radio
subTitle: 单选框
category: components
type: 表单组件
demo: true
---

### 介绍

在一组备选项中进行单选。

### 引入

```tsx
import { Radio, RadioGroup } from 'rmc-vant';
```

## 代码演示

### 基础用法

配合 `RadioGroup` 组件使用。

```tsx
<RadioGroup name="option">
  <Radio value={1}>选项1</Radio>
  <Radio value={2}>选项2</Radio>
</RadioGroup>
```

### 单独使用

可以单独使用 `Radio` 组件，通过 `checked` 属性来控制是否选中

```tsx
const [value, setValue] = useState<string>();

return (
  <Space size={12}>
    <Radio checked={value === 'css'} onChange={setValue} value="css">
      选项1
    </Radio>
    <Radio checked={value === 'js'} onChange={setValue} value="js">
      选项2
    </Radio>
  </Space>
);
```

### 水平排列

将 direction 属性设置为 horizontal 后，单选框组会变成水平排列。

```tsx
<RadioGroup direction="horizontal">
  <Radio value={1}>选项1</Radio>
  <Radio value={2}>选项2</Radio>
</RadioGroup>
```

### 禁用状态

通过 `disabled` 属性禁止选项切换，在 `Radio` 上设置 disabled 可以禁用单个选项。

```tsx
<RadioGroup disabled>
  <Radio value={1}>选项1</Radio>
  <Radio value={2}>选项2</Radio>
</RadioGroup>
```

### 自定义形状

将 `shape` 属性设置为 `square` ，单选框的形状会变成方形，在 `Radio` 上设置 `shape` 为 `square` 可以让单个选项变成方形。

```tsx
<RadioGroup shape="square">
  <Radio value={1}>选项1</Radio>
  <Radio value={2}>选项2</Radio>
</RadioGroup>
```

### 自定义颜色

通过 `checkedColor` 属性设置选中状态的图标颜色。

```tsx
<RadioGroup checkedColor="#ee0a24">
  <Radio value={1}>选项1</Radio>
  <Radio value={2}>选项2</Radio>
</RadioGroup>
```

### 自定义大小

通过 `iconSize` 属性可以自定义图标的大小。

```tsx
<RadioGroup iconSize={24}>
  <Radio value={1}>选项1</Radio>
  <Radio value={2}>选项2</Radio>
</RadioGroup>
```

### 自定义图标

通过 `renderIcon` 自定义图标。

```tsx
<RadioGroup
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
  <Radio value={1}>选项1</Radio>
  <Radio value={2}>选项2</Radio>
</RadioGroup>
```

### 搭配单元格组件使用

搭配单元格组件使用时，需要再引入 `Cell` 和 `CellGroup` 组件。

```tsx
<RadioGroup defaultValue="1">
  <CellGroup>
    <Cell title="选项1" value={<Radio value="1" />} clickable />
    <Cell title="选项2" value={<Radio value="2" />} clickable />
  </CellGroup>
</RadioGroup>
```

## API

### RadioGroup Props

{{"api": "RadioGroup"}}

### Radio Props

{{"api": "Radio"}}

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

{{"cssVar": true}}

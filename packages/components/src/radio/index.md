---
title: Radio
subTitle: 单选框
category: components
group: form
---

## 介绍

在一组备选项中进行单选。

## 引入

```tsx
import { Radio, RadioGroup } from 'rmc-vant';
```

## 代码演示

### 基础用法

配合 `RadioGroup` 组件使用。

demo|base

```tsx
<RadioGroup name='option'>
  <Radio value={1}>选项1</Radio>
  <Radio value={2}>选项2</Radio>
</RadioGroup>;
```

### 单独使用

可以单独使用 `Radio` 组件，通过 `checked` 属性来控制是否选中

demo|checked

```tsx
const [value, setValue] = useState<string>();

return (
  <Space size={12}>
    <Radio checked={value === 'css'} onChange={setValue} value='css'>
      选项1
    </Radio>
    <Radio checked={value === 'js'} onChange={setValue} value='js'>
      选项2
    </Radio>
  </Space>
);
```

### 水平排列

将 direction 属性设置为 horizontal 后，单选框组会变成水平排列。

demo|direction

```tsx
<RadioGroup direction='horizontal'>
  <Radio value={1}>选项1</Radio>
  <Radio value={2}>选项2</Radio>
</RadioGroup>;
```

### 禁用状态

通过 `disabled` 属性禁止选项切换，在 `Radio` 上设置 disabled 可以禁用单个选项。

demo|disabled

```tsx
<RadioGroup disabled>
  <Radio value={1}>选项1</Radio>
  <Radio value={2}>选项2</Radio>
</RadioGroup>;
```

### 自定义形状

将 `shape` 属性设置为 `square` ，单选框的形状会变成方形，在 `Radio` 上设置 `shape` 为 `square` 可以让单个选项变成方形。

demo|shape

```tsx
<RadioGroup shape='square'>
  <Radio value={1}>选项1</Radio>
  <Radio value={2}>选项2</Radio>
</RadioGroup>;
```

### 自定义颜色

通过 `checkedColor` 属性设置选中状态的图标颜色。

demo|checkedColor

```tsx
<RadioGroup checkedColor='#ee0a24'>
  <Radio value={1}>选项1</Radio>
  <Radio value={2}>选项2</Radio>
</RadioGroup>;
```

### 自定义大小

通过 `iconSize` 属性可以自定义图标的大小。

demo|iconSize

```tsx
<RadioGroup iconSize={24}>
  <Radio value={1}>选项1</Radio>
  <Radio value={2}>选项2</Radio>
</RadioGroup>;
```

### 自定义图标

通过 `renderIcon` 自定义图标。

demo|renderIcon

```tsx
<RadioGroup
  iconSize={20}
  renderIcon={checked => (
    <Image
      width='auto'
      height='1em'
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
</RadioGroup>;
```

### 搭配单元格组件使用

搭配单元格组件使用时，需要再引入 `Cell` 和 `CellGroup` 组件。

demo|group

```tsx
<RadioGroup defaultValue='1'>
  <CellGroup>
    <Cell title='选项1' value={<Radio value='1' />} clickable />
    <Cell title='选项2' value={<Radio value='2' />} clickable />
  </CellGroup>
</RadioGroup>;
```

## API

### Radio Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 根据 value 进行比较，判断是否选中 | `string` \| `number` |  |
| checked | 指定当前是否选中 | `boolean` |  |
| shape | 形状，可选值为 square | `RadioShape` |  |
| disabled | 是否为禁用状态 | `boolean` |  |
| labelPosition | 文本位置 | `vertical` \| `horizontal` | `right` |
| size | 图标大小 | `Size` |  |
| checkedColor | 选中状态颜色 | `string` |  |
| renderIcon | 自定义 icon | `(checked: boolean) => ReactNode` |  |
| classNames | 给各个 slot 自定义类名 | `Record< 'root' \| 'label' \| 'inner' \| 'icon', string>` |  |

### Radio Events

| 参数     | 说明             | 类型                                 | 默认值 |
| -------- | ---------------- | ------------------------------------ | ------ |
| onChange | 选中值变化时触发 | `(value?: string \| number) => void` |        |

### RadioGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认当前选中的值 | `string` \| `number` |  |
| options | 选项 | `RadioOption[]` |  |
| disabled | 是否禁用所有单选框 | `boolean` |  |
| direction | 排列方向，可选值为 horizontal | `vertical` \| `horizontal` | `vertical` |
| value | 当前选中的值 | `string` \| `number` |  |
| name | RadioGroup 下所有 input[type="radio"] 的 name 属性 | `string` |  |
| size | 所有单选框的图标大小 | `string` \| `number` |  |
| checkedColor | 所有单选框的选中状态颜色 | `string` |  |
| renderIcon | 自定义所有单选框 icon | `(checked: boolean) => ReactNode` |  |
| shape | 所有单选形状 | `RadioShape` |  |
| labelPosition | 所有单选文本位置 | `vertical` \| `horizontal` | `right` |

### RadioGroup Events

| 参数     | 说明             | 类型                   | 默认值 |
| -------- | ---------------- | ---------------------- | ------ |
| onChange | 选中值变化时触发 | `(value?: T) =\> void` |        |

### Types

#### RadioOption

```ts
type RadioOption = {
  disabled?: boolean;
  value: RadioValue;
  label?: React.ReactNode;
};
```

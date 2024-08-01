---
title: Checkbox
subTitle: 复选框
category: components
group: form
---

## 介绍

在一组备选项中进行多选。

## 引入

```tsx
import { Checkbox, CheckboxGroup } from 'rmc-vant';
```

## 代码演示

### 基础用法

配合 `CheckboxGroup` 组件使用。

demo|base

```tsx
<CheckboxGroup name='option'>
  <Checkbox value={1}>选项1</Checkbox>
  <Checkbox value={2}>选项2</Checkbox>
</CheckboxGroup>;
```

### 单独使用

可以单独使用 `Checkbox` 组件，通过 `checked` 属性来控制是否选中

demo|checkbox

```tsx
const [checked, set] = useState(false);

return (
  <Checkbox checked={checked} onChange={set}>
    选项
  </Checkbox>
);
```

### 水平排列

将 direction 属性设置为 horizontal 后，单选框组会变成水平排列。

demo|direction

```tsx
<CheckboxGroup direction='horizontal'>
  <Checkbox value={1}>选项1</Checkbox>
  <Checkbox value={2}>选项2</Checkbox>
</CheckboxGroup>;
```

### 禁用状态

通过 `disabled` 属性禁止选项切换，在 `Checkbox` 上设置 disabled 可以禁用单个选项。

demo|disabled

```tsx
<CheckboxGroup disabled>
  <Checkbox value={1}>选项1</Checkbox>
  <Checkbox value={2}>选项2</Checkbox>
</CheckboxGroup>;
```

### 自定义形状

将 `shape` 属性设置为 `square` ，单选框的形状会变成方形，在 `Checkbox` 上设置 `shape` 为 `square` 可以让单个选项变成方形。

demo|shape

```tsx
<CheckboxGroup shape='square'>
  <Checkbox value={1}>选项1</Checkbox>
  <Checkbox value={2}>选项2</Checkbox>
</CheckboxGroup>;
```

### 自定义颜色

通过 `checkedColor` 属性设置选中状态的图标颜色。

demo|checkedColor

```tsx
<CheckboxGroup checkedColor='#ee0a24'>
  <Checkbox value={1}>选项1</Checkbox>
  <Checkbox value={2}>选项2</Checkbox>
</CheckboxGroup>;
```

### 自定义大小

通过 `iconSize` 属性可以自定义图标的大小。

demo|iconSize

```tsx
<CheckboxGroup iconSize={24}>
  <Checkbox value={1}>选项1</Checkbox>
  <Checkbox value={2}>选项2</Checkbox>
</CheckboxGroup>;
```

### 自定义图标

通过 `renderIcon` 自定义图标。

demo|renderIcon

```tsx
<CheckboxGroup
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
  <Checkbox value={1}>选项1</Checkbox>
  <Checkbox value={2}>选项2</Checkbox>
</CheckboxGroup>;
```

### 限制最大可选数

通过 `max` 属性可以限制复选框组的最大可选数。

demo|max

```tsx
<CheckboxGroup max={2}>
  <Checkbox value={1}>选项1</Checkbox>
  <Checkbox value={2}>选项2</Checkbox>
  <Checkbox value={3}>选项3</Checkbox>
  <Checkbox value={4}>选项4</Checkbox>
</CheckboxGroup>;
```

### 搭配单元格组件使用

搭配单元格组件使用时，需要再引入 `Cell` 和 `CellGroup` 组件。

demo|group

```tsx
<CheckboxGroup defaultValue={['1']}>
  <CellGroup>
    <Cell title='选项1' value={<Checkbox value='1' />} clickable />
    <Cell title='选项2' value={<Checkbox value='2' />} clickable />
  </CellGroup>
</CheckboxGroup>;
```

## API

### CheckboxGroup Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| defaultValue | 默认当前选中的值 | `(string \| number)[]` |  |
| disabled | 是否禁用所有单选框 | `boolean` |  |
| direction | 排列方向 | `vertical` \| `horizontal` |  |
| checkedColor | 所有单选框的选中状态颜色 | `string` |  |
| value | 当前选中的值 | `(string \| number)[]` |  |
| name | CheckboxGroup 下所有 input[type="Checkbox"] 的 name 属性 | `string` |  |
| renderIcon | 自定义 icon | `(checked: boolean) => ReactNode` |  |
| shape | 形状 | `number`\| `square` | `round` |
| labelPosition | label 的位置 | `left` \| `right` | `left` |
| options | 选项 | `CheckboxOption[]` |  |

### CheckboxGroup Events

| 参数     | 说明               | 类型                                     | 默认值 |
| -------- | ------------------ | ---------------------------------------- | ------ |
| onChange | 选中值变化时的回掉 | `(value?: (string \| number)[]) => void` |        |

### Checkbox Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 根据 value 进行比较，判断是否选中 | `string \| number` |  |
| checked | 指定当前是否选中 | `boolean` |  |
| defaultChecked | 是否默认选中 | `boolean` |  |
| shape | 形状 | `round` \| `square` | `round` |
| disabled | 是否为禁用状态 | `boolean` |  |
| labelPosition | 文本位置 | `left` \| `right` | `right` |
| checkedColor | 选中状态颜色 | `string` |  |
| renderIcon | 自定义 icon | `(checked: boolean) => ReactNode` |  |
| classNames | 给各个 slot 自定义类名 | `Record<CheckboxNSlot, string>` |  |

### Checkbox Events

| 参数     | 说明         | 类型                         | 默认值 |
| -------- | ------------ | ---------------------------- | ------ |
| onChange | 值变化时调用 | `(checked: boolean) => void` |        |

### Types

#### CheckboxNSlot

```ts
type CheckboxNSlot = 'root' | 'label' | 'inner' | 'icon' | 'input';
```

#### CheckboxOption

```ts
type CheckboxOption = {
  value: CheckboxValue;
  disabled?: boolean;
  label?: React.ReactNode;
};
```

---
title: Picker
subTitle: 选择器
category: components
group: form
---

## 介绍

提供多个选项集合供用户选择，支持单列选择和多列级联，是 Picker 的内容区域。

## 引入

```tsx
import { Picker } from 'rmc-vant';
```

## 代码演示

### 基础用法

### 选项配置

Picker 组件通过 `columns` 属性配置选项数据，`columns` 是一个包含字符串或对象的数组。

### 顶部栏

顶部栏包含标题、确认按钮和取消按钮，点击确认按钮触发 `onConfirm` 事件，点击取消按钮触发 `onCancel` 事件。

demo|onConfirm

```tsx
const data = [['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华']];

return (
  <Picker
    columns={data}
    onChange={(current) => {
      Toast(`当前值：${current}`);
    }}
  />
);
```

### 默认选中项

通过 `defaultValue` 属性设置初始选中项。

demo|defaultValue

```tsx
const data = [['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华']];

return <Picker columns={data} title='选择城市' defaultValue={['宁波']} />;
```

### 禁用选项

选项可以为对象结构，通过设置 `disabled` 来禁用该选项。

demo|disabled

```tsx
<Picker
  columns={[
    [{ value: '杭州', disabled: true }, { value: '宁波' }, { value: '温州' }],
  ]}
/>;
```

### 级联选择

使用 `columns` 的 `children` 字段可以实现选项级联的效果。

demo|columns

```tsx
const cityData = [
  {
    value: '浙江',
    children: [
      {
        value: '杭州',
        children: [{ value: '西湖区' }, { value: '余杭区' }],
      },
      {
        value: '温州',
        children: [{ value: '鹿城区' }, { value: '瓯海区' }],
      },
    ],
  },
  {
    value: '福建',
    children: [
      {
        value: '福州',
        children: [{ value: '鼓楼区' }, { value: '台江区' }],
      },
      {
        value: '厦门',
        children: [{ value: '思明区' }, { value: '海沧区' }],
      },
    ],
  },
];

return <Picker columns={cityData} title='选择地区' immediateChange />;
```

### 加载状态

若选择器数据是异步获取的，可以通过 `loading` 属性显示加载提示。

demo|loading

```tsx
<Picker
  loading
  columns={[[{ value: '杭州' }, { value: '宁波' }, { value: '温州' }]]}
/>;
```

### 动态设置选项

在 `onColumnChange` 和 `onChange` 事件中，动态更新 `columns`;

demo|options

```tsx
const cityData = [
  {
    value: '浙江',
    children: [
      {
        value: '杭州',
        children: [{ value: '西湖区' }, { value: '余杭区' }],
      },
      {
        value: '温州',
        children: [{ value: '鹿城区' }, { value: '瓯海区' }],
      },
    ],
  },
  {
    value: '福建',
    children: [
      {
        value: '福州',
        children: [{ value: '鼓楼区' }, { value: '台江区' }],
      },
      {
        value: '厦门',
        children: [{ value: '思明区' }, { value: '海沧区' }],
      },
    ],
  },
];
const [columns, setColumns] = useState([cityData, cityData[0].children]);
const [value, setValue] = useState([columns[0][0].value, columns[1][0].value]);

return (
  <Picker
    value={value}
    onChange={(next, sourceIndex) => {
      const current = [...next];
      const nextColumns = [...columns];

      if (sourceIndex === 0) {
        const index = Math.max(
          0,
          cityData.findIndex(item => item.value === current[0]),
        );
        nextColumns[1] = cityData[index].children;
        current[1] = nextColumns[1][0].value;
      }

      setValue(current);
      setColumns(nextColumns);
    }}
    columns={columns}
  />
);
```

### 弹出层模式

通过设置 `popup` 属性配置弹出层模式。

demo|popup

```tsx
<Picker
  popup
  title='选择地区'
  columns={[[{ value: '杭州' }, { value: '宁波' }, { value: '温州' }]]}
>
  <Cell title='选择地区' isLink clickable />
</Picker>;
```

## API

### Picker Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| open | 是否打开 | `boolean` |  |
| columns | 对象数组，配置每一列显示的数据 | `PickerColumns<PickerValue>` |  |
| value | 当前选中的 value | `PickerValue[]` |  |
| defaultValue | 默认 value | `PickerValue[]` |  |
| popup | 是否是弹出层模式 | `boolean` | `false` |
| lazyRender | 是否在显示弹层时才渲染节点 | `boolean` |  |
| optionHeight | 选项高度 | `number` | `44` |
| loading | 是否显示加载状态 | `boolean` |  |
| children | 当 mode 是弹出层时，渲染 trigger 的内容 | `(value?: PickerValue[]) => React.ReactElement) \| React.ReactElement` |  |
| title | 顶部栏标题 | `React.ReactNode` |  |
| toolbar | 自定义渲染 toolbar | `(action: PickerToolbarAction) => React.ReactNode` |  |
| confirmButtonText | 确认按钮文字 | `React.ReactNode` |  |
| cancelButtonText | 取消按钮文字 | `React.ReactNode` |  |
| toolbarPosition | 顶部栏位置，可选值为 | `top` \| `bottom` |  |
| showToolbar | 是否显示顶部栏 | `boolean` | `true` |
| visibleOptionNum | 可见的选项个数 | `number` | `6` |
| immediateChange | 滚动结束后是否立即触发 | `boolean` | `true` |
| classNames | 给各个 slot 自定义类名 | `Record<PickerNSlot, string>` |  |

### Picker Events

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onOpenChange | open 变化时触发 | `(open: boolean) => void` |  |
| onChange | 选择器 value 变化时触发 | `(value: PickerValue[], sourceIndex: number) => void` |  |
| onCancel | 点击取消按钮时触发 | `() => void` |  |
| onOpen | 内置模式下，Picker 打开的时候 | `() => void` |  |
| onConfirm | 点击确定按钮时触发 | `(value: PickerValue[] \| undefined) => void` |  |
| onColumnChange | Column value 变化时触发 | `(columnIndex: number, value: PickerValue) => void` |  |

### Types

#### PickerValue

```ts
type PickerValue = string | number;
```

#### PickerNSlot

```ts
type PickerNSlot =
  | 'toolbar'
  | 'confirmButton'
  | 'cancelButton'
  | 'mask'
  | 'indicator'
  | 'loading'
  | 'columnContainer'
  | 'root'
  | 'popup'
  | 'columnRoot'
  | 'option'
  | 'title';
```

#### PickerToolbarAction

```ts
type PickerToolbarAction = {
  cancel: () => void;
  confirm: () => void;
};
```

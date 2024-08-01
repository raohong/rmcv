---
title: Switch
subTitle: 开关
category: components
group: form
---

## 介绍

用于在打开和关闭状态之间进行切换。

## 引入

```tsx
import { Switch } from 'rmc-vant';
```

## 代码演示

### 基础用法

`checked` 表示开关的选中状态，true 表示开，false 表示关。`defaultChecked` 表示默认选中。

demo|base

```tsx
<Switch defaultChecked />;
```

### 禁用状态

通过 `disabled` 属性来禁用开关，禁用状态下开关不可点击。

demo|disabled

```tsx
<Switch disabled />;
```

### 加载状态

通过 `loading` 属性设置开关为加载状态，加载状态下开关不可点击。

demo|loading

```tsx
<Switch loading />;
```

### 自定义大小

通过 `size` 属性自定义开关的大小。

demo|size

```tsx
<Switch size={24} />;
```

### 自定义颜色

`activeColor` 属性表示打开时的背景色，`inactiveColor` 表示关闭时的背景色。

demo|activeColor

```tsx
<Switch activeColor='#ee0a24' inactiveColor='#dcdee0' defaultChecked />;
```

### 自定义按钮

通过 `node` 自定义按钮的内容。

demo|node

```tsx
<Switch
  node={checked =>
    checked
      ? (
          <Success color='var(--rmcv-primary-color)' size={18} />
        )
      : (
          <Cross color='var(--rmcv-gray-5)' size={18} />
        )}
/>;
```

### 异步控制

`onClick` 回调函数中自定义状态。

demo|onClick

```tsx
const [loading, setLoading] = useState(false);
const [checked, setChecked] = useState(true);

return (
  <Switch
    loading={loading}
    checked={checked}
    onClick={async (current) => {
      setLoading(true);

      await Dialog({
        title: '提醒',
        message: '是否切换开关？',
      });

      setTimeout(() => {
        setLoading(false);
        setChecked(current);
      }, 1000);
    }}
  />
);
```

### 配合单元格使用

demo|cell

```tsx
<Cell title='标题' value={<Switch size={24} defaultChecked />} />;
```

## API

### Switch Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| loading | 是否为加载状态 | `boolean` |  |
| disabled | 是否为禁用状态 | `boolean` |  |
| size | 开关尺寸 | `string` \| `number` | `30` |
| activeColor | 打开时的背景色 | `string` |  |
| inactiveColor | 关闭时的背景色 | `string` |  |
| checked | 当前是否选中 | `boolean` |  |
| defaultChecked | 初始是否选中 | `boolean` |  |
| node | 自定义 node 内容 | `(checked: boolean) => React.ReactNode` |  |
| classNames | 给各个 slot 自定义类名 | `Record<'root' \| 'node' \| 'loadingIcon', string>` |  |

### Switch Events

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onClick | 点击时回调函数 | `(checked: boolean, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =\> void` |  |
| onChange | 变化时回调函数 | `(checked: boolean, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =\> void` |  |

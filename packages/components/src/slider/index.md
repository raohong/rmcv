---
title: Slider
subTitle: 滑块
category: components
group: form
theme: light
---

## 介绍

滑动输入条，用于在给定的范围内选择一个值。

## 引入

```tsx
import { Slider } from 'rmc-vant';
```

## 代码演示

### 基础用法

demo|base

```tsx
<Slider defaultValue={20} />;
```

### 双滑块

添加 `range` 属性就可以开启双滑块模式，确保 `value` 的值是一个数组。

demo|range

```tsx
<Slider defaultValue={[0, 20]} range />;
```

### 指定选择范围

demo|limit

```tsx
<Slider defaultValue={50} min={-50} max={50} />;
```

### 禁用

demo|disabled

```tsx
<Slider defaultValue={50} disabled />;
```

### 指定步长

demo|step

```tsx
<Slider defaultValue={50} step={10} />;
```

### 自定义样式

demo|customizeStyle

```tsx
<Slider defaultValue={50} barHeight={4} activeColor='#ee0a24' />;
```

### 自定义按钮

demo|customizeButton

```tsx
<Slider
  defaultValue={50}
  activeColor='#ee0a24'
  button={val => (
    <div
      style={{
        width: 26,
        color: '#fff',
        fontSize: 10,
        lineHeight: '18px',
        textAlign: 'center',
        backgroundColor: '#ee0a24',
        borderRadius: 100,
      }}
    >
      {val}
    </div>
  )}
/>;
```

### 垂直方向

设置 `vertical` 属性后，滑块会垂直展示，且高度为 `100%` 父元素高度。

demo|vertical

```tsx
<Slider defaultValue={[20, 50]} style={{ height: 150 }} range vertical />;
```

### 反转轨道

设置 `reverse` 属性后，轨道会被反转。

demo|reverse

```tsx
<Slider defaultValue={[0, 20]} range reverse />;
```

## API

### Slider Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| max | 最大值 | `number` | `0` |
| min | 最小值 | `number` | `100` |
| step | 步长 | `number` |  |
| barHeight | 进度条高度 | `string` \| `number` | `2` |
| buttonSize | 滑块按钮大小 | `string` \| `number` | `24` |
| activeColor | 进度条激活态颜色 | `string` |  |
| inactiveColor | 进度条非激活态颜色 | `string` |  |
| reverse | 是否将进度条反转 | `boolean` |  |
| disabled | 是否禁用滑块 | `boolean` |  |
| readonly | 是否为只读状态，只读状态下无法修改滑块的值 | `boolean` |  |
| vertical | 是否垂直展示 | `boolean` |  |
| button | 自定义滑块按钮 | `(value: number) => React.ReactElement` |  |
| leftButton | 自定义左侧滑块按钮（双滑块模式下） | `(value: number) => React.ReactElement` |  |
| rightButton | 自定义右侧滑块按钮（双滑块模式下 | `(value: number) => React.ReactElement` |  |
| value | 当前值 | `number` \| `[number, number]` |  |
| defaultValue |  | `number` \| `[number, number]` |  |
| classNames | 给各个 slot 自定义类名 | `Record<SliderNSlot, string>` |  |
| range | 是否开启双滑 | `boolean` |  |

### Slider Events

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onChange | 进度变化时时触发 | `(value: number \| [number, number]) =>  void` |  |
| onAfterChange | 拖拽结束后回调函数 | `(value: number \| [number, number]) =>  void` |  |

### Types

```ts
type SliderNSlot = 'root' | 'thumb' | 'rail' | 'track' | 'button';
```

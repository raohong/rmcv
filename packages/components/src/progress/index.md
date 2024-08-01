---
title: Progress
subTitle: 进度条
category: components
group: show
---

## 介绍

用于展示操作的当前进度。

## 引入

```tsx
import { Progress } from 'rmc-vant';
```

## 代码演示

### 基础用法

进度条默认为蓝色，使用 `percentage` 属性来设置当前进度。

demo|percentage

```tsx
<Progress percentage={50} />;
```

### 线条粗细

通过 `strokeWidth` 可以设置进度条的粗细。

demo|strokeWidth

```tsx
<Progress percentage={50} strokeWidth={8} />;
```

### 置灰

设置 `inactive` 属性后进度条将置灰。

demo|inactive

```tsx
<Progress percentage={50} inactive />;
```

### 样式定制

可以使用 `pivotText` 属性自定义文字，`color` 属性自定义进度条颜色。

demo|pivotText

```tsx
<>
  <Progress percentage={25} pivotText='橙色' color='#f2826a' />
  <Progress percentage={50} pivotText='红色' color='#ee0a24' />
  <Progress
    percentage={75}
    pivotText='紫色'
    pivotColor='#7232dd'
    color='linear-gradient(to right, #be99ff, #7232dd)'
  />
</>;
```

## API

### Progress Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| percentage | 进度条百分比 | `number` |  |
| strokeWidth | 进度条粗细 | `number` | `4` |
| color | 进度条颜色 | `string` |  |
| trailColor | 未完成进度条颜色 | `string` |  |
| pivotText | 进度条文字 | `string` |  |
| pivotColor | 进度条背景颜色 | `string` |  |
| pivotTextColor | 进度条文字颜色 | `string` |  |
| inactive | 进度条置灰 | `boolean` | `false` |
| showPivot | 是否显示进度条文字 | `boolean` | `true` |
| format | 根据 percentage 格式化 | `(percent: number) => string` |  |
| classNames | 给各个 slot 自定义类名 | `Record< 'root' \| 'outer' \| 'pivot', string>` |  |

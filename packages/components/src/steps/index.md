---
title: Steps
subTitle: 步骤条
category: components
type: 展示组件
demo: true
---

### 介绍

用于展示操作流程的各个环节，让用户了解当前的操作在整体流程中的位置。

### 引入

```tsx
import { Step, Steps } from 'rmc-vant';
```

## 代码演示

### 基础用法

`current` 属性表示当前步骤的索引，从 0 起计，此时 Steps 是受控组件。

```tsx
const [current, set] = useState(0);

return (
  <Steps current={1} onChange={set}>
    <StepItem>买家下单</StepItem>
    <StepItem>商家接单</StepItem>
    <StepItem>买家提货</StepItem>
    <StepItem>交易完成</StepItem>
  </Steps>
);
```

### 自定义样式

可以通过 `activeIcon` 和 `activeColor` 属性设置激活状态下的图标和颜色。

```tsx
<Steps activeColor="#38f" activeIcon={<Success />} inactiveIcon={<Arrow />}>
  <StepItem>买家下单</StepItem>
  <StepItem>商家接单</StepItem>
  <StepItem>买家提货</StepItem>
  <StepItem>交易完成</StepItem>
</Steps>
```

### 竖向步骤条

可以通过设置 `direction` 属性来改变步骤条的显示方向。

```tsx
<Steps direction="vertical">
  <StepItem>
    <b>【城市】物流状态1</b>
    <div>2016-07-12 12:40</div>
  </StepItem>
  <StepItem>
    <b>【城市】物流状态2</b>
    <div>2016-07-11 10:00</div>
  </StepItem>
  <StepItem>
    <b>快件已发货</b>
    <div>2016-07-10 09:30</div>
  </StepItem>
</Steps>
```

## API

### Steps Props

{{"api": "Steps"}}

### StepItem Props

{{"api": "Step"}}

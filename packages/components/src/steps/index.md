---
title: Steps
subTitle: 步骤条
category: components
group: show
---

## 介绍

用于展示操作流程的各个环节，让用户了解当前的操作在整体流程中的位置。

## 引入

```tsx
import { Step } from 'rmc-vant';
```

## 代码演示

### 基础用法

`current` 属性表示当前步骤的索引，从 0 起计，此时 Steps 是受控组件。

demo|base

```tsx
const [current, set] = useState(0);

return (
  <>
    <Steps
      current={current}
      onChange={set}
      items={[
        {
          label: '买家下单',
        },
        {
          label: '商家接单',
        },
        {
          label: '买家提货',
        },
        {
          label: '交易完成',
        },
      ]}
    />

    <Space size={24} sx={{ marginTop: 12 }}>
      <Button onClick={() => set(Math.max(current - 1, 0))}>上一步</Button>
      <Button type='primary' onClick={() => set(Math.min(current + 1, 3))}>
        下一步
      </Button>
    </Space>
  </>
);
```

### 自定义样式

可以通过 `activeIcon` 和 `activeColor` 属性设置激活状态下的图标和颜色。

demo|activeIcon

```tsx
<Steps
  activeColor='#38f'
  activeIcon={<Success />}
  items={[
    {
      label: '买家下单',
    },
    {
      label: '商家接单',
    },
    {
      label: '买家提货',
    },
    {
      label: '交易完成',
    },
  ]}
  inactiveIcon={<Arrow />}
/>;
```

### 竖向步骤条

可以通过设置 `direction` 属性来改变步骤条的显示方向。

demo|vertical

```tsx
<Steps
  direction='vertical'
  items={[
    {
      key: '【城市】物流状态1',
      label: (
        <>
          <b>【城市】物流状态1</b>
          <div>2016-07-12 12:40</div>
        </>
      ),
    },
    {
      key: '【城市】物流状态2',
      label: (
        <>
          <b>【城市】物流状态2</b>
          <div>2016-07-11 10:00</div>
        </>
      ),
    },
    {
      key: '快件已发货',
      label: (
        <>
          <b>快件已发货</b>
          <div>2016-07-10 09:30</div>
        </>
      ),
    },
  ]}
/>;
```

## API

### Steps Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| current | 当前步骤，从0开始计数 | `number` |  |
| direction | 布局方向 | `horizontal` \| `vertical` | `horizontal` |
| activeIcon | 当前步骤的图标 | `React.ReactNode` |  |
| inactiveIcon | 非当前步骤的图标 | `React.ReactNode` |  |
| finishIcon | 已完成步骤的图标，优先级大于 inactiveIcon | `React.ReactNode` |  |
| activeColor | 当前步骤和已完成步骤的颜色 | `string` |  |
| inactiveColor | 未激活步骤的颜色 | `string` |  |
| items | 步骤配置 | `StepItem[]` |  |

### Steps Events

| 参数     | 说明               | 类型                        | 默认值 |
| -------- | ------------------ | --------------------------- | ------ |
| onChange | 当前步骤变换时回调 | `(current: number) => void` |        |

### Types

#### StepItem

| 参数       | 说明                   | 类型                            | 默认值 |
| ---------- | ---------------------- | ------------------------------- | ------ |
| content    | 步骤条内容             | `React.ReactNode`               |        |
| icon       | 当前步骤的图标         | `React.ReactNode`               |        |
| status     | 当前步骤状态           | `process` \| `wait` \| `finish` |        |
| clickable  | 是否可点击             | `boolean`                       |        |
| classNames | 给各个 slot 自定义类名 | `Record<StepNSlot, string>`     |        |

#### StepNSlot

```ts
type StepNSlot = 'root' | 'title' | 'tail' | 'iconWrapper' | 'icon' | 'dot';
```

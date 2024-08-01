---
title: CountDown
subTitle: 倒计时组件
category: components
group: show
theme: light
---

## 介绍

用于实时展示倒计时数值，支持毫秒精度。

## 引入

```tsx
import { CountDown } from 'rmc-vant';
```

## 代码演示

### 基础用法

`time` 属性表示倒计时总时长，单位为毫秒。

demo|base

```tsx
<CountDown time={30 * 60 * 60 * 1000} />;
```

### 自定义格式

通过 `format` 属性设置倒计时文本的内容。

demo|format

```tsx
<CountDown time={30 * 60 * 60 * 1000} format='DD 天 HH 时 mm 分 ss 秒' />;
```

### 毫秒级渲染

倒计时默认每秒渲染一次，设置 `millisecond` 属性可以开启毫秒级渲染。

demo|millisecond

```tsx
<CountDown time={30 * 60 * 60 * 1000} format='HH:mm:ss:SS' millisecond />;
```

### 自定义渲染

`children` 支持传入函数，可以自定义渲染

demo|customizeRender

```tsx
<CountDown time={30 * 60 * 60 * 1000}>
  {({ hours, minutes, seconds }) => (
    <Space split=':' size={4}>
      <Tag color='#2563eb'>{String(hours).padStart(2, '0')}</Tag>
      <Tag color='#2563eb'>{String(minutes).padStart(2, '0')}</Tag>
      <Tag color='#2563eb'>{String(seconds).padStart(2, '0')}</Tag>
    </Space>
  )}
</CountDown>;
```

### 手动控制

通过 `ref` 获取到组件实例后，可以调用 `start`、`pause`、`reset` 方法。

demo|manualControl

```tsx
const ref = useRef<CountDownRef | null>(null);

return (
  <>
    <CountDown ref={ref} time={3600 * 1000} autoStart={false} />
    <Grid
      column={3}
      sx={{ marginTop: 12 }}
      items={[
        {
          icon: <PlayCircleOutlined />,
          onClick: () => ref.current?.start(),
          label: '开始',
        },
        {
          icon: <PauseCircleOutlined />,
          onClick: () => ref.current?.pause(),
          label: '暂停',
        },
        {
          icon: <ReplayOutlined />,
          onClick: () => ref.current?.reset(),
          label: '重制',
        },
      ]}
      clickable
      border
    />
  </>
);
```

## API

### CountDown Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onFinish | 倒计结束完成回调 | `() => void` |  |
| onChange | 每次计时 | `(data: CountDownTimeData) => void` |  |
| children | 用于自定义内容 | `(data: CountDownTimeData) => ReactNode` |  |
| time | 倒计时时间 以秒为单位 | `number` |  |
| format | 时间格式 DD 天数,HH 小时, mm 分钟, ss 秒数, S 毫秒（1 位）,SS 毫秒（2 位）, SSS 毫秒（3 位） | `string` |  |
| autoStart | 自动开始倒计时 | `boolean` |  |
| millisecond | 是否开启毫秒级别计时 | `boolean` |  |

### Types

#### CountDownRef

```ts
type CountDownRef = {
  pause: () => void;
  start: () => void;
  reset: () => void;
};
```

#### CountDownTimeData

```ts
type CountDownTimeData = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
  totalTime: number;
};
```

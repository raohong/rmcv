---
title: CountDown
subTitle: 倒计时组件
category: components
type: 展示组件
demo: true
theme: light
---

### 介绍

用于实时展示倒计时数值，支持毫秒精度。

### 引入

```tsx
import { CountDown } from 'rmc-vant';
```

## 代码演示

### 基础用法

`time` 属性表示倒计时总时长，单位为毫秒。

```tsx
<CountDown time={30 * 60 * 60 * 1000} />
```

### 自定义格式

通过 `format` 属性设置倒计时文本的内容。

```tsx
<CountDown time={30 * 60 * 60 * 1000} format="DD 天 HH 时 mm 分 ss 秒" />
```

### 毫秒级渲染

倒计时默认每秒渲染一次，设置 `millisecond` 属性可以开启毫秒级渲染。

```tsx
<CountDown time={30 * 60 * 60 * 1000} format="HH:mm:ss:SS" millisecond />
```

### 自定义渲染

`children` 支持传入函数，可以自定义渲染

```tsx
<CountDown time={30 * 60 * 60 * 1000}>
  {({ hours, minutes, seconds }) => (
    <Space split=":" size={4}>
      <Tag color="#ee0a24">{String(hours).padStart(2, '0')}</Tag>
      <Tag color="#ee0a24">{String(minutes).padStart(2, '0')}</Tag>
      <Tag color="#ee0a24">{String(seconds).padStart(2, '0')}</Tag>
    </Space>
  )}
</CountDown>
```

### 手动控制

通过 `ref` 获取到组件实例后，可以调用 `start`、`pause`、`reset` 方法。

```tsx
const ref = useRef<CountDownRef | null>(null);

return (
  <>
    <CountDown
      style={{ marginLeft: 16, marginBottom: 24 }}
      ref={ref}
      time={3600 * 1000}
      autoStart={false}
    />
    <Grid column={3} clickable>
      <GridItem
        onClick={() => ref.current?.start()}
        icon={<PlayCircleOutlined />}
        text="开始"
      />
      <GridItem
        onClick={() => ref.current?.pause()}
        icon={<PauseCircleOutlined />}
        text="暂停"
      />
      <GridItem
        onClick={() => ref.current?.reset()}
        icon={<ReplayOutlined />}
        text="重置"
      />
    </Grid>
  </>
);
```

## API

### Props

{{"api": true}}

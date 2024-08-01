---
title: SafeArea
subTitle: 安全区域
category: components
group: base
---

## 介绍

适配 iOS 浏览器的 safe-area 。

## 引入

```tsx
import { SafeArea } from 'rmc-vant';
```

## 代码演示

### 基础用法

demo|base

```tsx
const [open, set] = useState(false);

return (
  <>
    <Button type='primary' onClick={() => set(true)}>
      打开
    </Button>
    <Overlay open={open}>
      <SafeArea>
        <div
          style={{
            height: '100dvh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <span />
          <div
            style={{
              height: 80,
              background: '#fff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button type='primary' onClick={() => set(false)}>
              关闭
            </Button>
          </div>
        </div>
      </SafeArea>
    </Overlay>
  </>
);
```

## API

### Props

| 参数     | 说明         | 类型      | 默认值 |
| -------- | ------------ | --------- | ------ |
| top      | 是否设置顶部 | `boolean` |        |
| bottom   | 是否设置底部 | `boolean` | `true` |
| disabled | 是否关闭     | `boolean` |        |

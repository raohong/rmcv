---
title: Skeleton
subTitle: 骨架屏幕
category: components
type: 展示组件
demo: true
theme: light
---

### 介绍

用于在内容加载过程中展示一组占位图形。

### 引入

```tsx
import { Skeleton } from 'rmc-vant';
```

## 代码演示

### 基础用法

通过 `title` 属性显示标题占位图，通过 `row` 属性配置占位段落行数。

```tsx
<Skeleton row={3} title />
```

### 显示头像

通过 `avatar` 属性显示头像占位图。

```tsx
<Skeleton row={3} title avatar />
```

### 展示子组件

将 `loading` 属性设置成 `false` 表示内容加载完成，此时会隐藏占位图，并显示 `Skeleton` 的子组件。

```tsx
const [loading, setLoading] = useState(true);

return (
  <>
    <Space style={{ marginBottom: 24 }}>
      <Button size="small" type="primary" onClick={() => setLoading(false)}>
        显示子组件
      </Button>
      <Button size="small" type="primary" onClick={() => setLoading(true)} plain>
        隐藏子组件
      </Button>
    </Space>
    <Skeleton row={3} loading={loading} title avatar>
      <div style={{ display: 'flex', gap: 8 }}>
        <Image
          width={32}
          height={32}
          src="https://cdn.jsdelivr.net/npm/@vant/assets/logo.png"
          round
        />
        <div>
          <h3 style={{ fontSize: 18, margin: 0 }}>关于 Vant</h3>
          <p>
            Vant 是一套轻量、可靠的移动端 Vue
            组件库，提供了丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。
          </p>
        </div>
      </div>
    </Skeleton>
  </>
);
```

## API

### Props

{{"api": true}}

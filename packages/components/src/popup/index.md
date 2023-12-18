---
title: Popup
subTitle: 弹出层
category: components
type: 基础组件
demo: true
---

### 介绍

弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示。

### 引入

```tsx
import { Popup } from 'rmc-vant';
```

## 代码演示

### 基础用法

```tsx
const [visible, set] = useState(false);

return (
  <>
    <Cell onClick={() => set(true)} title="展示弹出层" clickable />
    <Popup visible={visible} onClose={() => set(false)}>
      内容
    </Popup>
  </>
);
```

### 弹出位置

通过 `position` 属性设置弹出位置，默认居中弹出，可以设置为 `top`、`bottom`、`left`、`right`。

```tsx
<Popup visible position="bottom">
  内容
</Popup>
```

### 关闭图标

设置 `closeable` 属性后，会在弹出层的右上角显示关闭图标，并且可以通过 `closeIcon` 属性自定义图标，使用 `closeIconPosition` 属性可以自定义图标位置。

```tsx
<>
  <Popup visible position="bottom" closeable>
    内容
  </Popup>
  {/** 自定义图标 */}
  <Popup visible position="bottom" closeIcon={<CloseOutlined />} closeable>
    内容
  </Popup>
  {/** 图标位置 */}
  <Popup visible position="bottom" closeIconPosition="top-left" closeable>
    内容
  </Popup>
</>
```

### 圆角弹窗

设置 round 属性后，弹窗会根据弹出位置添加不同的圆角样式。

```tsx
<Popup visible position="bottom" round>
  内容
</Popup>
```

### 指定挂载位置

弹出层默认挂载到组件标签所在位置，可以通过 `teleport` 属性指定挂载位置。

```tsx
<Popup visible position="bottom" teleport="body">
  内容
</Popup>
```

## API

### Props

{{"api": true}}

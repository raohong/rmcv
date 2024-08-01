---
title: Toast
subTitle: 轻提示
category: components
group: feedback
---

## 介绍

在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。

## 引入

```tsx
import {
  Toast,
  showFailToast,
  showLoadingToast,
  showSuccessToast,
  showToast,
  useToast,
} from 'rmc-vant';
```

## 代码演示

### 文字提示

demo|showToast

```tsx
import { Cell, showToast } from 'rmc-vant';

export default () => (
  <Cell onClick={() => showToast('提示内容')} title='提示' isLink clickable />
);
```

### 加载提示

使用 `showLoadingToast` 方法展示加载提示，通过 `forbidClick` 属性可以禁用背景点击。

demo|showLoadingToast

```tsx
import { Cell, showLoadingToast } from 'rmc-vant';

export default () => (
  <Cell
    onClick={() =>
      showLoadingToast({
        message: '加载中...',
        forbidClick: false,
      })}
    title='加入购物车'
    isLink
  />
);
```

### 成功/失败提示

使用 `showSuccessToast` 方法展示成功提示，使用 `showFailToast` 方法展示失败提示。

demo|successOrFail

```tsx
import { Button, Cell, CellGroup, showFailToast, showSuccessToast } from 'rmc-vant';

export default () => (
  <CellGroup size={24}>
    <Cell onClick={() => showSuccessToast('购买成功')} title='成功' isLink />
    <Cell onClick={() => showFailToast('购买失败')} title='失败' isLink />
  </CellGroup>
);
```

### 自定义图标

通过 `icon` 选项可以自定义图标

demo|icon

```tsx
import { Cell, CellGroup, Image, showFailToast, showToast } from 'rmc-vant';
import { LikeOutlined } from '@rmc-vant/icons';

export default () => (
  <CellGroup>
    <Cell
      onClick={() =>
        showToast({
          message: '自定义图片',
          icon: <Image src='https://img.yzcdn.cn/vant/logo.png' />,
        })}
      title='自定义图片'
      isLink
    />
    <Cell
      onClick={() =>
        showFailToast({
          message: '自定义图标',
          icon: <LikeOutlined />,
        })}
      title='自定义图标'
      isLink
    />
  </CellGroup>
);
```

通过 `loadingType` 属性可以自定义加载图标类型。

demo|loadingType

```tsx
import { Button, showLoadingToast } from 'rmc-vant';

export default () => (
  <Button
    onClick={() =>
      showLoadingToast({
        message: '加载中...',
        loadingType: 'spinner',
      })}
    type='primary'
    block
  >
    提交
  </Button>
);
```

### 自定义位置

Toast 默认渲染在屏幕正中位置，通过 `position` 属性可以控制 Toast 展示的位置。

demo|position

```tsx
import { Button, Cell, CellGroup, showToast } from 'rmc-vant';

export default () => (
  <CellGroup>
    <Cell
      onClick={() => showToast({ message: '顶部展示', position: 'top' })}
      title='顶部展示'
      isLink
      clickable
    />
    <Cell
      onClick={() => showToast({ message: '底部展示', position: 'bottom' })}
      title='底部展示'
      isLink
      clickable
    />
  </CellGroup>
);
```

### 组件调用

demo|component

```tsx
import { Button, Toast } from 'rmc-vant';
import { useState } from 'react';

export default () => {
  const [open, set] = useState(false);

  return (
    <>
      <Button type='success' onClick={() => set(true)} block>
        打开
      </Button>
      <Toast
        open={open}
        message='提交成功'
        type='success'
        onClose={() => set(false)}
      />
    </>
  );
};
```

### 通过 hooks 使用

`useToast` 返回 `ToastApiRef`，可以通过 `ToastApiRef` 调用 `showToast` 、 `showLoadingToast` 、 `showFailToast` 、 `showSuccessToast`。

demo|useToast

```tsx
import { Cell, CellGroup, useToast } from 'rmc-vant';

export default () => {
  const [api, holder] = useToast();

  return (
    <>
      {holder}
      <CellGroup>
        <Cell
          onClick={() => api.showToast('普通提示')}
          title='普通提示'
          isLink
          clickable
        />
        <Cell
          onClick={() => api.showSuccessToast('成功提示')}
          title='成功提示'
          isLink
          clickable
        />

        <Cell
          onClick={() => api.showFailToast('失败提示')}
          title='失败提示'
          isLink
          clickable
        />
        <Cell
          onClick={() => api.showLoadingToast('加载提示')}
          title='加载提示'
          isLink
          clickable
        />

        <Cell
          onClick={() => {
            api.showLoadingToast('加载提示');
            setTimeout(() => {
              api.close();
            }, 1000);
          }}
          title='1s 之后关闭 toast'
          isLink
          clickable
        />
      </CellGroup>
    </>
  );
};
```

### 全局配置

`allowMultipleToast` 是否允许显示多个 `toast`。

```ts
type allowMultipleToast = () => void;
```

`setToastDefaultOptions` 为全局全部或者某个类型的 `toast` 设置默认选项。

```ts
interface setToastDefaultOptions {
  (type: ToastConfigType, options: ToastConfig): void;
  (options: ToastConfig & { type?: ToastConfigType }): void;
}
```

`resetToastDefaultOptions` 重制全局全部或者某个类型的 `toast` 选项。

```ts
type resetToastDefaultOptions = (type?: ToastConfigType) => void;
```

## Toast API

### Toast Options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 提示类型 | `loading` \| `success` \| `fail` \| `normal` | `normal` |
| position | 位置，可选值为 top bottom | `top`\|`bottom`\|`center` | `center` |
| message | 消息内容 | `React.ReactNode` |  |
| icon | 自定义图标 | `React.ReactNode` |  |
| overlay | 是否显示 overlay | `boolean` |  |
| overlayClosable | 点击遮罩是否是否关闭 toast | `boolean` |  |
| zIndex | 样式层级 | `number` | `1` |
| closeOnClick | 点击 toast 是否关闭 | `boolean` |  |
| duration | 显示时间, 值为 0 时，toast 不会消失 | `number` |  |
| loadingType | 加载图标类型 | `LoadingType` |  |
| onClose | 关闭回调 | `() => void` |  |
| afterClose | 关闭动画结束后触发的回调函数 | `() => void` |  |
| teleport | 自定义渲染位置 | `PortalContainer` |  |
| open | Toast 是否可见 | `boolean` |  |
| classNames | 给各个 slot 自定义类名 | `Record<ToastNSlot, string>` |  |

### Toast Props

和 `Toast Options` 一样。

### Types

#### showToast

```ts
type showToast = (message: string | ToastOptions) => void;
```

#### showFailToast

```ts
type showFailToast = (message: string | Omit<ToastOptions, 'type'>) => void;
```

#### showSuccessToast

```ts
type showSuccessToast = (message: string | Omit<ToastOptions, 'type'>) => void;
```

#### showLoadingToast

```ts
type showLoadingToast = (message: string | Omit<ToastOptions, 'type'>) => void;
```

#### closeToast

关闭最新的 `Toast`，传递 `clearAll` 可以关闭全部 Toast

```ts
type closeToast = (clearAll?: boolean) => void;
```

#### ToastApiRef

```tsx
type ToastApiRef = {
  showToast: (message: string | ToastOptions) => void;
  showFailToast: (message: string | Omit<ToastOptions, 'type'>) => void;
  showSuccessToast: (message: string | Omit<ToastOptions, 'type'>) => void;
  showLoadingToast: (message: string | Omit<ToastOptions, 'type'>) => void;
  close: (key?: string) => void;
};
```

#### ToastConfig

```ts
type ToastConfig = Omit<ToastOptions, 'type' | 'message'>;
```

#### ToastConfigType

```ts
type ToastConfigType = ToastType | 'common';
```

#### ToastType

```ts
type ToastType = 'loading' | 'success' | 'fail' | 'normal';
```

#### ToastNSlot

```ts
type ToastNSlot = 'root' | 'message' | 'icon' | 'loadingIcon';
```

---
title: Toast
subTitle: 轻提示
category: components
type: 基础组件
demo: true
---

### 介绍

在页面中间弹出黑色半透明提示，用于消息通知、加载提示、操作结果提示等场景。

### 引入

```tsx
import { Toast } from 'rmc-vant';
```

## 代码演示

### 文字提示

```ts
Toast('提示内容');
```

### 加载提示

使用 `Toast.loading` 方法展示加载提示，通过 `forbidClick` 属性可以禁用背景点击。

```ts
Toast.loading({
  message: '加载中...',
  forbidClick: false,
});
```

### 成功/失败提示

使用 `Toast.success` 方法展示成功提示，使用 `Toast.fail` 方法展示失败提示。

```ts
Toast.success('成功文案');
Toast.fail('失败文案');
```

### 自定义图标

通过 `icon` 选项可以自定义图标

```tsx
Toast.fail({
  message: '自定义图标',
  icon: <LikeOutlined />,
});

Toast({
  message: '自定义图片',
  icon: 'https://img.yzcdn.cn/vant/logo.png',
});
```

通过 `loadingType` 属性可以自定义加载图标类型。

```ts
Toast.loading({
  message: '加载中...',
  loadingType: 'spinner',
});
```

### 动态更新提示

执行 Toast 方法时会返回对应的 Toast 实例，通过实力的 `update` 方法可以实现动态更新提示的效果。

### 自定义位置

Toast 默认渲染在屏幕正中位置，通过 `position` 属性可以控制 Toast 展示的位置。

```ts
Toast({
  message: '顶部展示',
  position: 'top',
});

Toast({
  message: '底部展示',
  position: 'bottom',
});
```

###

```tsx
const inst = useRef<ToastInstance | null>(null);

const show = () => {
  inst.current = Toast({
    duration: 0,
    message: '倒计时 3 秒',
  });

  let current = 3;
  const id = setInterval(() => {
    current--;
    inst.current?.update({
      message: `倒计时 ${current} 秒`,
    });

    if (current === 0) {
      clearInterval(id);
      inst.current?.close();
    }
  }, 1000);
};
```

## API

### ToastOptions 数据结构

{{"api": "ToastComponent"}}

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

{{"cssVar": true}}

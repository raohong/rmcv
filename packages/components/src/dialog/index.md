---
title: Dialog
subTitle: 弹出框
category: components
type: 反馈组件
demo: true
---

### 介绍

弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作，支持函数调用和组件调用两种方式。

### 函数调用

`Dialog` 是一个函数，调用后会直接在页面中弹出相应的模态框。

```tsx
import { Dialog } from 'rmc-vant';

Dialog({
  message: '提示',
});
```

### 组件调用

```tsx
import { DialogComponent } from 'rmc-vant';
```

## 代码演示

### 消息提示

用于提示一些消息，只包含一个确认按钮。

```tsx
Dialog.alert({
  title: '标题',
  message: '代码是写出来给人看的，附带能在机器上运行。',
}).then(() => {
  // on close
});

Dialog.alert({
  message: '生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。',
}).then(() => {
  // on close
});
```

### 消息确认

用于确认消息，包含取消和确认按钮。

```tsx
Dialog.confirm({
  title: '标题',
  message: '如果解决方法是丑陋的，那就肯定还有更好的解决方法，只是还没有发现而已。',
})
  .then(() => {
    // on confirm
  })
  .catch(() => {
    // on cancel
  });
```

### 圆角按钮风格

将 `theme` 选项设置为 `round-button` 可以展示圆角按钮风格的弹窗。

```tsx
  title: '标题',
  message: '代码是写出来给人看的，附带能在机器上运行。',
  theme: 'round-button',
}).then(() => {
  // on close
});

Dialog.alert({
  message: '生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。',
  theme: 'round-button',
}).then(() => {
  // on close
});
```

### 异步关闭

通过 `beforeClose` 属性可以传入一个回调函数，在弹窗关闭前进行特定操作。

```tsx
const beforeClose = (action) =>
  new Promise((resolve) => {
    setTimeout(() => {
      if (action === 'confirm') {
        resolve(true);
      } else {
        // 拦截取消操作
        resolve(false);
      }
    }, 1000);
  });

Dialog.confirm({
  title: '标题',
  message: '如果解决方法是丑陋的，那就肯定还有更好的解决方法，只是还没有发现而已。',
  beforeClose,
});
```

### 组件调用

如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。

```tsx
import { Dialog, DialogComponent, Image } from 'rmc-vant';

const Component = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Cell
        title="组件调用"
        onClick={() => {
          setVisible(true);
        }}
        clickable
      />
      <DialogComponent
        title="标题"
        message={<Image src="https://img.yzcdn.cn/vant/apple-3.jpg" />}
        visible={visible}
        onClose={() => setVisible(false)}
        showCancelButton
      />
    </>
  );
};
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

{{"cssVar": true}}

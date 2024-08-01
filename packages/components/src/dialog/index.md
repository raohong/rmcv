---
title: Dialog
subTitle: 弹出框
category: components
group: feedback
---

## 介绍

弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作，支持函数调用和组件调用两种方式。

## 引入

```tsx
import { Dialog, showAlertDialog, showConfirmDialog, showDialog } from 'rmc-vant';
```

## 代码演示

### 消息确认

用于确认消息，包含取消和确认按钮。

demo|showDialog

```tsx
import { Button, showDialog, showToast } from 'rmc-vant';

export default () => {
  return (
    <Button
      onClick={async () => {
        await showDialog({
          title: '确认购买吗？',
          message: '详细账单已发送到个人账户下。',
          showCancelButton: true,
          onConfirm() {
            showToast('Confirm');
          },

          onCancel() {
            showToast('Cancel');
          },
        });
      }}
      type='primary'
      block
    >
      购买
    </Button>
  );
};
```

### 消息提示

用于提示一些消息，只包含一个确认按钮。

demo|showConfirmDialog

```tsx
import { Button, showAlertDialog, showToast } from 'rmc-vant';

export default () => {
  return (
    <Button
      onClick={async () => {
        await showAlertDialog({
          title: '标题',
          message: '代码是写出来给人看的，附带能在机器上运行。',
        });

        showToast('关闭');
      }}
      type='success'
      block
    >
      展示
    </Button>
  );
};
```

### 圆角按钮风格

将 `theme` 选项设置为 `round-button` 可以展示圆角按钮风格的弹窗。

demo|roundButton

```tsx
import {
  Cell,
  CellGroup,
  showAlertDialog,
  showConfirmDialog,
  showToast,
} from 'rmc-vant';

export default () => {
  return (
    <CellGroup>
      <Cell
        title='确认框'
        onClick={async () => {
          await showConfirmDialog({ title: '确认删除吗', theme: 'round-button' });

          showToast('已经删除');
        }}
        isLink
        clickable
      />
      <Cell
        title='提示框'
        onClick={async () => {
          await showAlertDialog({ title: '确认离开吗', theme: 'round-button' });
        }}
        isLink
        clickable
      />
    </CellGroup>
  );
};
```

### 异步关闭

通过 `beforeClose` 属性可以传入一个回调函数，在弹窗关闭前进行特定操作。

demo|beforeClose

```tsx
import { Button, showDialog, showToast } from 'rmc-vant';

export default () => {
  return (
    <Button
      onClick={async () => {
        await showDialog({
          title: '标题',
          message: '代码是写出来给人看的，附带能在机器上运行。',
          beforeClose: action =>
            new Promise((resolve) => {
              setTimeout(() => {
                if (action === 'confirm') {
                  resolve(true);
                }
                else {
                  // 拦截取消操作
                  resolve(false);
                }
              }, 1000);
            }),
        });

        showToast('关闭');
      }}
      block
    >
      展示
    </Button>
  );
};
```

### 组件调用

如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。

demo|component

```tsx
import { Button, Dialog, Image } from 'rmc-vant';
import { useState } from 'react';

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
        type='primary'
        clickable
        block
      >
        组件调用
      </Button>
      <Dialog
        title='标题'
        message={<Image src='https://img.yzcdn.cn/vant/apple-3.jpg' />}
        open={open}
        onClose={() => setOpen(false)}
        showCancelButton
      />
    </>
  );
};
```

## Dialog API

### Dialog Options

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| title | 标题 | `React.ReactNode` |  |
| width | 弹窗宽度 | `number` | `320` |
| message | 文本内容 | `number` |  |
| footer | 自定义底部区域 | `number` |  |
| messageAlign | 内容对齐方式 | `left` \| `center` \| `right` | `center` |
| theme | 样式风格 | `default` \| `round-button` | `default` |
| style | 自定义 style | `React.CSSProperties` |  |
| className | 自定义类名 | `string` |  |
| showConfirmButton | 是否展示确认按钮名 | `boolean` | `true` |
| showCancelButton | 是否展示取消按钮 | `boolean` |  |
| confirmButtonText | 确认按钮文案 | `boolean` |  |
| confirmButtonColor | 确认按钮颜色 | `string` |  |
| cancelButtonText | 取消按钮文案 | `boolean` |  |
| cancelButtonColor | 取消按钮颜色 | `string` |  |
| overlay | 是否显示 overlay | `boolean` |  |
| overlayClosable | 点击遮罩是否关闭 Dialog | `boolean` |  |
| teleport | 自定义渲染位置 | `PortalContainer` |  |
| lockScroll | 是否锁定背景滚动 | `boolean` | `true` |
| closeOnPopstate | 是否在页面回退时自动关闭 | `boolean` | `true` |
| beforeClose | 闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise | `(action: DialogAction) => boolean \| Promise<void \| boolean>` |  |
| classNames | 给各个 slot 自定义类名 | `Record<DialogNSlot, string>` |  |

### Toast Props

除去和 `Toast Options` 一样的属性外，还增加了下面的属性。

| 参数       | 说明                     | 类型          | 默认值 |
| ---------- | ------------------------ | ------------- | ------ |
| open       | Dialog 是否可见          | `boolean`     |        |
| onConfirm  | 点击确认按钮时触发       | ` () => void` |        |
| onCancel   | 点击取消按钮时触发       | ` () => void` |        |
| onClose    | 关闭时触发的回调函数     | ` () => void` |        |
| afterClose | 动画结束后触发的回调函数 | ` () => void` |        |

### Types

#### DialogNSlot

```ts
type DialogNSlot =
  | 'root'
  | 'title'
  | 'message'
  | 'footer'
  | 'cancelButton'
  | 'confirmButton';
```

#### DialogAction

```ts
type DialogAction = 'confirm' | 'cancel';
```

---
title: SwipeCell
subTitle: 滑动单元格
category: components
group: feedback
---

## 介绍

可以左右滑动来展示操作按钮的单元格组件。

## 引入

```tsx
import { SwipeCell } from 'rmc-vant';
```

## 代码演示

### 基础使用

`SwipeCell` 组件提供了 `left` 和 `right` 两个插槽，用于定义两侧滑动区域的内容。

demo|base

```tsx
<SwipeCell
  left={<Button type='success'>使用</Button>}
  right={(
    <Space size={0} wrap={false}>
      <Button type='danger'>删除</Button>
      <Button type='primary'>收藏</Button>
    </Space>
  )}
>
  <Cell title='单元格' value='内容' />
</SwipeCell>;
```

### 自定义内容

`SwipeCell` 可以嵌套任意内容，比如嵌套一个商品卡片。

demo|customContent

```tsx
<SwipeCell
  right={(
    <Button style={{ height: '100%' }} shape='square' type='danger'>
      删除
    </Button>
  )}
  sx={({ theme }) => ({
    '.box': {
      display: 'flex',
      padding: '8px 12px',
    },
    '.nums': {
      color: theme.palette.gray600,
    },
    'h3': {
      fontSize: 14,
      marginBottom: 0,
    },
    'h4': {
      fontSize: 12,
      color: theme.palette.gray600,
    },
    '.footer': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: 14,
    },
    '.main': {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
  })}
>
  <div className='box'>
    <Image
      width={88}
      height='auto'
      fit='cover'
      src='https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg'
    />
    <div className='main'>
      <div>
        <h3>商品标题</h3>
        <h4>描述信息</h4>
      </div>
      <div className='footer'>
        <span className='price'>
          <big>2</big>
          .00
        </span>
        <span className='nums'>x2</span>
      </div>
    </div>
  </div>
</SwipeCell>;
```

## API

### SwiperCell Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| left | 左侧内容 | `React.ReactNode` |  |
| right | 右侧内容 | `React.ReactNode` |  |
| disabled | 是否关闭滑动 | `boolean` |  |
| closeOnActionClick | 点击时是否自动关闭 | `boolean` | `true` |
| classNames | 给各个 slot 自定义类名 | `Record<'root' \| 'leftAction' \| 'rightAction' \| 'content', string>` |  |

### SwiperCell Events

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| onClose | 左侧内容 | `(position: 'left' \| 'right' \| 'cell' \| 'outside') => void` |  |
| onOpen | 左侧内容 | `(position:  'left' \| 'right') => void` |  |

### Types

#### SwipeCellRef

```ts
type SwipeCellRef = {
  open: (position: SwipeCellOpenPosition) => void;
  close: () => void;
  disableClickAwayManager: () => () => void;
};
```

---
title: Grid
locale: zh-CN
name: grid
category: components
subTitle: 宫格
---

# Grid

## API

### GridProps

| 参数      | 说明                   | 类型                        | 默认值   |
| --------- | ---------------------- | --------------------------- | -------- |
| column    | 123123                 | number                      | 3        |
| iconSize  | 图标大小               | string \| number            | 28       |
| gutter    | 格子之间的间距         | string \| number            | -        |
| border    | 是否显示边框           | boolean                     | true     |
| center    | 是否将格子内容居中显示 | boolean                     | true     |
| square    | 是否将格子固定为正方形 | boolean                     | -        |
| clickable | 是否开启格子点击反馈   | boolean                     | -        |
| direction | 格子内容排列的方向     | "vertical" \| "horizontal"  | vertical |
| component | 自定义 component       | keyof JSX.IntrinsicElements | div      |

### GridItemProps

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| text | 文字内容 | ReactNode | - |
| icon | 图标 | ReactNode | - |
| iconSize | 图标大小 | string \| number | 28 |
| dot | 是否显示徽标小红点 | boolean | - |
| badge | 右上角徽标的内容 | string \| number | - |
| max | 徽标内容为数字时，最大值 | number | 99 |
| showZero | 当 content 是 0 时，是否显示 | boolean | true |
| contentClassName | content 自定义 | string | - |
| clickable | 是否开启格子点击反馈 | boolean | - |
| component | 自定义 component | keyof JSX.IntrinsicElements | div |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

| 名称 | 默认值 | 说明 |
| --- | --- | --- |
| grid-item-content-padding | var(--rmcv-padding-md) var(--rmcv-padding-xs) | - |
| grid-item-content-background-color | var(--rmcv-background-color-light) | - |
| grid-item-content-active-color | var(--rmcv-active-color) | - |
| grid-item-icon-size | 28px | - |
| grid-item-text-color | var(--rmcv-gray-7) | - |
| grid-item-text-font-size | var(--rmcv-font-size-sm) | - |

---
title: Layout
subTitle: 布局
category: components
group: base
---

## 介绍

`Layout` 提供了 `Row` 和 `Col` 两个组件来进行行列布局。

## 引入

```tsx
import { Col, Row } from 'rmc-vant';
```

## 代码演示

### 基础用法

`Layout` 组件提供了 `24` 列栅格，通过在 `Col` 上添加 `span` 属性设置列所占的宽度百分比。此外，添加 `offset` 属性可以设置列的偏移宽度，计算方式与 `span` 相同。

demo|base

```tsx
<>
  <Row>
    <Col span={8}>
      <Button type='primary' block>
        span: 8
      </Button>
    </Col>
    <Col span={8}>
      <Button type='primary' block>
        span: 8
      </Button>
    </Col>
    <Col span={8}>
      <Button type='primary' block>
        span: 8
      </Button>
    </Col>
  </Row>
  <Row sx={{ marginTop: 24, marginBottom: 24 }}>
    <Col span={4}>
      <Button type='primary' block>
        span: 8
      </Button>
    </Col>
    <Col span={10} offset={4}>
      <Button type='primary' block>
        offset:4 span: 10
      </Button>
    </Col>
  </Row>
  <Row>
    <Col span={12} offset={12}>
      <Button type='primary' block>
        offset:12 span: 12
      </Button>
    </Col>
  </Row>
</>;
```

### 设置列元素间距

通过 gutter 属性可以设置列元素之间的间距，默认间距为 0。

demo|gutter

```tsx
<Row gutter={20}>
  <Col span={8}>
    <Button type='success' block>
      span: 8
    </Button>
  </Col>
  <Col span={8}>
    <Button type='success' block>
      span: 8
    </Button>
  </Col>
  <Col span={8}>
    <Button type='success' block>
      span: 8
    </Button>
  </Col>
</Row>;
```

### 对齐方式

通过 `justify` 属性可以设置主轴上内容的对齐方式，等价于 `flex` 布局中的 `justify-content` 属性。

demo|justify

```tsx
<>
  <h3>居中</h3>
  <Row justify='center'>
    <Col span={6}>
      <Button type='warning' block>
        span 6
      </Button>
    </Col>
    <Col span={6}>
      <Button type='warning' block>
        span 6
      </Button>
    </Col>
    <Col span={6}>
      <Button type='warning' block>
        span 6
      </Button>
    </Col>
  </Row>
  <h3>右对齐</h3>
  <Row justify='end'>
    <Col span={6}>
      <Button type='primary' block>
        span 6
      </Button>
    </Col>
    <Col span={6}>
      <Button type='primary' block>
        span 6
      </Button>
    </Col>
    <Col span={6}>
      <Button type='primary' block>
        span 6
      </Button>
    </Col>
  </Row>
  <h3>两端对齐</h3>
  <Row justify='space-between'>
    <Col span={6}>
      <Button type='primary' block>
        span 6
      </Button>
    </Col>
    <Col span={6}>
      <Button type='primary' block>
        span 6
      </Button>
    </Col>
    <Col span={6}>
      <Button type='primary' block>
        span 6
      </Button>
    </Col>
  </Row>
  <h3>每个元素的两侧间隔相等</h3>
  <Row justify='space-around'>
    <Col span={6}>
      <Button type='primary' block>
        span 6
      </Button>
    </Col>
    <Col span={6}>
      <Button type='primary' block>
        span 6
      </Button>
    </Col>
    <Col span={6}>
      <Button type='primary' block>
        span 6
      </Button>
    </Col>
  </Row>
</>;
```

## API

### Row Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| gutter | 列元素之间的间距 | `RowGutter` |  |
| align | Row 垂直对齐方式 | `top` \| `middle` \| `bottom` |  |
| justify | Row 水平对齐方式 | `center` \| `end` \| `start` \| `space-around` \| `space-between` |  |
| wrap | 是否自动换行 | `boolean` | `true` |
| component | 自定义 component | `keyof JSX.IntrinsicElements` | `div` |

### Col Props

| 参数      | 说明             | 类型                          | 默认值 |
| --------- | ---------------- | ----------------------------- | ------ |
| span      | 列元素宽度       | `number`                      |        |
| offset    | 列元素偏移距离   | `number`                      |        |
| component | 自定义 component | `keyof JSX.IntrinsicElements` | `div`  |

### Types

#### RowGutter

```ts
type RowGutter = number | string | [number | string, string | number];
```

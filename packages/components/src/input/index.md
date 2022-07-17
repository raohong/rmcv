---
title: Input
subTitle: 输入框
category: components
type: 表单组件
demo: true
---

### 介绍

用户可以在文本框内输入或编辑文字。

### 引入

```tsx
import { Input, Textarea } from 'rmc-vant';
```

## 代码演示

### 基础用法

可以通过 `value` 控制输入框的值，通过 `placeholder` 设置占位提示文字。

```tsx
const [value, set] = useState();

return (
  <Cell title="文本" center>
    <Input value={value} onChange={set} placeholder="请输入文本" />
  </Cell>
);
```

### 自定义类型

根据 `type` 属性定义不同类型的输入框，默认值为 `text`。

```tsx
<CellGroup inset>
  <Cell title="文本">
    <Input placeholder="请输入文本" />
  </Cell>
  <Cell title="手机号">
    <Input placeholder="请输入手机号" type="tel" />
  </Cell>
  <Cell title="整数">
    <Input placeholder="请输入整数" type="digit" />
  </Cell>
  <Cell title="数字">
    <Input placeholder="请输入数字（支持小数）" type="number" />
  </Cell>
  <Cell title="密码">
    <Input placeholder="请输入密码" type="password" />
  </Cell>
</CellGroup>
```

### 禁用输入框

通过 `readonly` 将输入框设置为只读状态，通过 `disabled` 将输入框设置为禁用状态。

```tsx
<CellGroup inset>
  <Cell title="文本">
    <Input defaultValue="输入框只读" readonly />
  </Cell>
  <Cell title="文本">
    <Input defaultValue="输入框已禁用" disabled />
  </Cell>
</CellGroup>
```

### 插入图标

通过 `suffix` 配置输入框左侧的图标，通过设置 `clearable` 在输入过程中展示清除图标。

```tsx
<Cell title="文本">
  <Input defaultValue="1312" suffix={<WarningOutlined />} clearable />
</Cell>
```

### 插入按钮

通过 `addonAfter` 配置输入框左侧的标签。

```tsx
<Cell title="短信验证码">
  <Input
    addonAfter={
      <Button size="small" type="primary">
        发送验证码
      </Button>
    }
    placeholder="输入验证码"
    clearable
  />
</Cell>
```

### 格式化输入内容

通过 `formatter` 属性可以对输入的内容进行格式化，通过 `formatTrigger` 属性可以指定执行格式化的时机，默认在输入时进行格式化。

```tsx
<CellGroup inset>
  <Cell title="文本">
    <Input placeholder="在输入时执行" formatter={(val) => val.replace(/\D/g, '')} />
  </Cell>
  <Cell title="文本">
    <Input
      placeholder="在失焦时执行"
      formatter={(val) => val.replace(/\D/g, '')}
      formatTrigger="onBlur"
    />
  </Cell>
</CellGroup>
```

### 高度自适应

对于 `textarea`，可以通过 `autoSize` 属性设置高度自适应。

```tsx
<Cell title="留言">
  <Textarea placeholder="请留言" autoSize={{ minRows: 4 }} />
</Cell>
```

### 显示字数统计

设置 `maxLength` 和 `showWordLimit` 属性后会在底部显示字数统计。

```tsx
<Cell title="留言">
  <Textarea placeholder="请留言" maxLength={100} showWorldLimit />
</Cell>
```

### 输入框内容对齐

通过 `inputAlign` 属性可以设置输入框内容的对齐方式。

```tsx
<Cell title="留言">
  <Input placeholder="请输入文本" inputAlign="right" clearable />
</Cell>
```

## API

### Input Props

{{"api": "Input"}}

### Textarea Props

{{"api": "Textarea"}}

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 ConfigProvider 组件。

{{"cssVar": true}}

---
title: Input
subTitle: 输入框
category: components
group: form
style: '.RVuiCellGroup-content[class]{margin:0px}'
---

## 介绍

用户可以在文本框内输入或编辑文字。

## 引入

```tsx
import { Input, Textarea } from 'rmc-vant';
```

## 代码演示

### 基础用法

可以通过 `value` 控制输入框的值，通过 `placeholder` 设置占位提示文字。

demo|base

```tsx
const [value, set] = useState();

return (
  <FormItem label='文本' center>
    <Input value={value} onChange={set} placeholder='请输入文本' />
  </FormItem>
);
```

### 自定义类型

根据 `type` 属性定义不同类型的输入框，默认值为 `text`。

demo|type

```tsx
<CellGroup inset>
  <FormItem label='文本'>
    <Input placeholder='请输入文本' />
  </FormItem>
  <FormItem label='手机号'>
    <Input placeholder='请输入手机号' type='tel' />
  </FormItem>
  <FormItem label='整数'>
    <Input placeholder='请输入整数' type='digit' />
  </FormItem>
  <FormItem label='数字'>
    <Input placeholder='请输入数字（支持小数）' type='number' />
  </FormItem>
  <FormItem label='密码'>
    <Input placeholder='请输入密码' type='password' />
  </FormItem>
</CellGroup>;
```

### 禁用输入框

通过 `readonly` 将输入框设置为只读状态，通过 `disabled` 将输入框设置为禁用状态。

demo|readonly

```tsx
<CellGroup inset>
  <FormItem label='文本'>
    <Input defaultValue='输入框只读' readonly />
  </FormItem>
  <FormItem label='文本'>
    <Input defaultValue='输入框已禁用' disabled />
  </FormItem>
</CellGroup>;
```

### 插入图标

通过 `suffix` 配置输入框左侧的图标，通过设置 `clearable` 在输入过程中展示清除图标。

demo|suffix

```tsx
<FormItem label='文本'>
  <Input defaultValue='1312' suffix={<WarningOutlined />} clearable />
</FormItem>;
```

### 插入按钮

通过 `addonAfter` 配置输入框左侧的标签。

demo|addonAfter

```tsx
<FormItem label='短信验证码'>
  <Input
    addonAfter={(
      <Button size='small' type='primary'>
        发送验证码
      </Button>
    )}
    placeholder='输入验证码'
    clearable
  />
</FormItem>;
```

### 格式化输入内容

通过 `formatter` 属性可以对输入的内容进行格式化，通过 `formatTrigger` 属性可以指定执行格式化的时机，默认在输入时进行格式化。

demo|formatter

```tsx
<CellGroup inset>
  <FormItem label='文本'>
    <Input placeholder='在输入时执行' formatter={val => val.replace(/\D/g, '')} />
  </FormItem>
  <FormItem label='文本'>
    <Input
      placeholder='在失焦时执行'
      formatter={val => val.replace(/\D/g, '')}
      formatTrigger='onBlur'
    />
  </FormItem>
</CellGroup>;
```

### 高度自适应

对于 `textarea`，可以通过 `autoSize` 属性设置高度自适应。

demo|textarea

```tsx
<FormItem label='留言'>
  <Textarea placeholder='请留言' autoSize={{ minRows: 4 }} />
</FormItem>;
```

### 显示字数统计

设置 `maxLength` 和 `showWordLimit` 属性后会在底部显示字数统计。

demo|maxLength

```tsx
<FormItem label='留言'>
  <Textarea placeholder='请留言' maxLength={100} showWorldLimit />
</FormItem>;
```

### 输入框内容对齐

通过 `inputAlign` 属性可以设置输入框内容的对齐方式。

demo|inputAlign

```tsx
<FormItem label='留言'>
  <Input placeholder='请输入文本' inputAlign='right' clearable />
</FormItem>;
```

## API

### Input Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value | 当前输入的值 | `string` |  |
| defaultValue | 默认输入的值 | `string` |  |
| maxLength | 输入的最大字符数 | `number` |  |
| placeholder | 输入框占位提示文字 | `string` |  |
| border | 是否显示内边框 | `boolean` |  |
| disabled | 是否禁用输入框 | `boolean` |  |
| readonly | 是否为只读状态，只读状态下无法输入内容 | `boolean` |  |
| formatter | 输入内容格式化函数 | `(value: string) => string` |  |
| formatTrigger | 格式化函数触发的时机，可选值为 onBlur | `onBlur` \| `onChange` | `onChange` |
| showWorldLimit | 是否显示字数统计，需要设置 maxlength 属性 | `boolean` |  |
| clearIcon | 清楚图标 | `React.ReactNode` |  |
| clearable | 是否启用清除图标，点击清除图标后会清空输入框 | `boolean` |  |
| clearTrigger | 显示清除图标的时机，always 表示输入框不为空时展示，focus 表示输入框聚焦且不为空时展示 | `focus` \| `always` |  |
| prefix | 前缀 | `React.ReactNode` |  |
| suffix | 后缀 | `React.ReactNode` |  |
| addonBefore | 前置标签 | `React.ReactNode` |  |
| addonAfter | 后置标签 | `React.ReactNode` |  |
| inputAlign | 输入框对齐方式，可选值为 center right | `InputAlign` | `left` |
| status | 输入框的状态 | `error` |  |
| classNames | 给各个 slot 自定义类名 | `Record<InputNSlot, string>` |  |
| type | 输入框类型, 支持原生 input 标签 | `InputType` |  |

### Input Events

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| onChange | 输入值变动时触发 | `(value: string) => void` |
| onFocus | 聚焦时触发 | `(evt: React.FormEvent<HTMLInputElement>) => void` |
| onBlur | 失去焦点时触发 | `(evt: React.FormEvent<HTMLInputElement>) => void` |
| onClear | 点击清除图标时触发 | `() => void` |

### Textarea Props

| 参数     | 说明         | 类型               | 默认值 |
| -------- | ------------ | ------------------ | ------ |
| autoSize | 自动设置大小 | `TextareaAutoSize` | -      |

其它属性和事件 见上面的 [Input Props](#InputProps) 和 [Input Events](#InputEvents)

### Types

#### InputNSlot

```ts
type InputNSlot =
  | 'root'
  | 'clearIcon'
  | 'addonAfter'
  | 'addonBefore'
  | 'suffix'
  | 'counter'
  | 'input'
  | 'prefix';
```

#### InputType

```ts
type InputType = 'email' | 'number' | 'password' | 'tel' | 'text' | 'digit';
```

#### TextareaAutoSize

```ts
type TextareaAutoSize =
  | boolean
  | {
    minRows?: number;
    maxRows?: number;
  };
```

#### InputRef

```ts
type InputRef = {
  focus: () => void;
  blur: () => void;
};
```

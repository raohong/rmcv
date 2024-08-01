import { useUpdateEffect } from '@rmc-vant/hooks';
import React, { useState } from 'react';
import type { PickerProps, PickerValue } from 'rmc-vant';
import {
  Cell,
  CellGroup,
  Checkbox,
  CheckboxGroup,
  Form,
  FormItem,
  Picker,
  Radio,
  RadioGroup,
  Rate,
  Slider,
  Switch,
} from 'rmc-vant';

const ConfirmPicker = <T extends PickerValue>({
  onConfirm,
  confirmDefaultValue,
  defaultValue,
  value,
  onChange,
  placeholder,
  getText,
  ...props
}: PickerProps<T> & {
  confirmDefaultValue?: T[];
  placeholder?: string;
  getText?: (value: T[]) => React.ReactNode;
}) => {
  const [internalValue, setValue] = useState<T[] | undefined>(value || defaultValue);
  const [lastValue, setLastValue] = useState<T[] | undefined>();

  useUpdateEffect(() => {
    setValue(value);
  }, [value]);

  const text = value ? getText?.(value) : value;

  return (
    <Picker<T>
      {...props}
      value={internalValue}
      onChange={setValue}
      onConfirm={(val) => {
        onConfirm?.(val || confirmDefaultValue);
      }}
      onOpen={() => {
        setLastValue(internalValue);
      }}
      onCancel={() => {
        onConfirm?.(lastValue ? [...lastValue] : lastValue);
        setLastValue(undefined);
      }}
      popup
    >
      <Cell
        sx={{ padding: 0, flex: 1, justifyContent: 'flex-end' }}
        border={false}
        title={value ? text : <span>{placeholder}</span>}
        isLink
      />
    </Picker>
  );
};

export default () => {
  const areaData = [
    {
      value: '浙江',
      children: [
        {
          value: '杭州',
          children: [{ value: '西湖区' }, { value: '余杭区' }],
        },
        {
          value: '温州',
          children: [{ value: '鹿城区' }, { value: '瓯海区' }],
        },
      ],
    },
    {
      value: '福建',
      children: [
        {
          value: '福州',
          children: [{ value: '鼓楼区' }, { value: '台江区' }],
        },
        {
          value: '厦门',
          children: [{ value: '思明区' }, { value: '海沧区' }],
        },
      ],
    },
  ];
  const cityData = [['杭州', '宁波', '温州', '绍兴', '湖州', '嘉兴', '金华']];
  return (
    <Form name='items' className='rmcv-forms'>
      <CellGroup sx={{ margin: '0 -16px' }} inset>
        <FormItem name='switch' label='开关'>
          <Switch size={20} />
        </FormItem>
        <FormItem name='checkbox' label='复选框'>
          <Checkbox shape='square' />
        </FormItem>
        <FormItem name='checkboxGroup' label='复选框组' initialValue='1'>
          <CheckboxGroup shape='square' direction='horizontal'>
            <Checkbox value='1'>复选框1</Checkbox>
            <Checkbox value='2'>复选框2</Checkbox>
          </CheckboxGroup>
        </FormItem>
        <FormItem name='radio' label='单选框' initialValue='1'>
          <RadioGroup direction='horizontal'>
            <Radio value='1'>单选框1</Radio>
            <Radio value='2'>单选框2</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem name='rate' label='评分'>
          <Rate />
        </FormItem>
        <FormItem name='slider' label='滑块' initialValue={50}>
          <Slider style={{ flex: 1 }} />
        </FormItem>
        <FormItem name='city' label='选择城市' trigger='onConfirm'>
          <ConfirmPicker<string>
            columns={cityData}
            confirmDefaultValue={[cityData[0][0]]}
            placeholder='选择城市'
            getText={val => val[0]}
          />
        </FormItem>
        <FormItem name='area' label='地区选择' trigger='onConfirm'>
          <ConfirmPicker
            columns={areaData}
            confirmDefaultValue={[
              areaData[0].value,
              areaData[0].children[0].value,
              areaData[0].children[0].children[0].value,
            ]}
            getText={val => val.join('/')}
            placeholder='选择地区'
          />
        </FormItem>
      </CellGroup>
    </Form>
  );
};

import { fireEvent, render, screen } from '@testing-library/react';
import React, { useState } from 'react';
import { Radio, RadioGroup } from '../';
import { getPrefixCls } from '../../_utils';

const testId = 'radio-group';

test('render correctly', () => {
  const tree = render(
    <RadioGroup>
      <Radio value={1}>1</Radio>
      <Radio value={2}> 2</Radio>
    </RadioGroup>,
  );

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with direction', () => {
  render(<RadioGroup direction="horizontal" data-testid={testId}></RadioGroup>);

  expect(screen.getByTestId(testId)).toHaveClass(
    getPrefixCls('radio-group-horizontal'),
  );
});

test('render with defaultValue', () => {
  const com = render(
    <RadioGroup data-testid={testId} defaultValue="1">
      <Radio data-testid="id1" value="1">
        name1
      </Radio>
      <Radio value="2">name2</Radio>
    </RadioGroup>,
  );

  expect(screen.getByTestId('id1')).toHaveClass(getPrefixCls('radio-checked'));
});

test('render with value', () => {
  const App = () => {
    const [value, setValue] = useState<string>();

    return (
      <RadioGroup onChange={setValue} data-testid={testId} value={value}>
        <Radio data-testid="id1" value="1">
          name1
        </Radio>
        <Radio data-testid="id2" value="2">
          name2
        </Radio>
      </RadioGroup>
    );
  };

  render(<App />);

  fireEvent.click(screen.getByTestId('id2'));
  expect(screen.getByTestId('id2')).toHaveClass(getPrefixCls('radio-checked'));
});

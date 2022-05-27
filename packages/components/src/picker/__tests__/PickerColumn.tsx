import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PickerColumn from '../PickerColumn';
import { getPrefixCls } from '../../_utils';
import { sleep } from '../../_test-utils';

const optionHeight = 44;
const num = 6;
const options = ['A', 'B', 'C'].map((item) => ({ value: item }));
const totalHeight = num * optionHeight;

const testId = 'picker-column';

test('render correctly', () => {
  const tree = render(
    <PickerColumn
      columnIndex={0}
      totalHeight={totalHeight}
      optionHeight={44}
      options={options}
    />,
  );

  expect(tree.asFragment()).toMatchSnapshot();
});

test('trigger onChange by click', async () => {
  const onChange = jest.fn();
  const com = render(
    <PickerColumn
      columnIndex={0}
      totalHeight={totalHeight}
      optionHeight={44}
      options={options}
      selectedIndex={0}
      onChange={onChange}
      data-testid={testId}
    />,
  );

  const option = screen
    .getByTestId(testId)
    .querySelector(`.${getPrefixCls('picker-option')}:nth-child(2)`);

  userEvent.click(option!);

  await sleep(1000);

  expect(onChange).toBeCalled();

  com.rerender(
    <PickerColumn
      columnIndex={0}
      totalHeight={totalHeight}
      optionHeight={44}
      options={options}
      selectedIndex={0}
      onChange={onChange}
      data-testid={testId}
      immediateChange
    />,
  );

  userEvent.click(option!);

  expect(onChange).toBeCalled();
});

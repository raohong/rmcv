import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { sleep } from '../../_test-utils';
import PickerColumn from '../PickerColumn';
import { pickerClassNames } from '../classNames';
import type { PickerColumnProps } from '../interface';

const optionHeight = 44;
const num = 6;
const options = ['A', 'B', 'C'].map(item => ({ value: item }));
const totalHeight = num * optionHeight;

const testId = 'picker-column';

const states = {
  slotClassNames: pickerClassNames,
  componentState: {
    loading: false,
    popup: false,
    toolbarPosition: 'top',
  },
} satisfies Pick<PickerColumnProps, 'componentState' | 'slotClassNames'>;

it('render correctly', () => {
  const tree = render(
    <PickerColumn
      columnIndex={0}
      totalHeight={totalHeight}
      optionHeight={44}
      options={options}
      {...states}
    />,
  );

  expect(tree.asFragment()).toMatchSnapshot();
});

it('trigger onChange by click', async () => {
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
      {...states}
    />,
  );

  const option = screen
    .getByTestId(testId)
    .querySelector(`.${pickerClassNames.option}:nth-child(2)`);

  await userEvent.click(option!);

  await sleep(1000);

  expect(onChange).toHaveBeenCalled();

  com.rerender(
    <PickerColumn
      columnIndex={0}
      totalHeight={totalHeight}
      optionHeight={44}
      options={options}
      selectedIndex={0}
      onChange={onChange}
      data-testid={testId}
      {...states}
      immediateChange
    />,
  );

  await userEvent.click(option!);

  expect(onChange).toHaveBeenCalled();
});

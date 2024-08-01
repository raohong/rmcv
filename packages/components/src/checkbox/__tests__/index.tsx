import { fireEvent, render, screen } from '@testing-library/react';
import { useState } from 'react';
import {
  Checkbox,
  CheckboxGroup,
  checkboxClassNames,
  checkboxGroupClassNames,
} from '..';

const testId = 'checkbox-group';

it('render correctly', () => {
  const tree = render(
    <CheckboxGroup>
      <Checkbox value={1}>1</Checkbox>
      <Checkbox value={2}> 2</Checkbox>
    </CheckboxGroup>,
  );

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with direction', () => {
  render(
    <CheckboxGroup direction='horizontal' data-testid={testId}></CheckboxGroup>,
  );

  expect(screen.getByTestId(testId)).toHaveClass(checkboxGroupClassNames.horizontal);
});

it('render with defaultValue', () => {
  render(
    <CheckboxGroup data-testid={testId} defaultValue={['1']}>
      <Checkbox data-testid='id1' value='1'>
        name1
      </Checkbox>
      <Checkbox value='2'>name2</Checkbox>
    </CheckboxGroup>,
  );

  expect(screen.getByTestId('id1')).toHaveClass(checkboxClassNames.checked);
});

it('render with value', () => {
  const App = () => {
    const [value, setValue] = useState<string[]>();

    return (
      <CheckboxGroup onChange={setValue} data-testid={testId} value={value}>
        <Checkbox data-testid='id1' value='1'>
          name1
        </Checkbox>
        <Checkbox data-testid='id2' value='2'>
          name2
        </Checkbox>
      </CheckboxGroup>
    );
  };

  render(<App />);

  fireEvent.click(screen.getByTestId('id2'));
  expect(screen.getByTestId('id2')).toHaveClass(checkboxClassNames.checked);
  fireEvent.click(screen.getByTestId('id1'));
  expect(screen.getByTestId('id1')).toHaveClass(checkboxClassNames.checked);
  fireEvent.click(screen.getByTestId('id1'));
  expect(screen.getByTestId('id1')).not.toHaveClass(checkboxClassNames.checked);
});

import { render } from '@testing-library/react';
import { Form } from '..';

it('snapshot', () => {
  const com = render(<Form />);

  expect(com.asFragment()).toMatchSnapshot();
});

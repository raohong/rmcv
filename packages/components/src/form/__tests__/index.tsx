import React from 'react';
import { render } from '@testing-library/react';
import Form from '../Form';

test('snapshot', () => {
  const com = render(<Form />);

  expect(com.asFragment()).toMatchSnapshot();
});

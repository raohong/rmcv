import { render, screen } from '@testing-library/react';
import React from 'react';
import { getPrefixCls } from '../../_utils';
import Col from '../Col';
import Row from '../Row';

test('render correctly', () => {
  const tree = render(<Row />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with gutter', () => {
  render(<Row data-testid="gutter" gutter={8} />);

  expect(screen.getByTestId('gutter')).toHaveStyle({
    'row-gap': '8px',
    'margin-left': '-4px',
    'margin-right': '-4px',
  });
});

test('render with col', () => {
  render(
    <Row>
      <Col data-testid="col" />
    </Row>,
  );

  expect(screen.queryByTestId('col')).toBeInTheDocument();
});

test('render with component', () => {
  render(<Row data-testid="p" component="p" />);

  expect(screen.getByTestId('p').tagName).toBe('P');
});

test(`render with align `, () => {
  render(<Row data-testid="align" align="top" />);

  expect(screen.getByTestId('align')).toHaveClass(getPrefixCls(`row-align-top`));
});

test(`render with justify `, () => {
  render(<Row data-testid="justify" justify="center" />);

  expect(screen.getByTestId('justify')).toHaveClass(
    getPrefixCls(`row-justify-center`),
  );
});

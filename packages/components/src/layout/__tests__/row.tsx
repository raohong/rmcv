import React from 'react';
import { render, screen } from '@testing-library/react';
import { RowProps } from '../interface';
import { getPrefixCls } from '../../_utils';
import { Row, Col } from '..';

test('render correctly', () => {
  const tree = render(<Row />);

  expect(tree.asFragment()).toMatchSnapshot();
});

test('render with gutter', () => {
  render(<Row data-testid="gutter" gutter={8} />);

  expect(screen.getByTestId('gutter')).toHaveStyle({
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

test('render with tag', () => {
  render(<Row data-testid="p" component="p" />);

  expect(screen.getByTestId('p').tagName).toBe('P');
});

const aligns = ['top', 'middle', 'bottom'] as RowProps['align'][];

aligns.forEach((align) => {
  test(`render with align: ${align}`, () => {
    render(<Row data-testid="align" align={align} />);

    expect(screen.getByTestId('align')).toHaveClass(
      getPrefixCls(`row-align-${align}`),
    );
  });
});

const justifies = [
  'around',
  'between',
  'center',
  'end',
] as RowProps['justify'][];

justifies.forEach((justify) => {
  test(`render with justify: ${justify}`, () => {
    render(<Row data-testid="justify" justify={justify} />);

    expect(screen.getByTestId('justify')).toHaveClass(
      getPrefixCls(`row-justify-${justify}`),
    );
  });
});

test('render with Non-Col children', () => {
  render(
    <Row>
      <Col />
      <span data-testid="extra" />
    </Row>,
  );

  expect(screen.queryByTestId('extra')).toBeNull();
});

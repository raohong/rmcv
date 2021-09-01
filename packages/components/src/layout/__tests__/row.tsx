import React from 'react';
import { render, screen } from '@testing-library/react';
import { RowProps } from '../Row';
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
  const dom = render(
    <Row>
      <Col data-testid="col"></Col>
    </Row>,
  );

  expect(dom.container).toContainElement(screen.queryByTestId('col'));
});

test('render with tag', () => {
  render(<Row data-testid="p" tag="p"></Row>);

  expect(screen.getByTestId('p').tagName).toBe('P');
});

const aligns = ['top', 'middle', 'bottom'] as RowProps['align'][];

aligns.forEach((align) => {
  test(`render with align: ${align}`, () => {
    render(<Row data-testid="align" align={align}></Row>);

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
    render(<Row data-testid="justify" justify={justify}></Row>);

    expect(screen.getByTestId('justify')).toHaveClass(
      getPrefixCls(`row-justify-${justify}`),
    );
  });
});

test('render with Non-Col children  ', () => {
  render(
    <Row>
      <Col></Col>
      <span data-testid="extra"></span>
    </Row>,
  );

  expect(screen.queryByTestId('extra')).toBeNull();
});

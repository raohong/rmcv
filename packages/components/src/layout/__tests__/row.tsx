import { render, screen } from '@testing-library/react';
import { Col, Row } from '..';

it('render correctly', () => {
  const tree = render(<Row />);

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with gutter', () => {
  render(<Row data-testid='gutter' gutter={8} />);

  expect(screen.getByTestId('gutter')).toHaveStyleRule('gap', '8px');
});

it('render with col', () => {
  render(
    <Row>
      <Col data-testid='col' />
    </Row>,
  );

  expect(screen.queryByTestId('col')).toBeInTheDocument();
});

it('render with component', () => {
  render(<Row data-testid='p' component='p' />);

  expect(screen.getByTestId('p').tagName).toBe('P');
});

it(`render with align`, () => {
  render(<Row data-testid='align' align='top' />);

  expect(screen.getByTestId('align')).toHaveStyleRule('align-items', 'start');
});

it(`render with justify `, () => {
  render(<Row data-testid='justify' justify='center' />);

  expect(screen.getByTestId('justify')).toHaveStyleRule('justify-content', 'center');
});

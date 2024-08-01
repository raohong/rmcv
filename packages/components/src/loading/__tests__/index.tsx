import { loadingClassNames } from '..';
import { render, screen } from '../../_test-utils';
import { Loading } from '../../loading';

it('render correctly', () => {
  const tree = render(<Loading />);

  expect(tree.asFragment()).toMatchSnapshot();
});

it('render with type', () => {
  render(<Loading type='circular' />);

  const com = screen.getByRole('alert');

  expect(com.tagName).toBe('SPAN');
  expect(com).toHaveClass(loadingClassNames.circular);
});

it('render with className', () => {
  const name = 'test';

  render(<Loading className={name} />);

  expect(screen.getByRole('alert')).toHaveClass(name);
});

it('render with size and color', () => {
  render(<Loading size={40} color='red' />);

  const spinnerContainer = screen.getByRole('alert');

  expect(spinnerContainer).toHaveStyleRule('font-size', '40px');
  expect(spinnerContainer).toHaveStyleRule('color', 'red');
});

it('render with children', () => {
  const text = 'loading...';

  render(<Loading>{text}</Loading>);

  expect(screen.getByRole('alert')).toHaveTextContent(text);
});

it('render with textColor and empty child', () => {
  render(<Loading textColor='green' />);

  const dom = screen.getByRole('alert');

  expect(dom).not.toContainElement(dom.querySelector(`.${loadingClassNames.text}`));
});

it('render with textColor and textSize', async () => {
  const text = 'loading...';

  render(
    <Loading textSize={10} textColor='green'>
      {text}
    </Loading>,
  );

  const textElem = await screen.findByText('loading...');

  expect(textElem).toBeInTheDocument();

  expect(textElem).toHaveStyleRule('font-size', '10px');
  expect(textElem).toHaveStyleRule('color', 'green');
});

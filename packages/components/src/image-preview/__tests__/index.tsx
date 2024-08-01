import { render } from '@testing-library/react';
import { ImagePreview } from '../';

const list = [
  'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
  'https://cdn.jsdelivr.net/npm/@vant/assets/apple-3.jpeg',
  'https://cdn.jsdelivr.net/npm/@vant/assets/apple-4.jpeg',
];

it('render correctly', () => {
  const tree = render(<ImagePreview images={list} lazyRender={false} open />);
  expect(tree.asFragment()).toMatchSnapshot();
});

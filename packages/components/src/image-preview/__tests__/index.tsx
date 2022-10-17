import { render } from '@testing-library/react';
import React from 'react';
import ImagePreview, { ImagePreviewComponent } from '../';

const list = [
  'https://cdn.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
  'https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
  'https://cdn.jsdelivr.net/npm/@vant/assets/apple-3.jpeg',
  'https://cdn.jsdelivr.net/npm/@vant/assets/apple-4.jpeg',
];

it('snapshot', () => {
  const tree = render(
    <ImagePreviewComponent images={list} lazyRender={false} visible />,
  );
  expect(tree.asFragment()).toMatchSnapshot();
});

it('impertive call', () => {
  const instance = ImagePreview(list);

  expect(instance.current?.swipeTo).toBeDefined();
});

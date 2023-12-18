import React from 'react';
import ReactDOM, { render, unmountComponentAtNode } from 'react-dom';
import ReactDOMClient from 'react-dom/client';

type Root = {
  unmount: () => void;
  render: (children: React.ReactNode) => void;
};

const isReact18 = ReactDOM.version.includes('18');
let createRoot: (container: Element | DocumentFragment) => Root;

if (isReact18) {
  createRoot = ReactDOMClient.createRoot;
} else {
  // @ts-ignore
  createRoot = (elem: React.ReactNode, container: Element | DocumentFragment) => {
    return {
      render() {
        // @ts-ignore
        render(elem, container);
      },
      unmount() {
        unmountComponentAtNode(container);
      },
    };
  };
}

export const reactRender = (
  children: React.ReactNode,
  container: Element | DocumentFragment,
) => {
  const root = createRoot(container);

  root.render(children);

  return root.unmount;
};

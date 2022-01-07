import React from 'react';
import { mount } from '@cypress/react';
import '@testing-library/cypress';
import ListTest from './ListTest';
import { getPrefixCls } from '../../_utils';

const testId = 'list';
const length = 20;
const offset = 200;

describe('List - controlled', () => {
  const HEIGHT = Cypress.config('viewportHeight');

  it('render with controlled loadingStatus', () => {
    mount(
      <div style={{ height: HEIGHT * 0.5, overflow: 'auto' }}>
        <ListTest
          style={{ height: HEIGHT * 0.5 }}
          length={length}
          data-testid={testId}
          offset={offset}
          controlled
        />
      </div>,
    );

    cy.get(`.${getPrefixCls('list-loading-text')}`).should('not.exist');
  });
});

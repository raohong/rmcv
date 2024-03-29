import { mount } from '@cypress/react';
import '@testing-library/cypress';
import React from 'react';
import { getPrefixCls } from '../../_utils';
import ListTest from './ListTest';

const testId = 'list';
const length = 20;
const offset = 200;

describe('List', () => {
  const HEIGHT = Cypress.config('viewportHeight');

  it('should perform the correct process', () => {
    let error = false;

    mount(
      <ListTest
        length={length}
        shouldThrowError={() => error}
        data-testid={testId}
        offset={offset}
      />,
    );

    // immediateCheck, but container height is 0
    cy.get('[data-list-item]', { timeout: 0 }).should('not.exist');
    cy.findByTestId(testId).then((container) => container.height(HEIGHT));

    // trigger scroll event
    cy.findByTestId(testId).scrollIntoView();
    cy.get('[data-list-item]').should('have.length', length);

    // scroll to offset boundary position
    cy.findByTestId(testId)
      .then((target) => target.get(0).scrollHeight - offset)
      .then((pos) => cy.findByTestId(testId).scrollIntoView({ offset: pos }));

    // trigger onLoad
    cy.get('[data-list-item]').should('have.length', length * 2);

    // throw error
    cy.then(() => {
      error = true;
    });
    cy.get('[data-list-item]:last-child').scrollIntoView();
    cy.get(`.${getPrefixCls('list-error-text')}`).should('exist');

    // reload data
    cy.then(() => {
      error = false;
    });
    cy.get(`.${getPrefixCls('list-error-text')}`).click();
    cy.get('[data-list-item]').should('have.length', length * 3);
  });
});

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('selectFromAutocomplete', (selector, value) => {
    cy.get(selector).type(value).type('{enter}');
  });

  Cypress.Commands.add('editReturnTime', () => {
    cy.get('.journey__footer button.btn--sec span').click();
  });

  Cypress.Commands.add('editJourney', (editedOrigin) => {
    cy.visit(`${baseUrl}/journeys`);
    cy.get('.timeline-dates a.btn--link').click();
    cy.get('#AutocompleteOrigin').clear().type(editedOrigin);
    cy.get('.journey__footer button').click();
    cy.get('#ShareAsPassenger').click();
    cy.get('.journey__footer button.btn--sec').click();
    cy.get('.journey__footer button span').click();
  });

  Cypress.Commands.add('deleteJourney', () => {
    cy.visit(`${baseUrl}/journeys`);
    cy.get('.container-height .btn--pri').click();
    cy.get('.container-height .btn--danger').click();
    cy.get('.v-toaster').should('be.visible');
  });
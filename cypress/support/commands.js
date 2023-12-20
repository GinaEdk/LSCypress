Cypress.Commands.add('userLogin', () => {
  cy.fixture('test-data').then((data) => {
    const username = data.username;
    const password = data.password;
    const baseUrl = data.baseUrl;
  cy.visit(baseUrl);
  cy.contains('Accept All Cookies').click();
  cy.contains("Login").click();
  cy.get('#email').type(username);
  cy.get('#ls-login > form > div:nth-child(4) > button').click();
  cy.get('#password').type(password);
  cy.get('#ls-login > form > div:nth-child(5) > button').click();
  cy.url().should('include', "/account");
});
});


Cypress.Commands.add('selectFromAutocomplete', (selector, value) => {
    cy.get(selector).type(value).type('{enter}');
  });

Cypress.Commands.add('journeySearch', () => {
  cy.get('#liftshare > section > div > div > div.d-flex.align-items-center > div.d-flex.flex-column > div > div > div.flex.justify-content-end.p-rel.z-6 > div > svg').click();
  cy.get('#liftshare > header > div > div:nth-child(3) > div.d-ib.p-rel.mr-4.right.xs-hidden.sm-hidden.md-hidden > span > a').click();
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
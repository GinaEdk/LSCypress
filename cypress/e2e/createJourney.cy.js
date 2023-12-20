describe('Create journey', () => {
  it('User creates their journey once logged in', () => {
    cy.get('#liftshare > section > div > div > div.d-flex.align-items-center > div.d-flex.flex-column > div > div > div.flex.justify-content-end.p-rel.z-6 > div > svg').click()
    cy.get('#liftshare > section > section > div.timeline__action.timeline__action--main.z-depth-0 > div > div.col-md-9 > div > a').click()
    cy.get('#AutocompleteOrigin').type('NR70GH')
    cy.get('#liftshare > div.journey > div.journey__left.bg-white > div > div > div > div.journey__section.container-fluid > div:nth-child(3) > ul > li').click()
    cy.get("#AutocompleteDestination").type('B437RT', 'Cypress.io{enter}')
    cy.get('#liftshare > div.journey > div.journey__left.bg-white > div > div > div > div.journey__section.container-fluid > div:nth-child(4) > ul > li').click()
    cy.get('#liftshare > div.journey > div.journey__left.bg-white > div > div > div > div.journey__footer.z-depth-2.bg-white.container-fluid > div > div > button').click()
    cy.get('#ShareAsDriver').click()
    cy.get('#liftshare > div.journey > div.journey__left.bg-white > div > div > div > div.journey__footer.z-depth-2.bg-white.container-fluid > div > div > button.btn.right.btn--sec').click()
    cy.get('#liftshare > div.journey > div.journey__left.bg-white > div > div > div > div.journey__footer.z-depth-2.bg-white.container-fluid > div > div > div > button > span').click()
  })})

  // need to add in some assertions
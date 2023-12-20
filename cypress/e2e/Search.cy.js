describe('Journey Search', () => {
  it('User can search for a journey', () => {
    cy.journeySearch();
    cy.selectFromAutocomplete('#Autocompleteorigin', 'WS99DY');
    cy.get('#liftshare > header > div > div:nth-child(3) > div.d-ib.p-rel.mr-4.right.xs-hidden.sm-hidden.md-hidden > span > aside > div > form > div:nth-child(2) > ul > li').click();
    cy.selectFromAutocomplete('#Autocompletedestination', 'S14GG');
    //Check search 
    cy.url().should('include', 'travel-from')
    .should('include', 'ws9-9dy')
    .should('include', 's14gg');
  })
})
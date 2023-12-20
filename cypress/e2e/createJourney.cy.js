describe('Create journey', () => {
  it('User creates a journey once logged in via /account', () => {
    cy.get('#liftshare > section > div > div > div.d-flex.align-items-center > div.d-flex.flex-column > div > div > div.flex.justify-content-end.p-rel.z-6 > div > svg').click()
    cy.get('#liftshare > section > section > div.timeline__action.timeline__action--main.z-depth-0 > div > div.col-md-9 > div > a').click()
    cy.selectFromAutocomplete('#AutocompleteOrigin', 'NR70GH');
    cy.get('#liftshare div.journey__section.container-fluid div:nth-child(3) ul li').click();
    cy.selectFromAutocomplete('#AutocompleteDestination', 'B437RT');
    cy.get('#liftshare div.journey__section.container-fluid div:nth-child(4) ul li').click();
    cy.get('.journey__footer button.btn--sec').click();
   //Update Journey Details
    cy.get('#ShareAsDriver').click()
    cy.get('.journey__footer button.btn--sec').click();
    //Edit return time of Journey
    cy.get('#liftshare > div.journey > div.journey__left.bg-white > div > div > div > div.journey__section.container-fluid > div:nth-child(2) > div.row.mb-4 > div:nth-child(2) > div > input').click()
    cy.get('#liftshare > div.journey > div.journey__left.bg-white > div > div > div > div.journey__section.container-fluid > div:nth-child(2) > div.row.mb-4 > div:nth-child(2) > div > div > div.vdatetime-popup > div.vdatetime-popup__body > div > div.vdatetime-time-picker__list.vdatetime-time-picker__list--hours > div:nth-child(20)').click()
    cy.get('#liftshare > div.journey > div.journey__left.bg-white > div > div > div > div.journey__section.container-fluid > div:nth-child(2) > div.row.mb-4 > div:nth-child(2) > div > div > div.vdatetime-popup > div.vdatetime-popup__actions > div.vdatetime-popup__actions__button.vdatetime-popup__actions__button--confirm').click()
    //Below step needs cleaning up...tidier selector broke the test so needs configuring
    cy.get('#liftshare > div.journey > div.journey__left.bg-white > div > div > div > div.journey__footer.z-depth-2.bg-white.container-fluid > div > div > div > button > span').click();
    //Check journey has been added to User's Journeys
    cy.visit('https://liftshare.com/uk/journeys')
    cy.get('#liftshare > div.container.container-height.my-5 > div > main > div > div > div.py-4.px-4.px-md-5.bg-body.bl-3.b-pri > a.btn.btn--pri.md-w-full.my-2.mr-2.bold').should('be.visible');
  })})

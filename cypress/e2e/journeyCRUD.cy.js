 describe('Journey creation, edit and delete', () => {
  // Creation
  it('Test Case 1: Creating a Journey', () => {
    cy.get('.flex > .d-flex').click()
    cy.get('.container-fluid > :nth-child(3) > .btn--pri').click()
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
  });

  // Edit
  it('Test Case 2: Editing existing Journey', () => {
       cy.get('#liftshare > section > div > div > div.d-flex.align-items-center > div.d-flex.flex-column > div > div > div.flex.justify-content-end.p-rel.z-6 > div > svg').click();
    cy.get('#liftshare > section > section > div:nth-child(4) > div > div > div.timeline-datesandsocials > div.timeline-dates > a.inline-block.btn.btn--link.under.bold.md-w-full').click();
    // Edit journey details
    cy.get('#AutocompleteOrigin').clear().type('NR31HP');
    cy.get('#liftshare > div.journey > div.journey__left.bg-white > div > div > div > div.journey__section.container-fluid > div:nth-child(3) > ul > li').click();
    cy.get('#liftshare > div.journey > div.journey__left.bg-white > div > div > div > div.journey__footer.z-depth-2.bg-white.container-fluid > div > div > button').click();
    // Share as a passenger instead of Driver
    cy.get('#ShareAsPassenger').click();
    cy.get('#liftshare > div.journey > div.journey__left.bg-white > div > div > div > div.journey__footer.z-depth-2.bg-white.container-fluid > div > div > button.btn.right.btn--sec').click();
    cy.get('#liftshare > div.journey > div.journey__left.bg-white > div > div > div > div.journey__footer.z-depth-2.bg-white.container-fluid > div > div > div > button > span').click();
    //Check edit
    cy.wait(2000)
    cy.visit('https://liftshare.com/uk/journeys')
    //Assertion shouldn't be hard coded but can change this 
    cy.get('#liftshare > div.container.container-height.my-5 > div > main > div > div > div:nth-child(1) > div > div.col-lg-5 > div > div.flex.justify-content-between > p.route__start').should('contain', 'Waggon and Horses');
  });

  // Deletion
  it('Test Case 3: Deleting Journey', () => {
    cy.visit('https://liftshare.com/uk/journeys')
    cy.get('#liftshare > div.container.container-height.my-5 > div > main > div > div > div.py-4.px-4.px-md-5.bg-body.bl-3.b-pri > span > a').click()
    cy.get('#liftshare > div.container.container-height.my-5 > div > main > div > div > div.py-4.px-4.px-md-5.bg-body.bl-3.b-pri > span > aside > div > button.btn.btn--danger.mr-3.mb-2').click()
    cy.get('body > div.v-toaster > span > div').should('be.visible');
  });

  // ... more tests to be added here
});
describe('Edit Journey', () => {
  it('User edits their journey', () => {
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
});

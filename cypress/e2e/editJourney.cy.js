describe('Edit Journey', () => {
  it('User edits their journey', () => {
    cy.get('#liftshare > section > div > div > div.d-flex.align-items-center > div.d-flex.flex-column > div > div > div.flex.justify-content-end.p-rel.z-6 > div > svg').click()
    cy.get('#liftshare > section > section > div:nth-child(4) > div > div > div.timeline-datesandsocials > div.timeline-dates > a.inline-block.btn.btn--link.under.bold.md-w-full').click()
    cy.get('#AutocompleteOrigin').clear().type('NR31HP')
    cy.get('#liftshare > div.journey > div.journey__left.bg-white > div > div > div > div.journey__section.container-fluid > div:nth-child(3) > ul > li').click()
    cy.get('#liftshare > div.journey > div.journey__left.bg-white > div > div > div > div.journey__footer.z-depth-2.bg-white.container-fluid > div > div > button').click()
    cy.get('#ShareAsPassenger').click()
    cy.get('#liftshare > div.journey > div.journey__left.bg-white > div > div > div > div.journey__footer.z-depth-2.bg-white.container-fluid > div > div > button.btn.right.btn--sec').click()
    cy.get('#liftshare > div.journey > div.journey__left.bg-white > div > div > div > div.journey__footer.z-depth-2.bg-white.container-fluid > div > div > div > button > span').click()
   // need an assertion cy.contains('#liftshare > div.results > div.results__inner > div.results__left.bg-body.z-depth-1 > div.results__matches.p-rel.mt-4 > div.row.px-3 > div.col.text-right > div > span')
  })
})
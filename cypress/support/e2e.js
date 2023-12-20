// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import { after } from 'lodash'
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

//get tests ready by going to URL and accepting the cookie message pop up and logging in
beforeEach(() => {
    cy.visit('https://liftshare.com/uk')
    cy.contains('Accept All Cookies').click()
    cy.contains("Login").click()
    cy.fixture('test-data').then((data) => {
      const username = data.username;
      const password = data.password;
    cy.get('#email').type(username)
    cy.get('#ls-login > form > div:nth-child(4) > button').click()
    cy.get('#password').type(password)
    cy.get('#ls-login > form > div:nth-child(5) > button').click()
    cy.url().should('include', "/account")
      })
})

//delete journeys

//after(() => {
  //cy.visit('https://liftshare.com/uk/journeys')
  //cy.get('#liftshare > div.container.container-height.my-5 > div > main > div > div > div.py-4.px-4.px-md-5.bg-body.bl-3.b-pri > span > a').click()
  //cy.get('#liftshare > div.container.container-height.my-5 > div > main > div > div > div.py-4.px-4.px-md-5.bg-body.bl-3.b-pri > span > aside > div > button.btn.btn--danger.mr-3.mb-2').click()
  //cy.get('body > div.v-toaster > span > div').should('be.visible');
 //   })


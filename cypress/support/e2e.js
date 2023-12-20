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
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

//get tests ready by going to URL and accepting the cookie message pop up and logging in
before(() => {
    cy.visit('https://liftshare.com/uk')
    cy.contains('Accept All Cookies').click()
   cy.contains("Login").click()
        cy.get('#email').type('g.edkins93@hotmail.com')
        cy.get('#ls-login > form > div:nth-child(4) > button').click()
        cy.get('#password').type('Pa55w0rd')
        cy.get('#ls-login > form > div:nth-child(5) > button').click()
        cy.url().should('include', "/account")
      })
    
  

import { after } from 'lodash'
import './commands'

//get tests ready by going to URL and accepting the cookie message pop up and logging in
beforeEach(() => {
  cy.userLogin();
      });


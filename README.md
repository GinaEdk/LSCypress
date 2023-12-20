# Lift Share Cypress (LSCypress)

## Description

Project for end to end testing of Liftshare.com/uk using Cypress

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed
- A web application to test

## Installation and Running Tests

1. Clone the repository:
git clone https://github.com/GinaEdk/LSCypress.git

2. Navigate to the project directory:
cd cypress-project

3. Install dependencies:
npm install

4. Running Tests
To run Cypress tests using Cypress Test Runner, use the following command:
npm test
To run tests in headless mode (e.g., for CI/CD), use:
npm run test:headless


## Folder Structure


cypress/e2e: Stores test files
cypress/support: Stores custom commands and other support files such as before & after test steps
cypress/fixtures: Stores test data files


## Tests

Before each test the script will login, this allows the tests to be focused on the scenario rather than having to repeat login steps in each spec file

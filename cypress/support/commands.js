// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => { 
    cy.visit('http://127.0.0.1:5500/cypress/index.html')
    cy.get('#exampleInputEmail1').type(email);
    cy.get('#exampleInputPassword1').type(password);
    cy.get('[type="checkbox"]').check()
    cy.get('[type="submit"]').click()
    cy.visit('http://127.0.0.1:5500/cypress/dashboard.html')
 })

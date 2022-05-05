/// <reference types="cypress"/>

describe('Dashboard', function () {
    it ('Table test', function () {
        cy.visit('http://127.0.0.1:5500/cypress/dashboard.html')
        cy.get('.table').contains('td', 'Mohan').should('be.visible')
        cy.get('.table > tbody > tr > td:nth-child(3)').contains('td', '@twitter').should('be.visible')
    });
})
/// <reference types="cypress"/>

describe('Custom Command', function () {
    it ('Login', function () {
        cy.login('mohan.perumal@merckgroup.com', 'Admin123!')
        cy.visit('http://127.0.0.1:5500/cypress/dashboard.html')
    });
})
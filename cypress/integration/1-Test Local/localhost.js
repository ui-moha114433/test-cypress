/// <reference types="cypress"/>

describe('Test my Local', function () {
    it ('Vist local', function () {
        cy.visit('http://127.0.0.1:5500/cypress/index.html')
    });
    it('Fill username', function(){
        cy.get('#exampleInputEmail1').type("mohan.perumal@merckgroup.com");
    })
    it('Fill password', function(){
        cy.get('#exampleInputPassword1').type("Admin123!");
    })
    it('Check me out', function(){
        cy.get('[type="checkbox"]').check()
    })
    it('Submit => Go to dashboard page', function(){
        cy.get('[type="submit"]').click()
        cy.visit('http://127.0.0.1:5500/cypress/dashboard.html')
    })
})
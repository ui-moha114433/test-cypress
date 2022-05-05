/// <reference types="cypress"/>

describe('Calling data from fixtures', function () {

    before(function(){
        cy.fixture('example').then(function(data){
            this.data = data;
        })
    })

    it ('Vist local', function () {
        cy.visit('http://127.0.0.1:5500/cypress/index.html')
        cy.get('#exampleInputEmail1').type(this.data.email);
        cy.get('#exampleInputPassword1').type(this.data.password);
        cy.get('[type="checkbox"]').check()
        cy.get('[type="submit"]').click()
        cy.visit('http://127.0.0.1:5500/cypress/dashboard.html')
    });
    it('Checking browser history', function(){
        cy.go(-1)
    })
})
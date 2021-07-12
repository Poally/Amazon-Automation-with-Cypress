/// <reference types="cypress" />

it("first test with google", function() {
    cy.visit('http://google.com')
    cy.get('.gLFyf').type('Elsa{enter}') 
    //{} for command action tab up down or enter
    
})
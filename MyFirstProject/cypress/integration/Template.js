/// <reference types="cypress" />
 
const cypress = require("cypress")
 
describe('Amazon Automation TestSuite', function(){
it("Get Lowest Price Goods on Amazon TestCase", function() {
    cy.visit(Cypress.env('prepare[url]'))
    // cy.visit('http://amazon.com')
    // cy.get('.gLFyf',{timeout:6000}).type('Elsa{enter}') 
    cy.get('#nav-logo-sprites').should('be.visible')
    cy.get('#glow-ingress-line2')
        .contains('Thailand',{matchCase: false})
        .should('have.class','nav-line-2 nav-progressive-content')
        .should('be.visible')
    cy.get('#nav-hamburger-menu').invoke('attr','role').should('equal','button')
 
 
 
    
 
    })
})


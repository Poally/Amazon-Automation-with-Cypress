/// <reference types="cypress" />
 
describe('Amazon Automation as TestSuite', function(){
it("Get Lowest Price Goods on Amazon as TestCase", function() {
    cy.visit('http://amazon.com')
    // cy.get('.gLFyf',{timeout:6000}).type('Elsa{enter}') 
    cy.get('#nav-logo-sprites').should('be.visible')
    cy.get('#glow-ingress-line2')
        .contains('Thailand',{matchCase: false})
        .should('have.class','nav-line-2 nav-progressive-content')
        .should('be.visible').as('headerCheck')
    cy.get('#nav-hamburger-menu').invoke('attr','role').should('equal','button')    
    cy.fixture('Goods1.json').then((Goods1) =>{
        //pull data from Goods1.json pass as Goods1 obj
        cy.get('#twotabsearchtextbox').type(Goods1.name).type('{enter}')
        cy.get('#a-autoid-0-announce').click()
        cy.wait(500)
        cy.xpath('//a[@class="a-dropdown-link" and contains(.,"Price: Low to High")]').click()
        cy.get('#low-price').scrollIntoView().type(Goods1.price_range[0]).type('{tab}').type(Goods1.price_range[1]).type('{enter}')
        cy.wait(500)

    })
    
 
 
    
 
    })
})


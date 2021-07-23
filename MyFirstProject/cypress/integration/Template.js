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
        cy.get('#low-price').scrollIntoView().type(Goods1.price_range[0])
        cy.get('#high-price').type(Goods1.price_range[1]).type('{enter}')
        cy.wait(500)
        
        for(var i=0; i < Goods1.topxgoods;i++){
            cy.xpath('//div[@class="s-main-slot s-result-list s-search-results sg-row"]//div[@data-component-type="s-search-result"][@data-index="'+String(i)+'"]').click()
            //dont forget to store and file with url
            cy.url().then(url => {
                const getUrl = url
                cy.log('Current URL is : '+getUrl)
            })
            //end of adding url
        }
    })
    
    })
})


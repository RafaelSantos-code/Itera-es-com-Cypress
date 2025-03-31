/// <reference types="Cypress"/>


describe('Assets', ()=>{
    it.only('Verificar se está visivel',()=>{
        cy.visit('/')
            .get('.header-logo')
        cy.get('.fa-user')
            .click()
        cy.get('.account_form > h3')
            .should('be.visible')
        cy.get('.account_form > h3')
            .should('contain', 'Login')      
        
    })

})
///<reference types="Cypress"/>

describe('Testando cadastro', ()=>{
   
   
    it('Nome', ()=>{
    cy.visit('https://automationpratice.com.br/register')
    
    cy.get('#user')
        .should('have.value', '') //should é usado para verificação de textos, elementos etc...
    cy.get('#email')
        .should('have.value', '')
    cy.get('#password')
        .should('have.value', '')
    })

    it('Campo de e-mail invalido',()=>{
        cy.visit('https://automationpratice.com.br/register')
            cy.get('#btnRegister')
                .should('have.value', '' )

    })







})
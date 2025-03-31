/// <reference types="Cypress"/>




describe('Get text', ()=>{
    it('Digitar em um campo',()=>{
        cy.visit('/')
            .get('.header-logo')
            cy.get('input[type="email"]').type('Rsouza.f46@gmail.com')
            // o type é usado para preencher campos
            
    })

    it('Click', ()=>{
        cy.visit('/')
            cy.get('.header-logo')
        // 1 clique normal
        //cy.get('.fa-user')
       //     .click() //o click, o proprio nome ja diz, ele clica em algo na tela, como nesse exemplo, clicou no icone de login
        
        // 2 clique 2x(double click)
        //cy.get('.fa-user')
           // .dblclick()
       
         // 3 clique com o botão direito
        //cy.get('.fa-user')
          //  .rightclick()

          .get('.header-logo')
          cy.get('input[type="email"]').type('Rsouza.f46@gmail.com{enter}')
          // é o mesmo type pra preencher campos, mas a diferença são os {}, dentro deles está enter, que ele simulará o enter do teclado, e enviara o email.
   })
   it('Select',()=>{
    cy.visit('/')
        .get('.header-logo')
        cy.get('.footer_one_widget')
            .contains('Checkout View One')
            .click()
        cy.get('#country')
            .select('usa')
    })

    it.only('checkbox', ()=>{ //nesse it (caso de teste), usamos o cypress para marcar um checkbox na pag
        cy.visit('/')
        cy.get('.header-logo')
        cy.get('.footer_one_widget')
            .contains('Checkout View One')
            .click()
        cy.get('#materialUnchecked')
            .check()
    })
})
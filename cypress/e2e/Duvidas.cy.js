describe('Get Elements', ()=>{
    //it são cenarios de teste, cada it é um cenário 
    it('Encontrar/selecionar elementos!',()=>{
        cy.visit('/')
        //get: encontrar ou selecionar elementos.
            .get('.header-logo') //class é pesquisado por um '.'| para eu renomear um id ou um class, eu posso usar o 'as', da seguinte forma: cy.get('#top_header') .as('aqui vai o renome')
        //contains: serve pra texto, pra ver se em tal pagina contem tal texto! 
            cy.get('#top_header')// id é pesquisado por uma '#'
                .contains('Login')// dentro de aspas fica o texto que eu quero pesquisar!
        //find(): é bem parecido com o contains, mas ao inves de pesquisar somente texto, podemos pesquisar elementos também!
            cy.get('#top_header')
                .find('.fa-user')
        //as()-alias: serve para criar apelidos(atalhos para grandes comandos)
        //cy.get('aqui vai o renome')
    } )

})
describe('Get text', ()=>{
    it('Obter texto de um elemento',()=>{
        cy.visit('/')
            .get('.header-logo')

        cy.get('.top_header_left > p')
            .then((Element)=> {
                console.log(Element.text())
            })
    })

})
describe('Visitor can search for recipe', () => {
  it("View search input and submit button", () => {
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/v1/search',
      response: 'fixture:query_response.json'
    })

    cy.get('#navbar').within(() => {
      cy.get('#nav-search').within(() => {
        cy.get('#search-input').type('Quiche')
        cy.get('#search-submit').click()
      })       
    })
    cy.get('[name="recipe-1"]').within(() => {
      cy.get('[name="recipe-title"]').should('contain', 'Quiche')
    })
  })

  describe('FoodHub visitor cannot search recipes if there are none', () => {
    xit('sees message for no recipes available', () => {
      cy.route({
        method: 'POST',
        url: 'http://localhost:3000/v1/search',
        response: '{"recipes":[]}'
      })

      cy.get('#navbar').within(() => {
        cy.get('#nav-search').within(() => {
          cy.get('#search-input').type('Quiche')
          cy.get('#search-submit').click()
        })
        cy.get('[name="recipe-title"]').should('contain', 'Quiche')
      })
      cy.get("#message").should('contain', 'Your search yielded no results')
    })
  })
})
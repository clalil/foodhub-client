describe('Visitor can search for recipe', () => {

  it("View search input and submit button", () => {
    cy.get('#navbar').within(() => {
      cy.get('#nav-search').within(() => {
          cy.get('#search-input').type('Quiche')
          cy.get('#search-submit').click()
        })
        cy.get('[name="recipe-title"]').should('contain', 'Quiche')
      })
    })

  describe('FoodHub visitor cannot search recipes if there are none', () => {

  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/v1/search',
      response: '{"recipes":[]}'
    })
    cy.visit('http://localhost:3001')
  })

  it('sees message for no recipes available', () => {
    cy.get("#message").should('contain', 'Your search yielded no results')
  })
})
})
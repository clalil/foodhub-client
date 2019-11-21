describe('User can leave rating', () => {
  it('successfully', () => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes/1',
      response: 'fixture:single_recipe.json',
      status: 200
    }),
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/v1/recipes/1/rating',
      status: 201,
      response: {}
    })
  
    cy.loginUser('user2@mail.com', 'password')
    cy.get('#recipe-1').click({ force: true })
    cy.get('[class="ui rating"]').within(() => {
      cy.get('[aria-posinset="5"]').click()
    })
    cy.get('#response-message').should('contain', 'You gave this recipe 5 stars!')
  })
})
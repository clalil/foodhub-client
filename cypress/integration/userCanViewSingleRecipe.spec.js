describe('View single recipe', () => {

  it('Successfully', () => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes/1',
      response: 'fixture:single_recipe.json',
      status: 200
    })
    cy.get('#recipe-1')
      .click({ force: true })
    cy.get('[name="single-recipe"]').within(() => {
      cy.get('.header').should('contain', 'Quiche')
        .get('[name="recipe-ingredients"]').should('contain', 'Eggs')
        .get('[name="recipe-directions"]').should('contain', 'Stir the mixture')
    })
  })

  it('Fails to', () => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes/1',
      response: '{ "error_message": "The recipe could not be found" }',
      status: 404
    })
    cy.get('#recipe-1')
      .click({ force: true })
    cy.get('#response-message')
      .should('contain', 'The recipe could not be found')
  })
})

describe('User forks a single recipe', () => {
  beforeEach(() => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes/2',
      status: 200,
      response: 'fixture:forked_recipe.json'
    })
  })

  
  it('A forked recipe has original creators details', () => {
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/v1/recipes/2',
      status: 200,
      response: 'fixture: forked_recipe.json'
    })
    cy.anotherLoginUser('user2@mail.com', 'password')
    cy.get('#recipe-2').click({ force: true })
    cy.get('[name="single-recipe"]').within(() => {
      cy.get('.header').should('contain', 'Quiche')
        .get('[name="parent-data"]').should('contain', 'Bob')
        //.get('[name="recipe-parent-title"]').should('contain', 'Quiche')
    })
  })
})
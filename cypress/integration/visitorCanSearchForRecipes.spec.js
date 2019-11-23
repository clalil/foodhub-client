describe('Visitor can search for recipe', () => {
  it("successfully", () => {
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/v1/search',
      response: 'fixture:query_response.json'
    })

    cy.get('#navbar').within(() => {
      cy.get('#nav-search').within(() => {
        cy.get('#search-input').type('Quiche')
        cy.get('#search-submit').click({force: true})
      })       
    })
    cy.get('[name="recipe-1"]').within(() => {
      cy.get('[name="recipe-title"]').should('contain', 'Quiche')
    })
  })

  it('successfully, redirects to home page with filtered recipes after search has been done from other component', () => {
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/v1/search',
      response: 'fixture:query_response.json'
    })

    cy.anotherLoginUser('user@mail.com', 'password')
    cy.get('#navbar').within(() => {
      cy.get('#nav-search').within(() => {
        cy.get('#search-input').type('Quiche')
        cy.get('#search-submit').click()
      })       
    })
    cy.get('[name="recipe-1"]').within(() => {
      cy.get('[name="recipe-title"]').should('contain', 'Quiche')
    })
  });

  it('unsuccessfully, there are recipes with that query', () => {
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/v1/search',
      response: '{"message": "Your search yielded no results"}',
      status: 404
    })

    cy.get('#navbar').within(() => {
      cy.get('#nav-search').within(() => {
        cy.get('#search-input').type('Shrimp')
        cy.get('#search-submit').click()
      })
    })
    cy.get("#search-error").should('contain', 'Your search yielded no results')
  })

  it('unsuccessfully, query to short', () => {
    cy.get('#navbar').within(() => {
      cy.get('#nav-search').within(() => {
        cy.get('#search-input').type('S')
        cy.get('#search-submit').click()
      })
    })
    cy.get("#search-error").should('contain', 'Please input more than two characters.')
  })

  it('removes search query when cklick on Foodhub logo', () => {
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

    cy.get('#nav-home').click()
    cy.get('[name="recipe-2"]').within(() => {
      cy.get('[name="recipe-title"]').should('contain', 'Chocolate Croissant')
    })
  });
})
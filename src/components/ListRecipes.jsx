import React, { Component } from "react"
import { fetchRecipes } from "../modules/requestRecipes"
import { Message, Header, Grid } from "semantic-ui-react"
import { withRouter } from "react-router"

import RecipeCard from "./RecipeCard"

class ListRecipes extends Component {
  state = {
    recipes: []
  }

  componentDidUpdate() {
    this.checkCurrentRecipesForQuery()
  }

  checkCurrentRecipesForQuery = () => {
    if (this.props.location.search == '?from_search') {
      if (this.props.location.state.queryResponse !== this.state.recipes) {
        this.setRecipes(this.props.location.state.queryResponse)
      }
    }
  }

  async componentDidMount() {
    let response = await fetchRecipes()
    this.setRecipes(response)
  }

  setRecipes = (recipes) => {
    this.setState({
      recipes: recipes
    })
  }
  
  render() {
    let renderListRecipes
    const recipeData = this.state.recipes
    let message
    if (recipeData.length > 0) {
      renderListRecipes = recipeData.map(recipe => {
        return <RecipeCard key={recipe.id} recipe={recipe} linked />
      })
    } else {
      message = (
        <Message style={{ color: "red" }}>
          <Header as="p" id="message" style={{ color: "#4C5966" }}>
            There are no recipes
          </Header>
        </Message>
      )
    }
    return (
      <>
        {message}
        {renderListRecipes && 
        <Grid columns={3} id="list">
          <Grid.Row>
            {renderListRecipes}
          </Grid.Row>
        </Grid>}
      </>
    )
  }
}

export default withRouter(ListRecipes)
import React, { Component } from "react"
import { fetchRecipes } from "../modules/requestRecipes"
import { Message, Header, Grid } from "semantic-ui-react"
import { withRouter } from "react-router"

import RecipeCard from "./RecipeCard"

class ListRecipes extends Component {
  state = {
    recipes: [],
    message: null,
    currentQuery: ''
  }

  componentDidUpdate() {
    this.checkCurrentRecipesForQuery()
  }

  checkCurrentRecipesForQuery = () => {
    if (this.props.location.search == '?search') {

      if (this.props.location.state.queryResponse !== this.state.recipes) {
        this.setRecipes(this.props.location.state.queryResponse)
      }
      if (this.props.location.state.message && this.state.currentQuery != this.props.location.state.query) {
        debugger;
        this.setState({
          message: `${this.props.location.state.message} for ${this.props.location.state.query}`,
          currentQuery: this.props.location.state.query
        })
      }
    }
  }

  async componentDidMount() {
    let response = await fetchRecipes()
    if (response.length > 0) {
      this.setRecipes(response)
      this.setState({
        message: null
      })
    } else {
      this.setState({
        message: "There are no recipes"
      })
    }
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

    if (recipeData && recipeData.length > 0) {
      renderListRecipes = recipeData.reverse().map(recipe => {
        return <RecipeCard currentUser={false} key={recipe.id} recipe={recipe} linked />
      })
    }

    if (this.state.message) {
      message = (
        <Message style={{ color: "red" }}>
          <Header as="p" id="message" style={{ color: "#4C5966" }}>
            {this.state.message}
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
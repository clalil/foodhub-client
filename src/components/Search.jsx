import React, { Component } from 'react'
import { Menu, Input, Icon } from 'semantic-ui-react'
import "../css/search-recipe.css"
import { withRouter } from "react-router"
import { searchRecipes } from "../modules/requestRecipes"
import { Message, Header, Grid } from "semantic-ui-react"

  
class Search extends Component {
  state = {
    searchRecipes: [],
    query: "",
    message: null,
  }

  inputChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  getSearchRecipes = async () => {
    const { history } = this.props
    const { query } = this.state
    if (query.length <= 2) {
      this.setState({
        errorMessage: 'Please input more than two characters.'
      })
    } else {
      let response = await searchRecipes(query)
      if (response.errorMessage) {
        this.setState({
          errorMessage: response.errorMessage
        })
      } else {
        history.push({
          pathname: '/',
          state: { queryResponse: response },
          search: 'search'
        })      
      }
    }
  }

  render() {
    let search, errorMessage

    if (this.state.errorMessage) {
      errorMessage = <p id="search-error">{this.state.errorMessage}</p>
    }

    search = (
      <Menu.Item id="nav-search">
        <Input
          title="search-input"
          id="search-input"
          placeholder="Search..."
          name="query"
          onChange={this.inputChangeHandler}
        />
        <Icon
          id="search-submit"
          name="search"
          onClick={this.getSearchRecipes}
        />
      </Menu.Item>
    )

    return (
      <>
        {search}
        {errorMessage}
      </>
    )
  }
}

export default withRouter(Search)
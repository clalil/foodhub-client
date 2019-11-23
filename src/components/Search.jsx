import React, { Component } from 'react'
import { Menu, Input, Button } from 'semantic-ui-react'
import { withRouter } from "react-router"
import { searchRecipes } from "../modules/requestRecipes"


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
        debugger
        history.push({
          pathname: '/',
          state: { message: response.errorMessage, query: query },
          search: 'search'
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
          icon="search"
          title="search-input"
          id="search-input"
          placeholder="Search for a recipe..."
          name="query"
          onChange={this.inputChangeHandler}
        />
        <Button
          id="search-submit"
          name="search"
          onClick={this.getSearchRecipes}
        >
          Search
        </Button>
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